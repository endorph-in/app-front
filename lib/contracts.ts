import { type Address } from "viem";

// Contract addresses from environment variables
export const USDC_ADDRESS = process.env.NEXT_PUBLIC_USDC_ADDRESS as Address;
export const ESCROW_ADDRESS = process.env.NEXT_PUBLIC_ESCROW_ADDRESS as Address;

// Known USDC addresses by chain ID for validation
export const KNOWN_USDC_ADDRESSES: Record<number, Address> = {
  // Mainnet addresses
  1: "0xA0b86a33E6441A0c7C82E99D8E3DC77a2e6F0066", // Mainnet
  137: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // Polygon
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // Base
  42161: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", // Arbitrum
  
  // Testnet addresses (verified)
  11155111: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", // Sepolia USDC
  80001: "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23", // Mumbai USDC
  84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", // Base Sepolia USDC
};

// Validation function
export function validateContractAddresses(chainId?: number) {
  const isTestnet = chainId && [11155111, 80001, 84532].includes(chainId);
  
  console.log("Validating contract addresses:", {
    USDC_ADDRESS,
    ESCROW_ADDRESS,
    chainId,
    isTestnet,
    knownUSDC: chainId ? KNOWN_USDC_ADDRESSES[chainId] : "N/A"
  });

  // For testnet, use known working addresses if env vars not set
  let finalUsdcAddress = USDC_ADDRESS;
  let finalEscrowAddress = ESCROW_ADDRESS;

  if (isTestnet && chainId) {
    // Use known USDC address for testnet if not provided
    if (!finalUsdcAddress && KNOWN_USDC_ADDRESSES[chainId]) {
      finalUsdcAddress = KNOWN_USDC_ADDRESSES[chainId];
      console.log("🔧 Using known USDC address for testnet:", finalUsdcAddress);
    }
    
    // For demo purposes, use USDC contract as mock escrow
    if (!finalEscrowAddress && KNOWN_USDC_ADDRESSES[chainId]) {
      finalEscrowAddress = KNOWN_USDC_ADDRESSES[chainId];
      console.warn("⚠️ Using USDC contract as mock escrow for testing. This is only for demo purposes!");
    }
  }

  if (!finalUsdcAddress) {
    if (isTestnet) {
      throw new Error(`❌ No se encontró dirección USDC para la red de prueba ${chainId}. Asegúrate de estar en Base Sepolia (84532).`);
    }
    throw new Error("NEXT_PUBLIC_USDC_ADDRESS is not defined in environment variables");
  }
  
  if (!finalEscrowAddress) {
    if (isTestnet) {
      throw new Error(`❌ No se encontró dirección de contrato Escrow para la red ${chainId}. Necesitas desplegar un contrato escrow.`);
    }
    throw new Error("NEXT_PUBLIC_ESCROW_ADDRESS is not defined in environment variables");
  }
  
  return {
    usdc: finalUsdcAddress,
    escrow: finalEscrowAddress,
  };
}
