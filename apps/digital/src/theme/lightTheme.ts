import lightPalette from '@app/theme/lightPalette'
import { lightTheme as commonLightTheme } from '@onex/landing'
import merge from 'lodash/merge'

import typography from './typography'

const lightTheme = merge({}, commonLightTheme, {
  palette: lightPalette,
  typography,
})

export default lightTheme
