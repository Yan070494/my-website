import React from 'react'
import './global-style.scss'
import Header from '../components/header'
import { Link } from 'gatsby'
import FontAwesome from 'react-fontawesome'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <div className="content">
      <section className="hero hero-bg home-desktop is-fullheight is-hidden-touch">
        <div className="hero-head"></div>
        <Head
          title="Yanis Abounacer | Chef de Projet, Développeur et Entrepreneur"
          description="Parce que chaque projet est unique, j'accompagne les porteurs de projet dans leurs démarches de l'idée jusqu'à la concrétisation. Curieux par nature, j'aime sortir de ma zone de confort et découvrir de nouveaux univers."
        />
        <Header active="0" />
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-5 background-blured has-text-centered">
                <div className="column"></div>
                <p className="title is-size-1 has-text-white">
                  Hello, je suis Yanis !
                </p>
                <p className="subtitle has-text-white">
                  Comment puis-je vous aider ?
                </p>
                <Link to="/profil">
                  <button className="button">
                    <span className="icon is-medium profile-color">
                      <i className="fas fa-user-alt"></i>
                    </span>
                    <span>&nbsp;</span>
                    Mon profil
                  </button>
                </Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to="/projets">
                  <button className="button">
                    <span className="icon is-medium project-color">
                      <i className="fas fa-star"></i>
                    </span>
                    <span>&nbsp;</span>Mes projets
                  </button>
                </Link>
                <div className="column"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero hero-bg home-touch is-fullheight is-hidden-desktop">
        <div className="hero-head"></div>
        <Head title="Yanis Abounacer : Chef de Projet, Développeur et Entrepreneur" />
        <Header active="0" />
        <div className="hero-body">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column">
                <p className="title is-size-1 has-text-white">
                  Hello, je suis Yanis !
                </p>
                <p className="subtitle has-text-white">
                  Comment puis-je vous aider ?
                </p>
                <div className="button-tablet-desktop is-hidden-mobile">
                  <Link to="/profil">
                    <button className="button">
                      <span className="icon is-medium profile-color">
                        <i className="fas fa-user-alt"></i>
                      </span>
                      <span>&nbsp;</span>
                      Mon profil
                    </button>
                  </Link>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <Link to="/projets">
                    <button className="button">
                      <span className="icon is-medium project-color">
                        <i className="fas fa-star"></i>
                      </span>
                      <span>&nbsp;</span>Mes projets
                    </button>
                  </Link>
                </div>
                <div className="button-tablet-desktop is-hidden-tablet is-hidden-desktop column">
                  <Link to="/profil">
                    <button className="button">
                      <span className="icon is-medium profile-color">
                        <i className="fas fa-user-alt"></i>
                      </span>
                      <span>&nbsp;</span>
                      Mon profil
                    </button>
                  </Link>
                </div>
                <div className="button-tablet-desktop is-hidden-tablet is-hidden-desktop column">
                  <Link to="/projets">
                    <button className="button">
                      <span className="icon is-medium project-color">
                        <i className="fas fa-star"></i>
                      </span>
                      <span>&nbsp;</span>Mes projets
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
