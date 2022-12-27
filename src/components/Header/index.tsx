import { Cart } from '../Cart'
import { Logo } from '../Logo'
import { MenuMobile } from '../MenuMobile'
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
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Logo />

            <div className="items-center hidden gap-8 md:flex">
              <ActiveLink href="/products">Produtos</ActiveLink>
              <ActiveLink href="/trending">Em alta</ActiveLink>
              <ActiveLink href="/featured">Lançamentos</ActiveLink>
            </div>
          </div>

          <div className="flex gap-4">
            <Cart />
            <MenuMobile />
          </div>
        </div>
      </nav>
    </header>
  )
}
