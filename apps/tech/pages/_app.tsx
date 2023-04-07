import React from 'react'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { EmotionCache } from '@emotion/react'
import { AppProvider, LayoutProvider } from '@app/providers'
import { AnalyticsProvider, SeoProvider } from '@onex/providers'

import 'react-medium-image-zoom/dist/styles.css'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props

  return (
    <LayoutProvider>
      <AppProvider {...props}>
        <SeoProvider>
          <AnalyticsProvider>
            <Component {...pageProps} />
          </AnalyticsProvider>
        </SeoProvider>
      </AppProvider>
    </LayoutProvider>
  )
}

export default appWithTranslation(MyApp)
