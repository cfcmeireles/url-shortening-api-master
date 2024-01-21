import { ServerResponse } from "http";

export default {
  devtools: { enabled: true },
  css: ["~/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
