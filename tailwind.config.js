/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "pry-color": "#004CCC",
        "text-color": "#222222",
      },

      fontFamily: {
        sora: ["Sora"],
      },

      screens: {
        400: { raw: "(min-width: 400px)" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
