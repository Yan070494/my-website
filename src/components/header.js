import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item"
          activeclassname="is-active navbar-item"
        >
          <span className="is-size-5">Yanis Abounacer</span>
        </Link>
        <span className="navbar-burger burger" data-target="navbarMenuHeroB">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroB" className="navbar-menu">
        <div className="navbar-end">
          <Link
            to="/profil"
            className="navbar-item"
            activeclassname="is-active navbar-item"
          >
            <span className="icon is-medium profile-color">
              <i className="fas fa-user-alt"></i>
            </span>
            <span>Profil</span>
          </Link>
          <div
            className="navbar-item has-dropdown is-hoverable"
            activeclassname="is-active navbar-item"
          >
            <a className="navbar-link" href="/projets">
              <span className="icon is-medium project-color">
                <i className="fas fa-star"></i>
              </span>
              <span>Projets</span>
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="/projets/unitedmanagers/">
                <span className="icon is-medium">
                  <i className="fas fa-futbol"></i>
                </span>
                <span>United Managers</span>
              </a>
              <a className="navbar-item" href="/projets/ldlc/">
                <span className="icon is-medium">
                  <i className="fas fa-desktop"></i>
                </span>
                <span>LDLC</span>
              </a>
              <a className="navbar-item" href="/projets/crossplay/">
                <span className="icon is-medium">
                  <i className="fas fa-gamepad"></i>
                </span>
                <span>CrossPlay</span>
              </a>
            </div>
          </div>

          <Link
            to="/blog"
            className="navbar-item"
            activeclassname="is-active navbar-item"
          >
            <span className="icon is-medium blog-color">
              <i className="fas fa-comment-dots"></i>
            </span>
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
)
