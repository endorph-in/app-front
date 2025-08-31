"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "motion/react"
import { EndorphinsLogo } from "./EndorphinsLogo"

interface WelcomePageProps {
  onStartNow: () => void
}

export function WelcomePage({ onStartNow }: WelcomePageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    "/probando-primera-1.jpeg",
    "/probando-primera-2.jpeg", 
    "/probando-primera-3.jpeg",
    "/probando-primera-4.jpeg",
    "/probando-primera-5.jpeg"
  ]

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length)
    setCurrentImageIndex(randomIndex)

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="relative min-h-screen flex flex-col bg-black overflow-hidden">
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
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Athletic person running"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.02, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
      </div>

      {/* Main Content - Moved lower as requested */}
      <div className="relative z-10 flex-1 flex flex-col justify-start px-6 pt-12">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, type: "spring", damping: 20 }}
        >
          <motion.h1
            className="leading-none mb-2 font-michroma"
            style={{
              fontWeight: 400,
              fontSize: "65px",
              letterSpacing: "0.02em",
              color: "#A8BF84",
            }}
            initial={{ opacity: 0, x: -30, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            stake
          </motion.h1>
          <motion.h1
            className="leading-none mb-2 font-michroma"
            style={{
              fontWeight: 400,
              fontSize: "65px",
              letterSpacing: "0.02em",
              color: "#A8BF84",
            }}
            initial={{ opacity: 0, x: -30, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 100 }}
          >
            on
          </motion.h1>
          <motion.h1
            className="leading-none font-michroma"
            style={{
              fontWeight: 400,
              fontSize: "65px",
              letterSpacing: "0.02em",
              color: "#A8BF84",
            }}
            initial={{ opacity: 0, x: -30, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 1.0, type: "spring", stiffness: 100 }}
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
        transition={{ duration: 1, delay: 1.5, type: "spring", damping: 20 }}
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
            Start Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
