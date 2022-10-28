import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { ActiveLinkContainer } from './styles'

type ActiveLinkProps = LinkProps & {
  children: ReactNode
}

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const isActive = asPath === href

  return (
    <ActiveLinkContainer isActive={isActive} href={href} {...props}>
      {children}
    </ActiveLinkContainer>
  )
}
