import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, arbitrum, base, optimism } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Endorph',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, arbitrum, base, optimism],
  ssr: true, // If your dApp uses server side rendering (SSR)
})
