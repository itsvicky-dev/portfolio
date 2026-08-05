/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Archivo Black"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        wine: {
          50: '#f7f7f7',
          100: '#eeeeee',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#9e9e9e',
          500: '#757575',
          600: '#525252',
          700: '#2e2e2e',
          800: '#000000',
          900: '#0a0a0a',
          950: '#000000',
        },
        gold: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f0f0f0',
          300: '#e2e2e2',
          400: '#d0d0d0',
          500: '#ffffff',
          600: '#dcdcdc',
          700: '#c2c2c2',
          800: '#a3a3a3',
          900: '#8a8a8a',
        },
        parchment: '#ffffff',
        noir: '#000000',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.55 },
          '50%': { opacity: 1 },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        marquee: 'marquee 32s linear infinite',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(255, 255, 255, 0.25)',
        'glow-sm': '0 0 24px -8px rgba(255, 255, 255, 0.2)',
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
};
