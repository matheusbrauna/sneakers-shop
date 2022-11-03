import * as PrimitiveAvatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

type AvatarProps = PrimitiveAvatar.AvatarImageProps

export function Avatar({ ...props }: AvatarProps) {
  return (
    <PrimitiveAvatar.Root className="inline-flex items-center justify-center align-middle w-12 h-12 overflow-hidden rounded-full">
      <PrimitiveAvatar.Image
        className="w-full h-full object-cover object-center rounded-full"
        {...props}
      />
      <PrimitiveAvatar.Fallback
        delayMs={100}
        className="w-12 h-12 inline-flex items-center justify-center align-middle"
      >
        <User size={100} className="text-blue-300" />
      </PrimitiveAvatar.Fallback>
    </PrimitiveAvatar.Root>
  )
}
