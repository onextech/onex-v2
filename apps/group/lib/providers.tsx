'use client'

import { AppProgressProvider } from '@bprogress/next'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProgressProvider
      color="#fff"
      height="2px"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </AppProgressProvider>
  )
}
