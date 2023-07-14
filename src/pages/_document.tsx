// _document.tsx
import React from 'react';
import Script from 'next/script';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
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
          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-XTG2GZ26JK"
          ></Script>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
