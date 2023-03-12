import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
import { GravisProvider } from '@gravis-os/config'
import {
  ThemeProvider,
  UserPreferencesProvider,
  createEmotionCache,
} from '@onex/theme'
import { darkTheme, lightTheme } from '@app/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface AppProviderProps extends AppProps {
  emotionCache?: EmotionCache
  children?: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
  const { children, emotionCache = clientSideEmotionCache } = props

  return (
    <GravisProvider
      config={{
        next: {
          version: 13,
        },
        mui: {
          theme: {
            light: lightTheme,
            dark: darkTheme,
          },
        },
      }}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <UserPreferencesProvider>
        <ThemeProvider
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          emotionCache={emotionCache}
        >
          {children}
        </ThemeProvider>
      </UserPreferencesProvider>
    </GravisProvider>
  )
}

export default AppProvider
