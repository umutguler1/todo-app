/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  plugins: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-lilac": "#e4ddf4",
        "custom-brown": "#943d24",
        "custom-egg": "#fffbf0",
        "custom-black": "#2d2d2d",
        "custom-dark": "#282612",
      },
    },
  },
};
