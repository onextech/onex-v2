import { createTheme } from '@mui/material/styles'
import { Inter, Roboto, Source_Sans_Pro } from 'next/font/google'

export const headerFont = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
})

export const bodyFont = Source_Sans_Pro({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
})

export const overlineFont = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const headerFontFamily = headerFont.style.fontFamily
const bodyFontFamily = bodyFont.style.fontFamily
const overlineFontFamily = overlineFont.style.fontFamily

const headerFontWeight = 600
const headerFontWeight2 = 500

const defaultTheme = createTheme()
const { pxToRem } = defaultTheme.typography

const typography = {
  fontFamily: bodyFontFamily,
  h1: {
    fontSize: pxToRem(60),
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(80),
    },
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(108),
    },
    fontFamily: headerFontFamily,
    fontWeight: headerFontWeight,
    lineHeight: 1,
  },
  h2: {
    fontSize: pxToRem(44),
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(54),
    },
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(60),
    },
    fontFamily: headerFontFamily,
    fontWeight: headerFontWeight,
    lineHeight: 1.1,
  },
  h3: {
    fontSize: pxToRem(39),
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(44),
    },
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(54),
    },
    fontFamily: headerFontFamily,
    fontWeight: headerFontWeight,
    lineHeight: 1.09,
  },
  h4: {
    fontSize: pxToRem(39),
    fontFamily: headerFontFamily,
    fontWeight: headerFontWeight,
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: pxToRem(28),
    },
  },
  h5: {
    fontFamily: headerFontFamily,
    fontWeight: headerFontWeight2,
    letterSpacing: 0,
    lineHeight: 1.3,
  },
  h6: {
    fontFamily: headerFontFamily,
    fontWeight: headerFontWeight2,
    letterSpacing: 0,
    lineHeight: 1.4,
  },
  h7: {
    fontSize: pxToRem(16),
    fontFamily: headerFontWeight2,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: pxToRem(24),
    letterSpacing: 0,
    lineHeight: 1.35,
    fontWeight: 300,
  },
  subtitle2: {
    fontSize: pxToRem(20),
    letterSpacing: 0,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    letterSpacing: 0,
    lineHeight: 1.45,
    fontWeight: 300,
  },
  body1: { lineHeight: 1.56, letterSpacing: 0.5, fontWeight: 400 },
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
    fontSize: pxToRem(13),
    fontFamily: overlineFontFamily,
    fontWeight: 700,
    letterSpacing: 1.5,
  },
  caption: {
    lineHeight: 1.5,
    display: 'block',
  },
}

export default typography
