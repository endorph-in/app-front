"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Header } from "./Header"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { JoinChallengeModal } from "./JoinChallengeModal"
import { motion } from "motion/react"
import { 
  Users, 
  Clock, 
  Trophy, 
  Target, 
  TrendingUp, 
  Lock, 
  Calendar,
  X,
  CheckCircle,
  Star
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

interface RaceDetailsPageProps {
  onNavigate: (page: string) => void
  onBack: () => void
}

export function RaceDetailsPage({ onNavigate, onBack }: RaceDetailsPageProps) {
  const [showRegistrationDialog, setShowRegistrationDialog] = useState(false)
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegister = () => {
    setIsJoinModalOpen(true)
  }

  const handleConfirmRegistration = () => {
    setIsRegistered(true)
    setShowRegistrationDialog(false)
    // Here you would typically make an API call to register the user
  }

  const handleJoinChallenge = (amount: number) => {
    // Aquí manejarías la lógica de unirse al desafío
    console.log(`Joining Aleph Race with ${amount} USDC`)
    setIsRegistered(true)
    setIsJoinModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header showBack={true} onBack={onBack} />

      {/* Hero Banner */}
      <div className="relative px-6 py-4">
        <motion.div
          className="relative h-56 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback 
            src="/aleph-race-image.jpg" 
            alt="Aleph Race" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-primary/70 to-accent/40"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <motion.h1
              className="text-white mb-2 font-michroma drop-shadow-lg"
              style={{
                fontSize: "36px",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              aleph race
            </motion.h1>
            <motion.p
              className="text-white/95 mb-4 font-montserrat text-lg drop-shadow-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              15km weekly challenge
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Participants */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-4 border-2" style={{ borderColor: "#A8BF84" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full" style={{ backgroundColor: "#A8BF84" }}>
                    <Users className="w-5 h-5" style={{ color: "#0D0D0D" }} />
                  </div>
                  <div>
                    <p className="text-sm font-montserrat text-muted-foreground">Participants</p>
                    <p className="text-2xl font-michroma font-bold" style={{ color: "#004225" }}>24</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Duration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-4 border-2" style={{ borderColor: "#A8BF84" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full" style={{ backgroundColor: "#A8BF84" }}>
                    <Clock className="w-5 h-5" style={{ color: "#0D0D0D" }} />
                  </div>
                  <div>
                    <p className="text-sm font-montserrat text-muted-foreground">Duration</p>
                    <p className="text-2xl font-michroma font-bold" style={{ color: "#004225" }}>7 days</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* APR Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <Card className="p-4 border-2" style={{ borderColor: "#004225" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#004225" }}>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-montserrat text-muted-foreground">Annual Percentage Rate</p>
                  <p className="text-2xl font-michroma font-bold" style={{ color: "#004225" }}>12.5%</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-montserrat text-muted-foreground">Expected return</p>
                <p className="text-sm font-montserrat font-medium" style={{ color: "#A8BF84" }}>+62.5 molecules</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Total Value Locked */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6"
        >
          <Card className="p-4 border-2" style={{ borderColor: "#A69F94" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#A69F94" }}>
                  <Lock className="w-5 h-5" style={{ color: "#0D0D0D" }} />
                </div>
                <div>
                  <p className="text-sm font-montserrat text-muted-foreground">Total Value Locked</p>
                  <p className="text-2xl font-michroma font-bold" style={{ color: "#004225" }}>12,000</p>
                  <p className="text-sm font-montserrat text-muted-foreground">molecules</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-montserrat text-muted-foreground">Prize pool</p>
                <p className="text-sm font-montserrat font-medium" style={{ color: "#A8BF84" }}>Winner takes 60%</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Race Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-6"
        >
          <Card className="p-4 border-2" style={{ borderColor: "#A8BF84" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full" style={{ backgroundColor: "#A8BF84" }}>
                <Trophy className="w-5 h-5" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-lg font-michroma font-semibold" style={{ color: "#004225" }}>
                Race Details
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" style={{ color: "#A8BF84" }} />
                <p className="text-sm font-montserrat">
                  <span className="font-semibold">Aleph Partnership:</span> Official running gear and exclusive merchandise for participants
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" style={{ color: "#A8BF84" }} />
                <p className="text-sm font-montserrat">
                  <span className="font-semibold">Goal:</span> Complete 15km within 7 days to qualify for rewards
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: "#A8BF84" }} />
                <p className="text-sm font-montserrat">
                  <span className="font-semibold">Start Date:</span> Monday, November 17th, 2025
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: "#A8BF84" }} />
                <p className="text-sm font-montserrat">
                  <span className="font-semibold">Rewards:</span> Aleph merchandise, exclusive NFTs, and molecule rewards
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Let's Go Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            className="w-full font-montserrat px-6 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: isRegistered ? "#004225" : "#A8BF84",
              color: isRegistered ? "#F2F2F2" : "#0D0D0D",
            }}
            onClick={isRegistered ? undefined : handleRegister}
            disabled={isRegistered}
          >
            {isRegistered ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Already Registered
              </>
            ) : (
              <>
                <Target className="w-5 h-5 mr-2" />
                Let's Go!
              </>
            )}
          </Button>
        </motion.div>
      </div>

      {/* Registration Dialog */}
      <Dialog open={showRegistrationDialog} onOpenChange={setShowRegistrationDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-michroma text-xl" style={{ color: "#004225" }}>
              Register for Aleph Race
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#A8BF84" }}>
                <Target className="w-8 h-8" style={{ color: "#0D0D0D" }} />
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-2">Join the Challenge</h3>
              <p className="text-sm font-montserrat text-muted-foreground mb-4">
                You're about to join 24 other participants in the Aleph Race challenge. 
                Complete 15km within 7 days to earn rewards!
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#F8F9FA" }}>
                <span className="text-sm font-montserrat">Entry Fee:</span>
                <span className="font-montserrat font-semibold" style={{ color: "#004225" }}>500 molecules</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#F8F9FA" }}>
                <span className="text-sm font-montserrat">Duration:</span>
                <span className="font-montserrat font-semibold" style={{ color: "#004225" }}>7 days</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#F8F9FA" }}>
                <span className="text-sm font-montserrat">Goal:</span>
                <span className="font-montserrat font-semibold" style={{ color: "#004225" }}>15km</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                className="flex-1 font-montserrat"
                onClick={() => setShowRegistrationDialog(false)}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 font-montserrat"
                style={{
                  backgroundColor: "#A8BF84",
                  color: "#0D0D0D",
                }}
                onClick={handleConfirmRegistration}
              >
                Confirm Registration
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Join Challenge Modal */}
      <JoinChallengeModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        challengeName="Adidas Run Challenge"
        onJoinChallenge={handleJoinChallenge}
      />
    </div>
  )
}
