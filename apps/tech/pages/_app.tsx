import React from 'react'
import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
import { AppProvider, AnalyticsProvider, SeoProvider } from '@app/providers'

import 'react-medium-image-zoom/dist/styles.css'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props

  return (
    <AppProvider {...props}>
      <SeoProvider>
        <AnalyticsProvider>
          <Component {...pageProps} />
        </AnalyticsProvider>
      </SeoProvider>
    </AppProvider>
  )
}

export default MyApp
