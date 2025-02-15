import React from 'react'

import { NextThemeProvider } from './next-theme-provider'
import {
  ThemeProvider as GvsThemeProvider,
  ThemeProviderProps as GvsThemeProviderProps,
  useUserPreferences,
} from '@onex/theme'

import importedDarkTheme from './darkTheme'
import importedLightTheme from './lightTheme'

export interface ThemeProviderProps extends GvsThemeProviderProps {
  darkTheme?: GvsThemeProviderProps['theme']
  lightTheme?: GvsThemeProviderProps['theme']
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    darkTheme = importedDarkTheme,
    emotionCache,
    lightTheme = importedLightTheme,
  } = props

  // User Preferences
  const { isDarkMode } = useUserPreferences()

  return (
    <GvsThemeProvider
      emotionCache={emotionCache}
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
        forcedTheme={isDarkMode ? 'dark' : 'light'}
      >
        {children}
      </NextThemeProvider>
    </GvsThemeProvider>
  )
}

export default ThemeProvider
