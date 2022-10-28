import { ShoppingCart } from 'phosphor-react'
import { ActiveLink } from '../ActiveLink'
import { Avatar } from '../Avatar'
import { Flex } from '../Flex'
import { Logo } from '../Logo'
import { HeaderNavWrapper, Root, Wrapper } from './styles'

export function Header() {
  return (
    <Root>
      <Wrapper>
        <Flex align="center" gap="20">
          <Logo />

          <HeaderNavWrapper>
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/man">Homem</ActiveLink>
            <ActiveLink href="/woman">Mulher</ActiveLink>
            <ActiveLink href="/contact">Contato</ActiveLink>
          </HeaderNavWrapper>
        </Flex>

        <Flex align="center" gap="8">
          <ShoppingCart size={24} />
          <Avatar src="https://github.com/matheusbrauna.png" />
        </Flex>
      </Wrapper>
    </Root>
  )
}
