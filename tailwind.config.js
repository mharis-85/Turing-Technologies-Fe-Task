/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0106e4",
          50: "#3338ff",
          100: "#292eff",
          200: "#1f24ff",
          300: "#151af8",
          400: "#0b10ee",
          500: "#0106e4",
          600: "#0000da",
          700: "#0000d0",
          800: "#0000c6",
          900: "#0000bc",
        },
      },
    },
  },
  important: "body",
}
