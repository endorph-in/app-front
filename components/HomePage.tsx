"use client"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Header } from "./Header"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion } from "motion/react"
import { Wallet, Play } from "lucide-react"

interface HomePageProps {
  onNavigate: (page: string, poolId?: string) => void
  onBackToWelcome?: () => void
}

export function HomePage({ onNavigate, onBackToWelcome }: HomePageProps) {
  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header showBack={!!onBackToWelcome} onBack={onBackToWelcome} />

      {/* Hero Section with Background Image */}
      <div className="relative px-6 py-4">
        <motion.div
          className="relative h-48 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback src="/primera-foto.jpg" alt="Runners at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-primary/70 to-accent/40"></div>

          {/* Hero Content */}
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

      {/* Featured Challenges */}
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
          {/* Aleph Race Pool */}
          <motion.div
            className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => onNavigate("race-details")}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-36">
              <ImageWithFallback src="/aleph-race-image.jpg" alt="Aleph race runners" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/85 via-primary/60 to-transparent"></div>

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

          {/* Adidas Race Pool */}
          <motion.div
            className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={() => onNavigate("pools", "adidas-race")}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-36">
              <ImageWithFallback
                src="/adidas-race-image.jpg"
                alt="Adidas race stretching"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-accent/60 to-transparent"></div>

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

      {/* Quick Actions Grid */}
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
              className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl"
              style={{ borderColor: "#A8BF84", backgroundColor: "#F2F2F2" }}
            >
              <div className="flex flex-col items-center text-center gap-3">
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
              className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl"
              style={{ borderColor: "#A8BF84", backgroundColor: "#F2F2F2" }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#A8BF84" }}
                >
                  <Wallet className="w-7 h-7" style={{ color: "#0D0D0D" }} />
                </div>
                <div>
                  <p className="font-semibold font-montserrat text-base" style={{ color: "#004225" }}>
                    Connect Wallet
                  </p>
                  <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                    Manage crypto
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Stats Preview */}
      <div className="px-6">
        <motion.div
          className="relative overflow-hidden rounded-xl shadow-xl border-2"
          style={{ borderColor: "#A8BF84" }}
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
            <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-primary/80 to-accent/60"></div>

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
    </div>
  )
}
