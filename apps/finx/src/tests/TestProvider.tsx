import React from 'react'
import AppProvider, { AppProviderProps } from '@app/providers/AppProvider'
import { PageProvider } from '@onex/providers'
import { getLayoutProviderProps } from '@onex/server'

const pageProviderProps = {
  layoutProviderProps: getLayoutProviderProps({
    context: { locale: 'sg' },
  }),
}

export interface TestProviderProps
  extends Omit<AppProviderProps, 'pageProps' | 'router' | 'Component'> {}

const TestProvider: React.FC<TestProviderProps> = (props) => {
  return (
    <PageProvider {...pageProviderProps}>
      <AppProvider {...(props as AppProviderProps)} />
    </PageProvider>
  )
}

export default TestProvider
