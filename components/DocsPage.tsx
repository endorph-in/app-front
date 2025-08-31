"use client"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Header } from "./Header"
import { motion } from "motion/react"
import { ArrowRight, Trophy } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

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
          <p
            className="text-sm font-montserrat max-w-2xl mx-auto"
            style={{ color: "#A69F94" }}
          >
            Non-custodial fitness pools powered by Pendle PTs and a Flare-backed oracle. Finishers share the pot; non-finishers are slashed.
          </p>
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
           
          </p>
        </motion.div>
      </div>

      {/* Architecture */}
      <div className="px-6 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <h2
            className="mb-2 font-michroma"
            style={{ fontSize: "22px", fontWeight: 400, letterSpacing: "0.02em", color: "#004225" }}
          >
            Architecture
          </h2>

          <Accordion type="single" collapsible defaultValue="abstract">
            <AccordionItem value="abstract">
              <AccordionTrigger className="text-base">Abstract</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="text-sm">
                  Endorphin is a non-custodial DeFi wellness dapp where users stake USDC into time-boxed fitness competitions. On join, the pool converts USDC to PT-USDe on Pendle to lock a fixed APR; users receive non-transferable sMOL as receipts of their pro-rata position. A Flare-backed oracle posts Strava activity normalized to Effort Points (EP). At settlement, finishers claim the entire PT-USDe pot pro-rata; non-finishers are slashed.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="motivation">
              <AccordionTrigger className="text-base">1) Motivation & Goals</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Align incentives: finishers gain, quitters forfeit.</li>
                  <li>v0 target: auditable, demo-ready pipeline with simple economics.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="overview">
              <AccordionTrigger className="text-base">2) System Overview</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>On-chain: EscrowFactory (deploys pools, sets oracle), EscrowPool (USDC → PT-USDe, sMOL, EP, settlement).</li>
                  <li>Off-chain: Flare oracle aggregator signs EIP-712 progress messages.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tokens">
              <AccordionTrigger className="text-base">3) Tokens & Assets</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>USDC: user stake (input asset).</li>
                  <li>PT-USDe: Pendle Principal Token at maturity T (fixed APR; 1 PT → 1 USDe at T).</li>
                  <li>sMOL: per-pool, non-transferable receipt token representing pool PT-USDe fraction.</li>
                </ul>
                <p className="text-xs mt-2">Constraint: choose T ≥ liveEnd + buffer, so maturity never precedes settlement.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mechanics">
              <AccordionTrigger className="text-base">4) Core Mechanics</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">4.1 Join</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>User calls join(usdcAmount); pool pulls USDC.</li>
                      <li>Swaps USDC → buys PT-USDe (slippage-limited).</li>
                      <li>Pool mints sMOL to user (1 sMOL per PT unit, v0).</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">4.2 Progress (Live)</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>User syncs Strava; backend returns Flare-signed tuple {`{user, ep, validUntil, poolTag}` }.</li>
                      <li>User submits on-chain; pool verifies and stores monotonically increasing EP.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">4.3 Settlement</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>After liveEnd, anyone calls settle().</li>
                      <li>Classify WIN if EP ≥ goal; LOSE otherwise.</li>
                      <li>Freeze winnerStakeTotal and totalPT; transition to Settled.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">4.4 Claim</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Winners burn sMOL and receive PT: sMOL[user] × totalPT / winnerStakeTotal.</li>
                      <li>Losers burn sMOL and receive 0 (binary slash).</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="state-machine">
              <AccordionTrigger className="text-base">5) State Machine</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Join (t ∈ [joinStart, joinEnd]) → Live (t ∈ (joinEnd, liveEnd]) → Settled (t &gt; liveEnd).</li>
                  
                  <li>Phase gates: Join → join() only; Live → submitProgress() only; Settled → claim() only.</li>
                  <li>Optional Cancelled (safety).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="economics">
              <AccordionTrigger className="text-base">6) Economics & Math (v0)</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div className="space-y-2">
                  <p className="text-sm font-medium">6.1 Accounting</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>sMOL supply tracks user stakes in PT units.</li>
                    <li>Pool NAV (UI) is USDC-equivalent of PT via a Pendle quote; not used in payout math.</li>
                  </ul>
                  <p className="text-sm font-medium mt-2">6.2 Payout (Threshold + Binary Slash)</p>
                  <p className="text-sm">
                    Winners receive: claimPT = sMOL[user] × totalPT / winnerStakeTotal. Losers receive 0.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* TODO: [Low] Consider linking to a full MD/MDX doc source for richer formatting - [2025-08-31] */}
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
          <div className="flex items-center justify-center gap-3 flex-wrap">
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
          </div>
        </motion.div>
      </div>
    </div>
  )
}