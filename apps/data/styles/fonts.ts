import { Roboto } from 'next/font/google'
import LocalFont from 'next/font/local'

// Google Fonts
const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

// Local Fonts
const publicoHeadline = LocalFont({
  display: 'swap',
  src: './fonts/PublicoHeadline-Light.woff2',
  variable: '--font-publico-headline',
  weight: '300',
})

const publicoText = LocalFont({
  display: 'swap',
  src: './fonts/PublicoText-Regular.woff2',
  variable: '--font-publico-text',
  weight: '400',
})

export const fonts = {
  publicoHeadline,
  publicoText,
  roboto,
}
