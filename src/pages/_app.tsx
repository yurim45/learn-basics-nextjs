import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../shared/styles/theme';
import GlobalStyle from '../shared/styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>April's Portfolio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
