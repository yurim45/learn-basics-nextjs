import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/common/styles/theme';
import GlobalStyle from '../src/common/styles/reset';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('/images/cool-background.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
