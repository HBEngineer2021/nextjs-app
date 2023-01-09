import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <NextNProgress  color="#6366f1" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
