/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        poppins: ["Poppins", "system-ui"],
        Maven: ["Maven Pro", "sans-serif"],
        oleo: ["Oleo Script", "system-ui"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        textColor: "#00ffff",
        cardBg: "#050505",
        Background: "#1A1A1A",
        footer: "#DEDEDE",
        Reserved: "#A9A9A9",
        NavColor: "#C1C1C1",
      },
    },
  },
  plugins: [],
};
