const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: "https://cleanuri.com/api",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  onProxyRes(proxyRes) {
    proxyRes.headers["x-added"] = "foobar";
    delete proxyRes.headers["x-removed"];
  },
});

export default function (req, res) {
  return apiProxy(req, res);
}
