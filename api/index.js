const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: "https://cleanuri.com",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  onProxyRes(proxyRes) {
    proxyRes.headers["Access-Control-Allow-Origin"] =
      "https://url-shortening-api-master-23bh9xu0m-cfcmeireles-projects.vercel.app";
    proxyRes.headers["Access-Control-Allow-Methods"] =
      "GET,OPTIONS,PATCH,DELETE,POST,PUT";
    proxyRes.headers["Access-Control-Allow-Headers"] =
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version";
  },
  onProxyReq(proxyReq, req, res) {
    if (req.method === "OPTIONS") {
      res.writeHead(200, {
        "Access-Control-Allow-Origin":
          "https://url-shortening-api-master-23bh9xu0m-cfcmeireles-projects.vercel.app",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      });
      res.end();
    }
  },
});

export default function (req, res) {
  return apiProxy(req, res);
}
