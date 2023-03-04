import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import typography from './typography'
import palette from './palette'
import components from './components'
import breakpoints from './breakpoints'

const theme = responsiveFontSizes(
  createTheme({
    palette,
    typography,
    components,
    breakpoints,
  })
)

export default theme
