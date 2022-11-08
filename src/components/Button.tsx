import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: 'outlined' | 'default'
}

export function Button({
  variant = 'default',
  asChild,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={clsx(
        'flex items-center border-2 justify-between h-16 px-6 text-lg font-bold rounded-lg gap-4 min-w-60 disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'text-blue-700 bg-blue-100 border-blue-300 hover:border-blue-500 active:bg-blue-200 transition-colors disabled:hover:bg-blue-100':
            variant === 'outlined',
          'text-gray-100 bg-blue-500 border-blue-500 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-900 active:border-blue-900 transition-colors disabled:hover:bg-blue-500':
            variant === 'default',
        }
      )}
      {...props}
    />
  )
}
