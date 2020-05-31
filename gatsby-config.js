const targetAddress = new URL(process.env.TARGET_ADDRESS || `http://2.radiotutor.uk`);

module.exports = {
  siteMetadata: {
    title: `Radiotutor`,
    description: `Radio Tutor offers free mock exams and courses for all 3 of the UK amateur licence exams.`,
    author: `pe5er && abaft`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radiotutor`,
        short_name: `Radiotutor`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
          region: process.env.AWS_REGION,
          protocol: targetAddress.protocol.slice(0, -1),
          hostname: targetAddress.hostname,
          acl: null,
          params: {
          },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: targetAddress.href.slice(0, -1),
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
