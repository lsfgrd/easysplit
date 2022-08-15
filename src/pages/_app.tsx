import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import Full from '../components/shells/Full';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Full>
        <Component {...pageProps} />
      </Full>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
