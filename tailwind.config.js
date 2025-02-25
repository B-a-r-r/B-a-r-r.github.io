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
        xxs: "80%",
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
        "6xl": "250%",
        "7xl": "280%",
        "8xl": "300%",
        "9xl": "320%",
      },
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
  ],
};
