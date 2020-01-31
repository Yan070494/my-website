import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div className="columns box is-paddingless is-marginless is-vcentered">
    <div className="column is-one-third is-paddingless">
      <Img className="image is16-by-9" alt="" fluid={article.heroImage.fluid} />
    </div>
    <div className="column">
      <h3 className="title">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>

      <p className="subtitle is-6">
        <a href="https://www.twitter.com/yanisabounacer">@yanisabounacer</a> le{' '}
        <time dateTime={article.publishDate}>{article.publishDate}</time>
      </p>

      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />

      {article.tags &&
        article.tags.map(tag => (
          <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
      <br />
    </div>
  </div>
)
