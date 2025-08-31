"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Header } from "./Header"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion } from "motion/react"
import { Wallet, Play, CheckCircle } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog"

interface HomePageProps {
  onNavigate: (page: string, poolId?: string) => void
  onBackToWelcome?: () => void
}

interface WalletData {
  address: string
  balance: number
  currency: string
  connected: boolean
}

export function HomePage({ onNavigate, onBackToWelcome }: HomePageProps) {
  const [wallet, setWallet] = useState<WalletData>({
    address: "",
    balance: 0,
    currency: "ETH",
    connected: false
  })

  const [showDisconnectDialog, setShowDisconnectDialog] = useState(false)

  const mockWalletData: WalletData = {
    address: "0x742d35Cc6634C0532925a3b8D4C2C4e0C5C8b9e2",
    balance: 2.45,
    currency: "ETH",
    connected: true
  }

  const handleConnectWallet = () => {
    setWallet(mockWalletData)
    console.log("Wallet conectada:", mockWalletData)
  }

  const handleWalletClick = () => {
    if (wallet.connected) {
      setShowDisconnectDialog(true)
    } else {
      handleConnectWallet()
    }
  }

  const handleDisconnectWallet = () => {
    setWallet({
      address: "",
      balance: 0,
      currency: "ETH",
      connected: false
    })
    setShowDisconnectDialog(false)
    console.log("Wallet desconectada")
  }
  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header showBack={!!onBackToWelcome} onBack={onBackToWelcome} onNavigate={onNavigate} />

      <div className="relative px-6 py-4">
        <motion.div
          className="relative h-48 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback src="/primera-foto.jpg" alt="Runners at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <motion.h1
              className="text-white mb-2 font-michroma drop-shadow-lg"
              style={{
                fontSize: "32px",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              2,450
            </motion.h1>
            <motion.p
              className="text-white/95 mb-4 font-montserrat text-lg drop-shadow-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              staked molecules
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                className="font-montserrat px-6 py-3 shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#0D0D0D",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#333333"
                  e.currentTarget.style.color = "#FFFFFF"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0D0D0D"
                  e.currentTarget.style.color = "#FFFFFF"
                }}
                onClick={() => onNavigate("pools")}
              >
                <Play className="w-4 h-4 mr-2" />
                View Ongoing Challenges
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="px-6 pb-6">
        <motion.h2
          className="mb-4 font-michroma"
          style={{
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#004225",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          open pools
        </motion.h2>

        <div className="space-y-4">
          <motion.div
            className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => onNavigate("aleph-race-details")}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-36">
              <ImageWithFallback src="/aleph-race-image.jpg" alt="Aleph race runners" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

              <div className="absolute inset-0 flex items-center justify-between px-4">
                <div>
                  <h3 className="text-white font-montserrat font-semibold mb-1 text-lg drop-shadow-md">
                    Aleph Race
                  </h3>
                  <p className="text-white/90 text-sm font-montserrat drop-shadow-sm">Sponsored pool • 500 molecules</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div
                      className="backdrop-blur-sm px-3 py-1 rounded-full border"
                      style={{ backgroundColor: "#0D0D0D", borderColor: "#0D0D0D" }}
                    >
                      <span className="text-xs font-montserrat font-medium" style={{ color: "#FFFFFF" }}>
                        24 participants
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-michroma text-2xl drop-shadow-lg">15km</p>
                  <p className="text-white/90 text-xs font-montserrat drop-shadow-sm">weekly goal</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => onNavigate("adidas-race-details")}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-36">
              <ImageWithFallback
                src="/adidas-race-image.jpg"
                alt="Adidas race stretching"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

              <div className="absolute inset-0 flex items-center justify-between px-4">
                <div>
                  <h3 className="text-white font-montserrat font-semibold mb-1 text-lg drop-shadow-md">
                    Adidas Race
                  </h3>
                  <p className="text-white/90 text-sm font-montserrat drop-shadow-sm">Sponsored pool • 300 molecules</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div
                      className="backdrop-blur-sm px-3 py-1 rounded-full border"
                      style={{ backgroundColor: "#0D0D0D", borderColor: "#0D0D0D" }}
                    >
                      <span className="text-xs font-montserrat font-medium" style={{ color: "#FFFFFF" }}>
                        18 participants
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-michroma text-2xl drop-shadow-lg">5x</p>
                  <p className="text-white/90 text-xs font-montserrat drop-shadow-sm">weekly</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <motion.h2
          className="mb-4 font-michroma"
          style={{
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#004225",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          actions
        </motion.h2>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card
              className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl h-[140px]"
              style={{ borderColor: "#A8BF84", backgroundColor: "#F2F2F2" }}
            >
              <div className="flex flex-col items-center text-center gap-3 h-full justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#A8BF84" }}
                >
                  <svg className="w-7 h-7" style={{ color: "#0D0D0D" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7.008 13.828h4.172" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-montserrat text-base" style={{ color: "#004225" }}>
                    Connect Strava
                  </p>
                  <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                    Track activities
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card
              className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl h-[140px]"
              style={{ 
                borderColor: wallet.connected ? "#004225" : "#A8BF84", 
                backgroundColor: wallet.connected ? "#E8F5E8" : "#F2F2F2" 
              }}
              onClick={handleWalletClick}
            >
              <div className="flex flex-col items-center text-center gap-2 h-full justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ backgroundColor: wallet.connected ? "#004225" : "#A8BF84" }}
                >
                  {wallet.connected ? (
                    <CheckCircle className="w-7 h-7" style={{ color: "#FFFFFF" }} />
                  ) : (
                    <Wallet className="w-7 h-7" style={{ color: "#0D0D0D" }} />
                  )}
                </div>
                <div className="min-h-0 flex-1 flex flex-col justify-center">
                  <p className="font-semibold font-montserrat text-base" style={{ color: "#004225" }}>
                    {wallet.connected ? "Wallet Connected" : "Connect Wallet"}
                  </p>
                  <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                    {wallet.connected 
                      ? `${wallet.balance} ${wallet.currency}` 
                      : "Manage crypto"
                    }
                  </p>
                  {wallet.connected && (
                    <p className="text-xs font-montserrat" style={{ color: "#666" }}>
                      {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="px-6">
        <motion.div
          className="relative overflow-hidden rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="relative h-28">
            <ImageWithFallback
              src="/ultima.jpeg"
              alt="Your progress background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

            <div className="absolute inset-0 flex items-center justify-between px-6">
              <div>
                <h3 className="text-white font-montserrat font-semibold mb-1 text-lg drop-shadow-md">Your Progress</h3>
                <p className="text-white/95 text-sm font-montserrat drop-shadow-sm">This week</p>
              </div>
              <div className="flex gap-6 text-right">
                <div>
                  <p className="text-white font-michroma text-xl drop-shadow-lg">15.2</p>
                  <p className="text-white/95 text-xs font-montserrat drop-shadow-sm">km</p>
                </div>
                <div>
                  <p className="text-white font-michroma text-xl drop-shadow-lg">8</p>
                  <p className="text-white/95 text-xs font-montserrat drop-shadow-sm">goals</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AlertDialog open={showDisconnectDialog} onOpenChange={setShowDisconnectDialog}>
        <AlertDialogContent 
          className="font-montserrat bg-white border-2 shadow-2xl"
          style={{ 
            backgroundColor: "#FFFFFF",
            borderColor: "#A8BF84",
            maxWidth: "400px"
          }}
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="font-michroma text-xl" style={{ color: "#004225" }}>
              Desconectar Wallet
            </AlertDialogTitle>
            <AlertDialogDescription className="font-montserrat text-base" style={{ color: "#A69F94" }}>
              ¿Estás seguro de que deseas desvincular esta wallet? Tendrás que volver a conectarla para acceder a tus fondos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-3">
            <AlertDialogCancel 
              className="font-montserrat border-2 hover:bg-gray-50"
              style={{ 
                borderColor: "#A8BF84",
                color: "#004225",
                backgroundColor: "#FFFFFF"
              }}
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDisconnectWallet}
              className="font-montserrat border-0 hover:opacity-90"
              style={{
                backgroundColor: "#DC2626",
                color: "#FFFFFF"
              }}
            >
              Desconectar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
