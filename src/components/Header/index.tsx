import Link from 'next/link'
import { ShoppingCart } from 'phosphor-react'
import { ActiveLink } from './ActiveLink'

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-neutral-100">
      <div className="bg-neutral-900 h-9">
        <p className="text-xs leading-9 text-center text-neutral-50">
          Oportunidade de frete grátis para pedidos de R$ 100,00 ou mais
        </p>
      </div>
      <nav className="h-16">
        <div className="container flex justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-3xl font-black uppercase text-neutral-900">
                Sneakers Shop
              </h1>
            </Link>
            <ActiveLink href="/products">Produtos</ActiveLink>
            <ActiveLink href="/trending">Em alta</ActiveLink>
            <ActiveLink href="/featured">Lançamentos</ActiveLink>
          </div>
          <button className="flex items-center justify-center">
            <ShoppingCart size={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}
