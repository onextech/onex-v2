import merge from 'lodash/merge'
import { darkTheme as commonDarkTheme } from '@onex/theme'
import darkPalette from '@app/theme/darkPalette'

const darkTheme = merge({}, commonDarkTheme, {
  palette: darkPalette,
})

export default darkTheme
