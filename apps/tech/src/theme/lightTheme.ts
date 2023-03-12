import merge from 'lodash/merge'
import { lightTheme as commonLightTheme } from '@onex/theme'
import lightPalette from '@app/theme/lightPalette'

const lightTheme = merge({}, commonLightTheme, {
  palette: lightPalette,
})

export default lightTheme
