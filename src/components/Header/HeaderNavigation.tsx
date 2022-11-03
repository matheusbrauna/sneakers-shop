import { ActiveLink } from '../ActiveLink'

export function HeaderNavigation() {
  return (
    <nav className="h-full grid grid-cols-4 gap-8 place-items-center">
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/man">Homem</ActiveLink>
      <ActiveLink href="/woman">Mulher</ActiveLink>
      <ActiveLink href="/contact">Contato</ActiveLink>
    </nav>
  )
}
