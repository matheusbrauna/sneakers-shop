import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

type ActiveLinkProps = LinkProps & {
  children: ReactNode
  shouldMatchExactHref?: boolean
  isMobileVersion?: boolean
}

export function ActiveLink({
  shouldMatchExactHref = false,
  isMobileVersion = false,
  children,
  href,
  as,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActive = false

  if (shouldMatchExactHref && (asPath === href || asPath === as)) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(href)) || asPath.startsWith(String(as)))
  ) {
    isActive = true
  }

  return (
    <Link
      className={clsx(
        'h-full font-medium flex items-center border-b-[3px] text-xl text-gray-900',
        {
          'border-blue-300 font-bold': isActive,
          'border-transparent text-gray-700 hover:text-gray-900 transition-colors':
            !isActive,
          'text-gray-900': isMobileVersion,
        }
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
