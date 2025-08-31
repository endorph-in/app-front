import { erc20Abi, type Address, type Hex } from "viem";
import {
    readContract,
    writeContract,
    waitForTransactionReceipt,
    type Config,
} from "wagmi/actions";

// Minimal Escrow ABI - for demo purposes, we'll use simple ERC20 functions
export const escrowAbi = [
    {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
            { name: "to", type: "address" },
            { name: "amount", type: "uint256" }
        ],
        outputs: [{ type: "bool" }],
    },
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ name: "account", type: "address" }],
        outputs: [{ type: "uint256" }],
    },
] as const;

export type JoinEscrowCallbacks = {
    onStatus?: (status: string) => void;
    onApproveHash?: (hash: Hex) => void;
    onJoinHash?: (hash: Hex) => void;
    onApproveReceipt?: (receipt: unknown) => void;
    onJoinReceipt?: (receipt: unknown) => void;
    onError?: (error: unknown) => void;
};

export type JoinEscrowOptions = JoinEscrowCallbacks & {
    // Wagmi config from createConfig (RainbowKit-compatible)
    config: Config;
    // User wallet address
    account: Address;
    // USDC token (6 decimals) and escrow addresses
    usdc: Address;
    escrow: Address;
    // Amount in USDC smallest units (e.g., 5 USDC = 5_000_000n)
    amount: bigint;
    // If true, checks allowance and skips approve when sufficient (default true)
    skipApproveIfEnough?: boolean;
};

export async function joinEscrow(options: JoinEscrowOptions): Promise<{
    approveHash?: Hex;
    approveReceipt?: unknown;
    joinHash: Hex;
    joinReceipt: unknown;
}> {
    const {
        config,
        account,
        usdc,
        escrow,
        amount,
        skipApproveIfEnough = true,
        onStatus,
        onApproveHash,
        onJoinHash,
        onApproveReceipt,
        onJoinReceipt,
        onError,
    } = options;

    try {
        let approveHash: Hex | undefined;
        let approveReceipt: unknown | undefined;

        // 1) Check allowance and approve if needed
        let needsApprove = true;
        if (skipApproveIfEnough) {
            const currentAllowance = (await readContract(config, {
                address: usdc,
                abi: erc20Abi,
                functionName: "allowance",
                args: [account, escrow],
            })) as bigint;
            needsApprove = currentAllowance < amount;
        }

        if (needsApprove) {
            onStatus?.("Approving USDC…");
            approveHash = await writeContract(config, {
                address: usdc,
                abi: erc20Abi,
                functionName: "approve",
                args: [escrow, amount],
                account,
            });
            onApproveHash?.(approveHash);
            approveReceipt = await waitForTransactionReceipt(config, { hash: approveHash });
            onApproveReceipt?.(approveReceipt);
        }

        // 2) Simulate joining escrow (for demo - transfer to escrow address)
        onStatus?.("Joining escrow…");
        const joinHash = await writeContract(config, {
            address: usdc, // Transfer USDC to escrow address as simulation
            abi: erc20Abi,
            functionName: "transfer",
            args: [escrow, amount],
            account,
        });
        onJoinHash?.(joinHash);
        const joinReceipt = await waitForTransactionReceipt(config, { hash: joinHash });
        onJoinReceipt?.(joinReceipt);

        onStatus?.("Joined escrow successfully");
        return { approveHash, approveReceipt, joinHash, joinReceipt };
    } catch (err) {
        onError?.(err);
        onStatus?.("Join failed");
        throw err;
    }
}
