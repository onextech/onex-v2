import { MOCK_COMMON_SITE } from '@onex/mocks'
import Head from 'next/head'
import { useRouter } from 'next/router'

const siteUrl = process.env.NEXT_PUBLIC_ABSOLUTE_URL

export function SeoProvider({ children }: { children?: React.ReactNode }) {
  const router = useRouter()
  const currentPath = router.asPath
  const fullUrl = `${siteUrl}${currentPath}`

  return (
    <>
      <Head>
        {/* Canonical Tag */}
        <link href={fullUrl} rel="canonical" />

        {/* Hreflang Tags */}
        {MOCK_COMMON_SITE.locales.map(({ iso_alpha_2, key }) => (
          <link
            href={`${siteUrl}/${key}${currentPath}`}
            hrefLang={`en-${iso_alpha_2}`}
            key={key}
            rel="alternate"
          />
        ))}
        <link href={siteUrl} hrefLang="x-default" rel="alternate" />
      </Head>

      {children}
    </>
  )
}
