import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCart, X } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { formatPrice } from '../functions/formatPrice'
import { api } from '../services/api'
import { Button } from './Buttons/Button'
import { CartSneaker } from './CartSneaker'

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { cartItems, cartTotal } = useCart()

  const cartItemsQuantity = cartItems.length

  const formattedCartTotal = formatPrice({ price: cartTotal })

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
        <Dialog.Content className="fixed top-0 right-0 z-30 w-full md:w-[30rem] h-full shadow-lg bg-neutral-200">
          <div className="flex flex-col items-center h-full gap-8 py-9">
            <header className="container flex items-center justify-between w-full h-16">
              <Dialog.Title className="text-2xl font-bold md:text-3xl text-neutral-900">
                Carrinho de compras
              </Dialog.Title>

              <Dialog.Close className="cursor-pointer text-neutral-900" asChild>
                <X size={32} />
              </Dialog.Close>
            </header>

            <main className="container flex flex-col h-full gap-4">
              <div className="flex flex-col gap-6 overflow-scroll scrollbar-none max-h-80">
                {cartItemsQuantity < 1 && (
                  <p>Parece que o seu carrinho está vazio!</p>
                )}
                {cartItems.map((sneaker) => (
                  <CartSneaker key={sneaker.id} sneaker={sneaker} />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <p className="text-xl text-neutral-900">
                  Total a pagar:{' '}
                  <span className="font-bold">{formattedCartTotal}</span>
                </p>

                <Button
                  variant="black"
                  disabled={isCreatingCheckoutSession || cartItemsQuantity <= 0}
                  onClick={handleCheckout}
                >
                  Finalizar compra
                </Button>
              </div>
            </main>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
