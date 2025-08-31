"use client"

import { Button } from "./ui/button"
import { motion } from "motion/react"
import { EndorphinsLogo } from "./EndorphinsLogo"

interface WelcomePageProps {
  onStartNow: () => void
}

export function WelcomePage({ onStartNow }: WelcomePageProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Status Bar Simulation */}
      <div className="relative z-20 flex justify-between items-center px-6 pt-4 pb-2">
        <div className="text-sm font-medium text-white">9:41</div>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <div className="w-4 h-3 ml-1">
            <svg viewBox="0 0 16 12" fill="none" className="w-full h-full">
              <path
                d="M1 5.5C1 3.01472 3.01472 1 5.5 1H10.5C12.9853 1 15 3.01472 15 5.5V6.5C15 8.98528 12.9853 11 10.5 11H5.5C3.01472 11 1 8.98528 1 6.5V5.5Z"
                stroke="white"
                strokeWidth="1"
              />
              <path
                d="M13 4V8C13 8.55228 13.4477 9 14 9C14.5523 9 15 8.55228 15 8V4C15 3.44772 14.5523 3 14 3C13.4477 3 13 3.44772 13 4Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-6 h-3 ml-1">
            <svg viewBox="0 0 24 12" fill="none" className="w-full h-full">
              <rect x="1" y="2" width="20" height="8" rx="2" stroke="white" strokeWidth="1" />
              <rect x="22" y="4" width="1" height="4" rx="0.5" fill="white" />
              <rect x="2" y="3" width="16" height="6" rx="1" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Top right Endorphins logo */}
      <div className="absolute top-16 right-6 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.1, type: "spring", damping: 15 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <EndorphinsLogo size="lg" />
        </motion.div>
      </div>

      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/running-athlete-bw.png"
          alt="Athletic person running"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>
      </div>

      {/* Main Content - Moved lower as requested */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-32">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", damping: 20 }}
        >
          <motion.h1
            className="leading-none mb-3 font-michroma"
            style={{
              fontWeight: 400,
              fontSize: "80px",
              letterSpacing: "0.02em",
              color: "#A8BF84", // Direct green color
            }}
            initial={{ opacity: 0, x: -30, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            stake
          </motion.h1>
          <motion.h1
            className="leading-none mb-3 font-michroma"
            style={{
              fontWeight: 400,
              fontSize: "80px",
              letterSpacing: "0.02em",
              color: "#A8BF84", // Direct green color
            }}
            initial={{ opacity: 0, x: -30, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
          >
            on
          </motion.h1>
          <motion.h1
            className="leading-none font-michroma"
            style={{
              fontWeight: 400,
              fontSize: "80px",
              letterSpacing: "0.02em",
              color: "#A8BF84", // Direct green color
            }}
            initial={{ opacity: 0, x: -30, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
          >
            you.
          </motion.h1>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <motion.div
        className="relative z-10 px-6 pb-16"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5, type: "spring", damping: 20 }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(168, 191, 132, 0)",
              "0 0 0 10px rgba(168, 191, 132, 0.1)",
              "0 0 0 20px rgba(168, 191, 132, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        >
          <Button
            onClick={onStartNow}
            className="w-full h-14 rounded-lg transition-all duration-300 shadow-lg font-montserrat hover:shadow-xl"
            style={{
              fontWeight: 500,
              fontSize: "16px",
              backgroundColor: "#A8BF84", // Green background
              color: "#0D0D0D", // Dark text
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004225" // Dark green on hover
              e.currentTarget.style.color = "#F2F2F2" // Light text on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#A8BF84" // Back to green
              e.currentTarget.style.color = "#0D0D0D" // Back to dark text
            }}
          >
            Start Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
