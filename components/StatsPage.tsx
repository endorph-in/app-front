"use client"

import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Header } from "./Header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Progress } from "./ui/progress"
import { TrendingUp, Target, Activity, Users, Award, Calendar, Zap, Trophy, Flame } from "lucide-react"

interface StatsPageProps {
  onNavigate: (page: string, poolId?: string) => void
}

export function StatsPage({ onNavigate }: StatsPageProps) {
  const weeklyStats = [
    { day: "Mon", value: 8.2, target: 10 },
    { day: "Tue", value: 12.5, target: 10 },
    { day: "Wed", value: 6.8, target: 10 },
    { day: "Thu", value: 15.2, target: 10 },
    { day: "Fri", value: 9.4, target: 10 },
    { day: "Sat", value: 18.7, target: 10 },
    { day: "Sun", value: 5.2, target: 10 },
  ]

  const achievements = [
    {
      id: 1,
      title: "First Goal Crusher",
      description: "Complete your first fitness goal",
      earned: true,
      date: "2 weeks ago",
    },
    {
      id: 2,
      title: "Consistency King",
      description: "7 day streak of meeting goals",
      earned: true,
      date: "1 week ago",
    },
    {
      id: 3,
      title: "Team Player",
      description: "Join 5 different pools",
      earned: true,
      date: "3 days ago",
    },
    {
      id: 4,
      title: "Distance Destroyer",
      description: "Run 100km in total",
      earned: false,
      progress: 73,
    },
    {
      id: 5,
      title: "High Roller",
      description: "Stake 1000+ Molecules",
      earned: false,
      progress: 45,
    },
  ]

  const monthlyOverview = {
    totalDistance: "156.8km",
    totalWorkouts: 24,
    goalsCompleted: 8,
    moleculesEarned: 420,
    streakDays: 12,
    poolsJoined: 6,
  }

  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header title="Statistics" showBack onBack={() => onNavigate("home")} />

      {/* Monthly Overview */}
      <div className="px-6 py-4">
        <h2
          className="mb-3 text-accent font-michroma"
          style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "0.02em" }}
        >
          overview
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Card className="p-4 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-montserrat">Distance</p>
                <p className="font-michroma text-foreground" style={{ fontSize: "18px" }}>
                  {monthlyOverview.totalDistance}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-montserrat">Workouts</p>
                <p className="font-michroma text-foreground" style={{ fontSize: "18px" }}>
                  {monthlyOverview.totalWorkouts}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-montserrat">Goals</p>
                <p className="font-michroma text-foreground" style={{ fontSize: "18px" }}>
                  {monthlyOverview.goalsCompleted}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-102">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted/30 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-montserrat">Molecules</p>
                <p className="font-michroma text-foreground" style={{ fontSize: "18px" }}>
                  {monthlyOverview.moleculesEarned}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Streak and Pools */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Flame className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="font-medium">{monthlyOverview.streakDays} days</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pools Joined</p>
                <p className="font-medium">{monthlyOverview.poolsJoined}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Weekly Activity Chart */}
      <div className="px-6 pb-4">
        <h2
          className="mb-3 text-accent font-michroma"
          style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "0.02em" }}
        >
          activity
        </h2>
        <Card className="p-4">
          <div className="space-y-4">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{stat.day}</span>
                  <span className="text-muted-foreground">{stat.value}km</span>
                </div>
                <div className="relative">
                  <Progress value={(stat.value / 20) * 100} className="h-2" />
                  <div
                    className="absolute top-0 h-2 w-0.5 bg-muted-foreground/30"
                    style={{ left: `${(stat.target / 20) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Weekly Total</span>
              <span className="font-medium">76.0km / 70km target</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Achievements */}
      <div className="px-6">
        <Tabs defaultValue="earned" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-accent font-michroma"
              style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "0.02em" }}
            >
              achievements
            </h2>
          </div>

          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="earned">Earned ({achievements.filter((a) => a.earned).length})</TabsTrigger>
            <TabsTrigger value="progress">In Progress ({achievements.filter((a) => !a.earned).length})</TabsTrigger>
          </TabsList>

          <TabsContent value="earned" className="space-y-3">
            {achievements
              .filter((achievement) => achievement.earned)
              .map((achievement) => (
                <Card key={achievement.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <Badge className="bg-yellow-100 text-yellow-600 text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          Earned
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Earned {achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="progress" className="space-y-3">
            {achievements
              .filter((achievement) => !achievement.earned)
              .map((achievement) => (
                <Card key={achievement.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress || 0} className="h-2" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
