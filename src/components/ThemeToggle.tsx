"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed top-4 right-4 p-2 w-9 h-9 rounded-full glass-card z-50"></div>
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2 rounded-full glass-card hover:scale-110 transition-transform duration-200 z-50 text-primary shadow-md"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}
