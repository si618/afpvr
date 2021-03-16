module.exports = {
  siteMetadata: {
    title: "Adelaide FPV Racing",
    author: "Simon McKenna",
    description: "Website of the Adelaide FPV Racing club",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sass",
  ],
}
