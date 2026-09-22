/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bungee', 'sans-serif'],
        body: ['Fredoka', '-apple-system', 'sans-serif'],
      },
      colors: {
        mostaza: {
          DEFAULT: '#E8A400',
          clara: '#F4C430',
          oscura: '#C68A00',
        },
        rojo: {
          DEFAULT: '#C1372D',
          oscuro: '#8E241D',
          claro: '#E04E43',
        },
        cafe: '#2A1810',
        crema: {
          DEFAULT: '#FFF8ED',
          carta: '#FFFCF6',
        },
        verde: {
          DEFAULT: '#3CAF6E',
          oscuro: '#2E8C57',
        },
        marron: {
          fondo: '#3A1518',
          fondo2: '#4C1E20',
          fondo3: '#341315',
        },
        tinta: '#5B4632',
        linea: '#E4D5BC',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
