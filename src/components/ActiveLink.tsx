import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

type ActiveLinkProps = LinkProps & {
  children: ReactNode
}

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const isActive = asPath === href

  return (
    <Link
      className={clsx(
        'h-full font-medium flex items-center border-b-[3px] text-xl text-gray-900',
        {
          'border-blue-300 font-bold': isActive,
          'border-transparent text-gray-700': !isActive,
        }
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
