import React from 'react'
import AppProvider, { AppProviderProps } from '@app/providers/AppProvider'
import { PageProvider } from '@onex/providers'

export interface TestProviderProps
  extends Omit<AppProviderProps, 'pageProps' | 'router' | 'Component'> {}

// TODO@Joel: Import pageProviderProps from mocks
const TestProvider: React.FC<TestProviderProps> = (props) => {
  const { pageProviderProps } = props
  return (
    <PageProvider {...pageProviderProps}>
      <AppProvider {...(props as AppProviderProps)} />
    </PageProvider>
  )
}

export default TestProvider
