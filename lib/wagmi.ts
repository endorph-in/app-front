import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { sepolia, polygonMumbai, baseSepolia } from 'wagmi/chains'

// Siempre usar testnets (especialmente Base Sepolia)
const chains = [baseSepolia, sepolia, polygonMumbai]

export const config = getDefaultConfig({
  appName: 'Endorphin',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains,
  ssr: true, // If your dApp uses server side rendering (SSR)
})
