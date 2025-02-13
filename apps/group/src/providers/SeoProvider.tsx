import { MOCK_COMMON_SITE } from '@onex/mocks'
import Head from 'next/head'
import { useRouter } from 'next/router'

import i18nextConfig from '../../next-i18next.config'

const siteUrl = process.env.NEXT_PUBLIC_ABSOLUTE_URL

export function SeoProvider({ children }: { children?: React.ReactNode }) {
  const router = useRouter()
  const currentPath = router.asPath
  const currentLocale =
    router.locale || i18nextConfig.i18n.defaultLocale || 'en'

  // Find the locale object from MOCK_COMMON_SITE
  const localeObj = MOCK_COMMON_SITE.locales.find(
    ({ key }) => key === currentLocale
  )

  // Construct the canonical URL (ensuring correct region)
  const fullCanonicalUrl = localeObj
    ? `${siteUrl}/${localeObj.key}${currentPath}`
    : `${siteUrl}${currentPath}`

  // Construct the x-default URL (without locale prefix)
  const xDefaultUrl = `${siteUrl}${currentPath}`

  return (
    <>
      <Head>
        {/* Canonical Tag */}
        <link href={fullCanonicalUrl} rel="canonical" />

        {/* Hreflang Tags */}
        {MOCK_COMMON_SITE.locales.map(({ iso_alpha_2, key }) => (
          <link
            href={`${siteUrl}/${key}${currentPath}`}
            hrefLang={`en-${iso_alpha_2}`}
            key={key}
            rel="alternate"
          />
        ))}

        {/* x-default: Fallback version of the SAME page, not homepage */}
        <link href={xDefaultUrl} hrefLang="x-default" rel="alternate" />
      </Head>

      {children}
    </>
  )
}
