import React from 'react'
import Helmet from 'react-helmet'
import '../pages/global-style.scss'
import '../pages/custom-style.css'

export default props => (
  <Helmet>
    <title>{props.title}</title>
    <script
      src="https://kit.fontawesome.com/0c1f071e61.js"
      crossorigin="samesite"
    ></script>

    <meta property="og:title" content={props.title} />
    <meta property="og:site_name" content="YanisAbounacer.com" />
    <meta property="og:url" content="https://www.yanisabounacer.com" />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@YanisAbounacer" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:creator" content="@YanisAbounacer" />

    <meta name="twitter:image:src" content="" />
  </Helmet>
)
