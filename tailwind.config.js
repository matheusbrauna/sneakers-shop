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
        'hero-img': "url('../assets/hero-img.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
