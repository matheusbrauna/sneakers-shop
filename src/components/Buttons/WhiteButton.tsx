import Link, { LinkProps } from 'next/link'

interface WhiteButtonProps extends LinkProps {
  scopedStyle?: string
  children: string
}

export function WhiteButton({
  scopedStyle,
  children,
  ...props
}: WhiteButtonProps) {
  return (
    <Link
      className={`h-12 px-4 text-sm font-bold leading-[3rem] uppercase bg-neutral-100 text-neutral-900 justify-self-center ${scopedStyle}`}
      {...props}
    >
      {children}
    </Link>
  )
}
