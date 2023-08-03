// _document.tsx
import React from 'react'
import Script from 'next/script'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XTG2GZ26JK');
          `,
          }}
        />
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-XTG2GZ26JK"
          />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="프론트엔드 개발자 김유림의 포트폴리오입니다."
          />
          <meta
            property="og:title"
            content="김유림 포트폴리오 April's Portfolio"
          />
          <meta
            property="og:description"
            content="프론트엔드 개발자 김유림의 포트폴리오입니다."
          />
          <meta
            name="google-site-verification"
            content="TQkPIaAFbSpBZW8VW8OhUHdEhd6lELoX2_zzKmUiGWU"
          />
          <meta name="subject" content="포트폴리오" />
          <meta name="keywords" content="프론트엔드, 개발자, 웹개발자" />
          <link
            href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
