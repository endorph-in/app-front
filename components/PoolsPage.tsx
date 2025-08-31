"use client"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Header } from "./Header"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { motion } from "motion/react"
import { Plus, Users, Target, Clock, TrendingUp, Search, Star } from "lucide-react"
import { Input } from "./ui/input"

interface PoolsPageProps {
  onNavigate: (page: string, poolId?: string) => void
  selectedPool?: string | null
}

export function PoolsPage({ onNavigate, selectedPool }: PoolsPageProps) {
  const activePools = [
    {
      id: 1,
      name: "Weekend Warriors",
      goal: "Run 20km this week",
      participants: 4,
      totalStaked: 320,
      deadline: "3 days left",
      progress: 65,
      isJoined: true,
    },
    {
      id: 2,
      name: "Morning Runners",
      goal: "5km daily runs",
      participants: 8,
      totalStaked: 680,
      deadline: "5 days left",
      progress: 42,
      isJoined: true,
    },
  ]

  const sponsoredPools = [
    {
      id: "adidas-run-challenge",
      name: "Adidas Run Challenge",
      goal: "Run 15km weekly",
      participants: 24,
      totalStaked: 500,
      deadline: "6 days left",
      minStake: 50,
      isSponsored: true,
      sponsor: "Adidas",
      image: "/adidas-sports-brand-running.png",
    },
    {
      id: "rexona-fitness-challenge",
      name: "Rexona Fitness Challenge",
      goal: "5 workouts weekly",
      participants: 18,
      totalStaked: 300,
      deadline: "1 week left",
      minStake: 40,
      isSponsored: true,
      sponsor: "Rexona",
      image: "/sport-shoes-running-fitness.png",
    },
  ]

  const availablePools = [
    {
      id: 3,
      name: "Fitness Fanatics",
      goal: "Complete 10 workouts",
      participants: 6,
      totalStaked: 450,
      deadline: "1 week left",
      minStake: 50,
    },
    {
      id: 4,
      name: "Cyclists Club",
      goal: "100km cycling challenge",
      participants: 12,
      totalStaked: 960,
      deadline: "2 weeks left",
      minStake: 80,
    },
    {
      id: 5,
      name: "Step Masters",
      goal: "10,000 steps daily",
      participants: 15,
      totalStaked: 1200,
      deadline: "4 days left",
      minStake: 30,
    },
  ]

  return (
    <div className="min-h-screen pb-32 font-montserrat relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-2xl"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Header title="Pools" showBack onBack={() => onNavigate("home")} />

        {/* Hero Section */}
        <div className="px-6 py-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-32 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-between px-6">
                <div>
                  <h2 className="text-white font-michroma text-lg mb-1">Discover Pools</h2>
                  <p className="text-white/90 font-montserrat text-sm">Join challenges, stake molecules, earn rewards</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Create */}
        <div className="px-6 pb-4 space-y-4">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: "#A69F94" }} />
          <Input 
            placeholder="Search pools..." 
            className="pl-10 border-2 shadow-sm"
            style={{ 
              backgroundColor: "#FFFFFF", 
              borderColor: "#A8BF84",
              color: "#0D0D0D"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button 
            className="w-full h-14 font-montserrat shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
            style={{
              backgroundColor: "#A8BF84",
              color: "#0D0D0D",
              fontWeight: 500,
              fontSize: "16px"
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
            <Plus className="w-4 h-4 mr-2" />
            Create New Pool
          </Button>
        </motion.div>
      </div>

      {/* My Active Pools */}
      <div className="px-6 pb-6">
        <motion.h2
          className="mb-4 font-michroma"
          style={{
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#004225",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          active pools
        </motion.h2>
        <div className="space-y-4">
          {activePools.map((pool, index) => (
            <motion.div
              key={pool.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card
                className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-102"
                style={{ 
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 132, 0.2)",
                  borderRadius: "16px"
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold font-montserrat text-lg" style={{ color: "#004225" }}>
                        {pool.name}
                      </h4>
                      <div
                        className="px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#A8BF84" }}
                      >
                        <span className="text-xs font-montserrat font-medium" style={{ color: "#0D0D0D" }}>
                          Active
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-montserrat mb-3" style={{ color: "#A69F94" }}>
                      {pool.goal}
                    </p>

                    <div className="flex items-center gap-4 text-sm mb-4" style={{ color: "#A69F94" }}>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span className="font-montserrat">{pool.participants} members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-montserrat">{pool.totalStaked} Molecules</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-montserrat">{pool.deadline}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-montserrat font-medium" style={{ color: "#004225" }}>Progress</span>
                        <span className="font-michroma font-semibold" style={{ color: "#004225" }}>{pool.progress}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={pool.progress} 
                          className="h-4 bg-gray-200 rounded-full overflow-hidden"
                          style={{
                            backgroundColor: "#E5E7EB"
                          }}
                        />
                        <div 
                          className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${pool.progress}%`,
                            background: "linear-gradient(90deg, #A8BF84 0%, #004225 100%)"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#A8BF84" }}>
                      <AvatarFallback className="text-xs font-montserrat" style={{ backgroundColor: "#A8BF84", color: "#0D0D0D" }}>A</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#A8BF84" }}>
                      <AvatarFallback className="text-xs font-montserrat" style={{ backgroundColor: "#A8BF84", color: "#0D0D0D" }}>B</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#A8BF84" }}>
                      <AvatarFallback className="text-xs font-montserrat" style={{ backgroundColor: "#A8BF84", color: "#0D0D0D" }}>C</AvatarFallback>
                    </Avatar>
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{ backgroundColor: "#F2F2F2", borderColor: "#A8BF84" }}
                    >
                      <span className="text-xs font-montserrat" style={{ color: "#004225" }}>+{pool.participants - 3}</span>
                    </div>
                  </div>
                  <Button 
                    className="font-montserrat shadow-md hover:shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: "#0D0D0D",
                      color: "#FFFFFF",
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#333333"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#0D0D0D"
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Discover Pools */}
      <div className="px-6">
        <motion.h2
          className="mb-4 font-michroma"
          style={{
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#004225",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          discover
        </motion.h2>

        {/* Sponsored Pools */}
        <div className="space-y-4 mb-6">
          {sponsoredPools.map((pool, index) => (
            <motion.div
              key={pool.id}
              className={`relative overflow-hidden rounded-xl shadow-xl ${
                selectedPool === pool.id ? "ring-2 ring-offset-2 ring-[#A8BF84]" : ""
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: selectedPool === pool.id ? 1.02 : 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-40">
                <ImageWithFallback
                  src={pool.image || "/placeholder.svg"}
                  alt={pool.sponsor}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/85 via-primary/60 to-transparent"></div>

                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="backdrop-blur-sm px-3 py-1 rounded-full border flex items-center gap-1"
                        style={{ backgroundColor: "#0D0D0D", borderColor: "#0D0D0D" }}
                      >
                        <Star className="w-3 h-3" style={{ color: "#A8BF84" }} />
                        <span className="text-xs font-montserrat font-medium" style={{ color: "#FFFFFF" }}>
                          Sponsored
                        </span>
                      </div>
                      {selectedPool === pool.id && (
                        <div
                          className="px-3 py-1 rounded-full"
                          style={{ backgroundColor: "#A8BF84" }}
                        >
                          <span className="text-xs font-montserrat font-medium" style={{ color: "#0D0D0D" }}>
                            Selected
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-montserrat font-semibold mb-1 text-lg drop-shadow-md">
                      {pool.name}
                    </h3>
                    <p className="text-white/90 text-sm font-montserrat drop-shadow-sm mb-2">
                      {pool.goal}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-xs text-white/80">
                        <span className="font-montserrat">{pool.participants} participants</span>
                        <span className="font-montserrat">{pool.totalStaked} molecules</span>
                      </div>
                      <Button
                        className="font-montserrat shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: "#0D0D0D",
                          color: "#FFFFFF",
                          fontWeight: 500
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#333333"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#0D0D0D"
                        }}
                      >
                        Join Pool
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Available Pools */}
        <div className="space-y-4">
          {availablePools.map((pool, index) => (
            <motion.div
              key={pool.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card
                className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-102"
                style={{ 
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(168, 191, 132, 0.2)",
                  borderRadius: "16px"
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold font-montserrat text-lg mb-2" style={{ color: "#004225" }}>
                      {pool.name}
                    </h4>
                    <p className="text-sm font-montserrat mb-3" style={{ color: "#A69F94" }}>
                      {pool.goal}
                    </p>

                    <div className="flex items-center gap-4 text-sm mb-3" style={{ color: "#A69F94" }}>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span className="font-montserrat">{pool.participants} members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-montserrat">{pool.totalStaked} Molecules</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-montserrat">{pool.deadline}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" style={{ color: "#A8BF84" }} />
                      <span className="text-sm font-montserrat" style={{ color: "#004225" }}>
                        Min. stake: <span className="font-michroma">{pool.minStake}</span> Molecules
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#A8BF84" }}>
                      <AvatarFallback className="text-xs font-montserrat" style={{ backgroundColor: "#A8BF84", color: "#0D0D0D" }}>X</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#A8BF84" }}>
                      <AvatarFallback className="text-xs font-montserrat" style={{ backgroundColor: "#A8BF84", color: "#0D0D0D" }}>Y</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2" style={{ borderColor: "#A8BF84" }}>
                      <AvatarFallback className="text-xs font-montserrat" style={{ backgroundColor: "#A8BF84", color: "#0D0D0D" }}>Z</AvatarFallback>
                    </Avatar>
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{ backgroundColor: "#F2F2F2", borderColor: "#A8BF84" }}
                    >
                      <span className="text-xs font-montserrat" style={{ color: "#004225" }}>+{pool.participants - 3}</span>
                    </div>
                  </div>
                  <Button
                    className="font-montserrat shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "#A8BF84",
                      color: "#0D0D0D",
                      fontWeight: 500
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
                    Join Pool
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
      {/* Espaciador adicional para la navegación */}
      <div className="h-8"></div>
    </div>
  )
}
