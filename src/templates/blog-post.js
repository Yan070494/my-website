import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Header from '../components/header'
import Footer from '../components/footer'
import '../pages/global-style.scss'
import '../pages/custom-style.css'
import FontAwesome from 'react-fontawesome'
import Head from '../components/head'
import heroStyles from '../components/hero.module.css' // Nécessaire pour l'affichage des billets de blog

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Head />
        <Header />
        <section class="section">
          <div class="container">
            <div style={{ background: '#fff' }}>
              <Helmet title={`${post.title} | ${siteTitle}`} />
              <div className={heroStyles.hero}>
                <Img
                  className={heroStyles.heroImage}
                  alt={post.title}
                  fluid={post.heroImage.fluid}
                />
              </div>
              <div className="wrapper">
                <h1 class="title is-1">{post.title}</h1>
                <p
                  class="subtitle is-6"
                  style={{
                    display: 'block',
                  }}
                >
                  Publié le {post.publishDate}
                </p>
                <div
                  class="post"
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "D/MM/YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
