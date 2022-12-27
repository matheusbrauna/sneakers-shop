import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCart, X } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { formatPrice } from '../functions/formatPrice'
import { api } from '../services/api'
import { CartSneaker } from './CartSneaker'

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { cartItems, cartTotal } = useCart()

  const cartItemsQuantity = cartItems.length

  const formattedCartTotal = formatPrice({
    price: cartTotal,
  })

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await api.post('/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="relative cursor-pointer">
        <div>
          <ShoppingCart size={32} />
          <span className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold bg-blue-500 rounded-full text-neutral-100 -top-2 -right-2">
            {cartItemsQuantity}
          </span>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-20" />
        <Dialog.Content className="fixed top-0 bottom-0 right-0 z-20 bg-neutral-200 w-[30rem] shadow-lg p-12 pt-20">
          <Dialog.Title className="text-4xl font-bold text-neutral-900">
            Carrinho de compras
          </Dialog.Title>
          <Dialog.Close
            className="absolute cursor-pointer text-neutral-900 right-7 top-7"
            asChild
          >
            <X size={24} weight="bold" />
          </Dialog.Close>
          <section className="grid justify-between h-full">
            <main className="flex flex-col gap-4 mt-6">
              {cartItemsQuantity < 1 && (
                <p>Parece que o seu carrinho está vazio!</p>
              )}
              {cartItems.map((sneaker) => (
                <CartSneaker key={sneaker.id} sneaker={sneaker} />
              ))}
            </main>
            <footer className="mt-auto">
              <p className="text-xl text-neutral-900">
                Total a pagar:{' '}
                <span className="font-bold">{formattedCartTotal}</span>
              </p>

              <button
                disabled={isCreatingCheckoutSession || cartItemsQuantity <= 0}
                onClick={handleCheckout}
                className="gap-4 px-6 mt-6 font-bold transition-colors bg-blue-500 border-2 border-blue-500 rounded-lg text-neutral-100 h-14 just w-60 hover:bg-blue-700 active:bg-blue-900"
              >
                Finalizar compra
              </button>
            </footer>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
