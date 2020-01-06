import React from 'react'
import './global-style.scss'
import './custom-style.css'
import 'bulma'
//import "bulma-carousel"
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const ProjectPage = () => {
  return (
    <div class="content">
      <Header />

      <section class="hero is-small is-info is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Parlons projets</h1>
            <h2 class="subtitle">Le vôtre sera bientôt sur cette page !</h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">Des jeux, de l'information et du progiciel</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">Méthodes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">Processus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">Un cadeau pour démarrer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProjectPage
