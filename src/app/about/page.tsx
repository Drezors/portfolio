'use client';

import Navigation from '@/components/navigation/navigation';
import { motion } from 'framer-motion';
import { FaThumbsUp } from 'react-icons/fa';
import { FaClock, FaEarListen, FaRocket } from 'react-icons/fa6';

export default function About() {
  return (
    <>
      <Navigation />
      <div className=''>
        <div className='h-[50vh] px-8 py-20 bg-cyan-700 flex flex-row justify-center items-center'>
          <h1 className='font-bold text-2xl'>À propos</h1>
        </div>
        <section className='flex flex-row justify-between items-center px-20 py-14 gap-20'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-2xl'>Présentation générale</h2>

            <p>Concevoir des applications ne consiste pas uniquement à produire du code, mais à répondre à des problématiques concrètes avec des solutions fiables, lisibles et durables.</p>

            <p>Une approche centrée sur l’utilisateur et la simplicité guide chaque projet. L’objectif est de proposer des interfaces compréhensibles, performantes et efficaces, sans complexité inutile.</p>

            <p>Le parcours s’est construit entre apprentissage autodidacte et formation académique, puis consolidé par une expérience en alternance confrontée à des enjeux réels.</p>

            <p>
              Une spécialisation en <span className='font-bold'>développement front-end</span> s’est imposée, avec un intérêt particulier pour la conception de <span className='font-bold'>sites web</span>, <span className='font-bold'>applications web</span> et{' '}
              <span className='font-bold'>applications mobiles</span>.
            </p>

            <p>
              En parallèle, une activité <span className='font-bold'>freelance</span> permet d’aborder les projets avec une vision plus globale : compréhension des besoins, contraintes techniques et enjeux utilisateurs.
            </p>
          </div>

          <img src='/profile_image.jpg' className='w-40 h-40 rounded-full ml-3' alt='Thomas Gonthier' />
        </section>
        <section className='flex flex-row justify-between items-center px-20 py-14 gap-20'>
          <div className='flex flex-col gap-8'>
            <h2 className='font-semibold text-2xl'>Mes valeurs</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 flex-row gap-12 justify-around items-center'>
              <div className='flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <FaThumbsUp className='text-4xl' />
                </motion.div>
                <h3 className='text-lg font-semibold'>La simplicité</h3>
                <p>Réduire la complexité permet d’améliorer immédiatement la compréhension et l’efficacité d’un produit.</p>
              </div>

              <div className='flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <FaClock className='text-4xl' />
                </motion.div>
                <h3 className='text-lg font-semibold'>La flexibilité</h3>
                <p>S’adapter rapidement aux contraintes techniques et aux imprévus est essentiel pour maintenir la qualité et la continuité d’un projet.</p>
              </div>

              <div className='flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <FaEarListen className='text-4xl' />
                </motion.div>
                <h3 className='text-lg font-semibold'>L'écoute</h3>
                <p>Comprendre les besoins réels des utilisateurs et des clients permet de concevoir des solutions pertinentes et adaptées.</p>
              </div>

              <div className='flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <FaRocket className='text-4xl' />
                </motion.div>
                <h3 className='text-lg font-semibold'>La curiosité</h3>
                <p>Maintenir une veille constante permet d’intégrer des solutions modernes et d’éviter l’obsolescence technique.</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-semibold'>La simplicité</h3>
              <p>Dans le cadre de mon alternance sur le projet TousAuMarché, j’ai été confronté à une problématique concrète : la gestion administrative des marchés, fortement dépendante de processus papier, complexes et chronophages.</p>
              <p>L’enjeu consistait à comprendre les besoins réels des utilisateurs, notamment du côté des services municipaux, afin de transformer ces contraintes en une solution numérique claire et exploitable.</p>
              <p>Une contribution directe a été apportée à la conception d’un outil permettant de dématérialiser plusieurs processus, notamment la gestion des candidatures aux marchés événementiels, le suivi des exposants et les encaissements.</p>
              <p>
                Cette expérience a renforcé une conviction essentielle : simplifier un système ne signifie pas le réduire, mais le rendre compréhensible, efficace et adapté à ses utilisateurs. Cela implique une collaboration étroite entre les concepteurs et les utilisateurs finaux, afin de
                construire des solutions réellement utiles sur le terrain.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-semibold'>La flexibilité</h3>
              <p>Dans un projet, les contraintes évoluent en permanence : délais, besoins utilisateurs, priorités techniques. S’adapter à ces variations est essentiel pour garantir la continuité et la réussite d’un produit.</p>
              <p>
                Cette flexibilité se traduit par une capacité à s’impliquer au-delà du développement lorsque cela est nécessaire. Que ce soit pour échanger avec des utilisateurs, comprendre des problématiques métier ou intervenir sur des aspects liés à la communication ou au déploiement, l’objectif
                reste le même : faire avancer le projet de manière cohérente et efficace.
              </p>
              <p>Sans être expert dans tous les domaines, une ouverture aux autres aspects d’un projet permet de mieux comprendre les enjeux globaux et d’apporter des réponses plus pertinentes.</p>
              <p>Cette approche implique également une forte disponibilité et un engagement constant : un projet engagé doit être mené à terme avec sérieux, en s’adaptant aux contraintes rencontrées jusqu’à l’obtention d’un résultat satisfaisant.</p>
              <p>
                Cette capacité d’adaptation a été particulièrement développée dans le cadre d’une alternance au sein d’une structure de petite taille, où les rôles ne sont pas strictement définis. Ce contexte a nécessité d’intervenir sur différents aspects du projet, au-delà du développement, et a
                permis de renforcer une approche polyvalente et orientée résultat.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-semibold'>L'écoute</h3>
              <p>Comprendre un besoin ne consiste pas uniquement à recueillir une demande, mais à en analyser les enjeux réels afin de proposer une solution adaptée et pertinente.</p>
              <p>La conception d’un outil repose donc avant tout sur une phase d’échange avec les utilisateurs. Ces interactions permettent de clarifier les attentes, d’identifier les contraintes et d’éviter la conception de solutions déconnectées de la réalité du terrain.</p>
              <p>Cette approche a notamment été appliquée dans le cadre du projet TousAuMarché, où des échanges réguliers, sur le terrain ou à distance, ont permis de qualifier précisément les besoins avant toute phase de développement.</p>
              <p>Concevoir sans cette phase d’écoute revient à produire des solutions centrées sur des choix techniques plutôt que sur des usages réels, ce qui limite fortement leur efficacité.</p>
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-semibold'>La curiosité</h3>
              <p>Maintenir une veille constante est essentiel pour garantir la pertinence et la durabilité des solutions développées.</p>
              <p>Dans un environnement où les technologies évoluent rapidement, il ne s’agit pas de suivre chaque nouveauté, mais de comprendre les outils utilisés, leurs limites et leurs évolutions. Cette démarche permet d’éviter des choix techniques obsolètes ou inadaptés.</p>
              <p>L’apprentissage passe notamment par la lecture de documentation et l’approfondissement des concepts. Contrairement à une idée répandue, cette phase n’est pas une perte de temps, mais un investissement nécessaire pour produire des solutions fiables et maîtrisées.</p>
              <p>Cette curiosité s’inscrit dans une volonté de progresser continuellement, en privilégiant la compréhension plutôt que l’utilisation superficielle des technologies.</p>
            </div>
          </div>
        </section>
        <section className='flex flex-col px-20 py-14 gap-4'>
          <h2 className='font-semibold text-2xl'>Projet professionnel</h2>
          <p>Le projet professionnel s’inscrit dans la continuité de l’expérience actuelle réalisée au sein de l’entreprise TousAuMarché, dans le cadre d’une alternance où le rôle de développement est occupé de manière quasi exclusive au sein d’une structure de petite taille.</p>
          <p>
            Cette configuration permet une exposition directe à l’ensemble du cycle de vie d’un projet : compréhension des besoins, conception, développement et mise en production. Elle offre également une proximité avec un profil technique expérimenté, facilitant une montée en compétence
            progressive vers des responsabilités de type Lead Developer ou CTO.
          </p>
          <p>L’objectif est d’évoluer vers un rôle décisionnel, capable de structurer des solutions techniques et d’orienter les choix d’architecture et de développement en fonction des enjeux réels du terrain.</p>
          <p>
            Au-delà de la dimension technique, l’intérêt principal réside dans la résolution de problématiques concrètes. Le contexte des marchés, présent dans l’environnement personnel depuis l’enfance, constitue un domaine particulièrement parlant et motivant, notamment en lien avec les
            problématiques de gestion, d’organisation et de digitalisation déjà adressées dans le projet actuel.
          </p>
          <p>En parallèle, une activité de freelance est maintenue de manière ponctuelle, principalement orientée vers la création de sites web. Celle-ci n’est pas envisagée comme une activité principale, mais comme une pratique complémentaire.</p>
          <p>L’orientation générale reste claire : privilégier les projets où la compréhension du terrain et la résolution de problèmes concrets priment sur l’exécution technique pure.</p>{' '}
        </section>
        <section className='flex flex-col px-20 py-14 gap-10'>
          <h2 className='font-bold text-2xl'>Qualités humaines</h2>

          <p>La rigueur permet de produire des solutions fiables et maintenables dans le temps.</p>

          <p>L’autonomie, développée notamment par un apprentissage en partie autodidacte, facilite l’adaptation à de nouveaux environnements techniques.</p>

          <p>La capacité d’analyse permet d’identifier rapidement les problèmes et de proposer des solutions efficaces.</p>

          <p>L’implication dans les projets garantit une attention particulière aux détails et aux objectifs définis.</p>
        </section>
        <section className='flex flex-col px-20 py-14 gap-10'>
          <h2 className='font-bold text-2xl'>Centres d’intérêt</h2>

          <p>Un intérêt marqué pour les technologies numériques et les innovations permet de rester en phase avec les évolutions du secteur.</p>

          <p>L’analyse de produits existants, l’exploration de nouvelles interfaces et l’expérimentation personnelle contribuent à enrichir les compétences et la vision du développement.</p>
        </section>
        {/* <section className='flex flex-col lg:flex-row justify-between items-center px-8 sm:px-16 lg:px-60 py-14 gap-20'>
          <div className='flex flex-col gap-4 my-4 px-8 py-10 w-full'>
            <h3 className='text-xl font-bold'>Mes compétences</h3>
            <span className='bg-indigo-100 dark:bg-indigo-200 text-indigo-700 px-3 text-sm flex items-center justify-center w-fit rounded-full'>Toujours en apprentissage</span>
            <SkillsContainer />
          </div>
        </section> */}
      </div>
    </>
  );
}
