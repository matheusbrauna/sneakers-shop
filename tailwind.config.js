/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      gray: {
        100: '#fcfcfc',
        300: '#e8e8e8',
        700: '#6f6f6f',
        900: '#171717',
      },

      blue: {
        50: '#FBFDFF',
        100: '#EDF6FF',
        200: '#B7D9F8',
        300: '#96C7F2',
        500: '#0091FF',
        700: '#0081F1',
        900: '#006ADC',
      },

      yellow: {
        500: '#F5D90A',
      },

      transparent: 'transparent',
    },

    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1170px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      fontFamily: {
        sans: 'Kumbh Sans, sans-serif',
      },

      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
