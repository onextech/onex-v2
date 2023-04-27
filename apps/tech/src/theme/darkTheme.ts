import merge from 'lodash/merge'
import { darkTheme as commonDarkTheme } from '@onex/theme'
import darkPalette from '@app/theme/darkPalette'
import typography from './typography'

const darkTheme = merge({}, commonDarkTheme, {
  palette: darkPalette,
  typography,
})

export default darkTheme
