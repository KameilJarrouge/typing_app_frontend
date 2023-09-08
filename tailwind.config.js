/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "#F1EDEC",
        primary: "rgb(234, 88 ,12)",
        onPrimary: "#FFFFFF",
        onBackground: "#121212",
        secondary: "#EBD8C9",
        onSecondary: "rgb(233,124,65)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
