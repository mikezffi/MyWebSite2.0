import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Aos from 'aos';

import 'aos/dist/aos.css'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1300})
  }, [])
  return (
    <>
    <Head>
      <title>Mike Zuffi - Front-end Developer</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}
export default MyApp