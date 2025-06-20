module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FFEF00',     // nút chính
          secondary: '#FFFACD',   // nút phụ
          accent: '#DAA520',      // nhấn mạnh
          neutral: '#3d4451',     // màu nền chung
          'base-100': '#FFFFE0',  // background chính
          info: '#38bdf8',
          success: '#22c55e',
          warning: '#facc15',
          error: '#ef4444',

        }
      }
    ], // Kích hoạt theme sáng/tối
  },

};
