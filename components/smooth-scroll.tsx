"use client"

import { useEffect } from "react"
import { animateScroll as scroll } from "react-scroll"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleSmoothScroll = () => {
      scroll.scrollTo(window.scrollY + 1, {
        duration: 500,
        smooth: "easeInOutQuart",
      })
    }

    window.addEventListener("scroll", handleSmoothScroll)
    return () => window.removeEventListener("scroll", handleSmoothScroll)
  }, [])

  return <>{children}</>
}
