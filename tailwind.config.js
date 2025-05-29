/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
    "./src/shared/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#353B47",
        titleWhite: "#F5F6F7",
        subTitleWhite: "#EDEEF0",
        contentWhite: "#DADDE0",
      },
      fontFamily: {
        Ibrand: ["Ibrand", "sans-serif"], // 커스텀 폰트명과 fallback 설정
      },
      boxShadow: {
        custom: "0px 0px 2px rgba(107, 107, 107, 0.25)",
      },
    },
  },
  plugins: [],
};
