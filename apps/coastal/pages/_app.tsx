import React from 'react'

import { AppProvider } from '@app/providers'
import { EmotionCache } from '@emotion/react'
import { AnalyticsProvider } from '@gravis-os/analytics'
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
        <Component {...pageProps} />
      </AnalyticsProvider>
    </AppProvider>
  )
}

export default appWithTranslation(MyApp)
