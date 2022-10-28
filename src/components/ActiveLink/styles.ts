import Link from 'next/link'
import { styled } from '../../../stitches.config'

export const ActiveLinkContainer = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  height: 'inherit',

  fontSize: '$xl',
  fontWeight: '$medium',

  color: '$gray700',
  borderBottom: '4px solid transparent',

  variants: {
    isActive: {
      true: {
        color: '$gray900',
        borderColor: '$colors$blue300',
        fontWeight: '$bold',
      },
    },
  },
})
