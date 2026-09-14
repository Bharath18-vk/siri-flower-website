/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF9F5',
        cream: '#F3EFEA',
        beige: '#EAE4DC',
        espresso: '#2A211C',
        charcoal: '#1C1917',
        'muted-brown': '#6B4A35',
        'warm-gold': {
          DEFAULT: '#B28A52',
          light: '#C49E65',
          dark: '#99723D',
        },
        terracotta: {
          DEFAULT: '#A9553F',
          light: '#BA644E',
          dark: '#914330',
        },
        stone: {
          50: '#FBF9F5',
          100: '#F3EFEA',
          200: '#EAE4DC',
          300: '#D6CFC4',
          400: '#A99E91',
          500: '#7F7467',
          600: '#5A5044',
          700: '#3D352C',
          800: '#2A211C',
          900: '#1C1917',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.15em',
        widest: '0.22em',
      },
      boxShadow: {
        'subtle': '0 2px 15px -2px rgba(42, 33, 28, 0.04)',
        'luxury': '0 15px 35px -10px rgba(42, 33, 28, 0.07)',
        'floating': '0 20px 40px -10px rgba(28, 25, 23, 0.18)',
      },
    },
  },
  plugins: [],
}
