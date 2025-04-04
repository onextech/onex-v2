'use client'

import * as React from 'react'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
  if (typeof window !== 'undefined') {
    window.fbq('track', 'PageView')
  }
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined') {
    window.fbq('track', name, options)
  }
}

export const fpixel = {
  FB_PIXEL_ID,
  pageview,
  event,
}

export const FacebookPixel = () => {
  const [loaded, setLoaded] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    if (!loaded || !fpixel.FB_PIXEL_ID) return

    fpixel.pageview()
  }, [pathname, loaded])

  if (!fpixel.FB_PIXEL_ID) return null

  return (
    <div>
      <Script
        data-pixel-id={fpixel.FB_PIXEL_ID}
        id="fb-pixel"
        onLoad={() => setLoaded(true)}
        src="/scripts/pixel.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
