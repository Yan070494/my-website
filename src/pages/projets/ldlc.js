import React from 'react'
import '../global-style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Head from '../../components/head'

const LDLCPage = () => {
  return (
    <div class="content">
      <Head />
      <section class="hero hero-bg is-medium">
        <div class="hero-head"></div>
        <Header />
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-half">
                <p class="title">LDLC</p>
                <p class="subtitle">Entreprendre en tant qu'informaticien</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LDLCPage
