import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../../stitches.config'

export const StyledAvatar = styled(Avatar.Root, {
  width: 48,
  height: 48,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: '2px solid $colors$blue300',
  borderRadius: '$full',
})

export const StyledImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '$full',
})

export const StyledFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '$full',
  color: '$blue300',

  svg: {
    width: '100%',
    height: '100%',
  },
})
