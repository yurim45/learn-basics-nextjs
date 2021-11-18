import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../src/components/Footer';
import Top from '../src/components/Top';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/reset';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>web template</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Web template by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
