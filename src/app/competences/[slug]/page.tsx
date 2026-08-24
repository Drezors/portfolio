import ContactForm from '@/components/form/contact-form';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import MarkdownRenderer from '@/components/shared/markdown-renderer';
import competences from '@/data/competences.json';

function getCompetenceBySlug(slug: string) {
  return (competences as Record<string, any>)[slug] || null;
}

export default async function CompetencePage({ params }: { params: { slug: string } }) {
  const competence = await getCompetenceBySlug(params.slug);

  if (!competence) {
    return (
      <>
        <Navigation />
        <div className='flex flex-col items-center justify-center mt-20 gap-4'>
          <h1 className='text-3xl font-bold'>Compétence introuvable</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />

      <div className='max-w-6xl mx-auto flex flex-col gap-4 pb-10'>
        {/* TITLE */}
        <div className='h-[20vh] p-8 flex flex-row justify-center items-center'>
          <h1 className='font-bold text-5xl'>{competence.title}</h1>
        </div>

        {/* DEFINITION */}
        <section className='flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>Définition</h2>
          <div className='text-muted-foreground leading-relaxed'>
            <MarkdownRenderer content={competence.definition} />
          </div>
        </section>

        {/* PREUVES */}
        <section className='flex flex-col gap-8'>
          <h2 className='text-xl font-semibold'>Mes éléments de preuve</h2>

          {competence.proofs.map((p: { title: string; content: string }, i: number) => (
            <div key={i} className='border-l-2 pl-4 border-primary flex flex-col gap-'>
              <h3 className='font-semibold'>{p.title}</h3>
              <MarkdownRenderer content={p.content} />
            </div>
          ))}
        </section>

        {/* AUTOCRITIQUE */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>Mon autocritique</h2>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <MarkdownRenderer content={competence.autocritique} />
          </div>
        </section>

        {/* EVOLUTION */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>Mon évolution dans cette compétence</h2>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <MarkdownRenderer content={competence.evolution} />
          </div>
        </section>

        {/* PROJETS LIÉS */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>Projets liés</h2>

          {competence.projects?.length ? (
            <div className='flex flex-wrap gap-3'>
              {competence.projects.map((project: any) => (
                <a key={project.slug} href={`/projects/${project.slug}`} className='px-4 py-2 rounded-lg border bg-background text-sm font-medium hover:bg-muted hover:shadow-sm transition flex flex-col'>
                  <span>{project.title}</span>
                  {project.role && <span className='text-xs text-muted-foreground'>{project.role}</span>}
                </a>
              ))}
            </div>
          ) : (
            <p className='text-sm text-muted-foreground'>Aucun projet associé à cette compétence.</p>
          )}
        </section>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
