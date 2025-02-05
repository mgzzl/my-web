"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { useTheme } from "next-themes"
import { Header } from "@/components/header"
import { Particles } from "@/components/ui/particles"
import localFont from "next/font/local"
import "./globals.css"
import { Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import SmoothScroll from "@/components/smooth-scroll"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScroll>
            <AppContent>{children}</AppContent>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}

function AppContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  // Sobald `mounted` true ist, Theme auslesen
  useEffect(() => {

    console.log("Theme:", theme)

    if (theme) {
      const color = theme === "dark" ? "#ffffff" : "#000000"
      console.log("Particles Color:", color)
      setColor(color)
    }
  }, [theme])

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <Particles className="absolute inset-0" quantity={500} ease={80} color={color} refresh />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <footer className="border-t py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-6">
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
