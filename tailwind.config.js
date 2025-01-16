/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_purple: {
          100: "#fdfaff",
          900: "#0f0119",
        },
        dark_surface: {
          700: "#535056",
          900: "#232026",
        },
      },
    },
  },
  plugins: [],
};
