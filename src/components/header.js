import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <Link to="/" class="navbar-item" activeClassName="navbar-item">
          <figure class="image">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </figure>
        </Link>
        <span class="navbar-burger burger" data-target="navbarMenuHeroB">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroB" class="navbar-menu">
        <div class="navbar-end">
          <Link
            to="/"
            class="navbar-item"
            activeClassName="is-active navbar-item"
          >
            Accueil
          </Link>
          <Link
            to="/profil"
            class="navbar-item"
            activeClassName="is-active navbar-item"
          >
            Mon profil
          </Link>
          <Link
            to="/projets"
            class="navbar-item"
            activeClassName="is-active navbar-item"
          >
            Projets
          </Link>
          <Link
            to="/blog"
            class="navbar-item"
            activeClassName="is-active navbar-item"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  </nav>
)
