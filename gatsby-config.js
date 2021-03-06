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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radiotutor`,
        short_name: `Radiotutor`,
        start_url: `/`,
        background_color: `#3b00ff`,
        theme_color: `#3b00ff`,
        display: `standalone`,
        icon: `src/images/logo_512.png`, // This path is relative to the root of the site.
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
