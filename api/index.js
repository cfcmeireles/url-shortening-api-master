const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: "https://cleanuri.com",
  changeOrigin: true,
  pathRewrite: {
    "~/api": "",
  },
});

export default function (req, res) {
  return apiProxy(req, res);
}
