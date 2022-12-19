import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
}

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const isCurrentPath = asPath === href

  return (
    <Link
      className={clsx('h-16 uppercase text-sm font-bold leading-[4rem] ', {
        'text-neutral-900 border-b-2 border-gray-600': isCurrentPath,
        'text-neutral-700': !isCurrentPath,
      })}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
