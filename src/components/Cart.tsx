import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Minus, ShoppingCart, X } from 'phosphor-react'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="cursor-pointer">
        <ShoppingCart size={32} />
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
            <main className="mt-6">
              <div className="flex gap-2">
                <div className="relative w-20 h-16 overflow-hidden rounded">
                  <Image
                    src="/hero.jpg"
                    alt=""
                    fill
                    quality={100}
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative">
                  <h2 className="text-base font-medium text-blue-500">
                    Sneaker edição limitada de outono
                  </h2>

                  <p className="text-lg font-bold">R$ 199,90</p>

                  <button className="absolute top-0 -right-10">
                    <Minus size={24} weight="bold" />
                  </button>
                </div>
              </div>
            </main>

            <footer className="mt-auto">
              <p className="text-xl text-gray-900">
                Total a pagar: <span className="font-bold">R$ 199,90</span>
              </p>

              <button className="gap-4 px-6 mt-6 font-bold text-gray-100 transition-colors bg-blue-500 border-2 border-blue-500 rounded-lg h-14 just w-60 hover:bg-blue-700 active:bg-blue-900">
                Finalizar compra
              </button>
            </footer>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
