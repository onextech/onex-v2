import { createTheme } from '@mui/material/styles'
import { Inter, Roboto, Source_Sans_Pro } from 'next/font/google'

export const headerFont = Inter({
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const bodyFont = Source_Sans_Pro({
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['300', '400'],
})

export const overlineFont = Roboto({
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['500', '700'],
})

const headerFontFamily = headerFont.style.fontFamily
const bodyFontFamily = bodyFont.style.fontFamily
const overlineFontFamily = overlineFont.style.fontFamily

const headerFontWeight = 600
const headerFontWeight2 = 500

const defaultTheme = createTheme()
const { pxToRem } = defaultTheme.typography

const typography = {
  body1: { fontWeight: 400, letterSpacing: 0.5, lineHeight: 1.56 },
  button: {
    fontFamily: overlineFontFamily,
    fontSize: pxToRem(13),
    fontWeight: 700,
    letterSpacing: 1.5,
  },
  caption: {
    display: 'block',
    lineHeight: 1.5,
  },
  fontFamily: bodyFontFamily,
  h1: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(108),
    },
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(80),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(60),
    fontWeight: headerFontWeight,
    lineHeight: 1,
  },
  h2: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(60),
    },
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(54),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(44),
    fontWeight: headerFontWeight,
    lineHeight: 1.1,
  },
  h3: {
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(54),
    },
    [defaultTheme.breakpoints.up('sm')]: {
      fontSize: pxToRem(44),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(39),
    fontWeight: headerFontWeight,
    lineHeight: 1.09,
  },
  h4: {
    [defaultTheme.breakpoints.down('md')]: {
      fontSize: pxToRem(28),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(39),
    fontWeight: headerFontWeight,
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
    fontFamily: headerFontWeight2,
    fontSize: pxToRem(16),
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 1.5,
  },
  overline: {
    display: 'block',
    fontFamily: overlineFontFamily,
    fontWeight: 700,
    letterSpacing: 3,
  },
  overline2: {
    display: 'block',
    fontFamily: overlineFontFamily,
    fontSize: pxToRem(10),
    fontWeight: 700,
    letterSpacing: 2,
  },
  subtitle1: {
    fontSize: pxToRem(24),
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 1.35,
  },
  subtitle2: {
    fontSize: pxToRem(20),
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 1.5,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 1.45,
  },
}

export default typography
