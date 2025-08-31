"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Header } from "./Header"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { JoinChallengeModal } from "./JoinChallengeModal"
import { motion } from "motion/react"
import { Users, Target, Clock, TrendingUp, Star, Calendar, Trophy, MapPin, Play } from "lucide-react"

interface ChallengeDetailPageProps {
  onNavigate: (page: string, poolId?: string) => void
  challengeId: string
}

interface ChallengeData {
  id: string
  name: string
  sponsor: string
  description: string
  longDescription: string
  goal: string
  participants: number
  totalStaked: number
  deadline: string
  minStake: number
  image: string
  borderColor: string
  backgroundColor: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  rewards: string[]
  rules: string[]
  startDate: string
  endDate: string
}

const challengesData: Record<string, ChallengeData> = {
  "adidas-run-challenge": {
    id: "adidas-run-challenge",
    name: "Adidas Run Challenge",
    sponsor: "Adidas",
    description: "Sponsored pool • 500 molecules",
    longDescription: "Únete al desafío oficial de Adidas y demuestra tu resistencia corriendo 15km cada semana. Este desafío está diseñado para corredores de todos los niveles que buscan mantener una rutina constante y ganar increíbles recompensas.",
    goal: "15km",
    participants: 24,
    totalStaked: 500,
    deadline: "6 days left",
    minStake: 50,
    image: "/group-running.png",
    borderColor: "#A8BF84",
    backgroundColor: "#A8BF84",
    duration: "4 weeks",
    difficulty: "Intermediate",
    category: "Running",
    rewards: [
      "500 molecules del pool de premios",
      "Descuento del 20% en productos Adidas",
      "Acceso exclusivo a eventos Adidas",
      "Badge especial de completador"
    ],
    rules: [
      "Correr mínimo 15km por semana",
      "Registrar todas las carreras en Strava",
      "Participar durante las 4 semanas completas",
      "Stake mínimo de 50 molecules para participar"
    ],
    startDate: "1 de Enero, 2024",
    endDate: "28 de Enero, 2024"
  },
  "rexona-fitness-challenge": {
    id: "rexona-fitness-challenge",
    name: "Rexona Fitness Challenge",
    sponsor: "Rexona",
    description: "Sponsored pool • 300 molecules",
    longDescription: "El desafío de fitness más completo patrocinado por Rexona. Completa 5 entrenamientos cada semana y mantente activo mientras compites por increíbles premios y recompensas exclusivas.",
    goal: "5x",
    participants: 18,
    totalStaked: 300,
    deadline: "1 week left",
    minStake: 40,
    image: "/athlete-jumping.png",
    borderColor: "#A69F94",
    backgroundColor: "#A69F94",
    duration: "3 weeks",
    difficulty: "Beginner",
    category: "Fitness",
    rewards: [
      "300 molecules del pool de premios",
      "Kit de productos Rexona gratis",
      "Acceso a clases de fitness premium",
      "Badge de fitness warrior"
    ],
    rules: [
      "Completar 5 entrenamientos por semana",
      "Cada entrenamiento debe durar mínimo 30 minutos",
      "Registrar actividades en la app",
      "Stake mínimo de 40 molecules para participar"
    ],
    startDate: "8 de Enero, 2024",
    endDate: "28 de Enero, 2024"
  }
}

export function ChallengeDetailPage({ onNavigate, challengeId }: ChallengeDetailPageProps) {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const challenge = challengesData[challengeId]

  if (!challenge) {
    return (
      <div className="min-h-screen bg-background pb-20 font-montserrat">
        <Header title="Challenge Not Found" showBack onBack={() => onNavigate("home")} onNavigate={onNavigate} />
        <div className="px-6 py-8 text-center">
          <p className="text-muted-foreground">El desafío solicitado no fue encontrado.</p>
          <Button onClick={() => onNavigate("home")} className="mt-4">
            Volver al Inicio
          </Button>
        </div>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "#A8BF84"
      case "Intermediate": return "#A69F94"
      case "Advanced": return "#004225"
      default: return "#A8BF84"
    }
  }

  const handleJoinChallenge = (amount: number) => {
    console.log(`Joining challenge ${challengeId} with ${amount} ETH`)
    onNavigate("pools", challengeId)
  }

  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
              <Header title="Challenge Details" showBack onBack={() => onNavigate("home")} onNavigate={onNavigate} />

      {/* Hero Section */}
      <div className="px-6 py-4">
        <motion.div
          className="relative h-56 rounded-xl overflow-hidden shadow-xl border-2"
          style={{ borderColor: challenge.borderColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback 
            src={challenge.image} 
            alt={challenge.name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-primary/70 to-accent/40"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Badge className="bg-accent-foreground text-accent font-montserrat">
                  <Star className="w-3 h-3 mr-1" />
                  Sponsored
                </Badge>
                <Badge 
                  className="font-montserrat text-white"
                  style={{ backgroundColor: getDifficultyColor(challenge.difficulty) }}
                >
                  {challenge.difficulty}
                </Badge>
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
                {challenge.name}
              </motion.h1>
              <motion.p
                className="text-white/95 mb-3 font-montserrat text-lg drop-shadow-md"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                by {challenge.sponsor}
              </motion.p>
              
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{challenge.participants} participantes</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{challenge.totalStaked} molecules</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{challenge.deadline}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Challenge Info Cards */}
      <div className="px-6 space-y-4">
        {/* Goal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-4 border-2" style={{ borderColor: challenge.borderColor }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: challenge.backgroundColor }}
                >
                  <Target className="w-6 h-6" style={{ color: "#0D0D0D" }} />
                </div>
                <div>
                  <h3 className="font-semibold font-montserrat text-lg" style={{ color: "#004225" }}>
                    Objetivo
                  </h3>
                  <p className="text-muted-foreground font-montserrat">
                    {challenge.goal === "15km" ? "15km semanales" : "5 entrenamientos semanales"}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-michroma text-2xl" style={{ color: "#004225" }}>
                  {challenge.goal}
                </p>
                <p className="text-xs text-muted-foreground">
                  {challenge.goal === "15km" ? "weekly goal" : "weekly"}
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
              Descripción
            </h3>
            <p className="text-muted-foreground font-montserrat leading-relaxed">
              {challenge.longDescription}
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
              Detalles del Desafío
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Duración</p>
                  <p className="text-sm text-muted-foreground">{challenge.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Categoría</p>
                  <p className="text-sm text-muted-foreground">{challenge.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Stake Mínimo</p>
                  <p className="text-sm text-muted-foreground">{challenge.minStake} molecules</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Pool de Premios</p>
                  <p className="text-sm text-muted-foreground">{challenge.totalStaked} molecules</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-4">
            <h3 className="font-semibold font-montserrat text-lg mb-3" style={{ color: "#004225" }}>
              Recompensas
            </h3>
            <div className="space-y-2">
              {challenge.rewards.map((reward, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" style={{ color: challenge.borderColor }} />
                  <p className="text-sm font-montserrat">{reward}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-4">
            <h3 className="font-semibold font-montserrat text-lg mb-3" style={{ color: "#004225" }}>
              Reglas del Desafío
            </h3>
            <div className="space-y-2">
              {challenge.rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: challenge.borderColor }}
                  />
                  <p className="text-sm font-montserrat">{rule}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Join Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-4"
        >
          <Button 
            className="w-full py-4 font-montserrat text-lg shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: challenge.backgroundColor,
              color: "#0D0D0D",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004225"
              e.currentTarget.style.color = "#F2F2F2"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = challenge.backgroundColor
              e.currentTarget.style.color = "#0D0D0D"
            }}
            onClick={() => setIsJoinModalOpen(true)}
          >
            <Play className="w-5 h-5 mr-2" />
            Unirse al Desafío
          </Button>
        </motion.div>
      </div>

      {/* Join Challenge Modal */}
      <JoinChallengeModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        challengeName={challenge.name}
        onJoinChallenge={handleJoinChallenge}
      />
    </div>
  )
}
