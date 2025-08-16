/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/list/styles/globals.css"
  ],
  theme: {
    extend: {
      colors: {
        // CSS 변수 기반 커스텀 컬러 등록
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        // 필요에 따라 추가
      },
    },
  },
  plugins: [],
};