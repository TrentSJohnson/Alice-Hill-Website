module.exports = {
  siteMetadata: {
    title: `Alice Polk Hill`,
    description: `A text based adventure about the life of the Colorado Poet Laureate Alice Polk Hill.`,
    author: `Trent Johnson`,
  },
  plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: "pages",
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 0rem`,
              },
            },
            "gatsby-remark-prismjs",
            "gatsby-remark-copy-linked-files",
            "gatsby-remark-smartypants",
          ],
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
  ],
}