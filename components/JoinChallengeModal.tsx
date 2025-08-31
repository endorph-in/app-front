"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { ChallengeRewardsInfo } from "./ChallengeRewardsInfo"
import { motion } from "motion/react"
import { HelpCircle } from "lucide-react"

interface JoinChallengeModalProps {
  isOpen: boolean
  onClose: () => void
  challengeName: string
  onJoinChallenge: (amount: number) => void
}

export function JoinChallengeModal({ isOpen, onClose, challengeName, onJoinChallenge }: JoinChallengeModalProps) {
  const [usdcAmount, setUsdcAmount] = useState("0")

  const handleProceed = () => {
    const amount = parseFloat(usdcAmount)
    onJoinChallenge(amount)
    onClose()
  }

  const handleMaxClick = () => {
    setUsdcAmount("100.0") // Simular balance máximo
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden" style={{ backgroundColor: "#F2F2F2", borderColor: "#A8BF84", color: "#0D0D0D" }}>
        <style jsx>{`
          [data-slot="dialog-content"] > button {
            color: #A69F94 !important;
          }
          [data-slot="dialog-content"] > button:hover {
            color: #004225 !important;
            background-color: #A8BF84 !important;
          }
        `}</style>
        {/* Header */}
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-montserrat font-medium">
            Unirse a {challengeName}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-6">
          {/* USDC Amount Input */}
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#A8BF84" }}>
                  <span className="text-white text-xs font-bold">$</span>
                </div>
                <span className="text-sm font-medium" style={{ color: "#A8BF84" }}>USDC amount</span>
              </div>
              <Input
                type="number"
                value={usdcAmount}
                onChange={(e) => setUsdcAmount(e.target.value)}
                className="text-right pr-16 pl-32 h-14 text-lg font-mono border-2"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#A8BF84", color: "#0D0D0D" }}
                placeholder="0"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMaxClick}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm font-medium"
                style={{ color: "#A8BF84" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#A8BF84"
                  e.currentTarget.style.color = "#0D0D0D"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "#A8BF84"
                }}
              >
                MAX
              </Button>
            </div>
          </div>

          {/* Transaction Details */}
          <motion.div
            className="space-y-3 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between">
              <span style={{ color: "#A69F94" }}>You will receive</span>
              <span className="font-mono" style={{ color: "#0D0D0D" }}>{usdcAmount || "0.0"} molecules</span>
            </div>
            
            <div className="flex justify-between">
              <span style={{ color: "#A69F94" }}>Exchange rate</span>
              <span className="font-mono" style={{ color: "#0D0D0D" }}>1 PT-USDE = 1 molecule</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span style={{ color: "#A69F94" }}>Reward fee</span>
                <HelpCircle className="w-3 h-3" style={{ color: "#A69F94" }} />
              </div>
              <span className="font-mono" style={{ color: "#0D0D0D" }}>10%</span>
            </div>
          </motion.div>

          {/* Challenge Rewards Info */}
          <ChallengeRewardsInfo />

          {/* Proceed Button */}
          <Button
            onClick={handleProceed}
            className="w-full h-12 font-montserrat font-medium text-lg rounded-lg"
            style={{ 
              backgroundColor: "#A8BF84", 
              color: "#0D0D0D" 
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
            Proceed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}