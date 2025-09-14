/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["montserrat", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      Colors: {
        brainyWaveBlack: "#161C20",
        brainyWavePurple: "#473BF0",
        brainyServiceBG: "#E7E9ED",
        brainyGreen: "#E7E9ED",
      },
    },
  },
  plugins: [],
};
