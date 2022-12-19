import Link, { LinkProps } from 'next/link'

interface BlackButtonProps extends LinkProps {
  children: string
}

export function BlackButton({ children, ...rest }: BlackButtonProps) {
  return (
    <Link
      className="h-10 px-5 text-sm font-bold leading-10 bg-neutral-900 text-neutral-50"
      {...rest}
    >
      {children}
    </Link>
  )
}
