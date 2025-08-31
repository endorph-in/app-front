"use client"

import { Button } from "./ui/button"
import { Home, Users, Target, BarChart3 } from "lucide-react"
import { EndorphinsLogo } from "./EndorphinsLogo"
import { motion } from "motion/react"

interface BottomNavigationProps {
  currentPage: string
  onNavigate: (page: string, poolId?: string) => void
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const getActiveNavItem = (page: string) => {
    if (page === "aleph-race-details" || page === "adidas-race-details") {
      return "home"
    }
    // Páginas que no corresponden a ninguna pestaña de navegación
    if (page === "docs" || page === "welcome") {
      return "none"
    }
    return page
  }
  
  const activeNavItem = getActiveNavItem(currentPage)
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "pools", icon: Users, label: "Pools" },
    { id: "goals", icon: Target, label: "Goals" },
    { id: "stats", icon: BarChart3, label: "Stats" },
  ]

  const getIndicatorPosition = () => {
    const activeIndex = navItems.findIndex(item => item.id === activeNavItem)
    // Si no hay pestaña activa, ocultar el indicador
    if (activeIndex === -1) return { left: "0%", width: "0%", opacity: 0 }
    
    if (activeIndex === 0) return { left: "2%", width: "18%", opacity: 1 }
    if (activeIndex === 1) return { left: "21.5%", width: "18%", opacity: 1 }  
    if (activeIndex === 2) return { left: "62%", width: "18%", opacity: 1 }   
    if (activeIndex === 3) return { left: "81%", width: "18%", opacity: 1 }
    
    return { left: "0%", width: "0%", opacity: 0 }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-6 py-3 h-20 z-50">
      <div className="relative flex justify-around items-center h-full">
        {/* Indicador cuadrado deslizante animado */}
        <motion.div
          className="absolute rounded-xl z-0"
          style={{
            backgroundColor: "rgba(168, 191, 132, 0.3)",
            top: "50%",
            transform: "translateY(-50%)",
            height: "48px",
            ...getIndicatorPosition()
          }}
          animate={getIndicatorPosition()}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3
          }}
        />
        {navItems.slice(0, 2).map((item) => {
          const isActive = activeNavItem === item.id
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`relative z-10 flex flex-col gap-1 h-auto py-2 px-4 font-montserrat transition-all duration-300 rounded-xl ${
                isActive ? "" : "hover:bg-muted/50"
              }`}
              style={isActive ? { 
                color: "#004225",
                fontWeight: "600"
              } : { 
                color: "#A69F94"
              }}
              onClick={() => onNavigate(item.id)}
            >
              <item.icon className={`${isActive ? "w-6 h-6" : "w-5 h-5"} transition-all duration-300`} />
              <span className={`font-medium transition-all duration-300 ${isActive ? "text-sm" : "text-xs"}`}>
                {item.label}
              </span>
            </Button>
          )
        })}

        {/* Centro con logo */}
        <div className="flex items-center justify-center px-4">
          <EndorphinsLogo size="md" />
        </div>

        {navItems.slice(2, 4).map((item) => {
          const isActive = activeNavItem === item.id
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`relative z-10 flex flex-col gap-1 h-auto py-2 px-4 font-montserrat transition-all duration-300 rounded-xl ${
                isActive ? "" : "hover:bg-muted/50"
              }`}
              style={isActive ? { 
                color: "#004225",
                fontWeight: "600"
              } : { 
                color: "#A69F94"
              }}
              onClick={() => onNavigate(item.id)}
            >
              <item.icon className={`${isActive ? "w-6 h-6" : "w-5 h-5"} transition-all duration-300`} />
              <span className={`font-medium transition-all duration-300 ${isActive ? "text-sm" : "text-xs"}`}>
                {item.label}
              </span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
