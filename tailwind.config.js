/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'scale-down': {
          '0%': {
            transform: 'scale(2)',
            filter: 'blur(10px)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'scale-down-once': 'scale-down 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
