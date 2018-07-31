module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
  `gatsby-plugin-react-next`,
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
  `gatsby-plugin-offline`,
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/services/typography`,
    },
  }
],
}
