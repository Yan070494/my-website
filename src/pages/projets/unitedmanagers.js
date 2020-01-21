import React from 'react'
import '../global-style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Head from '../../components/head'

// Images
import PhotoEquipe from '../../images/projets/UnitedManagers/equipe.jpg'
import HeroBackground from '../../images/projets/UnitedManagers/unitedmanagers-hero-background.png'

const UnitedManagersPage = () => {
  return (
    <div class="content">
      <Head />
      <Header />
      <section>
        <img src={HeroBackground} />
      </section>
      <section class="section">
        <div class="container">
          <h2 class="title">Le projet</h2>
          <hr />
          <div class="columns">
            <div class="column">
              <p class="is-size-5">
                United Managers est un projet d'envergure à la croisée des
                chemins entre un réseau social et une simulation sportive. Ici,
                une communauté d'utilisateurs inscrits prennent les décisions
                qui reviendraient normalement à l'entraîneur de l'équipe. Pour
                ce faire, chaque utilisateur vote pour l'option qu'il trouve la
                plus pertinente. Avant, pendant et après le match, les
                utilisateurs ont toute latitude dans la gestion de l'équipe.
              </p>
              <p class="is-size-5">
                Le concept avait déjà été expérimenté en 2002 sous un autre nom
                : le Web Football Club. L'avènement du web social et d'outils de
                monitoring pointus couplés à des interfaces web facilement
                intégrable a finalement permis à ce projet passionnant d'être
                lancé en 2018.
              </p>
            </div>
            <div class="column has-text-centered box is-paddingless">
              <img
                src={PhotoEquipe}
                alt="Équipe Avant-Garde Caennaise by United Managers"
              />
              <span class="subtitle is-size-6">
                Photo officielle de{' '}
                <a href="https://www.agcaenfootball.com/">
                  l'équipe de Football de l'Avant-Garde Caennaise
                </a>{' '}
                by <a href="https://app.unitedmanagers.com/">United Managers</a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="section ">
        <div class="container">
          <h2 class="title has-text-centered">Les missions</h2>
          <hr class="is-marginless" />
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h3>1. Comprendre les attentes</h3>
              <p class="subtitle">
                Pourquoi vouloir confier la gestion d'une équipe à une
                communauté en ligne ?
              </p>
              <p>
                La question peut sembler simple, mais elle amène des réponses
                complexes. C'est à ce moment que nous avons pu organiser des
                workshops de travail et explorer les idées à mettre en oeuvre.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h3>2. Définir des objectifs</h3>
              <p class="subtitle">
                Qu'est-ce qu'est United Managers et comment parvenir à ce
                résultat ?
              </p>
              <p>
                À partir d'ici, le travail en agilité a permis la réalisation
                d'un backlog de projet où chaque élément était clairement
                défini. C'est un outil indispensable pour donner priorité à ce
                qui compte vraiment.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h3>3. Planifier le projet</h3>
              <p class="subtitle">
                Comment exploiter au mieux les ressources à notre disposition ?
              </p>
              <p>
                Le temps, l'argent, l'énergie sont autant de ressources
                précieuses qu'il faut investir dans la création de valeur.
                Planifier l'usage des ressources, découper le travail en
                sprints, définir des milestones sont autant d'étapes vers un
                projet plus facile à suivre pour toute l'équipe.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h3>4. Valider le socle technologique</h3>
              <p class="subtitle">
                Quels sont les besoins techniques du projet ?
              </p>
              <p>
                La cible de projet est connecté, il fallait donc lui fournir une
                web application. Ce choix permet aujourd'hui à United Managers
                de centraliser ses données et de décider des interfaces qui
                pourront les exploiter. Les langages du web étant plus faciles
                d'accès, ils nécessitent donc des développeurs moins
                spécialisés.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h3>5. Collaborer au Game Design</h3>
              <p class="subtitle">
                Comment gamifier pour maximiser la fidélisation ?
              </p>
              <p>
                L'ensemble de l'expérience United Managers a été conçue avec
                l'aide d'un Game Designer professionnel et expérimenté. En tant
                que joueur, j'ai eu la chance de collaborer avec lui à la
                création du système de progression, l'arbre de choix et le
                système de récompenses de United Managers
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h3>6. Créer un modèle économique</h3>
              <p class="subtitle">Quelle stratégie de monétisation adopter ?</p>
              <p>
                La monétisation d'un service en ligne dépend des utilisateurs,
                leurs habitudes et l'offre du produit. Dans le cas de United
                Managers, le produit est radicalement nouveau, ce qui signifie
                aussi de trouver une stratégie de monétisation cohérente et
                facile à comprendre pour le joueur comme un système
                d'abonnement, des microtransactions ou l'usage d'une devise
                virtuelle.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h3>7. Superviser l'UI - UX</h3>
              <p class="subtitle">Quel contexte pour quelle information ?</p>
              <p>
                L'expérience de l'utilisateur est le point clé d'un projet comme
                celui de United Managers. Aussi bon soit le concept, une
                exécution inadaptée lui portera préjudice. Avec l'aide d'un
                ergo-designer expérimenté, United Managers a profité d'un
                travail sur l'expérience et les interfaces poussé.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default UnitedManagersPage
