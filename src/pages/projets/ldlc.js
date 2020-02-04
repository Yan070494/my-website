import React from 'react'
import '../global-style.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FontAwesome from 'react-fontawesome'
import { Link } from 'gatsby'
import Head from '../../components/head'

// Images

import HeroBackground from '../../images/projets/ldlc/ldlc-hero.jpg'
import PhotoMagasin from '../../images/projets/ldlc/magasin.jpg'

const LDLCPage = () => {
  return (
    <div className="content ">
      <Head title="LDLC Caen - Projet - Yanis Abounacer" />
      <Header />
      <div className="is-hidden">
        <section>
          <img src={HeroBackground} />
        </section>
        <section className="section ">
          <div className="container">
            <h2 className="title">Le projet</h2>
            <hr />
            <div className="columns is-variable is-8">
              <div className="column">
                <p className="is-size-5-desktop">
                  LDLC est une marque spécialisée dans la vente et le conseil en
                  achats informatiques. Le Groupe LDLC a imaginé une approche
                  cross-canal grâce à son site internet et l'ensemble du réseau
                  de concept stores franchisés en France.
                </p>
                <p className="is-size-5-desktop">
                  En tant qu'entrepreneur, j'adhère à la vision qualitative des
                  activités du groupe et porte la responsabilité de l'arrivée de
                  la marque à Caen, en Normandie. Grâce à une relation de
                  partenariat avec le groupe, j'ai pu profiter d'un formidable
                  tremplin et créer ma propre société.
                </p>
                <p className="is-size-5-desktop">
                  Plus qu'un lieu de vente, le Concept Store est un lieu de
                  conseil, une zone de réparation et un endroit dédié aux
                  expériences numérique pour tous.
                </p>
              </div>
              <div className="column has-text-centered">
                <img src={PhotoMagasin} alt="Concept Store LDLC de Caen" />
                <span className="subtitle is-size-6">
                  Concept Store{' '}
                  <a href="https://www.ldlc.com/" target="_blank">
                    LDLC
                  </a>{' '}
                  de Caen
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
                <h3>1. Analyser le marché</h3>
                <p className="subtitle">
                  La zone choisie est-elle adaptée au concept LDLC ?
                </p>
                <p>
                  L'étude préalable du marché permet de mieux comprendre la zone
                  dans laquelle il est envisagé d'installer une boutique. Ce
                  document porte sur les aspects suivants :
                </p>
                <ul>
                  <li>La zone de chalandise</li>
                  <li>Le bassin de population</li>
                  <li>Les zones commerciales</li>
                  <li>La concurrence directe et indirecte</li>
                  <li>La projection du chiffre d'affaire</li>
                </ul>
              </div>
              <div className="column">
                <h3 className="title">
                  Collecter et croiser les données publiques
                </h3>
                <p>
                  L'initiative gouvernementale Open Data permet une plus grande
                  transparence ainsi qu'une réexploitation des données publiques
                  par les développeurs. Parmi les banques de données concernées,
                  celle de l'INSEE permet d'accéder librement à des études
                  nationales sur plusieurs années et des cartes dynamiques
                  dotées de nombreux filtres de tri.
                </p>
                <p>
                  L'ensemble de ces données peut ensuite être exploité pour
                  comprendre le territoire, les types de population et le
                  potentiel de la zone d'un point de vue entrepreunarial.
                </p>
                <p>
                  En complément, des données de terrain comme la fréquentation
                  d'un centre commercial ou les gammes de produits présentent en
                  magasin sont des indicateurs de valeur pour comprendre la
                  clientèle et les habitudes d'achat d'une zone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <h3>2. Construire un prévisionnel financier</h3>
                <p className="subtitle">
                  Quels sont les implications financières du projet ?
                </p>
                <p>
                  Le prévisionnel financier est un document projetant l'avenir
                  de la société sur la base d'une ou plusieurs hypothèses de
                  réussite. Il synthétise les pôles de dépenses, de revenus, et
                  donne des insights importants sur les points de vigilance à
                  anticiper. Conçu par un cabinet d'expert comptable, il
                  garantit la cohérence de la vision financière du projet.
                </p>
              </div>
              <div className="column">
                <h3 className="title">Exploiter les données du groupe</h3>
                <p>
                  L'approche cross-canal de LDLC implique la collecte de données
                  sur les ventes en France effectuées en ligne et en boutique.
                  Qui plus est, chaque boutique est tenue de communiquer son
                  bilan comptable au groupe qui dispose de données
                  supplémentaires sur l'activité et les performances réelles sur
                  le terrain. Les nouveaux franchisés peuvent ainsi s'appuyer
                  sur le retour d'expérience du réseau afin d'établir un
                  prévisionnel pragmatique.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <h3>3. Rechercher un local adapté</h3>
                <p className="subtitle">
                  Comment exploiter au mieux les ressources à notre disposition
                  ?
                </p>
                <p>
                  Chaque activité commerciale est différente. Le conseil est une
                  part importante des missions de LDLC, ce qui signifie que la
                  magasin doit être un lieu où chacun peut se sentir en
                  confiance et désamorcer les doutes et les angoisses liés à un
                  achat.
                </p>
                <p>
                  Le local idéal se détermine en fonction de son emplacement,
                  l'état de ses installations et le coûts envisagé des travaux
                  avant l'ouverture.
                </p>
              </div>
              <div className="column">
                <h3 className="title">Normaliser la recherche</h3>
                <p>
                  Les critères de recherches étant clairement définis, il est
                  possible d'avoir une approche normalisée de la recherche de
                  local. À l'aide d'un plan de recherche, chaque local sera
                  analysé sur des critères identiques afin d'établir un
                  classement qualitatif et quantitatif.
                </p>
                <p>
                  Cette démarche normalisée ne se substitut en aucun cas à
                  l'expertise d'un développeur commercial mais permet à tout le
                  monde de gagner du temps en éliminant rapidement les
                  opportunités ne correspondant pas au cadre de la recherche.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <h3>4. Respecter l'identité de LDLC</h3>
                <p className="subtitle">
                  Comment donner des points de repères reconnaissables au client
                  ?
                </p>
                <p>
                  La relation client, les références qualité, la charte
                  graphique et l'expérience globale sont autant d'éléments qui
                  définissent le concept LDLC. Le client final doit ainsi
                  retrouver ses repères indépendament de la boutique qu'il
                  visite.
                </p>
              </div>
              <div className="column">
                <h3 className="title">Adopter une démarche collaborative</h3>
                <p>
                  LDLC maîtrise son identité et veille à son respect en
                  boutique. Je suis le décisionnaire final au sein de mon
                  magasin et doit tenir compte de la réalité de mon activité.
                  C'est donc en travaillant ensemble que nous pourrons veiller à
                  créer des synérgies et tirer le meilleur partie de chacun. Se
                  rendre disponible, remonter de l'information rapidement et
                  faire preuve d'initiative sont les indicateurs d'une
                  collaboration efficace.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <h3>5. Monter en compétence avec son équipe</h3>
                <p className="subtitle">
                  Que pouvons-nous apprendre de nouveau ?
                </p>
                <p>
                  L'ensemble de l'équipe possèdes ses forces, son expérience et
                  sa vision. Néanmoins, elle n'a pas le recul d'un grand groupe
                  qui apprend depuis 20 ans à améliorer son approche.
                </p>
                <p>
                  Monter en compétence implique de comprendre les forces de
                  l'équipes mais aussi d'accepter ses faiblesses. Il est ensuite
                  possible de travailler à la transformation d'une faiblesse en
                  force afin de rendre toute l'équipe plus solide.
                </p>
              </div>
              <div className="column">
                <h3 className="title">Entrer en immersion</h3>
                <p>
                  L'une des plus formidable opportunités avec un groupe comme
                  LDLC est certainemetn celle de pouvoir suivre le quotidien des
                  franchisés sur le terrain. Grâce à une politique de mise en
                  immersion, il est possible pour une équipe de participer
                  activement à la vie d'un magasin pour en comprendre les
                  rouages et se préparer aux challenges avant d'y faire face.
                </p>
                <p>
                  Chacun des concept store a une situation différente et une
                  vision unique de son métier. Toute nouvelle immersion en
                  boutique est donc l'opportunité d'élargir son propre champ de
                  vision.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <h3>6. Créer de la valeur pour le client</h3>
                <p className="subtitle">
                  Qu'est-ce qui compte vraiment pour le client ?
                </p>
                <p>
                  De mon point de vue, la valeur d'un magasin ne se mesure pas à
                  son résultat d'exercice. Il est la concordance de la
                  satisfaction et de la fidélisation du client : la création de
                  la valeur. Créer cette valeur implique de rendre un service
                  vraiment utile à un client qui reviendra pour en avoir été
                  satisfait. Naturellement, les besoins et le contexte
                  technologique en permanente évolution implique de créer de
                  nouveaux services régulièrement pour créer de la valeur.
                </p>
              </div>
              <div className="column">
                <h3 className="title">
                  Engager le client dans un processus de retour régulier
                </h3>
                <p>
                  Il n'y a que le client qui peut attester que le service rendu
                  a de la valeur pour lui. En conséquence, lui donner la parole
                  et analyser son comportement sont autant de moyens de
                  déterminer sa satisfaction et donc la valeur des prestations.
                  Pour ce faire, il faut l'engager à communiquer autour de son
                  expérience régulièrement en l'incluant dans une démarche
                  communautaire. Les réseaux sociaux, les plateformes de
                  streaming, les évènements sont autant de moyens de partir à la
                  rencontre des clients.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <h3>7. Rendre l'expérience différenciante</h3>
                <p className="subtitle">
                  En quoi la proposition est-elle unique ?
                </p>
                <p>
                  L'expérience de l'utilisateur est le point clé d'un projet
                  comme celui de United Managers. Aussi bon soit le concept, une
                  exécution inadaptée lui portera préjudice. Avec l'aide d'un
                  ergo-designer expérimenté, United Managers a profité d'un
                  travail sur l'expérience et les interfaces poussé.
                </p>
              </div>
              <div className="column">
                <h3 className="title">Expérimenter en récompensant l'échec</h3>
                <p>
                  Essayer de se démarquer n'est pas suffisant. Il faut accepter
                  de faire ce qui n'a jamais été fait ailleurs et récompenser
                  l'échec constructif. Chaque échec est une opportunité
                  d'apprendre quelque chose à réinjecter dans l'expérimentation
                  suivante. Il s'agit donc d'une découverte qui a demandé du
                  temps, de l'énergie et de l'argent, sans nécessairement avoir
                  aboutit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="hero hero-bg is-fullheight ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered background-blured">
                <p className="title is-size-1 ">Vous êtes un peu en avance !</p>
                <p className="subtitle ">
                  Rendez-vous en fin d'année ici pour plus d'informations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LDLCPage
