import { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from '../../stitches.config'

export default function MyDocument() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
