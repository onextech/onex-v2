import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import typography from './typography'
import palette from './palette'
import components from './components'
import breakpoints from './breakpoints'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      ...palette,
      mode: 'dark',
      background: {
        paper: '#101013',
        default: '#000',
      },
      text: {
        secondary: 'rgba(255,255,255,0.5)',
      },
    },
    typography,
    components,
    breakpoints,
  })
)

export default theme
