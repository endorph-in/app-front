'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider as RKProvider } from '@rainbow-me/rainbowkit'
import { config } from '../../lib/wagmi'
import { mainnet } from 'wagmi/chains'

const queryClient = new QueryClient()

interface RainbowKitProviderProps {
  children: React.ReactNode
}

export function RainbowKitProvider({ children }: RainbowKitProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RKProvider
          theme={{
            blurs: {
              modalOverlay: 'blur(0px)',
            },
            colors: {
              accentColor: '#A8BF84',
              accentColorForeground: '#0D0D0D',
              actionButtonBorder: '#A8BF84',
              actionButtonBorderMobile: '#A8BF84',
              actionButtonSecondaryBackground: '#F2F2F2',
              closeButton: '#A69F94',
              closeButtonBackground: '#F2F2F2',
              connectButtonBackground: '#A8BF84',
              connectButtonBackgroundError: '#DC2626',
              connectButtonInnerBackground: '#A8BF84',
              connectButtonText: '#0D0D0D',
              connectButtonTextError: '#FFFFFF',
              connectionIndicator: '#004225',
              downloadBottomCardBackground: '#FFFFFF',
              downloadTopCardBackground: '#F2F2F2',
              error: '#DC2626',
              generalBorder: '#A8BF84',
              generalBorderDim: 'rgba(168, 191, 132, 0.3)',
              menuItemBackground: '#F2F2F2',
              modalBackdrop: 'rgba(0, 0, 0, 0.3)',
              modalBackground: '#FFFFFF',
              modalBorder: '#A8BF84',
              modalText: '#0D0D0D',
              modalTextDim: '#A69F94',
              modalTextSecondary: '#004225',
              profileAction: '#F2F2F2',
              profileActionHover: '#A8BF84',
              profileForeground: '#FFFFFF',
              selectedOptionBorder: '#004225',
              standby: '#A69F94',
            },
            fonts: {
              body: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
            },
            radii: {
              actionButton: '12px',
              connectButton: '12px',
              menuButton: '12px',
              modal: '16px',
              modalMobile: '16px',
            },
            shadows: {
              connectButton: '0 4px 12px rgba(0, 0, 0, 0.1)',
              dialog: '0 8px 32px rgba(0, 0, 0, 0.12)',
              profileDetailsAction: '0 2px 6px rgba(0, 0, 0, 0.06)',
              selectedOption: '0 2px 6px rgba(0, 0, 0, 0.06)',
              selectedWallet: '0 2px 6px rgba(0, 0, 0, 0.06)',
              walletLogo: '0 2px 16px rgba(0, 0, 0, 0.16)',
            },
          }}
          modalSize="compact"
          initialChain={mainnet}
          showRecentTransactions={true}
        >
          {children}
        </RKProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
