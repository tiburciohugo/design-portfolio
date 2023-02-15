/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: "#755CDE",
      orange: "#F6A560",
      salmon: "#F39E9E",
      red: "#EB7565",
      green: "#61C4B7",
      brown: "#552049",
      black: "#030303",
      gray: "#7A746E",
      cream: "#FFF7F0",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
