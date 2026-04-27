import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["arbitrates.dev"],
  async rewrites() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
    return [
      {
        source: "/api/webhooks/:path*",
        destination: `${baseUrl}/api/webhooks/:path*`,
      },
    ];
  },
};

export default nextConfig;
