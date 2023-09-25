/* eslint-disable fp/no-class, fp/no-this, fp/no-mutation */
import * as React from 'react'

import { bodyFont } from '@app/theme/typography'
import createEmotionServer from '@emotion/server/create-instance'
import {
  renderGtmNoScriptTag,
  renderGtmPreconnectLinkTags,
  renderGtmScriptTag,
} from '@gravis-os/analytics'
import { createEmotionCache, lightTheme } from '@gravis-os/landing'
import {
  renderFontAwesomeKitPreconnectLinkTags,
  renderFontAwesomeKitScriptTag,
} from '@gravis-os/ui'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import i18nextConfig from '../next-i18next.config'

export default class MyDocument extends Document {
  render() {
    const currentLocale = String(
      // eslint-disable-next-line no-underscore-dangle
      this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
    )
    return (
      <Html className={bodyFont.className} lang={currentLocale}>
        <Head>
          {/* PWA primary color */}
          <meta content={lightTheme.palette.primary.main} name="theme-color" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <meta content="" name="emotion-insertion-point" />
          {(this.props as any).emotionStyleTags}
          {renderFontAwesomeKitPreconnectLinkTags()}
          {renderGtmPreconnectLinkTags()}
        </Head>
        <noscript>{renderGtmNoScriptTag()}</noscript>
        <body>
          <Main />
          <NextScript />
          {renderFontAwesomeKitScriptTag()}
          {renderGtmScriptTag()}
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}
