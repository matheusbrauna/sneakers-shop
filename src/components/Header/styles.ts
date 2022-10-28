import { styled } from '../../../stitches.config'

export const Root = styled('header', {
  height: 80,
  borderBottom: '1px solid $colors$blue200',
})

export const Wrapper = styled('div', {
  height: 'inherit',
  maxWidth: 1170,

  padding: '0 1rem',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const HeaderNavWrapper = styled('nav', {
  display: 'grid',
  height: 80,
  gridTemplateColumns: 'repeat(4, 1fr)',
  placeItems: 'center',
  gap: 32,
})
