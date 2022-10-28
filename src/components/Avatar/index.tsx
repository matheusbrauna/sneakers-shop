import { StyledAvatar, StyledFallback, StyledImage } from './styles'
import type { AvatarImageProps } from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

type AvatarProps = AvatarImageProps

export function Avatar({ src }: AvatarProps) {
  return (
    <StyledAvatar>
      <StyledImage src={src} />
      <StyledFallback>
        <User />
      </StyledFallback>
    </StyledAvatar>
  )
}
