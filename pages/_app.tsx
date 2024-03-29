import { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../styles/globals.css'
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '../theme';
import Cookies from 'js-cookie';


interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = 'dark' }: Props) {

  // console.log({theme});
  
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light' 
        ? lightTheme
        : (cookieTheme === 'dark') 
          ? darkTheme
          : customTheme
    
    setCurrentTheme( selectedTheme );
  }, [])
  
  


  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />

    </ThemeProvider>
  )
}


// MyApp.getInitialProps = async( appContext: AppContext) => {

//   const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any).cookies : { theme: 'light' }; 

//   // console.log('getInitialProps: ',cookies);
//   const validThemes = ['light', 'dark', 'custom'];


//   return {
//     theme: validThemes.includes(theme) ? theme : 'dark',
//   }

// }


export default MyApp;
