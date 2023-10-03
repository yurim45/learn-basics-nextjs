/* eslint-disable @next/next/no-page-custom-font */
import { ReactNode } from 'react'
import Script from 'next/script'
import '@shared/styles/globals.css'

export const metadata = {
  title: `웹 개발자 포트폴리오`,
  description: '프론트엔드 개발자 김유림의 포트폴리오입니다.',
  subject: '개발자',
  keywords: ['개발자', '포트폴리오', '웹개발자', '프론트엔드'],
  openGraph: {
    title: `웹 개발자 포트폴리오`,
    description: '프론트엔드 개발자 김유림의 포트폴리오입니다.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XTG2GZ26JK"
        />
        <meta
          name="google-site-verification"
          content="TQkPIaAFbSpBZW8VW8OhUHdEhd6lELoX2_zzKmUiGWU"
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
      </head>
      <body>{children}</body>
    </html>
  )
}
