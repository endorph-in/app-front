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
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header title="Pools" showBack onBack={() => onNavigate("home")} />

      {/* Search and Create */}
      <div className="px-6 py-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search pools..." className="pl-10 bg-white" />
        </div>

        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
          <Plus className="w-4 h-4 mr-2" />
          Create New Pool
        </Button>
      </div>

      {/* My Active Pools */}
      <div className="px-6 pb-6">
        <h2
          className="mb-3 text-accent font-michroma"
          style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "0.02em" }}
        >
          active pools
        </h2>
        <div className="space-y-3">
          {activePools.map((pool) => (
            <Card
              key={pool.id}
              className="p-4 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 bg-card"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium font-montserrat text-foreground">{pool.name}</h4>
                    <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground font-montserrat">
                      Active
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{pool.goal}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{pool.participants} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{pool.totalStaked} Molecules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{pool.deadline}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Pool Progress</span>
                      <span>{pool.progress}%</span>
                    </div>
                    <Progress value={pool.progress} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs">A</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs">B</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs">C</AvatarFallback>
                  </Avatar>
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs">+{pool.participants - 3}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Discover Pools */}
      <div className="px-6">
        <h2
          className="mb-3 text-accent font-michroma"
          style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "0.02em" }}
        >
          discover
        </h2>

        {/* Sponsored Pools */}
        <div className="space-y-4 mb-6">
          {sponsoredPools.map((pool) => (
            <motion.div
              key={pool.id}
              className={`relative overflow-hidden rounded-xl ${
                selectedPool === pool.id ? "ring-2 ring-accent ring-offset-2" : ""
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: selectedPool === pool.id ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-32">
                <ImageWithFallback
                  src={pool.image || "/placeholder.svg"}
                  alt={pool.sponsor}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-transparent"></div>

                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-accent-foreground text-accent font-montserrat">
                        <Star className="w-3 h-3 mr-1" />
                        Sponsored
                      </Badge>
                      {selectedPool === pool.id && (
                        <Badge className="bg-primary text-primary-foreground font-montserrat">Selected</Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-accent-foreground font-montserrat font-medium mb-1">{pool.name}</h3>
                    <p className="text-accent-foreground/80 text-sm font-montserrat mb-2">{pool.goal}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-xs text-accent-foreground/80">
                        <span>{pool.participants} participants</span>
                        <span>{pool.totalStaked} molecules</span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-montserrat"
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
        <div className="space-y-3">
          {availablePools.map((pool) => (
            <Card
              key={pool.id}
              className="p-4 border border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102 bg-card"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-medium mb-1 font-montserrat">{pool.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2 font-montserrat">{pool.goal}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-montserrat">Min. stake: {pool.minStake} Molecules</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs font-montserrat">X</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs font-montserrat">Y</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs font-montserrat">Z</AvatarFallback>
                  </Avatar>
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs font-montserrat">+{pool.participants - 3}</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-montserrat"
                >
                  Join Pool
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
