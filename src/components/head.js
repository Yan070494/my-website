import React from 'react'
import Helmet from 'react-helmet'
import '../pages/global-style.scss'
import '../pages/custom-style.css'

export default props => (
  <Helmet>
    <title>{props.title}</title>
    <script
      src="https://kit.fontawesome.com/0c1f071e61.js"
      crossorigin="anonymous"
    ></script>
  </Helmet>
)
