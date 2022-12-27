import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { Logo } from './Logo'

export function MenuMobile() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="relative cursor-pointer md:hidden">
        <List
          size={32}
          className="absolute top-0 right-0 flex items-center justify-center font-bold text-neutral-900"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="fixed inset-0 z-30 w-full h-full shadow-lg bg-neutral-200">
          <div className="flex flex-col items-center h-full gap-16 py-9">
            <header className="container relative flex items-center justify-between h-16">
              <Logo />

              <Dialog.Close className="cursor-pointer text-neutral-900" asChild>
                <X size={32} />
              </Dialog.Close>
            </header>

            <main className="container flex flex-col items-center gap-8">
              <Dialog.Close asChild>
                <Link
                  href="/products"
                  className="text-2xl font-bold text-neutral-900"
                >
                  Produtos
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link
                  href="/trending"
                  className="text-2xl font-bold text-neutral-900"
                >
                  Em alta
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link
                  href="/featured"
                  className="text-2xl font-bold text-neutral-900"
                >
                  Lançamentos
                </Link>
              </Dialog.Close>
            </main>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
