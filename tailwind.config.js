/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#393646",
        secondary: "#6D5D6E",
        tertiary: "#4F4557",
        lighter: "#F4EEE0",
        mblack: "#1E1E1E",
        mgrey: "#E3E3E3",
        link: "#53A2EA",
        sunset: "#DFAC28",
      },
      fontFamily: {
        incosolata: ["Inconsolata", "monospace"],
        irishGrover: ["Irish Grover", "sans-serif"],
        inspiration: ["Inspiration", "cursive"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
