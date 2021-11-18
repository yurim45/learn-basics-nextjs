import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import Footer from '../src/components/Footer';
import Head from '../src/components/Head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
