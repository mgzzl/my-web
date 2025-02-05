"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold hover:text-primary transition-colors">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                usePathname() === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className={`text-sm font-medium transition-colors ${
                usePathname().startsWith("/projects") ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Projects
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
