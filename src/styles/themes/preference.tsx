import { useEffect, useState, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, lightTheme } from './default'

import { Theme, ThemeContext } from './context'

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )
  const [explicit, setExplicit] = useState(() => {
    try {
      return ['light', 'dark'].includes(
        localStorage.getItem('pomodoro-theme') || '',
      )
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => {
      if (!explicit) setTheme(media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [explicit])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setExplicit(true)
    try {
      localStorage.setItem('pomodoro-theme', next)
    } catch {
      // The control still works when browser storage is blocked.
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'dark' ? defaultTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
