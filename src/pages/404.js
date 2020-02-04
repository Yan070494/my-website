import React from 'react'
import './global-style.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'
import { Link } from 'gatsby'

const ErrorPage = () => {
  return (
    <div className="content">
      <section className="hero hero-bg  is-fullheight ">
        <div className="hero-head"></div>
        <Head title="Yanis Abounacer : Chef de Projet, Développeur et Entrepreneur" />
        <Header active="0" />
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered has-text-centered">
              <div className="column background-blured">
                <span className="icon is-medium project-color direction-signs ">
                  <i class="fas fa-map-signs"></i>
                </span>
                <p>&nbsp;</p>
                <p className="title is-size-1 ">Vous êtes perdu ?</p>
                <p className="subtitle ">
                  Peut-être que vous devriez{' '}
                  <Link to="/">retourner à l'accueil</Link> !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
