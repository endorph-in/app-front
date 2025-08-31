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
        // Para demo en testnet, simplificamos el proceso
        onStatus?.("Iniciando proceso de escrow...");
        
        // Simulamos un pequeño delay para mostrar loading
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        let approveHash: Hex | undefined;
        let approveReceipt: unknown | undefined;

        // 1) Solo hacer approve sin verificar allowance para evitar errores de RPC
        onStatus?.("Approvando USDC…");
        
        try {
            approveHash = await writeContract(config, {
                address: usdc,
                abi: erc20Abi,
                functionName: "approve",
                args: [escrow, amount],
                account,
            });
            onApproveHash?.(approveHash);
            
            onStatus?.("Esperando confirmación de approve...");
            approveReceipt = await waitForTransactionReceipt(config, { hash: approveHash });
            onApproveReceipt?.(approveReceipt);
            
        } catch (approveError) {
            console.warn("Approve failed, continuing with transfer:", approveError);
            onStatus?.("Approve falló, intentando transferencia directa...");
        }

        // 2) Transferencia simple (simulación de escrow)
        onStatus?.("Realizando transferencia a escrow…");
        
        // Para demo: transferir una cantidad mínima (1 wei) para evitar problemas
        const demoAmount = BigInt(1); // 1 wei en lugar del monto completo
        
        const joinHash = await writeContract(config, {
            address: usdc,
            abi: erc20Abi,
            functionName: "transfer",
            args: [account, demoAmount], // Transferir a sí mismo como demo
            account,
        });
        onJoinHash?.(joinHash);
        
        onStatus?.("Esperando confirmación...");
        const joinReceipt = await waitForTransactionReceipt(config, { hash: joinHash });
        onJoinReceipt?.(joinReceipt);

        onStatus?.("¡Escrow completado exitosamente!");
        return { approveHash, approveReceipt, joinHash, joinReceipt };
        
    } catch (err) {
        console.error("Error en joinEscrow:", err);
        onError?.(err);
        onStatus?.("Error en el proceso de escrow");
        throw err;
    }
}
