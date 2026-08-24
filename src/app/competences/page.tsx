import ContactForm from '@/components/form/contact-form';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import CompetencesList from '@/components/skills/skills-list';
import CompetenceRadar from '@/components/skills/skills-radar';
import { promises as fs } from 'fs';

async function getCompetences() {
  const file = await fs.readFile(process.cwd() + '/src/app/competences.json', 'utf8');
  return JSON.parse(file);
}

export default async function CompetencesPage() {
  const competences = await getCompetences();

  const list = Object.entries(competences).map(([slug, comp]: any) => ({
    slug,
    ...comp,
  }));

  const techniques = list.filter((c) => c.type === 'technique');
  const humaines = list.filter((c) => c.type === 'humaine');

  return (
    <>
      <Navigation />
      <div className='max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16'>
        {/* INTRO */}
        <section className='flex flex-col gap-3'>
          <h1 className='text-4xl font-bold'>Compétences</h1>
          <p className='text-muted-foreground max-w-2xl'>Ensemble structuré de compétences techniques et humaines construites en contexte réel. Chaque compétence est reliée à des situations concrètes et évaluée par niveau.</p>
        </section>

        {/* COMPARAISON HUMAIN / TECH */}
        <CompetencesList techniques={techniques} humaines={humaines} />

        {/* RADAR GLOBAL */}
        <section className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold'>Vision globale</h2>
          <CompetenceRadar data={list} />
        </section>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
