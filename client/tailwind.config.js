/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#453FE0",
        global: "#FAFAFC",
        gray: "#837E77",
        light: "#AFAFBB",
        //cream:"#EBEFF7",
        cream: "#EBF0F8",
        peach: "#FFDDC7",
      },
    },
  },
  plugins: [],
};
