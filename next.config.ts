import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
