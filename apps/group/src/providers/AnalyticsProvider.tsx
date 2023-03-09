import React from 'react'
import { useGtmPageViewOnRouteChange } from '@gravis-os/analytics'

export interface AnalyticsProviderProps {
  children?: React.ReactNode
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = (props) => {
  const { children } = props

  // Set page view on route change
  useGtmPageViewOnRouteChange()

  return <>{children}</>
}

export default AnalyticsProvider
