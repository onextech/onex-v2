import React from 'react'

import AppProvider, { AppProviderProps } from '@app/providers/AppProvider'
import { PageProvider } from '@gravis-os/landing'
import { getLayoutProviderProps } from '@onex/server'

const pageProviderProps = {
  layoutProviderProps: getLayoutProviderProps({
    context: { locale: 'sg' },
  }),
}

export interface TestProviderProps
  extends Omit<AppProviderProps, 'Component' | 'pageProps' | 'router'> {}

const TestProvider: React.FC<TestProviderProps> = (props) => {
  return (
    <PageProvider {...(pageProviderProps as any)}>
      <AppProvider {...(props as AppProviderProps)} />
    </PageProvider>
  )
}

export default TestProvider
