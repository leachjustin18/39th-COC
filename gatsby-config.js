module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "39th Street Church of Chrsit",
      short_name: "39COFC",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#666666",
      display: "minimal-ui",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-offline`
],
}
