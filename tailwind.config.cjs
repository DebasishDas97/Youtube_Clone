/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
<<<<<<< HEAD
  plugins: [],
=======
  plugins: [require("@tailwindcss/line-clamp")],
>>>>>>> 147ecca (initial commit)
}
