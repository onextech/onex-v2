import { createTheme } from '@mui/material/styles'
import { Roboto, IBM_Plex_Mono, Inter } from 'next/font/google'

export const bodyFont = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
})

const headerFont = Inter({
  weight: ['600', '700', '800', '900'],
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
    fontFamily: 'SF Pro Display',
    fontSize: pxToRem(56),
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(72),
    },
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: -1,
  },
  h2: {
    fontFamily: headerFontFamily,
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: -1,
  },
  h3: { fontFamily: headerFontFamily, fontWeight: 800, lineHeight: 1.09 },
  h4: { fontSize: pxToRem(39), fontFamily: headerFontFamily, fontWeight: 800 },
  h5: {
    fontFamily: headerFontFamily,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.3,
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(20),
    },
  },
  h6: {
    fontFamily: headerFontFamily,
    fontSize: pxToRem(16),
    [defaultTheme.breakpoints.up('md')]: {
      fontSize: pxToRem(18),
    },
    fontWeight: 600,
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
    fontSize: pxToRem(24),
    letterSpacing: 0,
    lineHeight: 1.35,
    fontWeight: 300,
  },
  subtitle2: {
    fontSize: pxToRem(20),
    letterSpacing: 0,
    lineHeight: 1.4,
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
