"use client"

import { useState } from "react"
import { WelcomePage } from "./components/WelcomePage"
import { HomePage } from "./components/HomePage"
import { PoolsPage } from "./components/PoolsPage"
import { GoalsPage } from "./components/GoalsPage"
import { StatsPage } from "./components/StatsPage"
import { BottomNavigation } from "./components/BottomNavigation"
import { PageTransition } from "./components/PageTransition"

export default function App() {
  const [currentPage, setCurrentPage] = useState("welcome")
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false)
  const [selectedPool, setSelectedPool] = useState<string | null>(null)

  const handleNavigate = (page: string, poolId?: string) => {
    setCurrentPage(page)
    if (poolId) {
      setSelectedPool(poolId)
    } else {
      setSelectedPool(null)
    }
  }

  const handleStartNow = () => {
    setHasSeenWelcome(true)
    setCurrentPage("home")
  }

  const handleBackToWelcome = () => {
    setCurrentPage("welcome")
  }

  const getPageDirection = (page: string) => {
    if (page === "welcome") return "slide-right"
    if (currentPage === "welcome") return "slide-left"
    return "fade"
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomePage onStartNow={handleStartNow} />
      case "home":
        return (
          <HomePage onNavigate={handleNavigate} onBackToWelcome={hasSeenWelcome ? handleBackToWelcome : undefined} />
        )
      case "pools":
        return <PoolsPage onNavigate={handleNavigate} selectedPool={selectedPool} />
      case "goals":
        return <GoalsPage onNavigate={handleNavigate} />
      case "stats":
        return <StatsPage onNavigate={handleNavigate} />
      default:
        return <WelcomePage onStartNow={handleStartNow} />
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <PageTransition pageKey={currentPage} direction={getPageDirection(currentPage)}>
        {renderCurrentPage()}
      </PageTransition>
      {currentPage !== "welcome" && <BottomNavigation currentPage={currentPage} onNavigate={handleNavigate} />}
    </div>
  )
}
