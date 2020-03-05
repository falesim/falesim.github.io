module.exports = {
  siteMetadata: {
    title: 'Falesim',
    subtitle: 'welcome to falesim',
    description: 'official site from falesim',
    keywords: [
      'falesim',
      'wechat app',
      'react',
      'parcel',
      'hooks',
      'effects',
      'javascript',
      'redux',
      'typescript',
    ],
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: 'markdown-pages',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
}
