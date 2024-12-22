/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fontColor: "#ff9f1c",
      },
    },
  },
  plugins: [scrollbarHide],
};
