import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { ShoppingCart, X } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { Button } from './Button'
import { CartSneaker } from './CartSneaker'

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { cartItems, cartTotal } = useCart()

  const cartItemsQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal)

  async function handleRedirectToCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Error ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="relative cursor-pointer lg:block">
        <div>
          <ShoppingCart size={32} />
          <span className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold text-gray-100 bg-blue-500 rounded-full -top-2 -right-2">
            {cartItemsQuantity}
          </span>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-overlay" />
        <Dialog.Content className="fixed top-0 bottom-0 right-0 z-20 bg-gray-300 w-full md:w-[30rem] shadow-lg p-12 pt-20">
          <Dialog.Title className="text-2xl font-bold text-gray-900 md:text-4xl">
            Carrinho de compras
          </Dialog.Title>
          <Dialog.Close
            className="absolute text-gray-900 cursor-pointer top-7 right-7"
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
              <p className="mb-6 text-lg text-gray-900 md:text-xl">
                Total a pagar:{' '}
                <span className="font-bold ">{formattedCartTotal}</span>
              </p>

              <Button
                type="button"
                disabled={isCreatingCheckoutSession || cartItemsQuantity <= 0}
                onClick={handleRedirectToCheckout}
              >
                Finalizar compra
              </Button>
            </footer>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
