import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/preflight.css' // Maintain our own preflight to work with MUI interop @see https://github.com/tailwindlabs/tailwindcss/discussions/11290#discussioncomment-7783598

import { fonts } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
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
