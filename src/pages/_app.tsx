import '../styles/global.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { CartProvider } from '../contexts/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  )
}
