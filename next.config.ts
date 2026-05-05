import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Redirect all old paths (link-in-bio paths) to the new homepage
        // This helps preserve SEO and fixes the "page not found" issue
        source: '/:path((?!$|api|_next|static|favicon.ico|robots.txt|sitemap.xml|ads.txt).*)',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
