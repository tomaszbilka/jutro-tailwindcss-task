module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        color: {
          '0%': { backgroundColor: 'rgb(12 74 110)' },
          '100%': { backgroundColor: 'rgb(52 211 153)' },
        },
      },
      animation: {
        show: 'show 1s ease-in-out 1',
        color: 'color 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
};
