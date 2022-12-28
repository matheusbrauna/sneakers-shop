/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Kumbh Sans, sans-serif',
      },

      container: {
        center: true,
        padding: '1rem',
      },

      backgroundImage: {
        'hero-img': 'url("../assets/hero-img.png")',
        'social-img': 'url("../assets/socialbg.png")',
        skeleton:
          'linear-gradient(90deg, hsla(240, 2%, 26%, 1) 0%, hsla(240, 2%, 50%, 1) 50%, hsla(0, 0%, 87%, 1) 100%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
