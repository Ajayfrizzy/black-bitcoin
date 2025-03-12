import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@styles"] = path.resolve(process.cwd(), "styles");
    return config;
  },
};

export default nextConfig;
