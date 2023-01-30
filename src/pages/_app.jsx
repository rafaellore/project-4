import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}

MyApp.propTypes = AppProps;

export default MyApp;
