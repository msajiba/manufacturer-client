/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {

    themes: [{
      mytheme: {
        "primary": "#FFFFFF",
        "secondary": "#C68029",
        "accent": "#000000",
        "neutral": "#3D4451",
        "base-100": "#F7F7F7",

      },
    }, ],
  },

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
}