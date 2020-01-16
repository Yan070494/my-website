import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div class="columns box is-paddingless is-marginless is-vcentered">
    <div class="column is-one-third is-paddingless">
      <Img class="image is16-by-9" alt="" fluid={article.heroImage.fluid} />
    </div>
    <div class="column">
      <h3 class="title">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>

      <p class="subtitle is-6">
        <a href="https://www.twitter.com/yanisabounacer">@yanisabounacer</a> le{' '}
        <time datetime={article.publishDate}>{article.publishDate}</time>
      </p>

      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />

      {article.tags &&
        article.tags.map(tag => (
          <p class="tag" key={tag}>
            {tag}
          </p>
        ))}
      <br />
    </div>
  </div>
)
