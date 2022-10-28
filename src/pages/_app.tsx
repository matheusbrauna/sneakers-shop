import type { AppProps } from 'next/app'
import { GlobalStyle } from '../../stitches.config'
import { Header } from '../components/Header'

GlobalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
