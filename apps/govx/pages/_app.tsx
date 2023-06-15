import React from 'react'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { EmotionCache } from '@emotion/react'
import { AppProvider } from '@app/providers'
import { AnalyticsProvider } from '@gravis-os/analytics'

import 'react-medium-image-zoom/dist/styles.css'

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
