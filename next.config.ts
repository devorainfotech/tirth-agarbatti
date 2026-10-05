import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow ngrok tunnels in development and production
  allowedDevOrigins: [
    "flanked-starship-smokiness.ngrok-free.dev",
    "*.ngrok-free.dev",
    "*.ngrok.io",
    "localhost:3000",
  ],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
