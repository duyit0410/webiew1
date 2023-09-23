/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        app: "#2bb3a8",
        red: '#e34133'
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
      }
    },
  },
  plugins: [],
};
