import type { Metadata } from 'next'

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import '@/styles/globals.css'
import '@/styles/preflight.css' // Maintain our own preflight to work with MUI interop @see https://github.com/tailwindlabs/tailwindcss/discussions/11290#discussioncomment-7783598

import { FacebookPixel } from '@/lib/analytics/facebook-pixel'
import { LinkedinAdsInsightsTracker } from '@/lib/analytics/linkedin-ads-insights-tracker'
import { Providers } from '@/lib/providers'
import { fonts } from '@/styles/fonts'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: 'One X Group | Custom Software Development',
    template: '%s | One X Group - Custom Software Development',
  },
  description:
    'One X Group is a leading provider of custom software development services, leveraging cutting-edge solutions to deliver exceptional products that meet the evolving needs of clients. With a commitment to excellence and a passion for innovation, One X Group seeks for your business growth in a rapidly changing world.',
  openGraph: {
    title: 'One X Group | Custom Software Development',
    description:
      'One X Group is a leading provider of custom software development services, leveraging cutting-edge solutions to deliver exceptional products that meet the evolving needs of clients. With a commitment to excellence and a passion for innovation, One X Group seeks for your business growth in a rapidly changing world.',
    url: defaultUrl,
    siteName: 'One X Group',
    images: [
      {
        url: 'https://www.onexgroup.co/og-image.jpg', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL(defaultUrl),
  alternates: {
    canonical: './',
    languages: {
      'en-ae': `${defaultUrl}/ae`,
      'en-AU': `${defaultUrl}/au`,
      'en-GB': `${defaultUrl}/gb`,
      'en-HK': `${defaultUrl}/hk`,
      'en-US': `${defaultUrl}/us`,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />

      <body
        className={`${fonts.roboto.variable} ${fonts.publicoHeadline.variable} ${fonts.publicoText.variable} antialiased`}
        id="__next"
      >
        <Providers>{children}</Providers>

        <LinkedinAdsInsightsTracker />
        <FacebookPixel />
      </body>
    </html>
  )
}
