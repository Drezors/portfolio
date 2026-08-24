'use client';

import ContactForm from '@/components/form/contact-form';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import ParcoursSection from '@/components/timeline/Parcours';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClock, FaEarListen, FaRocket, FaThumbsUp } from 'react-icons/fa6';

const VALUES = [
  {
    id: 'simplicity',
    icon: FaThumbsUp,
    title: 'Simplicité',
    short: 'Réduire la complexité pour rendre un produit réellement compréhensible et utilisable.',
    full: [
      'Dans le cadre de TousAuMarché, j’ai été confronté à des processus administratifs particulièrement lourds et fragmentés.',
      'L’enjeu n’était pas de reconstruire entièrement l’existant, mais de le rendre plus lisible et exploitable sans perte de fonctionnalité.',
      'Ce travail a notamment conduit à la dématérialisation de plusieurs processus critiques comme les candidatures et le suivi des exposants.',
      'Cette expérience a renforcé une conviction : la simplicité ne consiste pas à réduire un système, mais à le rendre intelligible et opérationnel dans un contexte réel.',
    ],
  },
  {
    id: 'flexibility',
    icon: FaClock,
    title: 'Flexibilité',
    short: 'S’adapter en continu aux contraintes techniques, métier et organisationnelles.',
    full: [
      'Les projets en environnement réel évoluent constamment : priorités changeantes, contraintes techniques et besoins utilisateurs mouvants.',
      'Dans ce contexte, j’ai régulièrement été amené à intervenir au-delà du périmètre strict du développement.',
      'Cela inclut des échanges directs avec les utilisateurs, des ajustements fonctionnels et des arbitrages rapides.',
      'Cette flexibilité a été particulièrement développée dans un environnement d’alternance peu cloisonné, proche des conditions d’une petite structure.',
    ],
  },
  {
    id: 'listening',
    icon: FaEarListen,
    title: 'Écoute',
    short: 'Comprendre le besoin réel avant toute solution technique.',
    full: [
      'Un besoin exprimé ne correspond pas toujours au besoin réel.',
      'Les échanges terrain permettent de révéler les contraintes implicites et les problématiques non formulées.',
      'Dans le cadre de TousAuMarché, cette phase d’écoute a permis d’éviter plusieurs erreurs de conception.',
      'Sans cette compréhension préalable, une solution technique risque d’être fonctionnelle mais inutilisable.',
    ],
  },
  {
    id: 'curiosity',
    icon: FaRocket,
    title: 'Curiosité',
    short: 'Comprendre les outils en profondeur pour construire des systèmes durables.',
    full: [
      'La veille technique permet d’éviter des choix technologiques obsolètes ou mal adaptés.',
      'Je privilégie la compréhension des outils plutôt que leur simple utilisation.',
      'Cette approche permet de construire des solutions plus robustes et évolutives.',
      'La curiosité constitue un levier direct de qualité dans la conception de systèmes logiciels.',
    ],
  },
];

export default function About() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Navigation />
      <div className='container mx-auto pb-10'>
        <div className='h-[20vh] p-8 flex flex-row justify-center items-center'>
          <h1 className='font-bold text-5xl'>À propos</h1>
        </div>
        <section className='flex flex-col md:flex-row items-start justify-between p-10 gap-10'>
          {/* TEXT */}
          <div className='flex flex-col justify-between items-start gap-4 flex-1'>
            <h2 className='font-semibold text-2xl'>Présentation générale</h2>

            <div className='flex flex-col gap-3'>
              <p>Originaire de l’île de la Réunion, j’ai grandi dans un environnement qui a renforcé ma curiosité, mon adaptabilité et ma capacité à trouver des solutions simples dans des contextes variés.</p>

              <p>Aujourd’hui, cet état d’esprit est directement appliqué dans la conception de produits digitaux centrés utilisateur.</p>
            </div>

            <div className='flex flex-col gap-3'>
              <p>Depuis 3 ans en alternance, j’ai travaillé sur plusieurs projets pour des start-up. Cette expérience m’a permis de confronter mes compétences à des besoins réels, avec des contraintes de production et d’impact utilisateur.</p>

              <p>J’ai participé à la conception et au développement de plusieurs produits, en intervenant sur l’ensemble du cycle : compréhension des besoins, conception, développement et amélioration continue.</p>

              <p>Mon objectif est de continuer dans cette direction : participer à des projets qui évoluent, qui ont un impact concret, et contribuer à leur croissance sur le long terme.</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-lg font-medium'>Développeur d’applications orienté produit</p>
              <p>Je transforme des besoins métier en applications web et mobiles claires, utiles et maintenables. L’objectif n’est pas de produire du code, mais de construire des produits compréhensibles et réellement utilisés.</p>
            </div>

            <p>
              Concevoir des applications ne consiste pas uniquement à produire du code, mais à résoudre des problématiques concrètes avec des solutions fiables, lisibles et durables.
              <br />
              Une approche centrée sur l’utilisateur et la simplicité guide chaque projet. L’objectif est de proposer des interfaces efficaces, sans complexité inutile.
              <br />
              Le parcours s’est construit entre apprentissage autodidacte, formation académique et expérience en alternance sur des projets réels.
              <br />
              Une spécialisation en <span className='font-semibold'>développement front-end</span> s’est imposée, avec un intérêt pour les <span className='font-semibold'>applications web</span>, <span className='font-semibold'>mobiles</span> et les produits digitaux orientés utilisateur.
            </p>

            <p>
              En parallèle, une activité <span className='font-semibold'>freelance</span> permet de travailler sur des projets variés, avec une vision globale : besoins métier, contraintes techniques et expérience utilisateur.
            </p>
          </div>

          {/* IMAGE */}
          <div className='flex-shrink-0 flex justify-center md:justify-end'>
            <img src='/profile_image.jpg' className='w-48 h-48 md:w-64 md:h-64 rounded-full object-cover' alt='Thomas Gonthier' />
          </div>
        </section>

        {/* Mes valeurs */}

        <section className='p-10 flex flex-col gap-6'>
          <h2 className='font-semibold text-2xl'>Mes valeurs</h2>

          <motion.div layout className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start'>
            {VALUES.map((v) => {
              const Icon = v.icon;
              const isOpen = active === v.id;

              return (
                <motion.div
                  key={v.id}
                  layout
                  onMouseEnter={() => setActive(v.id)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(isOpen ? null : v.id)}
                  className={`
            relative cursor-pointer rounded-2xl border p-6
            bg-background transition-shadow
            ${isOpen ? 'col-span-1 md:col-span-2 xl:col-span-2 shadow-2xl' : ''}
          `}
                >
                  {/* HEADER */}
                  <div className='flex flex-col gap-3'>
                    <Icon className='text-3xl' />
                    <h3 className='font-semibold text-lg'>{v.title}</h3>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>{v.short}</p>
                  </div>

                  {/* CONTENT (always visible when active, no collapse UX) */}
                  {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='mt-6 flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed'>
                      {v.full.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Mon projet professionnel et personnel */}
        <section className='flex flex-col p-10 gap-8'>
          <h2 className='font-semibold text-2xl'>Mon projet professionnel et personnel</h2>

          <p>
            Mon parcours actuel s’inscrit dans une alternance réalisée chez TousAuMarché, une startup au sein de laquelle j’évolue depuis environ deux ans. Ce choix initial était volontaire et réfléchi : il s’agissait avant tout de découvrir le fonctionnement d’une structure entrepreneuriale, d’en
            comprendre les mécanismes internes et de confronter une activité de développement à des contraintes réelles de production.
          </p>
          <p>
            Cette expérience m’a rapidement permis de dépasser une vision purement technique du développement. Le contexte d’une startup implique une forte pression sur les délais, des ressources limitées et une nécessité constante d’adaptation. Ces éléments ont mis en évidence les difficultés liées
            à la stabilité et à la pérennité d’un projet entrepreneurial, ainsi que la complexité de structurer une activité sur le long terme sans vision produit clairement définie ou suffisamment mature.
          </p>
          <p>
            Avec le recul, cette immersion m’a également conduit à prendre conscience d’un point essentiel : je ne dispose pas, à ce stade, d’une idée de projet personnel suffisamment aboutie et structurée pour envisager une création d’entreprise indépendante. Cette constatation ne constitue pas une
            limite, mais plutôt un élément de clarification sur mon positionnement actuel et sur les étapes nécessaires à mon évolution professionnelle.
          </p>
          <p>
            En revanche, cette expérience a été particulièrement formatrice sur le plan opérationnel. Elle m’a permis de développer une compréhension concrète des enjeux liés à la gestion de produit, au développement en conditions réelles et à la prise en compte des besoins utilisateurs dans la
            conception de solutions techniques.
          </p>
          <p>
            Au sein de TousAuMarché, un aspect inattendu de mon évolution a été la découverte de l’importance de la relation entre les utilisateurs et la solution technique. Bien que mon profil initial soit orienté vers le développement pur, j’ai progressivement été amené à interagir directement
            avec les utilisateurs et les équipes métier. Ces échanges ont mis en évidence une appétence particulière pour la compréhension des besoins, l’analyse des problématiques concrètes et leur traduction en solutions fonctionnelles.
          </p>
          <p>
            Cette dimension m’a conduit à envisager différemment mon orientation professionnelle. À la suite de plusieurs discussions avec mon tuteur, il m’a été suggéré de m’orienter vers des rôles hybrides, situés à l’intersection entre la technique et l’accompagnement utilisateur, tels que
            Customer Success, Tech Support ou des fonctions similaires. Ces métiers correspondent davantage à ma manière d’aborder les projets, en privilégiant la compréhension du besoin et la pertinence de la solution plutôt que la seule exécution technique.
          </p>
          <p>
            Par ailleurs, une alternative professionnelle existe au sein de l’écosystème des marchés, notamment via un poste d’agent en régie de mairie. Ce type de fonction, plus administratif, permettrait de conserver un lien direct avec le terrain et les acteurs locaux, tout en s’inscrivant dans
            une logique de gestion et d’organisation des marchés. Cette perspective, bien que différente du développement, reste cohérente avec mon intérêt pour les environnements concrets et les interactions humaines.
          </p>
          <p>
            Sur le plan personnel, le développement informatique demeure un centre d’intérêt important. Il ne se limite pas à une activité professionnelle, mais constitue également une pratique régulière à travers la réalisation de projets personnels. Ces projets, souvent exploratoires, permettent
            de maintenir un lien direct avec la technique tout en favorisant l’expérimentation et l’apprentissage autonome.
          </p>
          <p>À long terme, aucune trajectoire n’est figée. L’idée de création d’entreprise reste une possibilité, mais elle dépendra avant tout de l’émergence d’un projet suffisamment structuré, pertinent et aligné avec des besoins réels identifiés sur le terrain.</p>
        </section>

        {/* Qualités humaines */}
        <section className='flex flex-col p-10 gap-6'>
          <h2 className='font-semibold text-2xl'>Qualités humaines</h2>

          <p>
            Les qualités humaines que j’ai développées ne proviennent pas d’un cadre théorique, mais de situations concrètes rencontrées au cours de mon alternance et de mes expériences de travail en environnement réel. Elles se sont construites progressivement au contact des utilisateurs, des
            contraintes de production et des échanges avec les différentes parties prenantes des projets.
          </p>

          <p>
            La rigueur constitue l’une des bases de mon fonctionnement. Elle s’est imposée naturellement dans un contexte où les fonctionnalités développées sont utilisées directement par des utilisateurs finaux, notamment dans le cadre de projets en production. Cette responsabilité implique une
            attention particulière à la qualité du code, à la gestion des cas d’erreurs et à la stabilité globale des fonctionnalités livrées. Avec le temps, cette exigence est devenue une habitude de travail systématique.
          </p>

          <p>
            L’autonomie s’est développée dans un environnement où j’ai régulièrement été amené à prendre en charge des fonctionnalités complètes, depuis la compréhension du besoin jusqu’à leur mise en production. Cette autonomie ne se limite pas à l’exécution technique, mais inclut également la
            capacité à rechercher des solutions, à prendre des décisions et à avancer sans dépendre en permanence d’un encadrement direct. Elle a été renforcée par la structure même de mon alternance, au sein d’une équipe réduite.
          </p>

          <p>
            La capacité d’analyse occupe une place centrale dans mon activité. Une grande partie de mon travail consiste à transformer des besoins métiers exprimés de manière parfois imprécise en fonctionnalités structurées et exploitables. Cela nécessite une phase de compréhension approfondie, de
            reformulation et de validation afin d’éviter les incompréhensions entre les attentes des utilisateurs et la solution développée.
          </p>

          <p>
            L’implication dans les projets découle directement du contact avec les utilisateurs finaux et de la visibilité concrète de l’impact des fonctionnalités développées. Le fait de voir un produit utilisé dans un contexte réel renforce naturellement l’attention portée à la qualité du travail
            et la volonté d’améliorer continuellement ce qui est livré.
          </p>
        </section>

        {/* Centres d’intérêt */}
        <section className='flex flex-col p-10 gap-2'>
          <h2 className='font-bold text-2xl'>Centres d’intérêt</h2>

          <p>
            Les jeux vidéo occupent une place importante dans mes activités personnelles. Ce n’est pas uniquement un loisir, mais aussi un moyen de déconnexion et d’immersion dans des univers différents. Ils permettent de sortir du cadre quotidien, de se concentrer sur des expériences interactives
            et narratives, et d’y trouver un véritable moment de détente. Cette activité prend parfois du temps, mais elle reste un équilibre nécessaire dans mon organisation personnelle.
          </p>

          <p>
            Les voyages constituent également un centre d’intérêt majeur. Découvrir de nouveaux environnements, comprendre d’autres cultures et observer des modes de vie différents fait partie de ce qui m’attire le plus. Ayant grandi à l’île de la Réunion, un territoire riche en paysages et en
            diversité, j’ai été habitué très tôt à évoluer dans un cadre naturel et culturel varié. Cela ne réduit pas l’envie de découvrir le reste du monde, bien au contraire : cela renforce la curiosité et l’ouverture vers d’autres horizons.
          </p>

          <p>
            Le développement informatique fait aussi partie de mes centres d’intérêt, au-delà de sa dimension professionnelle. C’est une activité que je continue à pratiquer en dehors du cadre de travail à travers de petits projets personnels. Ces projets ne sont pas forcément orientés production ou
            résultat, mais plutôt exploration, apprentissage et plaisir de construire. Cette pratique régulière permet de garder un lien direct avec la technique tout en conservant une approche libre et expérimentale.
          </p>
        </section>

        <ParcoursSection />
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
