import darkPalette from '@app/theme/darkPalette'
import { darkTheme as commonDarkTheme } from '@gravis-os/landing'
import merge from 'lodash/merge'

import typography from './typography'

const darkTheme = merge({}, commonDarkTheme, {
  palette: darkPalette,
  typography,
})

export default darkTheme
