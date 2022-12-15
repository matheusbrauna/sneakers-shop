import '../styles/global.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { CartProvider } from '../contexts/CartContext'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </QueryClientProvider>
  )
}
