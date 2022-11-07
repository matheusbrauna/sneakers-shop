import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputWithLabel({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="w-full h-10 p-2 text-sm text-gray-900 bg-blue-100 rounded focus:outline-2 focus:outline-blue-200"
    />
  )
}
