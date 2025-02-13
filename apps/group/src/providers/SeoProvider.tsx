import { MOCK_COMMON_SITE } from '@onex/mocks'
import Head from 'next/head'
import { useRouter } from 'next/router'

import i18nextConfig from '../../next-i18next.config'

const siteUrl = process.env.NEXT_PUBLIC_ABSOLUTE_URL
const defaultLocale = i18nextConfig.i18n.defaultLocale || 'sg' // Ensure this is the correct default locale

export function SeoProvider({ children }: { children?: React.ReactNode }) {
  const router = useRouter()
  const currentPath = router.asPath
  const currentLocale = router.locale || defaultLocale

  // Find the locale object
  const localeObj = MOCK_COMMON_SITE.locales.find(
    ({ key }) => key === currentLocale
  )

  // Check if the current locale is the default
  const isDefaultLocale = currentLocale === defaultLocale

  // Construct the canonical URL (excluding locale if it's the default)
  const fullCanonicalUrl = isDefaultLocale
    ? `${siteUrl}${currentPath}` // No locale prefix for SG
    : `${siteUrl}/${localeObj?.key}${currentPath}`

  // Construct the x-default URL (always without locale prefix)
  const xDefaultUrl = `${siteUrl}${currentPath}`

  return (
    <>
      <Head>
        {/* Canonical Tag */}
        <link href={fullCanonicalUrl} rel="canonical" />

        {/* Hreflang Tags */}
        {MOCK_COMMON_SITE.locales.map(({ iso_alpha_2, key }) => {
          const isSG = key === 'sg'
          return (
            <link
              href={
                isSG
                  ? `${siteUrl}${currentPath}`
                  : `${siteUrl}/${key}${currentPath}`
              }
              hrefLang={`en-${iso_alpha_2}`}
              key={key}
              rel="alternate"
            />
          )
        })}

        {/* x-default: Generic fallback version */}
        <link href={xDefaultUrl} hrefLang="x-default" rel="alternate" />
      </Head>

      {children}
    </>
  )
}
