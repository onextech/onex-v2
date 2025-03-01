'use client';

import { AppProgressProvider } from '@bprogress/next';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProgressProvider
      height="2px"
      color="#fff"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </AppProgressProvider>
  );
};
