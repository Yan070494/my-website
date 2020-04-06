import React from 'react'
import './global-style.scss'
import './custom-style.css'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'

// Images

import Tableau from '../images/projets/board.jpg'
import TableauMobile from '../images/projets/board-mobile.jpg'
import LDLCMiniature from '../images/projets/ldlc.jpg'
import CrossPlayMiniature from '../images/projets/crossplay.jpg'
import UnitedManagersMiniature from '../images/projets/unitedmanagers.jpg'

const ProjectPage = () => {
  return (
    <div className="content">
      <Head
        title="Mes projets - Yanis Abounacer | Chef de Projet, Développeur et Entrepreneur"
        description="Chaque projet est une nouvelle expérience. Mon profil de technicien et de joueur me permet d'adopter une autre vision différente. Découvrez certains des projets auxquels j'ai participé"
        image_fb="https://github.com/Yan070494/my-website/raw/develop/src/images/projets/projets-facebook-og-image.jpg"
        image_twitter="https://github.com/Yan070494/my-website/raw/develop/src/images/projets/projets-twitter-image.jpg"
      />
      <Header />
      <img className="is-hidden-touch" src={Tableau} alt="Tableau" />
      <img className="is-hidden-desktop" src={TableauMobile} alt="Tableau" />
      <section className="section">
        <div className="container has-text-centered">
          <h1 className="title is-size-1-desktop is-size-4-touch">
            "Pour réussir il ne suffit pas de prévoir, il faut aussi savoir
            improviser."
          </h1>
          <p className="is-size-4-desktop is-size-6-touch column">
            Isaac Asimov
          </p>
          <hr />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title is-size-2-desktop is-size-4-touch">
            Mes missions
          </h2>
          <p className="is-size-4-desktop">
            Depuis 2013, j'accompagne et mène des projets de tous les horizons.
            Pour des raisons de confidentialité, tous ne peuvent pas figurer
            ici. Deux d'entre eux sont évoqués en détail :
          </p>
          <div className="columns is-variable is-8 ">
            <p>&nbsp;</p>
            <div className="column is-hidden">
              <Link to="/projets/ldlc">
                <div className="has-text-centered">
                  <img src={LDLCMiniature} alt="Logo de LDLC" />
                </div>
              </Link>
              <h3 className="is-size-5-touch">Concept Store LDLC Caen</h3>
              <p>
                LDLC est l'acteur de référence de la vente de matériel
                informatique en France. Le Groupe LDLC souhaite étendre sa
                présence sur le territoire au travers de concept stores
                franchisés.
              </p>
            </div>
            <p>&nbsp;</p>
            <div className="column">
              <Link to="/projets/unitedmanagers">
                <div className="has-text-centered">
                  <img src={UnitedManagersMiniature} alt="Logo de LDLC" />
                </div>
              </Link>
              <h3>United Managers</h3>
              <p>
                United Managers est une web application de coaching sportif
                collaboratif. Les utilisateurs inscrits peuvent voter pour la
                décision de coaching la plus pertinente avant, pendant et après
                le match.
              </p>
            </div>
            <p>&nbsp;</p>
            <div className="column">
              <Link to="projets/crossplay">
                <div className="has-text-centered">
                  <img src={CrossPlayMiniature} alt="Logo de LDLC" />
                </div>
              </Link>
              <h3>CrossPlay</h3>
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
      <section class="section">
        <div className="container has-text-centered">
          <hr />
          <p className=" is-size-4-desktop is-size-4-tablet">
            Vous souhaitez en savoir plus sur mon profil ?
          </p>
          <Link to="/profil" className="is-hidden-mobile">
            <button className="button green-background">
              Découvrez mon parcours et mes compétences !
            </button>
          </Link>
          <Link to="/profil" className="is-hidden-desktop is-hidden-tablet">
            <button className="button green-background">
              Voir mon profil !
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
