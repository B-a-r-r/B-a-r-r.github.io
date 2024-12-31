/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light_color_primary: "#F1F1F1",
        light_color_secondary: "#EEEEEE",
        light_color_tertiary: "#428E5B",
        light_color_quaternary: "#3D3E3C",
        light_color_quinary: "#4F4F4F",
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
  },
  plugins: [require('tailwind-hamburgers')],
};
