/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'miorah-navy': '#0a192f',
        'miorah-gold': '#d4af37',
        'miorah-ivory': '#fffff0',
        'miorah-dark-navy': '#040d1a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      backgroundSize: {
        '300%': '300%',
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}
