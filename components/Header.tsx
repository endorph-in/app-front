"use client"

import { Button } from "./ui/button"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Settings, ArrowLeft } from "lucide-react"
import { EndorphinsLogo } from "./EndorphinsLogo"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface HeaderProps {
  title?: string
  showBack?: boolean
  onBack?: () => void
}

export function Header({ title, showBack, onBack }: HeaderProps) {
  return (
    <div className="px-6 py-4 bg-white font-montserrat">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack ? (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          ) : null}

          <div className="flex items-center gap-2">
            <div className="mr-1">
              <EndorphinsLogo size="sm" />
            </div>
            <h1
              className="text-accent font-michroma"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              endorphines
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!showBack && !title && (
            <Avatar className="w-10 h-10">
              <ImageWithFallback
                src="/user-profile-avatar.png"
                alt="User avatar"
                className="w-full h-full object-cover rounded-full"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          )}
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
