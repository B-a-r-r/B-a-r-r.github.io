/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      hind_vadodara: ["Hind Vadodara", "sans-serif"],
      kanit: ["Kanit", "sans-serif"],
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
    xxl: "1900px",
  },
  plugins: [
    require('dompurify'), 
    require('react-router'), 
    require('react-i18next'),
  ],
};
