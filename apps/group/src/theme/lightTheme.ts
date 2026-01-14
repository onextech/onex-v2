import lightPalette from '@app/theme/lightPalette'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { lightTheme as baseLightTheme } from '@onex/landing'

import typography from './typography'

// Create a complete Theme by extending the base theme
// This avoids calling createTheme() again in ThemeProvider
const lightTheme = responsiveFontSizes(
  createTheme(baseLightTheme, {
    palette: lightPalette,
    typography,
  })
)

export default lightTheme
