import React from 'react'
import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
import AppProvider from '@app/providers/AppProvider'

import 'react-medium-image-zoom/dist/styles.css'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props

  return (
    <AppProvider {...props}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
