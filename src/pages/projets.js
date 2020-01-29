import React from 'react'
import './global-style.scss'
import './custom-style.css'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'

// Images

import HeroImage from '../images/projets/board.png'
import LDLCMiniature from '../images/projets/ldlc.png'
import CrossPlayMiniature from '../images/projets/crossplay.png'
import UnitedManagersMiniature from '../images/projets/unitedmanagers.png'

const ProjectPage = () => {
  return (
    <div class="content">
      <Head title="Mes projets - Yanis Abounacer" />
      <Header />
      <img src={HeroImage} alt="Tableau" />
      <section class="section">
        <div class="container has-text-centered">
          <h1 class="title is-size-1">
            "Pour réussir il ne suffit pas de prévoir, il faut aussi savoir
            improviser."
          </h1>
          <p class="is-size-4 column">Isaac Asimov</p>
          <hr />
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title is-size-2">Mes missions</h2>
          <p class="is-size-4">
            Depuis 2013, j'accompagne et mène des projets de tous les horizons.
            Pour des raisons de confidentialité, tous ne peuvent pas figurer
            ici. Trois d'entre eux sont évoqués en détail :
          </p>
          <div class="columns is-variable is-8">
            <div class="column">
              <img src={LDLCMiniature} alt="Logo de LDLC" />
              <h3>
                <Link to="/projets/ldlc">Concept Store LDLC Caen</Link>
              </h3>
              <p>
                LDLC est l'acteur de référence de la vente de matériel
                informatique en France. Le Groupe LDLC souhaite étendre sa
                présence sur le territoire au travers de concept stores
                franchisés.
              </p>
            </div>
            <div class="column">
              <img src={UnitedManagersMiniature} alt="Logo de LDLC" />
              <h3>
                <Link to="/projets/unitedmanagers">United Managers</Link>
              </h3>
              <p>
                United Managers est une web application de coaching sportif
                collaboratif. Les utilisateurs inscrits peuvent voter pour la
                décision de coaching la plus pertinente avant, pendant et après
                le match.
              </p>
            </div>
            <div class="column">
              <img src={CrossPlayMiniature} alt="Logo de LDLC" />
              <h3>
                <Link to="projets/crossplay">CrossPlay</Link>
              </h3>
              <p>
                CrossPlay est un site web d'opinion où différents contributeurs
                bénévoles publient du contenu original en rapport avec la
                technologie et le jeu vidéo sous forme de formats texte, vidéo
                différée et streaming.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container has-text-centered">
          <hr />
          <p class=" is-size-4">
            Vous souhaitez en savoir plus sur la suite de mon profil ?
          </p>
          <Link to="/profil">
            <button class="button yellow-background">
              Découvrez mon parcours et mes compétences !
            </button>
          </Link>
          <hr />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProjectPage
