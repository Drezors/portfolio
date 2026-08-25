import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { Timeline } from './timeline';

const timelineData = [
  {
    title: 'Développeur logiciel',
    subtitle: 'TousAuMarché',
    location: 'Labège, Toulouse',
    period: "Oct. 2024 - Aujourd'hui",
    description: "Alternance - seul développeur de l'entreprise",
    type: 'work' as const,
    current: true,
    logo: 'https://tousaumarche.fr/favicon.ico',
    link: 'https://tousaumarche.fr',
    details: {
      fullDescription:
        'J’ai rejoint TousAuMarché le 7 octobre 2024 dans le cadre de mon alternance. À mon arrivée, l’entreprise disposait d’un site internet et d’un début d’application qui représentait environ 10 % du produit actuel. Nous sommes aujourd’hui deux dans la structure : le fondateur et moi-même, et je suis le seul développeur. Je prends en charge les applications web destinées aux collectivités et aux commerçants, le site internet, une partie de l’architecture cloud, les mises en production ainsi que le support technique. Mon rôle comprend également une dimension produit importante : je participe aux rendez-vous avec les collectivités, aux démonstrations, aux points réguliers avec les clients et parfois à des déplacements directement sur les marchés afin d’observer la plateforme dans ses conditions réelles d’utilisation. Cette expérience m’a progressivement fait évoluer d’un profil principalement orienté développement vers un rôle plus transversal mêlant technique, compréhension métier et relation utilisateur.',
      skills: [
        {
          label: 'Analyse des besoins',
          href: '/competences/analyse-besoins',
        },
        {
          label: 'Relation client',
          href: '/competences/relation-client',
        },
        {
          label: 'TypeScript',
          href: '/competences/typescript',
        },
        {
          label: 'Next.js / Shadcn UI',
          href: '/competences/nextjs-shadcn',
        },
        {
          label: 'AWS Cloud',
          href: '/competences/aws-cloud',
        },
        {
          label: 'Figma',
          href: '/competences/figma',
        },
        {
          label: 'Autonomie',
          href: '/competences/autonomie',
        },
        {
          label: "Travail d'équipe",
          href: '/competences/travail-equipe',
        },
        {
          label: 'Polyvalence',
          href: '/competences/polyvalence',
        },
        {
          label: 'Gestion du temps',
          href: '/competences/gestion-temps',
        },
      ],
      achievements: [
        {
          label: 'TousAuMarché - plateforme métier pour les collectivités',
          href: '/projects/tousaumarche',
        },
      ],
    },
  },

  {
    title: 'Mastère - Expert en Ingénierie du Logiciel',
    subtitle: 'ISCOD',
    location: 'Toulouse',
    period: "Oct. 2024 - Aujourd'hui",
    type: 'education' as const,
    current: true,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bjBJvMriM-pmVfIIzWuZkAta0ZLbbPPuaX2i_bZ2QA&s',
    link: 'https://www.iscod.fr',
    details: {
      fullDescription:
        'Formation en alternance de niveau Bac+5 centrée sur l’ingénierie logicielle, l’architecture, la gestion de projet et la compréhension globale du cycle de vie d’un produit numérique. Le format en alternance correspond particulièrement bien à ma manière d’apprendre : les notions abordées en formation peuvent être confrontées rapidement à des situations professionnelles réelles. Cette organisation m’oblige également à prendre du recul sur mes pratiques et à ne pas considérer la technique indépendamment du produit, des utilisateurs et des contraintes d’une entreprise.',
      skills: [{ label: 'Architecture logicielle' }, { label: 'Cloud' }, { label: 'Gestion de projet' }, { label: 'Conception logicielle' }, { label: 'Méthodes agiles' }],
      achievements: [
        {
          label: 'Portfolio de fin d’études',
          href: '/projects/portfolio',
        },
      ],
    },
  },

  {
    title: "Concepteur Développeur d'Applications",
    subtitle: 'E-Fusion',
    location: 'Labège, Toulouse',
    period: 'Oct. 2023 - Oct. 2024',
    description: 'Alternance - développement frontend et mobile',
    type: 'work' as const,
    logo: 'https://www.efusion-ve.com//assets/logo.png',
    link: 'https://www.efusion-ve.com/',
    details: {
      fullDescription:
        'E-Fusion a constitué ma première expérience longue sur un produit réellement utilisé. J’y suis arrivé comme développeur principalement frontend sur une plateforme liée à la mobilité électrique. J’ai travaillé sur les interfaces B2B et B2C en Angular, sur le site Webflow ainsi que sur les intégrations avec les API du backend Java. Quelques mois après mon arrivée, une importante refonte technique autour de C# et ASP.NET Core a été engagée, ce qui m’a obligé à apprendre un nouvel environnement et à reconstruire plusieurs parties du produit. J’ai également développé une nouvelle application Android en Kotlin à partir de zéro, l’ancienne application React Native n’étant plus disponible sous forme de code source. L’année a été marquée par beaucoup de turnover et par le départ de plusieurs profils seniors. À la fin de l’expérience, nous nous sommes retrouvés principalement à deux alternants pour maintenir l’existant, gérer une migration inachevée et continuer à répondre aux attentes des clients. Cette situation m’a fait progresser rapidement en autonomie, tout en me montrant l’importance du cadrage produit, du mentorat technique et de la stabilité d’une équipe.',
      skills: [
        {
          label: 'Autonomie',
          href: '/competences/autonomie',
        },
        {
          label: "Travail d'équipe",
          href: '/competences/travail-equipe',
        },
        {
          label: 'Polyvalence',
          href: '/competences/polyvalence',
        },
        {
          label: 'Figma',
          href: '/competences/figma',
        },
        {
          label: 'Gestion du temps',
          href: '/competences/gestion-temps',
        },
      ],
      achievements: [
        {
          label: 'E-Fusion - plateforme de mobilité électrique',
          href: '/projects/e-fusion',
        },
      ],
    },
  },

  {
    title: "Bac +3 - Concepteur Développeur d'Applications",
    subtitle: 'ISCOD',
    location: 'Toulouse',
    period: 'Oct. 2023 - Oct. 2024',
    type: 'education' as const,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bjBJvMriM-pmVfIIzWuZkAta0ZLbbPPuaX2i_bZ2QA&s',
    link: 'https://www.iscod.fr',
    details: {
      fullDescription:
        'Formation en alternance orientée vers la conception et le développement d’applications web et mobiles. Cette année a représenté pour moi le passage entre des projets principalement universitaires et une pratique beaucoup plus directement confrontée aux contraintes d’une entreprise. L’alternance m’a permis de mettre en application les notions étudiées tout en découvrant des problématiques absentes des projets scolaires : maintenance d’un produit existant, travail avec plusieurs profils, tickets, sprints, contraintes clients et évolution d’un codebase dans le temps.',
      skills: [{ label: 'Développement web' }, { label: 'Développement mobile' }, { label: 'Conception applicative' }, { label: 'Gestion de projet' }, { label: 'Méthodes agiles' }],
    },
  },

  {
    title: 'Attestation - SecNumacadémie',
    subtitle: 'ANSSI',
    location: 'En ligne',
    period: 'Avr. 2023',
    type: 'education' as const,
    logo: 'https://upload.wikimedia.org/wikipedia/fr/archive/d/d9/20190420123211%21ANSSI_Logo.svg',
    link: 'https://cyber.gouv.fr',
    details: {
      fullDescription:
        'Formation en ligne proposée par l’ANSSI permettant d’acquérir ou de consolider les fondamentaux de la cybersécurité : protection des postes de travail, authentification, sécurité des données, comportements à risque et bonnes pratiques générales. Cette formation m’a donné une première vision structurée de la sécurité au-delà de la simple écriture de code.',
      skills: [{ label: 'Cybersécurité' }, { label: 'Protection des données' }, { label: 'Bonnes pratiques de sécurité' }],
    },
  },

  {
    title: 'Licence 2 Informatique',
    subtitle: 'Université de La Réunion',
    location: 'Saint-Denis, La Réunion',
    period: 'Août 2021 - Juin 2022',
    type: 'education' as const,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3S0O_2zD0Xt6QgQdr-RSkuOESgcQC2oQQhYuuhVw6jAwKpmgpFWKEyzKv&s=10',
    link: 'https://www.univ-reunion.fr',
    details: {
      fullDescription:
        'Deuxième année de licence informatique durant laquelle j’ai approfondi la programmation, l’algorithmique, les bases de données et les systèmes. Cette formation universitaire m’a apporté des bases théoriques importantes et m’a appris à résoudre des problèmes de manière plus structurée, même si mon apprentissage est devenu par la suite davantage orienté vers la pratique et les projets concrets.',
      skills: [{ label: 'Java' }, { label: 'C' }, { label: 'SQL' }, { label: 'Algorithmique' }, { label: "Systèmes d'exploitation" }],
    },
  },

  {
    title: 'Licence 1 Informatique',
    subtitle: 'Université de La Réunion',
    location: 'Saint-Denis, La Réunion',
    period: 'Août 2020 - Juin 2021',
    type: 'education' as const,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3S0O_2zD0Xt6QgQdr-RSkuOESgcQC2oQQhYuuhVw6jAwKpmgpFWKEyzKv&s=10',
    link: 'https://www.univ-reunion.fr',
    details: {
      fullDescription:
        'Première année universitaire en informatique, avec une découverte plus structurée de la programmation, des mathématiques appliquées à l’informatique et du fonctionnement général des systèmes informatiques. Cette période a constitué la base académique de mon parcours avant mon orientation progressive vers des formations davantage professionnalisantes et l’alternance.',
      skills: [{ label: 'Python' }, { label: 'HTML / CSS' }, { label: 'Mathématiques' }, { label: 'Logique' }],
    },
  },

  {
    title: "Baccalauréat S - Sciences de l'Ingénieur",
    subtitle: 'Lycée Pierre Poivre',
    location: 'Saint-Joseph, La Réunion',
    period: 'Août 2019 - Juin 2020',
    description: 'Option Informatique et Sciences du Numérique',
    type: 'education' as const,
    logo: 'https://etab.ac-reunion.fr/lyc-pierre-poivre/wp-content/uploads/sites/36/2024/09/cropped-cropped-cropped-logo_LPP_carre-1.jpg',
    link: 'https://etab.ac-reunion.fr/lyc-pierre-poivre/',
    details: {
      fullDescription:
        'Baccalauréat scientifique avec spécialité Sciences de l’Ingénieur et option Informatique et Sciences du Numérique. Cette période correspond à mes premières expériences plus concrètes avec la programmation et les projets techniques. Elle m’a donné envie de poursuivre dans l’informatique et de comprendre davantage comment passer d’une idée à un système fonctionnel.',
      skills: [{ label: 'Python' }, { label: 'Arduino' }, { label: 'Électronique' }, { label: 'Sciences de l’ingénieur' }],
    },
  },
];

export default function ParcoursSection() {
  return (
    <div className='container'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance'>Mon Parcours</h2>
        <p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>Formation et expériences professionnelles</p>

        {/* Légende */}
        <div className='flex items-center justify-center gap-8 mt-8'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <GraduationCapIcon className='w-6 h-6' />
            Formation
          </div>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <BriefcaseIcon className='w-6 h-6' />
            Expérience
          </div>
        </div>
      </div>

      {/* Timeline */}
      <Timeline items={timelineData} />
    </div>
  );
}
