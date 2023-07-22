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
        primary: '#B980FF',
        secondary: '#FFF844',
        accent: '#2CFF8F',
      }
    },
  },
  plugins: [],
};