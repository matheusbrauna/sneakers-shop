import { ButtonHTMLAttributes } from 'react'

type BlackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function BlackButton({ ...props }: BlackButtonProps) {
  return (
    <button
      className="h-10 px-5 text-sm font-bold leading-10 bg-neutral-900 text-neutral-50"
      {...props}
    />
  )
}
