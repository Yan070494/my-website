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
            <div class="column is-half">
              <p class="is-size-5">
                CrossPlay est un site web, dont je suis le fondateur, traitant
                des jeux vidéo et de la technologie où tous les contributeurs
                sont des gens comme vous et moi. Pas de journalistes, une ligne
                éditoriale libre et des opinions qui n'engagent que les auteurs
                des articles.
              </p>
              <p class="is-size-5">
                Toute la force du concept réside dans la capacité de l'équipe à
                produire de nouveaux formats régulièrement à des fins
                d'expérimentations. Sur les réseaux sociaux, YouTube ou les
                plateforme de livestreaming, l'équipe de CrossPlay teste et
                apprend depuis 3 ans au travers de nouveaux contenus
                hebdomadaires.
              </p>
              <p class="is-size-5">
                Aujourd'hui, la plateforme dénombre plus de 12 500 visiteurs
                chaque année dans le monde entier.
              </p>
            </div>
            <div class="column has-text-centered">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/KNxBrkVZKrs"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <span class="subtitle is-size-6">
                Photo officielle de{' '}
                <a href="https://www.agcaenfootball.com/">
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
              <h3>1. Recruter une équipe de contributeurs</h3>
              <p class="subtitle">Comment impliquer une équipe bénévole ?</p>
              <p>
                CrossPlay n'est pas une entité légale. Il ne s'agit pas d'une
                société, d'une association ou même d'une marque. Tous ceux qui
                participent le font volontairement, sans contre-partie sur leur
                temps libre et avec leurs moyens. Bâtir et engager une équipe
                dans ces conditions peut sembler impossible, pourtant, c'est ce
                que nous faisons depuis 3 ans maintenant.
              </p>
            </div>
            <div class="column">
              <h3 class="title">Donner à chacun le pouvoir d'en faire plus</h3>
              <p>
                Un passionné ne compte ni son temps, ni son énergie. Dès lors,
                l'impliquer consiste à trouver un moyen pour lui de se réaliser
                au travers d'une mission motivante et ambitieuse. Créer un
                programme, défendre son point de vue, publier du contenu sont
                autant de récompenses pour quiquonque se passionne pour un
                sujet. Les obstacles restants sont techniques ou financiers :
                des aspects faciles à contourner avec beaucoup de motivation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column">
              <h3>2. Créer le site internet</h3>
              <p class="subtitle">Quel est l'objectif du site ?</p>
              <p>
                Au sein de l'équipe, nous sommes tous technophiles ou
                informaticiens professionnel. Créer un site internet ne
                représente pas un défi majeur. Pourtant, nous avons choisi
                d'utiliser un CMS plutôt que de créer notre propre plateforme.
              </p>
              <p>
                De cette façon, nous pouvons plus facilement nous concentrer sur
                le contenu et moins sur la technique. Nos visiteurs ne viennent
                pas pour voir une vitrine technologique, il vienne lire, voir et
                intéragir avec nos contenus.
              </p>
            </div>
            <div class="column">
              <h3 class="title">Exploiter des technologies éprouvées</h3>
              <p>
                L'excellence technologique n'est pas l'objectif d'un média
                d'opinion. C'est la raison pour laquelle nous avons choisi
                d'utiliser toutes les technologies existantes à notre
                disposition plutôt que de réinventer ce qui existe déjà.
              </p>
              <p>
                Le temps passé sur le site a d'abord servi à créer une identité
                graphique, choisir la ligne éditorial et produire des contenus
                que nous ne trouvions pas ailleurs. Aujourd'hui, nous continuons
                d'utiliser l'existant dans nos nouveaux programmes mais chaque
                format est conçu de toute pièce par nos soins.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column">
              <h3>3. Promouvoir nos contenus sur les réseaux sociaux</h3>
              <p class="subtitle">
                Quelle stratégie sociale pour atteindre nos lecteurs ?
              </p>
              <p>
                Les contenus seuls ne seront pas suffisant pour attirer de
                nouveaux lecteurs. Nous avons besoin de créer une communauté et
                de partager des temps forts avec elle. C'est la raison pour
                laquelle nous alimentons régulièrement nos pages sociales, non
                seulement avec nos contenus, mais également avec tout ce qui
                nous intéresse à titre personnel.
              </p>
            </div>
            <div class="column">
              <h3 class="title">
                Donner des directions plutôt que tout planifier
              </h3>
              <p>
                Notre stratégie sociale a consisté pendant longtemps à planifier
                la publication de contenus des semaines en avance. Nous avions
                une routine et l'appliquions rigoureusement. Cette stratégie a
                fonctionné quelques temps avant de s'éssoufler.
              </p>
              <p>
                Nous avons donc discuté et en sommes arrivés à la conclusion que
                notre manque de spontanéité nuisait à notre visibilité. En
                réaction, nous avons mis en place une nouvelle stratégie :
                chaque contributeur dispose d'un accès à nos pages sociales et
                peut librement publier du contenu qui a retenu son attention.
                Les résultats sont impressionnants et la charge de travail bien
                moins élevée pour tout le monde.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column">
              <h3>4. Créer des formats</h3>
              <p class="subtitle">Qu'avons-nous envie de faire ?</p>
              <p>
                Cette question pilote l'ensemble de nos activités. Nous faisons
                ce qui nous intéresse plutôt que de suivre les vagues de
                l'actualité. Nos formats évoluent régulièrement selon les
                retours des lecteurs mais aussi des contributeurs.
              </p>
              <p>
                La création d'un format part toujours d'un constat : le sujet ou
                le traitement de l'information n'a jamais été abordé de cette
                façon auparavant. À nous ensuite de nous poser les bonnes
                questions pour créer le bon format.
              </p>
            </div>
            <div class="column">
              <h3 class="title">Incuber un pilote pendant plusieurs mois</h3>
              <p>
                Tous nos formats débutent avec un pilote au sein de l'équipe. Ce
                pilote nous permets d'avoir un premier retour et des pistes
                d'amélioration. En moyenne, un format reste en incubation durant
                6 mois avant d'être diffusé pour la première fois.{' '}
              </p>
              <p>
                Cela peut sembler très long, mais ce temps est nécessaire pour
                prendre du recul et parfois changer radicalement de vision
                pendant le processus de création.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column">
              <h3>5. Tisser des liens</h3>
              <p class="subtitle">Comment créer de la cohésion d'équipe ?</p>
              <p>
                Le Team Building consiste à renforcer les liens au sein de
                l'équipe en se donnant du temps pour parler d'autre chose que de
                nos activités. Les contributeurs sont avant tout des amis, une
                famille, qui partage les bons comme les mauvais moments.
              </p>
            </div>
            <div class="column">
              <h3 class="title">Faire du Team Building</h3>
              <p>
                Chaque semaine, je consacre du temps, en équipe ou
                individuellement aux différents contributeurs pour partager leur
                actualité. L'occasion de discuter de sujets plus personnels, de
                jouer, de faire un bon repas également et surtout de resserer
                les liens.
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
