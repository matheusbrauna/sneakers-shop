import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, getCssText, globalCss } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors: {
      gray100: '#fcfcfc',
      gray300: '#e8e8e8',
      gray700: '#6f6f6f',
      gray900: '#171717',

      blue50: '#FBFDFF',
      blue100: '#EDF6FF',
      blue200: '#B7D9F8',
      blue300: '#96C7F2',
      blue500: '#0091FF',
      blue700: '#0081F1',
      blue900: '#006ADC',

      yellow500: '#F5D90A',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },
    fontSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
    },
    fonts: {
      default: 'Kumbh Sans, sans-serif',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      sm: 4,
      md: 6,
      lg: 8,
      full: '99999px',
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
})

export const GlobalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'body, html': {
    scrollBehavior: 'smooth',
  },

  body: {
    backgroundColor: '$gray100',
    color: '$gray900',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontSize: '$md',
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    textDecoration: 'none',
  },

  ul: {
    listStyle: 'none',
  },

  button: {
    cursor: 'pointer',
  },

  img: {
    maxWidth: '100%',
    display: 'block',
  },
})
