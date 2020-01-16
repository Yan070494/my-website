import React from 'react'
import './global-style.scss'
import FontAwesome from 'react-fontawesome'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'
import Tiles from '../components/tiles'
import PortraitProfil from '../images/photo-profil-placeholder.jpg'

const ProfilePage = () => {
  return (
    <div class="content">
      <Head />
      <Header />
      <section class="hero is-small is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Laissez-moi me présenter !</h1>
            <h2 class="subtitle">Histoire d'apprendre à se connaître.</h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container ">
          <div class="columns">
            <div class="column is-one-third">
              <img src={PortraitProfil} alt="Yanis Abounacer" />
            </div>
            <div class="column is-two-third">
              <h2 class="title">Pour faire court ...</h2>
              <p>
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
              <p>
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
              <p>
                Il a ensuite fallu choisir une spécialité et la versatilité du
                web m'a poussé à choisir un Master sur le sujet. J'ai appris
                comment bâtir un framework web, optimiser le référencement d'un
                site internet, comprendre les mécanismes de fonctionnement des
                moteurs de recherche et produire des interfaces web dans des
                clients lourds.
              </p>
              <p>
                Vous souhaitez en savoir plus sur la suite de mon parcours ?
                Découvrez les projets que j'ai accompagné !
              </p>
              <div class="columns">
                <div class="column is-half">
                  <div id="skills">
                    <div class="skillbar">
                      <div id="HTML">
                        <span class="skill-area ">HTML - CSS</span>
                        <span class="separator">•</span>
                        <span class="percent-text ">100%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="JS">
                        <span class="skill-area ">JavaScript</span>
                        <span class="separator">•</span>
                        <span class="PercentText ">70%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="PHP">
                        <span class="skill-area ">PHP</span>
                        <span class="separator">•</span>
                        <span class="PercentText ">40%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="Python">
                        <span class="skill-area ">Python</span>
                        <span class="separator">•</span>
                        <span class="PercentText ">40%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="MySQL">
                        <span class="skill-area ">MySQL</span>
                        <span class="separator">•</span>
                        <span class="PercentText ">40%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="MongoDB">
                        <span class="skill-area ">MongoDB</span>
                        <span class="separator">•</span>
                        <span class="PercentText ">40%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="C#">
                        <span class="skill-area ">C#</span>
                        <span class="separator">•</span>
                        <span class="PercentText ">40%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="columns">
                    <div class="column">
                      <p>Frameworks</p>
                      <div class="columns">
                        <div class="column">
                          <p>React</p>
                        </div>
                        <div class="column">
                          <p>Gatsby</p>
                        </div>
                        <div class="column">
                          <p>Bulma</p>
                        </div>
                        <div class="column">
                          <p>Laravel</p>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <p>Outils créatifs</p>
                      <div class="columns">
                        <div class="column">
                          <p>Adobe Creative Suite</p>
                        </div>
                        <div class="column">
                          <p>Paint.net</p>
                        </div>
                        <div class="column">
                          <p>Cubase</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <p>Outils de développement</p>
                      <div class="columns">
                        <div class="column">
                          <p>Visual Studio / Code</p>
                        </div>
                        <div class="column">
                          <p>GitHub</p>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <p>Outils de gestion de projet</p>
                      <div class="columns">
                        <div class="column">
                          <p>Project</p>
                        </div>
                        <div class="column">
                          <p>Office 365</p>
                        </div>
                        <div class="column">
                          <p>Miro</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="is-divider"></div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <Tiles />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProfilePage
