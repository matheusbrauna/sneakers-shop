import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import Image from 'next/image'
import { Minus, ShoppingCart, X } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { cartItems, removeItemFromCart, cartTotal } = useCart()

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
      <Dialog.Trigger asChild className="relative cursor-pointer">
        <div>
          <ShoppingCart size={32} />
          <span className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold text-gray-100 bg-blue-500 rounded-full -top-2 -right-2">
            {cartItemsQuantity}
          </span>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-overlay" />
        <Dialog.Content className="fixed top-0 bottom-0 right-0 z-20 bg-gray-300 w-[30rem] shadow-lg p-12 pt-20">
          <Dialog.Title className="text-4xl font-bold text-gray-900">
            Carrinho de compras
          </Dialog.Title>
          <Dialog.Close
            className="absolute text-gray-900 cursor-pointer right-7 top-7"
            asChild
          >
            <X size={24} weight="bold" />
          </Dialog.Close>

          <section className="grid justify-between h-full">
            <main className="flex flex-col gap-4 mt-6">
              {cartItemsQuantity < 1 && (
                <p>Parece que o seu carrinho está vazio!</p>
              )}
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-2">
                  <div className="relative w-20 h-16 overflow-hidden rounded">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill
                      quality={100}
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="relative">
                    <h2 className="text-base font-medium text-blue-500">
                      {item.name}
                    </h2>

                    <p className="text-lg font-bold">{item.promotionPrice}</p>

                    <button className="absolute top-0 -right-10">
                      <Minus
                        size={24}
                        weight="bold"
                        onClick={() => removeItemFromCart(item.id)}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </main>

            <footer className="mt-auto">
              <p className="text-xl text-gray-900">
                Total a pagar:{' '}
                <span className="font-bold">{formattedCartTotal}</span>
              </p>

              <button
                disabled={isCreatingCheckoutSession || cartItemsQuantity <= 0}
                onClick={handleRedirectToCheckout}
                className="gap-4 px-6 mt-6 font-bold text-gray-100 transition-colors bg-blue-500 border-2 border-blue-500 rounded-lg h-14 just w-60 hover:bg-blue-700 active:bg-blue-900"
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
