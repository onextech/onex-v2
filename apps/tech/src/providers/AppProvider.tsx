import React from 'react'
import { Toaster } from 'react-hot-toast'

import { darkTheme, lightTheme } from '@app/theme'
import { EmotionCache } from '@emotion/react'
import { GravisProvider } from '@gravis-os/config'
import {
  ThemeProvider,
  UserPreferencesProvider,
  createEmotionCache,
} from '@gravis-os/landing'
import { AppProps } from 'next/app'
import Head from 'next/head'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface AppProviderProps extends AppProps {
  children?: React.ReactNode
  emotionCache?: EmotionCache
}

const AppProvider = (props: AppProviderProps) => {
  const { children, emotionCache = clientSideEmotionCache } = props

  return (
    <GravisProvider
      config={{
        mui: {
          theme: {
            dark: darkTheme,
            light: lightTheme,
          },
        },
        next: {
          version: 13,
        },
      }}
    >
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>

      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      <UserPreferencesProvider>
        <ThemeProvider
          darkTheme={darkTheme}
          emotionCache={emotionCache}
          lightTheme={lightTheme}
        >
          {children}
        </ThemeProvider>
      </UserPreferencesProvider>
    </GravisProvider>
  )
}

export default AppProvider
