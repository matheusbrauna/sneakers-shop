import Link from 'next/link'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header className="">
      <div className="grid bg-black h-9 place-items-center">
        <p className="text-xs leading-5 text-white">
          Oportunidade de frete grátis para pedidos de R$ 100,00 ou mais
        </p>
      </div>

      <nav className="h-[70px] grid place-items-center">
        <div className="container flex justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-3xl font-black uppercase">Sneakers Shop</h1>
            </Link>
            <Link
              href="/products"
              className="text-sm font-bold leading-5 text-black uppercase"
            >
              Produtos
            </Link>
            <Link
              href="trending"
              className="text-sm font-bold leading-5 text-black uppercase"
            >
              Em alta
            </Link>
            <Link
              href="featured"
              className="text-sm font-bold leading-5 text-black uppercase"
            >
              Lançamentos
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <ShoppingCart size={24} />
          </div>
        </div>
      </nav>
    </header>
  )
}
