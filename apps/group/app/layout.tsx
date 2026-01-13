import type { Metadata } from 'next'

import { GoogleTagManager } from '@next/third-parties/google'

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

// LocalBusiness Schema for improved local SEO
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.onexgroup.co/#organization',
  name: 'One X Group',
  alternateName: 'OneX Group',
  description:
    'One X Group is a leading provider of custom software development services in Singapore, leveraging cutting-edge solutions to deliver exceptional products.',
  url: 'https://www.onexgroup.co',
  logo: 'https://www.onexgroup.co/logo.png',
  image: 'https://www.onexgroup.co/og-image.jpg',
  telephone: '+65-6970-5083',
  email: 'hello@onexgroup.co',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '71 Robinson Road',
    addressLocality: 'Singapore',
    postalCode: '068895',
    addressCountry: 'SG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 1.2789,
    longitude: 103.8536,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.linkedin.com/company/onexgroup',
    'https://github.com/onextech',
  ],
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
  serviceType: [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'Enterprise Software Solutions',
    'Digital Transformation',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          type="application/ld+json"
        />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />

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
