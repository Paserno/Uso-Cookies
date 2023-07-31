import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />

    </ThemeProvider>
  )
}

export default MyApp;
