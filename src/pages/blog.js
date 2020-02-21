import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import ArticlePreview from '../components/article-preview'
import Header from '../components/header'
import Footer from '../components/footer'
import FontAwesome from 'react-fontawesome'
import Head from '../components/head'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div className="content">
        <Head
          title="Le Blog - Yanis Abounacer : Chef de Projet, Développeur et Entrepreneur"
          description=""
          image-fb="https://github.com/Yan070494/my-website/raw/develop/src/images/blog-facebook-og-image.png"
          image-twitter="https://github.com/Yan070494/my-website/raw/develop/src/images/blog-twitter-image.png"
        />
        <Header active="0" />
        <section className="hero blog-hero blog-bg is-medium">
          <div className="hero-head"></div>
          <div className="hero-body">
            <div className="columns">
              <div className="column is-5"></div>
              <h1 className="title column has-text-centered is-2 is-marginless">
                Le Blog
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="wrapper">
              <div className="column">
                {posts.map(({ node }) => {
                  return (
                    <div className="column" key={node.slug}>
                      <ArticlePreview article={node} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "D/MM/YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
