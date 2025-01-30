import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useAtom } from 'jotai';
import React from 'react';

import atoms from '../util/atoms';


function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode] = useAtom(atoms.darkMode);



  return (
    <div className={darkMode ? 'dark' : ''}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
