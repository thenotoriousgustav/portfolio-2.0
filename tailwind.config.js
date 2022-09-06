/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: "PPNeueMachina-PlainRegular",
        mersad: "Mersad",
      },
      colors: {
        background: "#121111",
      },
    },
  },
  plugins: [],
};
