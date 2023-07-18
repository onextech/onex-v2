import { createTheme } from '@mui/material/styles'
import localFont from 'next/font/local'
import { Roboto, IBM_Plex_Mono } from 'next/font/google'

export const headerFont = localFont({
  src: [
    {
      path: './fonts/Publico/PublicoHeadline-Light-Web.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/Publico/PublicoText-Roman-Web.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Publico/PublicoText-Semibold-Web.woff2',
      weight: '600',
      style: 'semibold',
    },
  ],
})

export const bodyFont = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
})

export const overlineFont = IBM_Plex_Mono({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const headerFontFamily = headerFont.style.fontFamily
const bodyFontFamily = bodyFont.style.fontFamily
const overlineFontFamily = overlineFont.style.fontFamily

const defaultTheme = createTheme()
const { pxToRem } = defaultTheme.typography

const typography = {
  fontFamily: bodyFontFamily,
  h1: {
    fontFamily: headerFontFamily,
    fontSize: pxToRem(48),
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(60),
    },
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(72),
    },
    fontWeight: 300,
    lineHeight: 1,
  },
  h2: { fontFamily: headerFontFamily, lineHeight: 1.1 },
  h3: { fontFamily: headerFontFamily, fontWeight: 300, lineHeight: 1.09 },
  h4: {
    fontSize: pxToRem(39),
    fontFamily: headerFontFamily,
    fontWeight: 400,
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: pxToRem(28),
    },
    mt: 4,
  },
  h5: {
    fontFamily: headerFontFamily,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.3,
  },
  h6: {
    fontFamily: headerFontFamily,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.4,
  },
  h7: {
    fontSize: pxToRem(16),
    fontFamily: headerFontFamily,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: pxToRem(20),
    letterSpacing: 0,
    lineHeight: 1.35,
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: pxToRem(16),
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(18),
    },
    letterSpacing: 0,
    lineHeight: 1.4,
    fontWeight: 400,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    letterSpacing: 0,
    lineHeight: 1.45,
    fontWeight: 300,
  },
  body1: { lineHeight: 1.56, letterSpacing: 0.5, fontWeight: 400 },
  body2: { fontSize: pxToRem(14), fontWeight: 600, lineHeight: 1.6 },
  overline: {
    fontFamily: overlineFontFamily,
    fontWeight: 700,
    letterSpacing: 3,
    display: 'block',
  },
  overline2: {
    fontSize: pxToRem(10),
    fontFamily: overlineFontFamily,
    fontWeight: 700,
    letterSpacing: 2,
    display: 'block',
  },
  button: {
    fontFamily: overlineFontFamily,
    fontWeight: 700,
    letterSpacing: 1,
  },
  caption: {
    lineHeight: 1.5,
    display: 'block',
  },
}

export default typography
