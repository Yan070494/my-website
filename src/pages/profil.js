import React from 'react'
import './global-style.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'
import { Link } from 'gatsby'
import SkillBar from '../components/skillbar'

// Photo de profil

import PortraitProfil from '../images/photo-profil.jpg'
import PortraitProfilMobile from '../images/photo-profil-mobile.jpg'

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

const ProfilePage = () => {
  return (
    <div className="content">
      <Head title="Mon profil - Yanis Abounacer" />
      <Header />
      <img className="is-hidden-touch" src={PortraitProfil} />
      <img className="is-hidden-desktop" src={PortraitProfilMobile} />
      <section className="section is-hidden-touch">
        <div className="container has-text-centered">
          <h1 className="title is-size-1">
            "Dans le futur, les leaders seront ceux qui savent donner le pouvoir
            aux autres."
          </h1>
          <p className="is-size-4 column">Bill Gates, Fondateur de Microsoft</p>
          <hr />
        </div>
      </section>
      <section className="section is-hidden-desktop">
        <div className="container has-text-centered">
          <h1 className="title is-size-4">
            "Dans le futur, les leaders seront ceux qui savent donner le pouvoir
            aux autres."
          </h1>
          <p className="is-size-6 column">Bill Gates, Fondateur de Microsoft</p>
          <hr className="is-hidden-touch" />
          <hr className="is-hidden-desktop is-marginless" />
        </div>
      </section>
      <section className="section">
        <div className="container ">
          <div className="columns is-variable is-8">
            <div className="column is-two-third">
              <h2 className="title">Pour faire court ...</h2>
              <p className="is-size-5-desktop">
                Je suis Yanis Abounacer, j'ai 25 ans et je vous remercie d'avoir
                pris le temps de visiter mon site internet ! Dans les grandes
                lignes je suis Chef de Projet Informatique et entrepreneur à
                Caen, en Normandie. J'ai une formation de musicien (piano,
                chant, solfège, informatique musicale), j'adore les jeux vidéo,
                le cinéma, la littérature et la cuisine !
              </p>
              <h3 className="title ">
                <span className="is-hidden-mobile is-size-5-tablet">
                  2013 - 2016 •
                </span>{' '}
                Licence en informatique
              </h3>
              <p className="subtitle is-size-6 is-hidden-desktop is-hidden-tablet">
                2009 - 2012
              </p>
              <p className="is-size-5-desktop is-size-5-tablet">
                Durant 3 ans, j'ai appris les bases de l'informatique et des
                langages haut niveau comme le HTML, CSS, JavaScript et Python. À
                la fin de la licence, j'avais toutes les bases de la
                programmation orientée objet, la gestion de base de données et
                des notions dans les langages bas niveau comme le C.
              </p>
              <h3 className="title">
                <span className="is-hidden-mobile">2016 - 2018 •</span> Master
                en informatique
              </h3>
              <p className="subtitle is-size-6 is-hidden-desktop is-hidden-tablet">
                2016 - 2018
              </p>
              <p className="is-size-5-desktop is-size-5-tablet">
                Il a ensuite fallu choisir une spécialité et la versatilité du
                web m'a poussé à choisir un Master sur le sujet. J'ai appris
                comment bâtir un framework web, optimiser le référencement d'un
                site internet, comprendre les mécanismes de fonctionnement des
                moteurs de recherche et produire des interfaces web dans des
                clients lourds.
              </p>
            </div>
            <div className="column">
              <div className="column is-paddingless">
                <h2 className="title is-paddingless">Mes compétences</h2>
                <div id="skills">
                  <SkillBar />
                </div>
              </div>
              <hr />
              <div className="column is-paddingless is-hidden-mobile is-hidden-tablet-only">
                <div className="columns is-variable is-3">
                  <div className="column">
                    <h5 className="title is-size-5">Frameworks</h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column">
                        <a href="https://reactjs.org/">
                          <img src={ReactLogo} alt="Logo de React" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://www.gatsbyjs.com/">
                          <img src={GatsbyLogo} alt="Logo de Gatsby.js" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://bulma.io/">
                          <img src={BulmaLogo} alt="Logo de Bulma" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://laravel.com/">
                          <img src={LaravelLogo} alt="Logo de Laravel" />
                        </a>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                  <div className="column">
                    <h5 className="title is-size-5">Outils créatifs</h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column">
                        <a href="https://www.adobe.com/fr/creativecloud.html">
                          <img
                            src={CreativeCloudLogo}
                            alt="Logo d'Adobe Creative Cloud"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://www.getpaint.net/">
                          <img src={PaintNETLogo} alt="Logo de Paint.NET" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://new.steinberg.net/fr/cubase/">
                          <img src={CubaseLogo} alt="Logo de Cubase" />
                        </a>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                </div>
                <div className="columns is-variable is-3">
                  <div className="column">
                    <h5 className="title is-size-5">Outils de développement</h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column">
                        <a href="https://visualstudio.microsoft.com/fr/">
                          <img
                            src={VisualStudioLogo}
                            alt="Logo de Visual Studio"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://code.visualstudio.com/">
                          <img
                            src={VisualStudioCodeLogo}
                            alt="Logo de Visual Studio Code"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://github.com/">
                          <img src={GitHubLogo} alt="Logo de GitHub" />
                        </a>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>

                  <div className="column">
                    <h5 className="title is-size-5">
                      Outils de gestion de projet
                    </h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column">
                        <a href="https://www.microsoft.com/france/office/project/">
                          <img src={ProjectLogo} alt="Logo de Project" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://products.office.com/fr-fr/business/office-365-business-premium?activetab=pivot%3aoverviewtab">
                          <img
                            src={Office365Logo}
                            alt="Logo d'Office 365 Business Premium"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://miro.com/">
                          <img src={MiroLogo} alt="Logo de Miro" />
                        </a>
                      </div>
                      <div className="column"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-paddingless has-text-centered is-hidden-desktop is-hidden-tablet">
                <div className="columns is-variable">
                  <div className="column">
                    <h5 className="title is-size-5">Frameworks</h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column is-1"></div>
                      <div className="column">
                        <a href="https://reactjs.org/">
                          <img src={ReactLogo} alt="Logo de React" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://www.gatsbyjs.com/">
                          <img src={GatsbyLogo} alt="Logo de Gatsby.js" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://bulma.io/">
                          <img src={BulmaLogo} alt="Logo de Bulma" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://laravel.com/">
                          <img src={LaravelLogo} alt="Logo de Laravel" />
                        </a>
                      </div>
                      <div className="column is-1"></div>
                    </div>
                  </div>
                  <div className="column">
                    <p>&nbsp;</p>
                  </div>
                  <div className="column">
                    <h5 className="title is-size-5">Outils créatifs</h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column is-1"></div>
                      <div className="column">
                        <a href="https://www.adobe.com/fr/creativecloud.html">
                          <img
                            src={CreativeCloudLogo}
                            alt="Logo d'Adobe Creative Cloud"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://www.getpaint.net/">
                          <img src={PaintNETLogo} alt="Logo de Paint.NET" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://new.steinberg.net/fr/cubase/">
                          <img src={CubaseLogo} alt="Logo de Cubase" />
                        </a>
                      </div>
                      <div className="column is-1"></div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <p>&nbsp;</p>
                </div>
                <div className="columns is-variable is-3">
                  <div className="column">
                    <h5 className="title is-size-5">Outils de développement</h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column is-1"></div>
                      <div className="column">
                        <a href="https://visualstudio.microsoft.com/fr/">
                          <img
                            src={VisualStudioLogo}
                            alt="Logo de Visual Studio"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://code.visualstudio.com/">
                          <img
                            src={VisualStudioCodeLogo}
                            alt="Logo de Visual Studio Code"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://github.com/">
                          <img src={GitHubLogo} alt="Logo de GitHub" />
                        </a>
                      </div>
                      <div className="column is-1"></div>
                    </div>
                  </div>
                  <div className="column">
                    <p>&nbsp;</p>
                  </div>
                  <div className="column">
                    <h5 className="title is-size-5">
                      Outils de gestion de projet
                    </h5>

                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column is-1"></div>
                      <div className="column">
                        <a href="https://www.microsoft.com/france/office/project/">
                          <img src={ProjectLogo} alt="Logo de Project" />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://products.office.com/fr-fr/business/office-365-business-premium?activetab=pivot%3aoverviewtab">
                          <img
                            src={Office365Logo}
                            alt="Logo d'Office 365 Business Premium"
                          />
                        </a>
                      </div>
                      <div className="column">
                        <a href="https://miro.com/">
                          <img src={MiroLogo} alt="Logo de Miro" />
                        </a>
                      </div>
                      <div className="column is-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-paddingless is-hidden-mobile is-hidden-desktop">
                <div className="column has-text-centered is-variable is-paddingless">
                  <h5 className="title is-size-5">Frameworks</h5>
                  <div className="columns is-vcentered is-mobile">
                    <div className="column is-paddingless">
                      <a href="https://reactjs.org/">
                        <img src={ReactLogo} alt="Logo de React" />
                      </a>
                    </div>
                    <div className="column is-paddingless">
                      <a href="https://www.gatsbyjs.com/">
                        <img src={GatsbyLogo} alt="Logo de Gatsby.js" />
                      </a>
                    </div>
                    <div className="column is-paddingless">
                      <a href="https://bulma.io/">
                        <img src={BulmaLogo} alt="Logo de Bulma" />
                      </a>
                    </div>
                    <div className="column is-paddingless">
                      <a href="https://laravel.com/">
                        <img src={LaravelLogo} alt="Logo de Laravel" />
                      </a>
                    </div>
                  </div>
                </div>
                <p>&nbsp;</p>
                <div className="column has-text-centered is-variable is-paddingless">
                  <h5 className="title is-size-5">Outils créatifs</h5>
                  <div className="columns has-text-centered is-vcentered is-mobile">
                    <div className="column is-paddingless">
                      <a href="https://www.adobe.com/fr/creativecloud.html">
                        <img
                          src={CreativeCloudLogo}
                          alt="Logo d'Adobe Creative Cloud"
                        />
                      </a>
                    </div>
                    <div className="column is-paddingless">
                      <a href="https://www.getpaint.net/">
                        <img src={PaintNETLogo} alt="Logo de Paint.NET" />
                      </a>
                    </div>
                    <div className="column is-paddingless">
                      <a href="https://new.steinberg.net/fr/cubase/">
                        <img src={CubaseLogo} alt="Logo de Cubase" />
                      </a>
                    </div>
                  </div>
                </div>
                <p>&nbsp;</p>
                <div className="column has-text-centered is-variable is-paddingless">
                  <div className="column">
                    <h5 className="title is-size-5">Outils de développement</h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column is-paddingless">
                        <a href="https://visualstudio.microsoft.com/fr/">
                          <img
                            src={VisualStudioLogo}
                            alt="Logo de Visual Studio"
                          />
                        </a>
                      </div>
                      <div className="column is-paddingless">
                        <a href="https://code.visualstudio.com/">
                          <img
                            src={VisualStudioCodeLogo}
                            alt="Logo de Visual Studio Code"
                          />
                        </a>
                      </div>
                      <div className="column is-paddingless">
                        <a href="https://github.com/">
                          <img src={GitHubLogo} alt="Logo de GitHub" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <p>&nbsp;</p>
                  <div className="column has-text-centered is-variable is-paddingless">
                    <h5 className="title is-size-5">
                      Outils de gestion de projet
                    </h5>
                    <div className="columns has-text-centered is-vcentered is-mobile">
                      <div className="column is-paddingless">
                        <a href="https://www.microsoft.com/france/office/project/">
                          <img src={ProjectLogo} alt="Logo de Project" />
                        </a>
                      </div>
                      <div className="column is-paddingless">
                        <a href="https://products.office.com/fr-fr/business/office-365-business-premium?activetab=pivot%3aoverviewtab">
                          <img
                            src={Office365Logo}
                            alt="Logo d'Office 365 Business Premium"
                          />
                        </a>
                      </div>
                      <div className="column is-paddingless">
                        <a href="https://miro.com/">
                          <img src={MiroLogo} alt="Logo de Miro" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div className="container has-text-centered">
          <hr />
          <p className=" is-size-4-desktop is-size-4-tablet">
            Vous souhaitez en savoir plus sur la suite de mon parcours ?
          </p>
          <Link to="/projets" className="is-hidden-mobile">
            <button className="button yellow-background">
              Découvrez les projets que j'ai accompagné !
            </button>
          </Link>
          <Link to="/projets" className="is-hidden-desktop is-hidden-tablet">
            <button className="button yellow-background">
              Voir les projets !
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
