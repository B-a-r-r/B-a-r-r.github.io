/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
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
    xs: "400px",
    ss: "500px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
  plugins: [
    require('dompurify'), 
    require('react-router'), 
    require('react-i18next'),
  ],
};
