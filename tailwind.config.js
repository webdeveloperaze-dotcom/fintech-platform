/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#9b59b6',
          light: '#b39bc1',
        },
        cyan: {
          DEFAULT: '#00bcd4',
          light: '#62c8db',
        },
      },
      backgroundImage: {
        'glass': "linear-gradient(100deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('path/to/image.jpg')",
      },
      backdropBlur: {
        'md': '10px',
      },
    },
  },
  variants: {},
  plugins: [],
};