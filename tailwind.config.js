/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', 
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // une varibale 'test' qui change selon le theme
        test: "bg-red-500",
        color_primary: "#1A1A1A",
        color_secondary: "#EEEEEE",
        color_tertiary: "#428E5B",
        color_quaternary: "#3D3E3C",
        color_quinary: "#4F4F4F",
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
