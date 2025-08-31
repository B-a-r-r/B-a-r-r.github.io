
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        hind_vadodara: ["Hind Vadodara", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
      fontSize: {
        "3xs": "60%",
        "2xs": "80%",
        xs: "90%",
        sm: "95%",
        base: "100%",
        md: "105%",
        lg: "110%",
        xl: "120%",
        "2xl": "135%",
        "3xl": "150%",
        "4xl": "180%",
        "5xl": "200%",
        "6xl": "225%",
        "7xl": "250%",
        "8xl": "300%",
        "9xl": "320%",
      },
      screens: {
        base: [{min: "0px", max: "399px"}],
        xs: [{min: "400px", max: "499px"}],
        ss: [{min: "500px", max: "639px"}],
        "2xl": [{min: "1536px", max: "9999px"}],
      }
    },
  },
  screens: {
    base: [{min: "0px", max: "399px"}],
    xs: [{min: "400px", max: "499px"}],
    ss: [{min: "500px", max: "639px"}],
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [
    require('dompurify'), 
    require('react-router'),
  ],
};
