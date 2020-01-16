import React from 'react'
import '../global-style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Head from '../../components/head'

const UnitedManagersPage = () => {
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
                <p class="title">United Managers</p>
                <p class="subtitle">
                  Quand le coaching sportif rencontre l'intelligence collective
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

export default UnitedManagersPage
