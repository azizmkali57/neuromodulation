/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-green": "#00AF9C",
        "c-light-blue": "#BDDFEC",
        "c-yellow": "#FEE003",
        "c-blue": "#0065BD",
        "c-orange": "#E9511C",
        "c-blue2": "#172B85",
        "c-darkest-blue": "#1D1A55",
        "c-red": "#FF003D",
      },
    },
  },
  plugins: [],
};
