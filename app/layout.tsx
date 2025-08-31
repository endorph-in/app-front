import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { RainbowKitProvider } from "../components/providers/RainbowKitProvider"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Endorphin - Fitness Challenges",
  description: "Join fitness challenges and stake on yourself",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Michroma:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.variable} font-michroma antialiased`}>
        <div className="mobile-container">
          <RainbowKitProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </RainbowKitProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
