module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      height: {
        "10vh": "10vh",
        "50vh": "50vh",
        "90vh": "90vh",
      },
      width: {
        "10vw": "10vw",
        "50vw": "50vw",
        "90vw": "90vw",
      },
      backgroundColor: {
        "dark": "#111111",
        "primary": "#6A39FF",
        "secondary": "#A046E1",
        "accent": "#CE70E8",
      },
      zIndex: {
        '99': '99999',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
