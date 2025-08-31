interface EndorphinsLogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function EndorphinsLogo({ size = "md", className = "" }: EndorphinsLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  return (
    <img src="/endorphines-logo.png" alt="Endorphins" className={`${sizeClasses[size]} ${className} object-contain`} />
  )
}
