"use client"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Header } from "./Header"
import { motion } from "motion/react"
import { ArrowRight, Trophy } from "lucide-react"

interface DocsPageProps {
  onNavigate: (page: string) => void
}

export function DocsPage({ onNavigate }: DocsPageProps) {
  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header title="How Endorphin Works" showBack onBack={() => onNavigate("home")} onNavigate={onNavigate} />

      {/* Hero Section */}
      <div className="px-6 py-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-3xl font-michroma mb-4"
            style={{ 
              fontWeight: 400, 
              letterSpacing: "0.02em",
              color: "#FFFFFF"
            }}
          >
            CORE FLOW
          </h1>
        </motion.div>
      </div>

      {/* Four Tiles - Vertical Layout */}
      <div className="px-6 space-y-4">
        {/* Tile 1 — Stake */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl" style={{ borderColor: "#A8BF84", backgroundColor: "#F2F2F2" }}>
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <svg className="w-7 h-7" style={{ color: "#0D0D0D" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 className="font-semibold font-montserrat text-base mb-1" style={{ color: "#004225" }}>
                  Stake
                </h2>
                <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                  Deposit USDC → buy PT-USDe (fixed APR) → get sMOL.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tile 2 — Run */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl" style={{ borderColor: "#A8BF84", backgroundColor: "#F2F2F2" }}>
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <svg className="w-7 h-7" style={{ color: "#0D0D0D" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 className="font-semibold font-montserrat text-base mb-1" style={{ color: "#004225" }}>
                  Run
                </h2>
                <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                  Train on Strava → Flare verifies → EP posted on-chain.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tile 3 — Settle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl" style={{ borderColor: "#A8BF84", backgroundColor: "#F2F2F2" }}>
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <svg className="w-7 h-7" style={{ color: "#0D0D0D" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 className="font-semibold font-montserrat text-base mb-1" style={{ color: "#004225" }}>
                  Settle
                </h2>
                <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                  Winners split the PT-USDe pot; losers are slashed.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tile 4 — YT Tokens (Incentives) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-2 shadow-xl" style={{ borderColor: "#A8BF84", backgroundColor: "#F2F2F2" }}>
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <svg className="w-7 h-7" style={{ color: "#0D0D0D" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09L12 17.67l-1.41 1.42L8.5 15.5l1.41-1.41L12 16.67l2.09-2.08L15.5 15.5l-2.09 2.59z"/>
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 className="font-semibold font-montserrat text-base mb-1" style={{ color: "#004225" }}>
                  YT Tokens (Incentives)
                </h2>
                <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
                  Yield Tokens routed: 20% to Endorphin protocol, 80% to rewards for new pools.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Explanation */}
      <div className="px-6 pt-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm font-montserrat max-w-3xl mx-auto leading-relaxed" style={{ color: "#A69F94" }}>
            Users deposit USDC into a competition escrow, which swaps into PT-USDe on Pendle (fixed APR) and mints non-transferable sMOL as their receipt. After the window ends, a Flare-verified Strava leaderboard marks winners; the contract burns sMOL and redistributes the entire PT-USDe pot pro-rata to finishers (optionally auto-swapped to USDC) while non-finishers are slashed.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="px-6 pt-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={() => onNavigate("pools")}
            className="font-montserrat px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#A8BF84",
              color: "#0D0D0D",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004225"
              e.currentTarget.style.color = "#F2F2F2"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#A8BF84"
              e.currentTarget.style.color = "#0D0D0D"
            }}
          >
            <Trophy className="w-5 h-5 mr-2" />
            Start Staking Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
