import React, { ReactNode, useMemo } from 'react'

import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import {
  ThemeProvider as MuiThemeProvider,
  PaletteOptions,
  Theme,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles'

import getPalette from './getPalette'

// Lazy default theme - only created if actually needed
let _defaultTheme: Theme | null = null
const getDefaultTheme = () => {
  if (!_defaultTheme) {
    _defaultTheme = createTheme()
  }
  return _defaultTheme
}

// Type guard to check if value is a complete Theme (has spacing function)
const isTheme = (value: Theme | ThemeOptions): value is Theme =>
  typeof (value as Theme).spacing === 'function'

export interface ThemeProviderProps {
  // Infra
  children?: ReactNode | ReactNode[]
  darkPalette?: PaletteOptions

  /**
   * Initialised on client-side by default.
   * But pass in server-side cache for SSR styles
   */
  emotionCache?: EmotionCache

  lightPalette?: PaletteOptions
  /**
   * Palette mode
   * @default 'light'
   */
  mode?: 'dark' | 'light'
  primaryColor?: string
  secondaryColor?: string
  /**
   * Theme or ThemeOptions.
   * If a complete Theme object is passed (created via createTheme),
   * it will be used directly without calling createTheme again.
   */
  theme?: Theme | ThemeOptions
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    // Infra
    children,
    darkPalette,

    emotionCache,

    lightPalette,
    // Palette
    mode = 'light',
    primaryColor,
    secondaryColor,
    // Theme
    theme: themeInput,
  } = props

  const theme = useMemo(() => {
    // If a complete Theme object is passed, use it directly (skip createTheme)
    const inputTheme = themeInput ?? getDefaultTheme()
    if (isTheme(inputTheme) && !lightPalette && !darkPalette && !primaryColor && !secondaryColor) {
      return inputTheme
    }

    // Otherwise, create theme from options
    const themeOptions = isTheme(inputTheme) ? {} : inputTheme
    const themeWithPalette = getPalette({
      paletteOptions:
        // prettier-ignore
        !lightPalette && !darkPalette
          ? (themeOptions.palette as PaletteOptions)
          : (mode === 'light'
          ? lightPalette
          : darkPalette),
      primaryColorOverride: primaryColor,
      secondaryColorOverride: secondaryColor,
      themeOptions,
    })

    return createTheme(themeWithPalette)
  }, [
    themeInput,
    mode,
    lightPalette,
    darkPalette,
    primaryColor,
    secondaryColor,
  ])

  const childrenJsx = (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )

  return emotionCache ? (
    <CacheProvider value={emotionCache}>{childrenJsx}</CacheProvider>
  ) : (
    childrenJsx
  )
}

export default ThemeProvider
