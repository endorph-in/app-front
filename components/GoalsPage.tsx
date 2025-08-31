"use client"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Header } from "./Header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Plus, Target, Activity, Clock, CheckCircle, Calendar, TrendingUp, Zap, Award } from "lucide-react"

interface GoalsPageProps {
  onNavigate: (page: string, poolId?: string) => void
}

export function GoalsPage({ onNavigate }: GoalsPageProps) {
  const activeGoals = [
    {
      id: 1,
      title: "Weekly Running Goal",
      description: "Run 15km this week",
      progress: 57,
      current: "8.5km",
      target: "15km",
      deadline: "3 days left",
      type: "running",
      staked: 120,
      category: "Distance",
    },
    {
      id: 2,
      title: "Daily Steps Challenge",
      description: "10,000 steps daily for 7 days",
      progress: 71,
      current: "5/7",
      target: "7 days",
      deadline: "2 days left",
      type: "walking",
      staked: 50,
      category: "Consistency",
    },
    {
      id: 3,
      title: "Strength Training",
      description: "3 gym sessions this week",
      progress: 33,
      current: "1/3",
      target: "3 sessions",
      deadline: "4 days left",
      type: "strength",
      staked: 80,
      category: "Workouts",
    },
  ]

  const completedGoals = [
    {
      id: 4,
      title: "Morning Yoga Streak",
      description: "7 consecutive days of yoga",
      completedDate: "2 days ago",
      earned: 65,
      type: "yoga",
    },
    {
      id: 5,
      title: "5K Running Goal",
      description: "Complete a 5K run",
      completedDate: "1 week ago",
      earned: 45,
      type: "running",
    },
  ]

  const getIconForType = (type: string) => {
    switch (type) {
      case "running":
        return Activity
      case "walking":
        return Activity
      case "strength":
        return Zap
      case "yoga":
        return Target
      default:
        return Target
    }
  }

  const getColorForCategory = (category: string) => {
    switch (category) {
      case "Distance":
        return "bg-primary/20 text-accent"
      case "Consistency":
        return "bg-accent/20 text-primary"
      case "Workouts":
        return "bg-secondary/20 text-accent"
      default:
        return "bg-muted/20 text-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20 font-montserrat">
      <Header title="Goals" showBack onBack={() => onNavigate("home")} />

      {/* Create Goal Button */}
      <div className="px-6 py-4">
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102">
          <Plus className="w-4 h-4 mr-2" />
          Create New Goal
        </Button>
      </div>

      {/* Goals Overview */}
      <div className="px-6 pb-4">
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-3 text-center border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-4 h-4 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground font-montserrat">Active</p>
            <p className="font-medium font-montserrat text-foreground">3</p>
          </Card>
          <Card className="p-3 text-center border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground font-montserrat">Completed</p>
            <p className="font-medium font-montserrat text-foreground">12</p>
          </Card>
          <Card className="p-3 text-center border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-4 h-4 text-accent" />
            </div>
            <p className="text-sm text-muted-foreground font-montserrat">Earned</p>
            <p className="font-medium font-montserrat text-foreground">435</p>
          </Card>
        </div>
      </div>

      {/* Goals Tabs */}
      <div className="px-6">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="active" className="font-montserrat">
              Active Goals
            </TabsTrigger>
            <TabsTrigger value="completed" className="font-montserrat">
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-3">
            {activeGoals.map((goal) => {
              const IconComponent = getIconForType(goal.type)
              return (
                <Card key={goal.id} className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{goal.title}</h4>
                        <Badge className={`text-xs ${getColorForCategory(goal.category)}`}>{goal.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>
                        Progress: {goal.current} / {goal.target}
                      </span>
                      <span className="font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{goal.deadline}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{goal.staked} Molecules staked</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </TabsContent>

          <TabsContent value="completed" className="space-y-3">
            {completedGoals.map((goal) => {
              const IconComponent = getIconForType(goal.type)
              return (
                <Card key={goal.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{goal.title}</h4>
                        <Badge className="bg-green-100 text-green-600 text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{goal.description}</p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Completed {goal.completedDate}</span>
                        </div>
                        <div className="flex items-center gap-1 text-green-600">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">+{goal.earned} Molecules</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
