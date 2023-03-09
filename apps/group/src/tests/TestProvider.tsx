import React from 'react'
import AppProvider, { AppProviderProps } from '@app/providers/AppProvider'

export interface TestProviderProps
  extends Omit<AppProviderProps, 'pageProps' | 'router' | 'Component'> {}

const TestProvider: React.FC<TestProviderProps> = (props) => {
  return <AppProvider {...(props as AppProviderProps)} />
}

export default TestProvider
