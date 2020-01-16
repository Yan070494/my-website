import React from 'react'
import './global-style.scss'
import './custom-style.css'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'

const ProjectPage = () => {
  return (
    <div class="content">
      <Head />
      <Header />
      <section class="hero is-small is-info is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Construire un projet</h1>
            <h2 class="subtitle">Des fondations jusqu'aux livrables !</h2>
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
          <div class="columns">
            <div class="column">
              <h2 class="title">Méthodes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button class="button">Voir les fiches méthode</button>
            </div>
            <div class="column">
              <h2 class="title">Processus</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button class="button">Voir les fiches processus</button>
            </div>
            <div class="column">
              {' '}
              <h2 class="title">Outils</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button class="button">Voir les fiches outils</button>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">3 projets, 3 démarches</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="columns has-text-centered">
            <div class="column">
              <h2 class="title">LDLC</h2>
            </div>
            <div class="column">
              <h2 class="title">United Managers</h2>
            </div>
            <div class="column">
              <h2 class="title">CrossPlay</h2>
            </div>
          </div>
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
          <button class="button">Récupérer le cadeau</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProjectPage
