// next.config.mjs

import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

// Initialize PWA with configuration, including the build function
const withPWA = withPWAInit({
  dest: 'public',
  // Next.js 16: Tell the PWA plugin to use Webpack for the build process
  // This is often needed when the next-pwa plugin applies complex logic.
  // Note: This is an internal configuration for the next-pwa plugin.
  webpack: (config, options) => {
    // This empty function ensures the PWA plugin can run its necessary Webpack logic
    // during the Vercel production build without the Turbopack conflict.
    return config;
  },
});

const nextConfig = {
  reactStrictMode: true,

  // ✅ Image fix is now correct:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
  
  // ❌ REMOVE THE INVALID 'experimental' BLOCK HERE.
  // This section should be empty or deleted to avoid the warning.
};

// Export the PWA wrapper around the main Next.js config
export default withPWA({
  ...nextConfig
});