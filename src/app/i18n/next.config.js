module.exports = {
  i18n: {
    locales: ['ro', 'en-US', 'ru'],
    defaultLocale: 'ro',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US'
      },
      {
        domain: 'example.nl',
        defaultLocale: 'ru'
      }
    ]
  }
}