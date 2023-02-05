/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "F75A4E",
          50: "#9EA0FF",
          100: "#8A8CFE",
          200: "#6165FE",
          300: "#383DFE",
          400: "#1015FE",
          500: "#4e45f7",
          //500: "#0106E4",
          600: "#0105AC",
          700: "#010374",
          800: "#00023C",
          900: "#000005",
        },
        body: "#F3EEED",
      },
    },
  },
  important: "body",
};
