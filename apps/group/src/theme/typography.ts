import { IBM_Plex_Mono, Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const headerFont = localFont({
  src: [
    {
      path: './fonts/Publico/PublicoHeadline-Light-Web.woff2',
      style: 'light',
      weight: '300',
    },
    {
      path: './fonts/Publico/PublicoText-Roman-Web.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: './fonts/Publico/PublicoText-Semibold-Web.woff2',
      style: 'semibold',
      weight: '600',
    },
  ],
})

export const bodyFont = Roboto({
  display: 'swap',
  fallback: ['apple-system', 'Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const overlineFont = IBM_Plex_Mono({
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const headerFontFamily = headerFont.style.fontFamily
const bodyFontFamily = bodyFont.style.fontFamily
const overlineFontFamily = overlineFont.style.fontFamily

// Static pxToRem utility (MUI default: 1rem = 16px)
const pxToRem = (px: number): string => `${px / 16}rem`

// MUI default breakpoints as static media queries
const breakpoints = {
  up: {
    sm: '@media (min-width:600px)',
    md: '@media (min-width:900px)',
    lg: '@media (min-width:1200px)',
  },
  down: {
    sm: '@media (max-width:599.95px)',
    md: '@media (max-width:899.95px)',
    lg: '@media (max-width:1199.95px)',
  },
}

const typography = {
  body1: { fontWeight: 400, letterSpacing: 0.5, lineHeight: 1.56 },
  body2: { fontSize: pxToRem(14), fontWeight: 600, lineHeight: 1.6 },
  button: {
    fontFamily: overlineFontFamily,
    fontWeight: 600,
    letterSpacing: 1,
  },
  caption: {
    display: 'block',
    lineHeight: 1.5,
  },
  fontFamily: bodyFontFamily,
  h1: {
    [breakpoints.up.md]: {
      fontSize: pxToRem(72),
    },
    [breakpoints.up.sm]: {
      fontSize: pxToRem(60),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(48),
    fontWeight: 300,
    lineHeight: 1,
  },
  h2: { fontFamily: headerFontFamily, lineHeight: 1.1 },
  h3: { fontFamily: headerFontFamily, fontWeight: 300, lineHeight: 1.09 },
  h4: {
    [breakpoints.down.md]: {
      fontSize: pxToRem(28),
    },
    fontFamily: headerFontFamily,
    fontSize: pxToRem(39),
    fontWeight: 300,
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
    fontFamily: headerFontFamily,
    fontSize: pxToRem(18),
    fontWeight: 400,
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
    fontSize: pxToRem(20),
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.35,
  },
  subtitle2: {
    [breakpoints.up.md]: {
      fontSize: pxToRem(18),
    },
    fontSize: pxToRem(16),
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.4,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 1.45,
  },
}

export default typography
