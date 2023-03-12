import { green } from '@mui/material/colors'
import lightPalette from './lightPalette'

const darkPalette = {
  ...lightPalette,
  mode: 'dark' as const,
  secondary: {
    main: green.A400,
  },
  background: {
    paper: '#101013',
    default: '#000',
  },
  text: {
    secondary: 'rgba(255,255,255,0.5)',
  },
}

export default darkPalette
