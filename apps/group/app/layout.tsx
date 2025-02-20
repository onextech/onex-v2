import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/preflight.css' // Maintain our own preflight to work with MUI interop @see https://github.com/tailwindlabs/tailwindcss/discussions/11290#discussioncomment-7783598

import { fonts } from '@/styles/fonts'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: 'One X Group | Custom Software Development',
    template: '%s | One X Group - Custom Software Development',
  },
  // TODO@Joel: Setup canonical and langs
  // alternates: {
  //   canonical: './',
  //   languages: {
  //     'en-ae': 'https://www.onexgroup.co/ae',
  //     'en-AU': 'https://www.onexgroup.co/au',
  //     'en-GB': 'https://www.onexgroup.co/gb',
  //     'en-HK': 'https://www.onexgroup.co/hk',
  //     'en-US': 'https://www.onexgroup.co/us',
  //   },
  // },
  description:
    'Discover AI-driven ERP solutions for B2B service businesses with One X Group. Automate tasks, enhance efficiency, and grow without increasing headcount',
  metadataBase: new URL(defaultUrl),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.roboto.variable} ${fonts.publicoHeadline.variable} ${fonts.publicoText.variable} antialiased`}
        id="__next"
      >
        {children}
      </body>
    </html>
  )
}
