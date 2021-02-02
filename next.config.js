module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/list',
          permanent: true,
        },
      ]
    },
  }