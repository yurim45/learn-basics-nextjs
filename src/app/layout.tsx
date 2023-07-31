import { ReactNode } from 'react';
import Script from 'next/script';

export const metadata = {
  title: `April's Portfolio`,
  description: '프론트엔드 개발자 김유림의 포트폴리오입니다.',
  subject: '포트폴리오',
  keywords: ['프론트엔드', '개발자', '웹개발자'],
  openGraph: {
    title: `김유림 포트폴리오 April's Portfolio`,
    description: '프론트엔드 개발자 김유림의 포트폴리오입니다.',
  },
};

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
        <meta
          name="google-site-verification"
          content="TQkPIaAFbSpBZW8VW8OhUHdEhd6lELoX2_zzKmUiGWU"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
