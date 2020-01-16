import React from 'react'
import '../global-style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Head from '../../components/head'

const CrossPlayPage = () => {
  return (
    <div class="content">
      <Head />
      <section class="hero hero-bg is-medium">
        <div class="hero-head"></div>
        <Header active="0" />
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-half">
                <p class="title">CrossPlay</p>
                <p class="subtitle">
                  Bâtir un projet entre amis autour d'une même passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default CrossPlayPage
