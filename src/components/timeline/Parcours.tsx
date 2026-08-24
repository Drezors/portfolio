import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { Timeline } from './timeline';

const timelineData = [
  // Ordre antichronologique mixte (formations + expériences mélangées par date)
  // Oct. 2024 — Aujourd'hui
  {
    title: 'Développeur Logiciel',
    subtitle: 'TousAuMarché',
    location: 'Labège, Toulouse',
    period: "Oct. 2024 — Aujourd'hui",
    description: "Contrat d'alternance",
    type: 'work' as const,
    current: true,
    logo: 'https://tousaumarche.fr/favicon.ico',
    link: 'https://tousaumarche.fr',
    details: {
      fullDescription: "Développement et maintenance d'applications web pour une plateforme de mise en relation entre producteurs locaux et consommateurs.",
      skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Git'],
      achievements: ['Participation au développement de nouvelles fonctionnalités', "Amélioration des performances de l'application", "Collaboration avec l'équipe produit pour définir les spécifications"],
    },
  },
  // Oct. 2024 — Aujourd'hui
  {
    title: 'Mastère — Expert en Ingénierie du Logiciel',
    subtitle: 'ISCOD',
    location: 'Toulouse',
    period: "Oct. 2024 — Aujourd'hui",
    type: 'education' as const,
    current: true,
    logo: 'https://www.iscod.fr/wp-content/uploads/2021/05/cropped-favicon-32x32.png',
    link: 'https://www.iscod.fr',
    details: {
      fullDescription: "Formation en alternance de niveau Bac+5 axée sur l'expertise en ingénierie logicielle, architecture et management de projets complexes.",
      skills: ['Architecture logicielle', 'DevOps', 'Cloud', 'Management', 'Agile/Scrum'],
      achievements: ["Projets d'envergure en équipe", 'Veille technologique continue', 'Certification professionnelle'],
    },
  },
  // Oct. 2023 — Oct. 2024
  {
    title: 'Développeur Concepteur',
    subtitle: 'e-Fusion',
    location: 'Labège, Toulouse',
    period: 'Oct. 2023 — Oct. 2024',
    description: "Contrat d'alternance",
    type: 'work' as const,
    logo: 'https://www.e-fusion.fr/favicon.ico',
    link: 'https://www.e-fusion.fr',
    details: {
      fullDescription: "Conception et développement d'applications web et mobiles dans une agence digitale spécialisée dans les solutions sur mesure.",
      skills: ['JavaScript', 'React', 'Next.js', 'API REST', 'Figma'],
      achievements: ['Développement de plusieurs projets clients de A à Z', 'Mise en place de bonnes pratiques de développement', 'Rédaction de documentation technique'],
    },
  },
  // Oct. 2023 — Déc. 2024
  {
    title: "Bac +3 — Bachelor Concepteur Développeur d'Applications",
    subtitle: 'ISCOD',
    location: 'Toulouse',
    period: 'Oct. 2023 — Déc. 2024',
    type: 'education' as const,
    logo: 'https://www.iscod.fr/wp-content/uploads/2021/05/cropped-favicon-32x32.png',
    link: 'https://www.iscod.fr',
    details: {
      fullDescription: "Formation en alternance axée sur la conception et le développement d'applications web et mobiles. Apprentissage des méthodologies agiles et des bonnes pratiques de développement.",
      skills: ['Développement Web', 'UX/UI', 'Gestion de projet', 'Agile/Scrum'],
      achievements: ['Projets pratiques en équipe', 'Veille technologique continue', 'Certification professionnelle'],
    },
  },
  // Avr. 2023
  {
    title: 'Attestation Sécurité Informatique',
    subtitle: 'ANSSI',
    location: 'En ligne',
    period: 'Avr. 2023',
    type: 'education' as const,
    logo: 'https://cyber.gouv.fr/themes/custom/starter/assets/favicon/favicon.ico',
    link: 'https://cyber.gouv.fr',
    details: {
      fullDescription: "Formation aux fondamentaux de la sécurité informatique délivrée par l'Agence Nationale de la Sécurité des Systèmes d'Information.",
      skills: ['Cybersécurité', 'Bonnes pratiques', 'Protection des données'],
    },
  },
  // Août 2021 — Juin 2022
  {
    title: 'Bac +2 — Licence 2 Informatique',
    subtitle: 'Université de la Réunion',
    location: 'Saint-Denis',
    period: 'Août 2021 — Juin 2022',
    type: 'education' as const,
    logo: 'https://www.univ-reunion.fr/fileadmin/_public/images/ur-logo-header-2024.svg',
    link: 'https://www.univ-reunion.fr',
    details: {
      fullDescription: 'Deuxième année de licence informatique avec approfondissement des concepts de programmation, algorithmique et bases de données.',
      skills: ['Java', 'C', 'SQL', 'Algorithmique', "Systèmes d'exploitation"],
    },
  },
  // Août 2020 — Juin 2021
  {
    title: 'Bac +1 — Licence 1 Informatique',
    subtitle: 'Université de la Réunion',
    location: 'Saint-Denis',
    period: 'Août 2020 — Juin 2021',
    type: 'education' as const,
    logo: 'https://www.univ-reunion.fr/fileadmin/_public/images/ur-logo-header-2024.svg',
    link: 'https://www.univ-reunion.fr',
    details: {
      fullDescription: "Première année de licence informatique : initiation à la programmation, mathématiques pour l'informatique et architecture des ordinateurs.",
      skills: ['Python', 'HTML/CSS', 'Mathématiques', 'Logique'],
    },
  },
  // Août 2019 — Juin 2020
  {
    title: "Baccalauréat S — Sciences de l'Ingénieur",
    subtitle: 'Lycée Pierre Poivre',
    location: 'Saint-Joseph',
    period: 'Août 2019 — Juin 2020',
    description: 'Option Informatique et Sciences du Numérique (ISN)',
    type: 'education' as const,
    link: 'https://etab.ac-reunion.fr/lyc-pierre-poivre',
    details: {
      fullDescription: "Baccalauréat scientifique avec spécialité Sciences de l'Ingénieur et option ISN, permettant une première approche de la programmation et de l'informatique.",
      skills: ['Python', 'Arduino', 'Électronique', 'Mécanique'],
      achievements: ["Projet ISN : développement d'une application", 'Participation à des projets de groupe en SI'],
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
