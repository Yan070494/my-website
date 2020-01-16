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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 class="title">
                <span class="date-title">2009 - 2012</span> • Licence en
                informatique
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <h3 class="title">
                <span class="date-title">2009 - 2012</span> • Master en
                informatique
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <div class="columns">
                <div class="column is-half">
                  <div id="skills">
                    <div class="skillbar">
                      <div id="HTML">
                        <span class="skill-area ">HTML</span>
                        <span class="separator">•</span>
                        <span class="percent-text ">100%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="CSS">
                        <span class="skill-area ">CSS/CSS3</span>
                        <span class="separator">•</span>
                        <span class="PercentText ">70%</span>
                      </div>
                    </div>
                    <div class="skillbar">
                      <div id="jQuery">
                        <span class="skill-area ">jQuery</span>
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
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <p>Outils créatifs</p>
                      <div class="columns">
                        <div class="column">
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <p>Frameworks</p>
                      <div class="columns">
                        <div class="column">
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <p>Outils créatifs</p>
                      <div class="columns">
                        <div class="column">
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
                        </div>
                        <div class="column">
                          <p>Node</p>
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
