import merge from 'lodash/merge'
import { lightTheme as commonLightTheme } from '@onex/theme'
import lightPalette from '@app/theme/lightPalette'
import typography from './typography'

const lightTheme = merge({}, commonLightTheme, {
  palette: lightPalette,
  typography,
})

export default lightTheme
