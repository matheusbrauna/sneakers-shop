import { ActiveLink } from '../ActiveLink'

export function HeaderNavigation() {
  return (
    <nav className="hidden h-full gap-8 lg:grid-cols-4 lg:grid lg:place-items-center">
      <ActiveLink shouldMatchExactHref href="/">
        Home
      </ActiveLink>
      <ActiveLink href="/products">Produtos</ActiveLink>
      <ActiveLink href="/contact">Contato</ActiveLink>
    </nav>
  )
}
