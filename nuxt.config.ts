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
    (req: any, res: ServerResponse, next: () => void) => {
      try {
        // Check if req or req.body is defined before accessing properties
        const longUrl = req && req.body && req.body.longUrl;

        if (longUrl) {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
          );
          res.setHeader(
            "Access-Control-Allow-Headers",
            "X-Requested-With, Content-Type, Authorization"
          );

          // Your logic here

          next();
        } else {
          // Handle the case where longUrl is not defined
          res.status(400).send("Bad Request: Missing longUrl");
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error appropriately, e.g., send a 500 Internal Server Error
        res.status(500).send("Internal Server Error");
      }
    },
  ],
};
