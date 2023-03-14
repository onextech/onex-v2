import React from 'react'
import AppProvider, { AppProviderProps } from '@app/providers/AppProvider'
import LayoutProvider from '@app/providers/LayoutProvider'

export interface TestProviderProps
  extends Omit<AppProviderProps, 'pageProps' | 'router' | 'Component'> {}

const TestProvider: React.FC<TestProviderProps> = (props) => {
  return (
    <LayoutProvider>
      <AppProvider {...(props as AppProviderProps)} />
    </LayoutProvider>
  )
}

export default TestProvider
