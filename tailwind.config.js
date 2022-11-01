/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
  ],
  theme: {
    colors: {
      blue: {
        light: "#2D9CDB",
        DEFAULT: "#2F80ED",
      },
      gray: {
        background: "#F2F2F2",
        white: "#BDBDBD",
        light: "#828282",
        dark: "#4F4F4F",
        DEFAULT: "#333333",
      },
      red: "#EB5757",
      green: "#27AE60",
      transparent: "transparent",
    },
  },
  plugins: [],
};
