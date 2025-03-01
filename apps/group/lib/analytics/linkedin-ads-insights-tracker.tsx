'use client'

import Script from 'next/script'

const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || ''

export function LinkedinAdsInsightsTracker() {
  if (!LINKEDIN_PARTNER_ID) return null

  return (
    <>
      <Script id="linkedin-ads-script-1">
        {`_linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
      </Script>

      <Script id="linkedin-ads-script-2">
        {`(function(l) {
if (!l) {
    window.lintrk = function(a, b) {
        window.lintrk.q.push([a, b])
    };
    window.lintrk.q = []
}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";
b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);
})(window.lintrk);`}
      </Script>

      <noscript id="linkedin-ads-noscript">
        <img
          alt=""
          height="1"
          src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
          style={{ display: 'none' }}
          width="1"
        />
      </noscript>
    </>
  )
}
