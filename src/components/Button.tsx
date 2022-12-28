import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'black' | 'white'
}

export function Button({ variant = 'white', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'h-10 px-5 text-sm font-bold leading-10 disabled:cursor-not-allowed',
        {
          'bg-neutral-100 text-neutral-900': variant === 'white',
          'bg-neutral-900 text-neutral-50': variant === 'black',
        }
      )}
      {...props}
    />
  )
}
