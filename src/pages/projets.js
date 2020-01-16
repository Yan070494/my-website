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
            Depuis 2013, j'accompagne des entreprises et des porteurs de projets
            dans la concrétisation de leurs objectifs. Afin de pouvoir se
            concentrer sur le coeur du travail, de l'expertise et du savoir
            faire, il est indispensable de disposer des méthodes, processus et
            outils adaptés. S'ils ne se substituent en aucun cas à un suivi de
            projet et des conseils avisés, ils sont de vrais facilitateurs. Leur
            rôle est avant tout de décharger les acteurs du projet de tout le
            poids du suivi et de la gestion pour se concentrer sur ce qui compte
            vraiment: Achever plus, Achever mieux, Achever ensemble.
          </p>
          <p>
            J'ai pu m'essayer à différentes solutions, certaines vraiment
            convaincantes, d'autres réservées à des usages très spécifiques.
            Dans tous les cas, il y a des incontournables que je partage ici,
            libre à vous d'en faire ce que vous voudrez !
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="title">3 projets, 3 démarches</h2>
          <p>
            Pour mieux comprendre comment tout cela s'applique en situation
            réelle, je vous dévoile 3 projets auxquels j'ai participé et comment
            j'ai répondu aux problématiques qui se sont présentés à l'aide des
            méthodes, processus et outils.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">United Managers</h2>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">LDLC</h2>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">CrossPlay</h2>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProjectPage
