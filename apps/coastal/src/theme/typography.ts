import { createTheme } from '@mui/material/styles'
import { Blinker, Roboto } from 'next/font/google'

export const headerFont = Blinker({
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['400', '600'],
})
export const bodyFont = Roboto({
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['300', '400'],
})
export const overlineFont = headerFont

const headerFontFamily = headerFont.style.fontFamily
const bodyFontFamily = bodyFont.style.fontFamily
const overlineFontFamily = overlineFont.style.fontFamily

const defaultTheme = createTheme()
const { pxToRem } = defaultTheme.typography

const typography = {
  body1: { fontWeight: 400, letterSpacing: 0.5, lineHeight: 1.56 },
  button: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(14),
    },
    fontFamily: overlineFontFamily,
    fontSize: pxToRem(13),
    fontWeight: 600,
    letterSpacing: 1,
  },
  button2: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(18),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(18),
    fontWeight: 600,
    letterSpacing: 1,
    lineHeight: 1,
    textTransform: 'none',
  },
  caption: {
    display: 'block',
    lineHeight: 1.5,
  },
  fontFamily: bodyFontFamily,
  h1: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(72),
    },
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(60),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(48),
    fontWeight: 600,
    letterSpacing: -0.5,
    lineHeight: 1.05,
  },
  h2: {
    fontFamily: headerFontFamily,
    fontWeight: 400,
    letterSpacing: -1,
    lineHeight: 1.1,
  },
  h3: { fontFamily: headerFontFamily, fontWeight: 400, lineHeight: 1.09 },
  h4: {
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: pxToRem(28),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(39),
    fontWeight: 400,
  },
  h5: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(24),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(20),
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.3,
  },
  h6: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(20),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(16),
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.4,
  },
  h7: {
    fontFamily: headerFontFamily,
    fontSize: pxToRem(16),
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.5,
  },
  overline: {
    display: 'block',
    fontFamily: overlineFontFamily,
    fontWeight: 400,
    letterSpacing: 3,
  },
  overline2: {
    display: 'block',
    fontFamily: overlineFontFamily,
    fontSize: pxToRem(10),
    fontWeight: 600,
    letterSpacing: 2,
  },
  subtitle1: {
    fontSize: pxToRem(20),
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 1.35,
  },
  subtitle2: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(18),
    },
    fontSize: pxToRem(16),
    fontWeight: 400,
    letterSpacing: 0.5,
    lineHeight: 1.4,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.45,
  },
}

export default typography
