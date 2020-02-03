require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: 'dwuu8h33boxw',
  accessToken: '7k4TlKOvIIWRRuE1UT2FLY4r0Q5QDWP7d6PSlNYAAZ4',
  //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  //host: process.env.CONTENTFUL_HOST,
  //spaceId: process.env.CONTENTFUL_SPACE_ID,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    `gatsby-plugin-favicon`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
