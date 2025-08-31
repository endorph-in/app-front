import { motion, AnimatePresence } from "motion/react"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
  pageKey: string
  direction?: "slide-left" | "slide-right" | "fade"
}

export function PageTransition({ children, pageKey, direction = "fade" }: PageTransitionProps) {
  const getVariants = () => {
    switch (direction) {
      case "slide-left":
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
        }
      case "slide-right":
        return {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 100 },
        }
      case "fade":
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }
    }
  }

  const variants = getVariants()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
