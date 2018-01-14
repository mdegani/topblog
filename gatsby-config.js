module.exports = {
  siteMetadata: {
    title: `Mark Degani`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-112465882-1"
    },
  },
],
  pathPrefix: `/`,
}
