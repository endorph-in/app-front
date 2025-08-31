"use client"

import { Button } from "./ui/button"
import { Home, Users, Target, BarChart3 } from "lucide-react"
import { EndorphinsLogo } from "./EndorphinsLogo"

interface BottomNavigationProps {
  currentPage: string
  onNavigate: (page: string, poolId?: string) => void
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "pools", icon: Users, label: "Pools" },
    { id: "goals", icon: Target, label: "Goals" },
    { id: "stats", icon: BarChart3, label: "Stats" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-6 py-3">
      <div className="flex justify-around items-center">
        {navItems.slice(0, 2).map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className={`flex flex-col gap-1 h-auto py-2 font-montserrat ${
              currentPage === item.id ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}

        {/* Centro con logo */}
        <div className="flex items-center justify-center px-4">
          <EndorphinsLogo size="md" />
        </div>

        {navItems.slice(2, 4).map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className={`flex flex-col gap-1 h-auto py-2 font-montserrat ${
              currentPage === item.id ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
