import React from 'react'
import { DefaultSeo } from 'next-seo'
import appConfig from '@app/configs/appConfig'
import socialMediaConfig from '@app/configs/socialMediaConfig'

export interface SeoProviderProps {
  children?: React.ReactNode
}

const SeoProvider: React.FC<SeoProviderProps> = (props) => {
  const { children } = props

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
      {children}
    </>
  )
}

export default SeoProvider
