import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { List, X } from 'phosphor-react'

export function MenuMobile() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="relative cursor-pointer lg:hidden">
        <List
          size={32}
          className="absolute top-0 right-0 flex items-center justify-center font-bold text-blue-500"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-overlay" />
        <Dialog.Content className="fixed inset-0 z-30 w-full h-full bg-gray-300 shadow-lg">
          <header className="h-20">
            <div className="container relative flex items-center justify-between h-full">
              <Link href="/">
                <h1 className="text-4xl font-black uppercase">Sneakers</h1>
              </Link>

              <Dialog.Close className="text-blue-500 cursor-pointer" asChild>
                <X size={32} weight="bold" />
              </Dialog.Close>
            </div>
          </header>

          <main className="h-full">
            <div className="container flex flex-col items-center h-full gap-10 pt-16">
              <Dialog.Close asChild>
                <Link href="/" className="text-3xl font-bold text-gray-900">
                  Home
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link
                  href="/products"
                  className="text-3xl font-bold text-gray-900"
                >
                  Produtos
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link
                  href="/contact"
                  className="text-3xl font-bold text-gray-900"
                >
                  Contato
                </Link>
              </Dialog.Close>
            </div>
          </main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
