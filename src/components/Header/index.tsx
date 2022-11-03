import Link from 'next/link'
import { Avatar } from './Avatar'
import { ShoppingCart } from 'phosphor-react'
import { HeaderNavigation } from './HeaderNavigation'

export function Header() {
  return (
    <header className="h-20 border-b border-blue-200">
      <div className="h-full container flex items-center justify-between">
        <div className="h-full flex items-center gap-16">
          <Link href="/">
            <h1 className="text-4xl font-black uppercase">Sneakers</h1>
          </Link>

          <HeaderNavigation />
        </div>

        <div className="flex items-center gap-8">
          <ShoppingCart size={24} className="text-gray-900" weight="bold" />
          <Avatar src="https:/github.com/matheusbrauna.png" />
        </div>
      </div>
    </header>
  )
}
