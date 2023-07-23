module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Sextape: ['Sextape', 'serif'],
        Roboto: ['Roboto Mono', 'sans-serif'],
      },
      colors: {
        primary: '#5C5B80',
        secondary: '#D1D69F',
        accent: '#B794B4',
      },
      screens: {
        'xxs': '360px', // min-width
      },
    },
  },
  plugins: [],
};