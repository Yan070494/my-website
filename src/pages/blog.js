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
        <div style={{ background: '#fff' }}>
          <section className="hero hero-bg is-fullheight">
            <div className="hero-head"></div>
            <Head title="Yanis Abounacer : Chef de Projet, Développeur et Entrepreneur" />
            <Header active="0" />
            <div className="hero-head"></div>
            <div className="hero-body">
              <div className="container has-text-centered">
                <p className="title">Cette page est en construction</p>
                <p className="subtitle">Revenez bientôt ! 😉</p>
              </div>
            </div>
          </section>
          <section className="section is-hidden">
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
