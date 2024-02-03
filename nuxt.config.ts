export default {
  devtools: { enabled: true },
  css: ["~/main.css"],
  serverMiddleware: ["~/api/index.js"],
  generate: {
    async routes() {
      return ["/api/v1/shorten"];
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ["@nuxtjs/meta"],
};
