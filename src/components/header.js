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
            to="/profil"
            class="navbar-item"
            activeClassName="is-active navbar-item"
          >
            <span class="icon is-medium has-text-primary">
              <i class="fas fa-smile"></i>
            </span>
            <span>Mon profil</span>
          </Link>
          <div
            class="navbar-item has-dropdown is-hoverable"
            activeClassName="is-active navbar-item"
          >
            <a class="navbar-link" href="/projets">
              <span class="icon is-medium">
                <i class="fas fa-star"></i>
              </span>
              <span>Projets</span>
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/projets/unitedmanagers/">
                <span class="icon is-medium">
                  <i class="fas fa-futbol"></i>
                </span>
                <span>United Managers</span>
              </a>
              <a class="navbar-item" href="/projets/ldlc/">
                <span class="icon is-medium">
                  <i class="fas fa-desktop"></i>
                </span>
                <span>LDLC</span>
              </a>
              <a class="navbar-item" href="/projets/crossplay/">
                <span class="icon is-medium">
                  <i class="fas fa-gamepad"></i>
                </span>
                <span>CrossPlay</span>
              </a>
            </div>
          </div>

          <Link
            to="/blog"
            class="navbar-item"
            activeClassName="is-active navbar-item"
          >
            <span class="icon is-medium">
              <i class="fas fa-comment-dots"></i>
            </span>
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
)
