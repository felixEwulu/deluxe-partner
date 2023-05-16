/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "x",
  content: ['./**/*.liquid'],
  theme: {
    screens: {
      "md": "750px",
      "lg": "990px",
    },
    extend: {},
  },
  plugins: [],
};
