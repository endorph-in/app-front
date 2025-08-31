"use client"

import { Button } from "./ui/button"
import { Header } from "./Header"
import { motion } from "motion/react"
import { 
  Target, 
  Users, 
  TrendingUp, 
  Star,
  Wallet,
  Link,
  Trophy,
  Share2,
  Gift,
  Zap,
  Sparkles
} from "lucide-react"

interface AboutPageProps {
  onNavigate: (page: string) => void
  onBack: () => void
}

export function AboutPage({ onNavigate, onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen pb-20 font-montserrat" style={{ backgroundColor: "#F0F7F0" }}>
      <Header showBack={true} onBack={onBack} onNavigate={onNavigate} />

      <div className="px-6 py-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-20 h-20" style={{ color: "#A8BF84" }} />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl font-michroma mb-8"
            style={{ color: "#004225" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            What is Endorphins?
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            An innovative wellness app that gamifies fitness through{" "}
            <span className="font-semibold" style={{ color: "#A8BF84" }}>
              social accountability and financial incentives.
            </span>
          </motion.p>
        </motion.div>

        {/* Main Pillars */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-michroma mb-16 text-center" style={{ color: "#004225" }}>
            Our Main Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Pillar 1 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Target className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-2xl md:text-3xl font-michroma font-semibold mb-4 md:mb-6" style={{ color: "#004225" }}>
                STAKE ON YOU
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                Our main goal is to motivate people to stake on themselves.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-2xl md:text-3xl font-michroma font-semibold mb-4 md:mb-6" style={{ color: "#004225" }}>
                COMPOUND YOU
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                We want people to build sustainable investment and wellness habits.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Users className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-2xl md:text-3xl font-michroma font-semibold mb-4 md:mb-6" style={{ color: "#004225" }}>
                YOU ARE NOT ALONE
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                Do it with friends, family, coworkers, or anyone around the world.
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Star className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-2xl md:text-3xl font-michroma font-semibold mb-4 md:mb-6" style={{ color: "#004225" }}>
                BE COOL
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                Join the hottest trend: wellness and Web3. Share, compete and grow with your community.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-3xl md:text-4xl font-michroma mb-16 text-center" style={{ color: "#004225" }}>
            How does it work?
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Wallet className="w-8 h-8 md:w-10 md:h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4" style={{ color: "#004225" }}>Wallet</h4>
              <p className="text-sm md:text-base text-muted-foreground">Login with a personal Wallet</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Link className="w-8 h-8 md:w-10 md:h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4" style={{ color: "#004225" }}>Connect</h4>
              <p className="text-sm md:text-base text-muted-foreground">Link Strava, Fitbit, or Health apps</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Target className="w-8 h-8 md:w-10 md:h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4" style={{ color: "#004225" }}>Stake</h4>
              <p className="text-sm md:text-base text-muted-foreground">Join pools and select your MOLECULES 😉</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Zap className="w-8 h-8 md:w-10 md:h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4" style={{ color: "#004225" }}>Move</h4>
              <p className="text-sm md:text-base text-muted-foreground">Complete your workout → data verified automatically</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Trophy className="w-8 h-8 md:w-10 md:h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4" style={{ color: "#004225" }}>Win</h4>
              <p className="text-sm md:text-base text-muted-foreground">Leaderboards update, rewards distributed on-chain</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Share2 className="w-8 h-8 md:w-10 md:h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-4" style={{ color: "#004225" }}>Show Off</h4>
              <p className="text-sm md:text-base text-muted-foreground">Share your streak with the community</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Features */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-michroma mb-16 text-center" style={{ color: "#004225" }}>
            Main Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Users className="w-10 h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-xl md:text-2xl font-michroma font-semibold mb-4" style={{ color: "#004225" }}>
                Private Pools
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Friends stake together in private competitions.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Trophy className="w-10 h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-xl md:text-2xl font-michroma font-semibold mb-4" style={{ color: "#004225" }}>
                Public Tournaments
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Open/global competitions for everyone to join.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Star className="w-10 h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-xl md:text-2xl font-michroma font-semibold mb-4" style={{ color: "#004225" }}>
                Sponsored Quests
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Brands/employers set challenges with rewards.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: "#A8BF84" }}>
                <Gift className="w-10 h-10" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-xl md:text-2xl font-michroma font-semibold mb-4" style={{ color: "#004225" }}>
                Energy Boost
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Give or receive MOLECULES to use in competitions!
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <Button
            onClick={() => onNavigate("home")}
            className="font-montserrat px-10 md:px-12 py-5 md:py-6 text-xl md:text-2xl shadow-2xl transition-all duration-300 hover:scale-110"
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
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
