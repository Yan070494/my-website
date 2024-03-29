import React from 'react'
import '../global-style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Head from '../../components/head'

// Images
import PhotoEquipe from '../../images/projets/unitedmanagers/equipe.jpg'
import HeroBackground from '../../images/projets/unitedmanagers/unitedmanagers-hero.jpg'

//Carousel

const UnitedManagersPage = () => {
  return (
    <div className="content">
      <Head
        title="United Managers - Projet - Yanis Abounacer | Chef de Projet, Développeur et Entrepreneur"
        description="Plateforme de coaching collaborative, United Managers allie la passion du sport à l'intelligence collective au sein d'une web application."
      />
      <Header />
      <section>
        <img src={HeroBackground} />
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">Le projet</h2>
          <hr />
          <div className="columns is-variable is-8">
            <div className="column">
              <p className="is-size-5-desktop">
                United Managers est un projet d'envergure à la croisée des
                chemins entre un réseau social et une simulation sportive. Ici,
                une communauté d'utilisateurs inscrits prennent les décisions
                qui reviendraient normalement à l'entraîneur de l'équipe. Pour
                ce faire, chaque utilisateur vote pour l'option qu'il trouve la
                plus pertinente. Avant, pendant et après le match, les
                utilisateurs ont toute latitude dans la gestion de l'équipe.
              </p>
              <p className="is-size-5-desktop">
                Le concept avait déjà été expérimenté en 2002 sous un autre nom
                : le Web Football Club. L'avènement du web social et d'outils de
                monitoring pointus couplés à des interfaces web facilement
                intégrable a finalement permis à ce projet passionnant d'être
                lancé en 2018.
              </p>
            </div>
            <div className="column has-text-centered">
              <img
                src={PhotoEquipe}
                alt="Équipe Avant-Garde Caennaise by United Managers"
              />
              <span className="subtitle is-size-6">
                Photo officielle de{' '}
                <a href="https://www.agcaenfootball.com/" target="_blank">
                  l'équipe de Football de l'Avant-Garde Caennaise
                </a>{' '}
                by{' '}
                <a href="https://app.unitedmanagers.com/" target="_blank">
                  United Managers
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section ">
        <div className="container">
          <div className="column is-hidden-desktop is-hidden-tablet">
            <h2 className="title has-text-centered">La démarche</h2>
          </div>
          <div className="columns is-hidden-mobile">
            <div className="column">
              <h2 className="title has-text-centered">Les missions</h2>
            </div>
            <div className="column">
              <h2 className="title has-text-centered">La méthode</h2>
            </div>
          </div>
          <hr className="is-marginless" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column">
              <h3>1. Comprendre les attentes</h3>
              <p className="subtitle">
                Pourquoi vouloir confier la gestion d'une équipe à une
                communauté en ligne ?
              </p>
              <p>
                La question peut sembler simple, mais elle amène des réponses
                complexes. C'est à ce moment que nous avons pu organiser des
                workshops de travail et explorer les idées à mettre en oeuvre.
              </p>
            </div>
            <div className="column">
              <h3 className="title">Organiser un workshop</h3>
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
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column">
              <h3>2. Définir des objectifs</h3>
              <p className="subtitle">
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
            <div className="column">
              <h3 className="title">Construire un backlog</h3>
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
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column">
              <h3>3. Planifier le projet</h3>
              <p className="subtitle">
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
            <div className="column">
              <h3 className="title">Créer des sprints</h3>
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
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column">
              <h3>4. Valider le socle technologique</h3>
              <p className="subtitle">
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
            <div className="column">
              <h3 className="title">Prototyper et itérer</h3>
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
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column">
              <h3>5. Collaborer au Game Design</h3>
              <p className="subtitle">
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
            <div className="column">
              <h3 className="title">Playtester et simuler</h3>
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
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column">
              <h3>6. Créer un modèle économique</h3>
              <p className="subtitle">
                Quelle stratégie de monétisation adopter ?
              </p>
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
            <div className="column">
              <h3 className="title">Créer des personas</h3>
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
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column">
              <h3>7. Superviser l'UI - UX</h3>
              <p className="subtitle">
                Quel contexte pour quelle information ?
              </p>
              <p>
                L'expérience de l'utilisateur est le point clé d'un projet comme
                celui de United Managers. Aussi bon soit le concept, une
                exécution inadaptée lui portera préjudice. Avec l'aide d'un
                ergo-designer expérimenté, United Managers a profité d'un
                travail sur l'expérience et les interfaces poussé.
              </p>
            </div>
            <div className="column">
              <h3 className="title">Envisager l'expérience comme un flux</h3>
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

export default UnitedManagersPage
