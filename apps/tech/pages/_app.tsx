import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
import { GravisProvider } from '@gravis-os/config'
import {
  theme,
  darkTheme,
  ThemeProvider,
  UserPreferencesProvider,
  createEmotionCache,
} from '@onex/theme'

// Css
import 'react-medium-image-zoom/dist/styles.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <GravisProvider
      config={{
        next: {
          version: 13,
        },
        mui: {
          theme: {
            light: theme,
            dark: darkTheme,
          },
        },
      }}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {/* AppProvider */}
      <UserPreferencesProvider>
        <ThemeProvider emotionCache={emotionCache}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserPreferencesProvider>
    </GravisProvider>
  )
}
