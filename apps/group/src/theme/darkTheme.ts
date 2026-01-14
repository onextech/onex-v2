import darkPalette from '@app/theme/darkPalette'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { darkTheme as baseDarkTheme } from '@onex/landing'

import typography from './typography'

// Create a complete Theme by extending the base theme
// This avoids calling createTheme() again in ThemeProvider
const darkTheme = responsiveFontSizes(
  createTheme(baseDarkTheme, {
    palette: darkPalette,
    typography,
  })
)

export default darkTheme
