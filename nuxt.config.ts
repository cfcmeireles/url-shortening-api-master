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
  serverMiddleware: [
    (_: any, res: ServerResponse, next: () => void) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Authorization"
      );

      next();
    },
  ],
};
