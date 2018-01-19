module.exports = {
  siteMetadata: {
    title: `Mark Degani`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112465882-1"
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Yesteryear`]
      }
    }
  ],
  pathPrefix: `/`
};
