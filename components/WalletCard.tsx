"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { motion } from "motion/react"
import { Wallet, CheckCircle, X } from "lucide-react"
import { useDisconnect } from 'wagmi'

export function WalletCard() {
  const { disconnect } = useDisconnect()

  const forceDisconnect = () => {
    // Desconectar con wagmi
    disconnect()
    
    // Limpiar localStorage de RainbowKit y wagmi
    if (typeof window !== 'undefined') {
      localStorage.removeItem('wagmi.store')
      localStorage.removeItem('wagmi.cache')
      localStorage.removeItem('wagmi.wallet')
      localStorage.removeItem('rainbowkit.recent')
      
      // Recargar la página para limpiar completamente el estado
      setTimeout(() => {
        window.location.reload()
      }, 500)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated')

          return (
            <div className="relative">
              <Card
                className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl h-[140px]"
                style={{ 
                  borderColor: connected ? "#004225" : "#A8BF84", 
                  backgroundColor: connected ? "#E8F5E8" : "#F2F2F2" 
                }}
                onClick={connected ? openAccountModal : openConnectModal}
              >
              <div className="flex flex-col items-center text-center gap-2 h-full justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ backgroundColor: connected ? "#004225" : "#A8BF84" }}
                >
                  {connected ? (
                    <CheckCircle className="w-7 h-7" style={{ color: "#FFFFFF" }} />
                  ) : (
                    <Wallet className="w-7 h-7" style={{ color: "#0D0D0D" }} />
                  )}
                </div>
                <div className="min-h-0 flex-1 flex flex-col justify-center">
                  <p className="font-semibold font-montserrat text-base" style={{ color: "#004225" }}>
                    {connected ? "Wallet Connected" : "Connect Wallet"}
                  </p>
                  <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                    {connected 
                      ? account?.displayName || `${account?.address?.slice(0, 6)}...${account?.address?.slice(-4)}`
                      : "Manage crypto"
                    }
                  </p>
                  {connected && chain && (
                    <p className="text-xs font-montserrat" style={{ color: "#666" }}>
                      {chain.name}
                    </p>
                  )}
                </div>
              </div>
              </Card>
              
              {/* Botón de desconexión forzada */}
              {connected && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    forceDisconnect()
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 border-2"
                  style={{ 
                    backgroundColor: "#DC2626",
                    borderColor: "#FFFFFF",
                    color: "#FFFFFF"
                  }}
                  title="Desconectar wallet"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </motion.div>
  )
}
