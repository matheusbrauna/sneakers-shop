import '../styles/global.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { CartProvider } from '../contexts/CartContext'
import { Provider } from 'urql'
import { client, ssrCache } from '../services/urql'

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client}>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  )
}
