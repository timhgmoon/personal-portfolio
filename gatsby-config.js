module.exports = {
    siteMetadata: {
      title: `TMoon`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Roboto`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
    ]
  }