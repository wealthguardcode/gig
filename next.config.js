module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'images.unsplash.com',
      'media.graphcms.com',
      'media.graphassets.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/programs/healthcare-facilities',
        destination: '/programs',
        permanent: true,
      },
      {
        source: '/programs/coastal-property',
        destination: '/brokerage/coastal-property',
        permanent: true,
      },
      {
        source: '/programs/hard-to-place',
        destination: '/brokerage/hard-to-place',
        permanent: true,
      },
      {
        source: '/programs/yacht-program',
        destination: '/brokerage/yacht-insurance',
        permanent: true,
      },
    ]
  },
}
