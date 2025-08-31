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
  CheckCircle,
  Star
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

interface AdidasRaceDetailsPageProps {
  onNavigate: (page: string) => void
  onBack: () => void
}

export function AdidasRaceDetailsPage({ onNavigate, onBack }: AdidasRaceDetailsPageProps) {
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
    console.log(`Joining Adidas Race with ${amount} USDC`)
    setIsRegistered(true)
    setIsJoinModalOpen(false)
    // Después de unirse exitosamente, podrías navegar o mostrar confirmación
  }

  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header showBack={true} onBack={onBack} />

      {/* Hero Section */}
      <div className="relative px-6 py-4">
        <motion.div
          className="relative h-56 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback 
            src="/adidas-race-image.jpg" 
            alt="Adidas race stretching" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-accent/60 to-transparent"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="backdrop-blur-sm px-3 py-1 rounded-full border" style={{ backgroundColor: "#0D0D0D", borderColor: "#0D0D0D" }}>
                  <Star className="w-3 h-3 mr-1 text-white" />
                  <span className="text-xs font-montserrat font-medium text-white">Sponsored</span>
                </div>
              </div>
            </div>

            <div>
              <motion.h1
                className="text-white mb-2 font-michroma drop-shadow-lg"
                style={{
                  fontSize: "28px",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Adidas Race
              </motion.h1>
              <motion.p
                className="text-white/95 mb-3 font-montserrat text-lg drop-shadow-md"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Sponsored by Adidas
              </motion.p>
              
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>18 participants</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>300 molecules</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>6 days left</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Race Info Cards */}
      <div className="px-6 space-y-4">
        {/* Goal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-4 border-2" style={{ borderColor: "#A8BF84" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#A8BF84" }}
                >
                  <Target className="w-6 h-6" style={{ color: "#0D0D0D" }} />
                </div>
                <div>
                  <h3 className="font-semibold font-montserrat text-lg" style={{ color: "#004225" }}>
                    Weekly Goal
                  </h3>
                  <p className="text-muted-foreground font-montserrat">
                    5 workouts per week
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-michroma text-2xl" style={{ color: "#004225" }}>
                  5x
                </p>
                <p className="text-xs text-muted-foreground">
                  weekly
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-4">
            <h3 className="font-semibold font-montserrat text-lg mb-3" style={{ color: "#004225" }}>
              About This Challenge
            </h3>
            <p className="text-muted-foreground font-montserrat leading-relaxed">
              Join the Adidas fitness challenge and commit to 5 workouts per week. This challenge is designed 
              for fitness enthusiasts who want to maintain a consistent workout routine while earning rewards. 
              Complete your weekly goal to claim your share of the prize pool.
            </p>
          </Card>
        </motion.div>

        {/* Challenge Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-4">
            <h3 className="font-semibold font-montserrat text-lg mb-3" style={{ color: "#004225" }}>
              Challenge Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-sm text-muted-foreground">4 weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Category</p>
                  <p className="text-sm text-muted-foreground">Fitness</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Min. Stake</p>
                  <p className="text-sm text-muted-foreground">40 molecules</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Prize Pool</p>
                  <p className="text-sm text-muted-foreground">300 molecules</p>
                </div>
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
            <DialogTitle className="font-montserrat">Confirm Registration</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground font-montserrat">
              Are you sure you want to register for the Adidas Race? You'll need to complete 5 workouts per week to avoid penalties.
            </p>
            <div className="flex gap-2">
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
        challengeName="Adidas Race"
        onJoinChallenge={handleJoinChallenge}
      />
    </div>
  )
}
