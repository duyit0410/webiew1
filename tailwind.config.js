/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        app: "#2bb3a8",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
