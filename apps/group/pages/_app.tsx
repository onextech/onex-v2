import React from 'react'

import { AppProvider } from '@app/providers'
import { SeoProvider } from '@app/providers/SeoProvider'
import { EmotionCache } from '@emotion/react'
import { AnalyticsProvider } from '@onex/analytics'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'

import 'keen-slider/keen-slider.min.css'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props

  return (
    <AppProvider {...props}>
      <AnalyticsProvider>
        <SeoProvider>
          <Component {...pageProps} />
        </SeoProvider>
      </AnalyticsProvider>
    </AppProvider>
  )
}

export default appWithTranslation(MyApp)
