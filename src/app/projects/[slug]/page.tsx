import ContactForm from '@/components/form/contact-form';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import MarkdownRenderer from '@/components/shared/markdown-renderer';
import { Badge } from '@/components/ui/badge';
import projects from '@/data/projects-new.json';
import Image from 'next/image';

function getPostBySlug(slug: string) {
  return (projects as Record<string, any>)[slug] || null;
}

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = await getPostBySlug(params.slug);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className='flex flex-col items-center justify-center mt-20'>
          <h1 className='text-3xl font-bold'>Projet introuvable</h1>
        </div>
      </>
    );
  }

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className='flex flex-col gap-3'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <div className='text-muted-foreground leading-relaxed'>{children}</div>
    </section>
  );

  return (
    <>
      <Navigation />

      <div className='container mx-auto px-6 py-16 flex flex-col gap-8'>
        {/* HERO */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* LEFT */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>{project.name}</h1>

            <MarkdownRenderer content={project.introduction?.split('\n')[0]} />

            <div className='flex flex-wrap gap-2 pt-2'>
              {project.technologies?.map((t: string) => (
                <Badge variant='secondary' key={t}>
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className='relative w-full h-[360px]'>{project?.media.thumbnail && <Image src={project.media.thumbnail} alt={project.name} fill className='object-cover rounded-xl border' priority />}</div>
        </div>
        {/* CONTENT */}
        <div className='flex flex-col gap-8 max-w-6xl mx-auto'>
          <Section title='Présentation'>
            <MarkdownRenderer content={project.introduction} />
          </Section>

          <Section title='Objectifs, contexte, enjeux et risques'>
            <MarkdownRenderer content={project.context} />
          </Section>

          <Section title='Étapes réalisées'>
            <MarkdownRenderer content={project.steps} />
          </Section>

          <Section title='Acteurs'>
            <MarkdownRenderer content={project.actors} />
          </Section>

          <Section title='Résultats'>
            <MarkdownRenderer content={project.results} />
          </Section>

          <Section title='Perspectives'>
            <MarkdownRenderer content={project.future} />
          </Section>

          <Section title='Analyse critique personnelle'>
            <MarkdownRenderer content={project.critique} />
          </Section>

          {/* GALERIE */}
          {project.media?.screens?.length > 0 && (
            <section className='flex flex-col gap-4'>
              <h2 className='text-2xl font-semibold'>Aperçu du projet</h2>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {project.media.screens.map((img: string) => (
                  <div key={img} className='relative w-full h-[180px]'>
                    <Image src={img} alt='Screenshot projet' fill className='object-cover rounded-lg border' />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* COMPETENCES */}
          <section className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Compétences mobilisées</h2>

            <div className='flex flex-wrap gap-2'>
              {project.competencies?.map((c: any) => (
                <a key={c.slug} href={`/competences/${c.slug}`} className='px-3 py-1 border rounded-full text-sm hover:bg-muted transition'>
                  {c.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
