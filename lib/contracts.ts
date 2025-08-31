import { type Address } from "viem";

export const USDC_ADDRESS = process.env.NEXT_PUBLIC_USDC_ADDRESS as Address;
export const ESCROW_ADDRESS = process.env.NEXT_PUBLIC_ESCROW_ADDRESS as Address;

// Supported networks information (no hardcoded addresses)
export const SUPPORTED_NETWORKS = {
  // Mainnet networks
  1: { name: "Ethereum Mainnet", symbol: "ETH" },
  137: { name: "Polygon", symbol: "MATIC" },
  8453: { name: "Base", symbol: "ETH" },
  42161: { name: "Arbitrum", symbol: "ETH" },
  
  // Testnet networks
  11155111: { name: "Sepolia", symbol: "ETH" },
  80001: { name: "Mumbai", symbol: "MATIC" },
  84532: { name: "Base Sepolia", symbol: "ETH" },
};

// Validation function - requires environment variables
export function validateContractAddresses(chainId?: number) {
  const networkInfo = chainId ? SUPPORTED_NETWORKS[chainId as keyof typeof SUPPORTED_NETWORKS] : null;
  
  console.log("Validating contract addresses:", {
    USDC_ADDRESS,
    ESCROW_ADDRESS,
    chainId,
    network: networkInfo?.name || "Unknown"
  });

  if (!USDC_ADDRESS) {
    throw new Error("❌ NEXT_PUBLIC_USDC_ADDRESS is not defined. Please set it in your .env.local file.");
  }
  
  if (!ESCROW_ADDRESS) {
    throw new Error("❌ NEXT_PUBLIC_ESCROW_ADDRESS is not defined. Please set it in your .env.local file.");
  }
  
  return {
    usdc: USDC_ADDRESS,
    escrow: ESCROW_ADDRESS,
  };
}
