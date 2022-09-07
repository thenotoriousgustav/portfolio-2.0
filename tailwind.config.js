const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "340px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        neue: "PPNeueMachina-PlainRegular",
        mersad: "Mersad",
      },
      colors: {
        background: "#121111",
        secondary: "#b0b0b0",
      },
    },
  },
  plugins: [],
};
