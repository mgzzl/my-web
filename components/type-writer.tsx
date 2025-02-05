"use client"

import { useEffect, useState } from "react"

export default function TypeWriter({ phrases, delay = 100 }: { phrases: string[], delay?: number }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    if (!isDeleting) {
      // Typing mode
      if (displayText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        }, delay)

        return () => clearTimeout(timeout)
      } else {
        // Switch to deleting mode after pause
        const timeout = setTimeout(() => setIsDeleting(true), 1000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting mode
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1))
        }, delay / 2)

        return () => clearTimeout(timeout)
      } else {
        // Switch to next phrase after deleting
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }
  }, [displayText, isDeleting, currentPhraseIndex, phrases, delay])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}
