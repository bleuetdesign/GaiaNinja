
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode

  redirects: async () => {
    return [
      {
        source: '/:path*',
        destination: 'https://gaianinja.webflow.io/:path*',
        permanent: true,
      },
    ];
  },

  reactStrictMode: false,
};

module.exports = nextConfig;