import React from 'react'

export default () => (
  <footer className="footer">
    <div className="container is-hidden-mobile">
      <div className="columns">
        <div className="column is-4 is-paddingless has-text-centered">
          <h6>Mes réseaux sociaux</h6>
          <a href="https://www.facebook.com/yanis.abounacer" target="_blank">
            <span className="icon facebook-icon is-large is-size-2">
              <i className="fab fa-facebook-square"></i>
            </span>
          </a>
          <a href="https://twitter.com/YanisAbounacer" target="_blank">
            <span className="icon twitter-icon is-large is-size-2">
              <i className="fab fa-twitter-square"></i>
            </span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCutAlh2dIFoRYdxCFZgsong"
            target="_blank"
          >
            <span className="icon youtube-icon is-large is-size-2">
              <i className="fab fa-youtube-square"></i>
            </span>
          </a>
        </div>
        <div className="column is-paddingless has-text-centered is-4">
          <h4>Envie de discuter ?</h4>
          <button className="button">
            <a href="mailto:yanis.abounacer@outlook.fr">
              Laissez-moi un message !
            </a>
          </button>
        </div>
        <div className="column is-4 is-paddingless has-text-centered">
          <h6>Mes pages de joueur</h6>
          <a
            href="https://www.gamertagnation.com/members/siivo/"
            target="_blank"
          >
            <span className="icon xbox-icon is-large is-size-2">
              <i className="fab fa-xbox"></i>
            </span>
          </a>
          <a href="https://psnprofiles.com/YanisAbounacer" target="_blank">
            <span className="icon playstation-icon is-large is-size-2">
              <i className="fab fa-playstation"></i>
            </span>
          </a>
          <a
            href="https://steamcommunity.com/id/yanisabounacer"
            target="_blank"
          >
            <span className="icon steam-icon is-large is-size-2">
              <i className="fab fa-steam"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="container is-hidden-desktop is-hidden-tablet">
      <div className="column is-paddingless has-text-centered">
        <h4>Envie de discuter ?</h4>
        <button className="button">
          <a href="mailto:yanis.abounacer@outlook.fr">
            Laissez-moi un message !
          </a>
        </button>
      </div>
      <div className="column">
        <p className="is-size-6">&nbsp;</p>
      </div>
      <div className="column  is-paddingless has-text-centered">
        <h6>Mes réseaux sociaux</h6>
        <a href="https://www.facebook.com/yanis.abounacer" target="_blank">
          <span className="icon facebook-icon is-large is-size-2">
            <i className="fab fa-facebook-square"></i>
          </span>
        </a>
        <a href="https://twitter.com/YanisAbounacer" target="_blank">
          <span className="icon twitter-icon is-large is-size-2">
            <i className="fab fa-twitter-square"></i>
          </span>
        </a>
        <a
          href="https://www.youtube.com/channel/UCutAlh2dIFoRYdxCFZgsong"
          target="_blank"
        >
          <span className="icon youtube-icon is-large is-size-2">
            <i className="fab fa-youtube-square"></i>
          </span>
        </a>
      </div>
      <div className="column">
        <p className="is-size-6">&nbsp;</p>
      </div>
      <div className="column is-paddingless has-text-centered">
        <h6>Mes pages de joueur</h6>
        <a href="https://www.gamertagnation.com/members/siivo/" target="_blank">
          <span className="icon xbox-icon is-large is-size-2">
            <i className="fab fa-xbox"></i>
          </span>
        </a>
        <a href="https://psnprofiles.com/YanisAbounacer" target="_blank">
          <span className="icon playstation-icon is-large is-size-2">
            <i className="fab fa-playstation"></i>
          </span>
        </a>
        <a href="https://steamcommunity.com/id/yanisabounacer" target="_blank">
          <span className="icon steam-icon is-large is-size-2">
            <i className="fab fa-steam"></i>
          </span>
        </a>
      </div>
    </div>
  </footer>
)
