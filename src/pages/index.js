import React from 'react'
import './global-style.scss'
import Header from '../components/header'
import { Link } from 'gatsby'
import FontAwesome from 'react-fontawesome'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <div class="content">
      <section class="hero hero-bg is-fullheight">
        <div class="hero-head"></div>
        <Header active="0" />
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-half">
                <p class="title">Hello, je suis Yanis Abounacer!</p>
                <p class="subtitle">Comment puis-je vous aider ?</p>
                <Link to="/profil">
                  <button class="button">Mon profil</button>
                </Link>
                <Link to="/projets">
                  <button class="button">Mes projets</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
