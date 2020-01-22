import React from 'react'
import '../global-style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Head from '../../components/head'

// Images

import HeroBackground from '../../images/projets/crossplay/crossplay-hero.png'

const CrossPlayPage = () => {
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
          <div class="columns is-variable is-8">
            <div class="column">
              <p class="is-size-5">
                CrossPlay est un site web traitant des jeux vidéo et de la
                technologie où tous les contributeurs sont des gens comme vous
                et moi. Pas de journalistes, une ligne éditoriale libre et des
                opinions qui n'engagent que les auteurs des articles.
              </p>
              <p class="is-size-5">
                Toute la force du concept réside dans la capacité de l'équipe à
                produire de nouveaux formats régulièrement à des fins
                d'expérimentations. Sur les réseaux sociaux, YouTube ou les
                plateforme de livestreaming, l'équipe de CrossPlay teste et
                apprend depuis 3 ans au travers de nouveaux contenus
                hebdomadaires. Aujourd'hui, la plateforme dénombre plus de 12
                500 visiteurs chaque année.
              </p>
            </div>
            <div class="column has-text-centered">
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
          <div class="columns ">
            <div class="column">
              <h2 class="title has-text-centered">Les missions</h2>
            </div>
            <div class="column">
              <h2 class="title has-text-centered">La méthode</h2>
            </div>
          </div>
          <hr class="is-marginless" />
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
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
            <div class="column">
              <h3 class="title">Organiser un workshop</h3>
              <p>
                Un workshop consiste en une session de travail à durée
                déterminée durant laquelle une ou plusieurs personnes cherchent
                à déterminer la meilleure réponse à une question. À l'aide
                d'activités agiles comme le post-up, le brainstorming et le
                vote, il est possible d'aboutir à une proposition de valeur et
                un business modèle cohérent.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
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
            <div class="column">
              <h3 class="title">Construire un backlog</h3>
              <p>
                Le backlog agile permet de connecter les équipes informatiques
                aux attentes du client. Il s'agit d'un document unique où toutes
                les fonctionnalités sont clairement décrites, documentés et
                priorisés. Il évolue au fil du temps selon l'avancée de l'équipe
                de développement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
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
            <div class="column">
              <h3 class="title">Créer des sprints</h3>
              <p>
                Un sprint est correspond à une période de temps dédié à
                l'accomplissement d'un ou plusieurs objectifs. Les sprints
                permettent de maîtrise l'avancée du développement et d'opérer
                des changements dans la direction de projet sans casser le
                travail accompli. Les sprints dépendent directement des
                priorités indiquées dans le backlog.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
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
            <div class="column">
              <h3 class="title">Prototyper et itérer</h3>
              <p>
                Le prototypage permet au client de voir son concept à l'oeuvre
                de la façon la plus rudimentaire et rapide possible. Pour
                l'équipe de développement, c'est un moyen peu couteux d'éprouver
                une technologie et de valider un produit minimum viable. Durant
                la phase de prototypage, plusieurs prototypes sont créés avec
                des corrections et améliorations. Chaque version correspond à
                une itération.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
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
            <div class="column">
              <h3 class="title">Playtester et simuler</h3>
              <p>
                Créer un système jeu avec des objectifs de rétentions implique
                de tester régulièrement le système en conditions réelles.
                Plusieurs systèmes différents basés sur les règles du football,
                les choix d'un entraîneur professionnel et les principes de game
                design du jeu de rôle et simulation ont servis de base au
                travail accompli pour United Managers.
              </p>
            </div>
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
            <div class="column">
              <h3 class="title">Créer des personas</h3>
              <p>
                Le modèle économique dépend de la cible visée et des attentes du
                client. Il a donc fallu se projeter sur le profil des joueurs
                visés par United Managers et analyser les modèles économiques
                les plus susceptibles de générer des revenus. Pas moins d'une
                dizaine de modèles différents ont été construits avant de mettre
                en place celui utilisé actuellement.
              </p>
            </div>
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
            <div class="column">
              <h3 class="title">Envisager l'expérience comme un flux</h3>
              <p>
                L'ensemble des interfaces et interactions constituent un flux de
                pensées et d'émotions qu'il nous faut maîtriser à toute les
                étapes de l'expérience. L'utilisateur doit avoir accès aux
                informations qui sont importantes pour lui sans se sentir
                innondé. Dès lors, l'expérience n'est plus une suite d'écran
                mais un flux continue d'informations qui doivent être
                structurées en fonction du contexte.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default CrossPlayPage
