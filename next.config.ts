import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  basePath: "/DarkPattern",
  output: "export",
  images: {
    remotePatterns: [{protocol: 'https', hostname: 'randomuser.me'}],
    unoptimized: true
  }
};

export default nextConfig;
