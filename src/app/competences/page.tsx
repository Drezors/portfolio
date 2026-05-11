import Navigation from '@/components/navigation/navigation';
import { promises as fs } from 'fs';
import Link from 'next/link';

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

      <div className='max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12'>
        <h1 className='text-4xl font-bold'>Compétences</h1>

        {/* TECHNIQUES */}
        <section className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold'>Techniques</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {techniques.map((c) => (
              <Link key={c.slug} href={`/competences/${c.slug}`} className='border rounded-xl p-4 hover:shadow-lg transition bg-white dark:bg-slate-900'>
                <h3 className='font-bold text-lg'>{c.title}</h3>
                <p className='text-sm text-muted-foreground line-clamp-3 mt-2'>{c.definition}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* HUMAINES */}
        <section className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold'>Humaines</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {humaines.map((c) => (
              <Link key={c.slug} href={`/competences/${c.slug}`} className='border rounded-xl p-4 hover:shadow-lg transition bg-white dark:bg-slate-900'>
                <h3 className='font-bold text-lg'>{c.title}</h3>
                <p className='text-sm text-muted-foreground line-clamp-3 mt-2'>{c.definition}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
