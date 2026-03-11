import type { NextConfig } from "next";

// Validate environment variables on build
import "@/config/env";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      // MinIO local dev (http://localhost:9000/media/...)
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
        pathname: "/media/**",
      },
      // Supabase Storage (production)
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      // AWS S3 (production)
      {
        protocol: "https",
        hostname: "**.s3.**.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3.**.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
