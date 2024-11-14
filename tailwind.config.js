/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fontColor: "#ff9f1c",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
