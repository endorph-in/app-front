"use client"

import { useState } from "react"
import { WelcomePage } from "./components/WelcomePage"
import { HomePage } from "./components/HomePage"
import { PoolsPage } from "./components/PoolsPage"
import { GoalsPage } from "./components/GoalsPage"
import { StatsPage } from "./components/StatsPage"
import { ChallengeDetailPage } from "./components/ChallengeDetailPage"
import { RaceDetailsPage } from "./components/RaceDetailsPage"
import { BottomNavigation } from "./components/BottomNavigation"
import { PageTransition } from "./components/PageTransition"

export default function App() {
  const [currentPage, setCurrentPage] = useState("welcome")
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false)
  const [selectedPool, setSelectedPool] = useState<string | null>(null)
  const [pageHistory, setPageHistory] = useState<string[]>([])

  const handleNavigate = (page: string, poolId?: string) => {
    setPageHistory(prev => [...prev, currentPage])
    setCurrentPage(page)
    if (poolId) {
      setSelectedPool(poolId)
    } else {
      setSelectedPool(null)
    }
  }

  const handleBack = () => {
    const previousPage = pageHistory[pageHistory.length - 1] || "home"
    setPageHistory(prev => prev.slice(0, -1))
    setCurrentPage(previousPage)
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
      case "challenge-detail":
        return <ChallengeDetailPage onNavigate={handleNavigate} challengeId={selectedPool || ""} />
      case "goals":
        return <GoalsPage onNavigate={handleNavigate} />
      case "stats":
        return <StatsPage onNavigate={handleNavigate} />
      case "race-details":
        return <RaceDetailsPage onNavigate={handleNavigate} onBack={handleBack} />
      default:
        return <WelcomePage onStartNow={handleStartNow} />
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <PageTransition pageKey={currentPage} direction={getPageDirection(currentPage)}>
        {renderCurrentPage()}
      </PageTransition>
      {currentPage !== "welcome" && currentPage !== "race-details" && <BottomNavigation currentPage={currentPage} onNavigate={handleNavigate} />}
    </div>
  )
}
