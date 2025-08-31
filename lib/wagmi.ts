import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, arbitrum, base, optimism, sepolia, polygonMumbai, baseSepolia } from 'wagmi/chains'

// Use testnet chains if in development
const isDevelopment = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_USE_TESTNET === 'true'

const chains = isDevelopment 
  ? [sepolia, polygonMumbai, baseSepolia] 
  : [mainnet, polygon, arbitrum, base, optimism]

export const config = getDefaultConfig({
  appName: 'Endorph',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains,
  ssr: true, // If your dApp uses server side rendering (SSR)
})
