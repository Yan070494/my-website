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
      <div class="content">
        <Head title="Le Blog - Yanis Abounacer" />
        <Header />
        <div style={{ background: '#fff' }}>
          <section class="hero hero-bg is-medium has-background-primary">
            <div class="hero-head"></div>
            <div class="hero-body">
              <div class="container">
                <div class="columns">
                  <div class="column is-half">
                    <p class="title">Bienvenue sur mon blog !</p>
                    <p class="subtitle">
                      Que souhaitez-vous lire aujourd'hui ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <div class="container">
              <div className="wrapper">
                <div class="column">
                  {posts.map(({ node }) => {
                    return (
                      <div class="column" key={node.slug}>
                        <ArticlePreview article={node} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
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
