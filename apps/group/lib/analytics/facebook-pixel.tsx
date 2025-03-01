"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import * as React from "react";

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  if (typeof window !== "undefined") {
    window.fbq("track", "PageView");
  }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  if (typeof window !== "undefined") {
    window.fbq("track", name, options);
  }
};

export const fpixel = {
  FB_PIXEL_ID,
  pageview,
  event,
}

export const FacebookPixel = () => {
  const [loaded, setLoaded] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (!loaded) return;

    fpixel.pageview();
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={fpixel.FB_PIXEL_ID}
      />
    </div>
  );
};
