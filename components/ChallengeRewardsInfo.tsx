"use client"

import { motion } from "motion/react"
import { EndorphinsLogo } from "./EndorphinsLogo"

interface ChallengeRewardsInfoProps {
  aprRate?: string
  pointsType?: string
  description?: string
  className?: string
}

export function ChallengeRewardsInfo({ 
  aprRate = "4.4%", 
  pointsType = "endorphines points",
  description = "Users that do not complete the goal will be slashed.",
  className = ""
}: ChallengeRewardsInfoProps) {
  return (
    <motion.div
      className={`rounded-lg p-4 space-y-3 ${className}`}
      style={{ backgroundColor: "#004225" }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <h3 className="text-lg font-montserrat font-medium mb-2" style={{ color: "#F2F2F2" }}>
          Total {aprRate} APR + {pointsType}
        </h3>
        <p className="text-sm font-montserrat" style={{ color: "#A69F94" }}>
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 py-2">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-full flex items-center justify-center border-2" style={{ backgroundColor: "#0D0D0D", borderColor: "#F2F2F2" }}>
            <span className="text-sm font-bold" style={{ color: "#F2F2F2" }}>$</span>
          </div>
        </div>
        <span className="text-sm font-montserrat" style={{ color: "#A8BF84" }}>Fitness APR</span>
        <span style={{ color: "#A69F94" }}>+</span>
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFFFFF", padding: "3px" }}>
          <EndorphinsLogo size="sm" className="w-4 h-4" />
        </div>
        <span className="text-sm font-montserrat" style={{ color: "#A8BF84" }}>{pointsType}</span>
      </div>

      <div className="text-xs leading-relaxed text-center" style={{ color: "#A69F94" }}>
        Your USDC is locked in a smart contract escrow. Complete the fitness goal to claim 
        your share of the rewards pool. Fail to meet the goal and your stake gets slashed.
      </div>
    </motion.div>
  )
}
