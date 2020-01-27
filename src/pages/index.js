import React from 'react'
import './global-style.scss'
import Header from '../components/header'
import { Link } from 'gatsby'
import FontAwesome from 'react-fontawesome'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <div class="content no-scroll">
      <section class="hero hero-bg home is-fullheight">
        <div class="hero-head"></div>
        <Head />
        <Header active="0" />
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-half background-blured">
                <p class="title is-size-1 has-text-white">
                  Hello, je suis Yanis !
                </p>
                <p class="subtitle has-text-white">
                  Comment puis-je vous aider ?
                </p>
                <Link to="/profil">
                  <button class="button">
                    <span class="icon is-medium">
                      <i class="fas fa-smile"></i>
                    </span>
                    <span>&nbsp;</span>
                    Mon profil
                  </button>
                </Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to="/projets">
                  <button class="button">
                    <span class="icon is-medium">
                      <i class="fas fa-star"></i>
                    </span>
                    <span>&nbsp;</span>Mes projets
                  </button>
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
