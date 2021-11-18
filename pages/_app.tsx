import type { AppProps } from 'next/app';
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
      <Top />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
