import { ActiveLink } from '../ActiveLink'

export function HeaderNavigation() {
  return (
    <nav className="grid h-full grid-cols-4 gap-8 place-items-center">
      <ActiveLink shouldMatchExactHref href="/">
        Home
      </ActiveLink>
      <ActiveLink href="/products">Produtos</ActiveLink>
      <ActiveLink href="/contact">Contato</ActiveLink>
    </nav>
  )
}
