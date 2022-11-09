import Link from 'next/link'
import { Cart } from '../Cart'
import { MenuMobile } from '../MenuMobile'
import { HeaderNavigation } from './HeaderNavigation'

export function Header() {
  return (
    <header className="fixed z-10 w-full h-20 bg-gray-100 border-b border-blue-200">
      <div className="container flex items-center justify-between h-full">
        <div className="flex items-center h-full gap-16">
          <Link href="/">
            <h1 className="text-4xl font-black uppercase">Sneakers</h1>
          </Link>

          <HeaderNavigation />
        </div>

        <div className="flex gap-4">
          <Cart />
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
