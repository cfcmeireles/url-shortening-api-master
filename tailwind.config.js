/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      colors: {
        gray: "#bfbfbf",
        cyan: "#2acfcf",
        darkviolet: "#3b3054",
        grayviolet: "#9e9aa7",
        blackviolet: "#232027",
        verydarkviolet: "#232127",
      },
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
