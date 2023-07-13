import { createTheme } from '@mui/material/styles'
import { Roboto, Blinker } from 'next/font/google'

export const headerFont = Blinker({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
})
export const bodyFont = Roboto({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
})
export const overlineFont = headerFont

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
    fontWeight: 600,
    lineHeight: 1.05,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: headerFontFamily,
    lineHeight: 1.1,
    fontWeight: 400,
    letterSpacing: -1,
  },
  h3: { fontFamily: headerFontFamily, fontWeight: 400, lineHeight: 1.09 },
  h4: {
    fontSize: pxToRem(39),
    fontFamily: headerFontFamily,
    fontWeight: 400,
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: pxToRem(28),
    },
  },
  h5: {
    fontFamily: headerFontFamily,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.3,
    fontSize: pxToRem(20),
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(24),
    },
  },
  h6: {
    fontFamily: headerFontFamily,
    fontSize: pxToRem(16),
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(20),
    },
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
    fontWeight: 300,
  },
  subtitle2: {
    fontSize: pxToRem(16),
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(18),
    },
    letterSpacing: 0.5,
    lineHeight: 1.4,
    fontWeight: 400,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    letterSpacing: 0,
    lineHeight: 1.45,
    fontWeight: 400,
  },
  body1: { lineHeight: 1.56, letterSpacing: 0.5, fontWeight: 400 },
  overline: {
    fontFamily: overlineFontFamily,
    fontWeight: 400,
    letterSpacing: 3,
    display: 'block',
  },
  overline2: {
    fontSize: pxToRem(10),
    fontFamily: overlineFontFamily,
    fontWeight: 600,
    letterSpacing: 2,
    display: 'block',
  },
  button: {
    fontFamily: overlineFontFamily,
    fontWeight: 600,
    letterSpacing: 1,
  },
  button2: {
    fontSize: pxToRem(18),
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(18),
    },
    fontFamily: headerFontFamily,
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: 1,
    lineHeight: 1,
  },
  caption: {
    lineHeight: 1.5,
    display: 'block',
  },
}

export default typography
