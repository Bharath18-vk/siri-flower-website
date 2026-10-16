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
        espresso: '#231815',
        charcoal: '#1A1412',
        'muted-brown': '#6B4A35',
        'warm-gold': {
          DEFAULT: '#C5A059',
          light: '#D8B87A',
          dark: '#9E7E3B',
        },
        champagne: {
          DEFAULT: '#C5A059',
          light: '#D8B87A',
          dark: '#9E7E3B',
        },
        burgundy: {
          DEFAULT: '#581825',
          light: '#732333',
          dark: '#3D0E17',
        },
        'floral-pink': {
          DEFAULT: '#E8C5C8',
          light: '#F5E4E6',
          dark: '#C89399',
        },
        sage: {
          DEFAULT: '#6E8062',
          light: '#8B9C80',
          dark: '#526149',
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
