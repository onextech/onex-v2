import React from 'react'
import { DefaultSeo } from 'next-seo'
import { useLayout } from './LayoutProvider'

export interface SeoProviderProps {
  children?: React.ReactNode
}

const SeoProvider: React.FC<SeoProviderProps> = (props) => {
  const { children } = props

  const { appConfig, socialMediaConfig } = useLayout()

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_SG',
          url: appConfig.absoluteUrl,
          siteName: appConfig.title,
        }}
        twitter={{
          handle: `@${socialMediaConfig.twitter.split('/').pop()}`,
          site: `@${socialMediaConfig.twitter.split('/').pop()}`,
          cardType: 'summary_large_image',
        }}
      />

      {/* Children */}
      {children}
    </>
  )
}

export default SeoProvider
