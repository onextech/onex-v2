import React from 'react'
import {
  ThemeProvider as GvsThemeProvider,
  ThemeProviderProps as GvsThemeProviderProps,
  useUserPreferences,
} from '@gravis-os/theme'
import theme from './theme'
import darkTheme from './darkTheme'

export interface ThemeProviderProps extends GvsThemeProviderProps {}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, emotionCache } = props

  // User Preferences
  const { isDarkMode } = useUserPreferences()

  return (
    <GvsThemeProvider
      emotionCache={emotionCache}
      theme={isDarkMode ? darkTheme : theme}
    >
      {children}
    </GvsThemeProvider>
  )
}

export default ThemeProvider
