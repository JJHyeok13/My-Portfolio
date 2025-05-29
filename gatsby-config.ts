import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  pathPrefix: "/My-Portfolio",
  siteMetadata: {
    title: `정진혁 | 포트폴리오`,
    siteUrl: `https://JJHyeok13.github.io/My-Portfolio`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "src/assets/images"),
      },
    },
  ],
};

export default config;
