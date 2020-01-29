import React from 'react'
import './global-style.scss'
import FontAwesome from 'react-fontawesome'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'
import Tiles from '../components/tiles'
import { Link } from 'gatsby'
import SkillBar from 'react-skillbars'

// Photo de profil

import PortraitProfil from '../images/photo-profil.jpg'

// Logos

import BulmaLogo from '../images/icons/50px/bulma.png'
import CreativeCloudLogo from '../images/icons/50px/creativeCloud.png'
import CubaseLogo from '../images/icons/50px/cubase.png'
import GatsbyLogo from '../images/icons/50px/gatsby.png'
import GitHubLogo from '../images/icons/50px/github.png'
import LaravelLogo from '../images/icons/50px/laravel.png'
import MiroLogo from '../images/icons/50px/miro.png'
import Office365Logo from '../images/icons/50px/office365.png'
import PaintNETLogo from '../images/icons/50px/paintNET.png'
import ProjectLogo from '../images/icons/50px/project.png'
import ReactLogo from '../images/icons/50px/react.png'
import VisualStudioLogo from '../images/icons/50px/visualStudio.png'
import VisualStudioCodeLogo from '../images/icons/50px/visualStudioCode.png'

const skills = [
  {
    type: 'HTML/CSS',
    level: 90,
    color: {
      bar: '#0063B1',
      title: {
        text: '#fff',
        background: '#0063B1',
      },
    },
  },
  {
    type: 'PHP',
    level: 80,
    color: {
      bar: '#744DA9',
      title: {
        text: '#fff',
        background: '#744DA9',
      },
    },
  },
  {
    type: 'MySQL',
    level: 75,
    color: {
      bar: '#FF8C00',
      title: {
        text: '#fff',
        background: '#FF8C00',
      },
    },
  },
  {
    type: 'Javascript',
    level: 70,
    color: {
      bar: '#E81123',
      title: {
        text: '#fff',
        background: '#E81123',
      },
    },
  },
  {
    type: 'Python',
    level: 60,
    color: {
      bar: '#FFB900',
      title: {
        text: '#fff',
        background: '#FFB900',
      },
    },
  },
  {
    type: 'MongoDB',
    level: 50,
    color: {
      bar: '#10893E',
      title: {
        text: '#fff',
        background: '#10893E',
      },
    },
  },
  {
    type: 'C#',
    level: 30,
    color: {
      bar: '#00B7C3',
      title: {
        text: '#fff',
        background: '#00B7C3',
      },
    },
  },
]

const ProfilePage = () => {
  return (
    <div class="content">
      <Head title="Mon profil - Yanis Abounacer" />
      <Header />
      <img src={PortraitProfil} />
      <section class="section">
        <div class="container has-text-centered">
          <h1 class="title is-size-1">
            "Dans le futur, les leaders seront ceux qui savent donner le pouvoir
            aux autres."
          </h1>
          <p class="is-size-4 column">Bill Gates, Fondateur de Microsoft</p>
          <hr />
        </div>
      </section>
      <section class="section">
        <div class="container ">
          <div class="columns is-variable is-8">
            <div class="column is-two-third">
              <h2 class="title">Pour faire court ...</h2>
              <p class="is-size-5">
                Je suis Yanis Abounacer, j'ai 25 ans et je vous remercie d'avoir
                pris le temps de visiter mon site internet ! Dans les grandes
                lignes je suis Chef de Projet Informatique et entrepreneur à
                Caen, en Normandie. J'ai une formation de musicien (piano,
                chant, solfège, informatique musicale), j'adore les jeux vidéo,
                le cinéma, la littérature et la cuisine !
              </p>
              <h3 class="title">
                <span class="date-title">2009 - 2012</span> • Licence en
                informatique
              </h3>
              <p class="is-size-5">
                Durant 3 ans, j'ai appris les bases de l'informatique et des
                langages haut niveau comme le HTML, CSS, JavaScript et Python. À
                la fin de la licence, j'avais toutes les bases de la
                programmation orientée objet, la gestion de base de données et
                des notions dans les langages bas niveau comme le C.
              </p>
              <h3 class="title">
                <span class="date-title">2009 - 2012</span> • Master en
                informatique
              </h3>
              <p class="is-size-5">
                Il a ensuite fallu choisir une spécialité et la versatilité du
                web m'a poussé à choisir un Master sur le sujet. J'ai appris
                comment bâtir un framework web, optimiser le référencement d'un
                site internet, comprendre les mécanismes de fonctionnement des
                moteurs de recherche et produire des interfaces web dans des
                clients lourds.
              </p>
            </div>
            <div class="column">
              <div class="column is-paddingless">
                <h2 class="title">Mes compétences</h2>
                <div id="skills">
                  <SkillBar skills={skills} />
                </div>
              </div>
              <hr />
              <div class="column is-paddingless">
                <div class="columns is-variable is-3">
                  <div class="column">
                    <h5 class="title is-size-5">Frameworks</h5>
                    <div class="columns has-text-centered is-vcentered is-mobile">
                      <div class="column">
                        <a href="https://reactjs.org/">
                          <img src={ReactLogo} alt="Logo de React" />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://www.gatsbyjs.com/">
                          <img src={GatsbyLogo} alt="Logo de Gatsby.js" />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://bulma.io/">
                          <img src={BulmaLogo} alt="Logo de Bulma" />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://laravel.com/">
                          <img src={LaravelLogo} alt="Logo de Laravel" />
                        </a>
                      </div>
                      <div class="column"></div>
                    </div>
                  </div>

                  <div class="column">
                    <h5 class="title is-size-5">Outils créatifs</h5>
                    <div class="columns has-text-centered is-vcentered is-mobile">
                      <div class="column">
                        <a href="https://www.adobe.com/fr/creativecloud.html">
                          <img
                            src={CreativeCloudLogo}
                            alt="Logo d'Adobe Creative Cloud"
                          />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://www.getpaint.net/">
                          <img src={PaintNETLogo} alt="Logo de Paint.NET" />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://new.steinberg.net/fr/cubase/">
                          <img src={CubaseLogo} alt="Logo de Cubase" />
                        </a>
                      </div>
                      <div class="column"></div>
                    </div>
                  </div>
                </div>
                <div class="columns is-variable is-3">
                  <div class="column">
                    <h5 class="title is-size-5">Outils de développement</h5>
                    <div class="columns has-text-centered is-vcentered is-mobile">
                      <div class="column">
                        <a href="https://visualstudio.microsoft.com/fr/">
                          <img
                            src={VisualStudioLogo}
                            alt="Logo de Visual Studio"
                          />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://code.visualstudio.com/">
                          <img
                            src={VisualStudioCodeLogo}
                            alt="Logo de Visual Studio Code"
                          />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://github.com/">
                          <img src={GitHubLogo} alt="Logo de GitHub" />
                        </a>
                      </div>
                      <div class="column"></div>
                    </div>
                  </div>

                  <div class="column">
                    <h5 class="title is-size-5">Outils de gestion de projet</h5>
                    <div class="columns has-text-centered is-vcentered is-mobile">
                      <div class="column">
                        <a href="https://www.microsoft.com/france/office/project/">
                          <img src={ProjectLogo} alt="Logo de Project" />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://products.office.com/fr-fr/business/office-365-business-premium?activetab=pivot%3aoverviewtab">
                          <img
                            src={Office365Logo}
                            alt="Logo d'Office 365 Business Premium"
                          />
                        </a>
                      </div>
                      <div class="column">
                        <a href="https://miro.com/">
                          <img src={MiroLogo} alt="Logo de Miro" />
                        </a>
                      </div>
                      <div class="column"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container has-text-centered">
          <hr />
          <p class=" is-size-4">
            Vous souhaitez en savoir plus sur la suite de mon parcours ?
          </p>
          <Link to="/projets">
            <button class="button yellow-background">
              Découvrez les projets que j'ai accompagné !
            </button>
          </Link>
          <hr />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProfilePage
