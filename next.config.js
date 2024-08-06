
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://gaianinja.webflow.io/',
        permanent: true,
      },
      {
        source: '/picobo',
        destination: 'https://gaianinja.webflow.io/picobo',
        permanent: true,
      },
      {
        source: '/picobo-ecole',
        destination: 'https://gaianinja.webflow.io/picobo-ecole',
        permanent: true,
      },
      {
        source: '/a-propos',
        destination: 'https://gaianinja.webflow.io/a-propos',
        permanent: true,
      },
      {
        source: '/support',
        destination: 'https://gaianinja.webflow.io/support',
        permanent: true,
      },
      {
        source: '/picobo/prof',
        destination: 'https://gaianinja.webflow.io/picobo/prof',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;