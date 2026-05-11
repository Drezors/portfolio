import Navigation from '@/components/navigation/navigation';
import { promises as fs } from 'fs';
import { ExternalLinkIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

async function getCompetenceBySlug(slug: string) {
  const file = await fs.readFile(process.cwd() + '/src/app/competences.json', 'utf8');
  const data = JSON.parse(file);
  return data[slug] || null;
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

      <div className='px-8 py-16 max-w-4xl mx-auto flex flex-col gap-12'>
        {/* TITLE */}
        <h1 className='text-3xl font-bold'>{competence.title}</h1>

        {/* DEFINITION */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>Définition</h2>

          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{competence.definition}</ReactMarkdown>
          </div>
        </section>

        {/* PROOFS */}
        <section className='flex flex-col gap-6'>
          <h2 className='text-xl font-semibold'>Éléments de preuve</h2>

          {competence.proofs.map((proof: any, index: number) => (
            <div key={index} className='border rounded-lg p-4 flex flex-col gap-2'>
              <h3 className='font-bold'>{proof.title}</h3>
              <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    ul: ({ children }) => <ul className='list-disc ml-6 flex flex-col gap-0'>{children}</ul>,
                    li: ({ children }) => <li className=''>{children}</li>,
                    a: ({ href, children }) => (
                      <a href={href} target='_blank' rel='noopener noreferrer' className='inline-flex gap-2 items-center underline text-primary'>
                        {' '}
                        {children} <ExternalLinkIcon size={16} className='flex-none' />{' '}
                      </a>
                    ),
                  }}
                >
                  {proof.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </section>

        {/* AUTOCRITIQUE */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>Autocritique</h2>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                ul: ({ children }) => <ul className='list-disc ml-6 flex flex-col gap-0'>{children}</ul>,
                li: ({ children }) => <li className=''>{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} target='_blank' rel='noopener noreferrer' className='inline-flex gap-2 items-center underline text-primary'>
                    {' '}
                    {children} <ExternalLinkIcon size={16} className='flex-none' />{' '}
                  </a>
                ),
              }}
            >
              {competence.autocritique}
            </ReactMarkdown>
          </div>
        </section>

        {/* EVOLUTION */}
        <section className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>Évolution</h2>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                ul: ({ children }) => <ul className='list-disc ml-6 flex flex-col gap-0'>{children}</ul>,
                li: ({ children }) => <li className=''>{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} target='_blank' rel='noopener noreferrer' className='inline-flex gap-2 items-center underline text-primary'>
                    {' '}
                    {children} <ExternalLinkIcon size={16} className='flex-none' />{' '}
                  </a>
                ),
              }}
            >
              {competence.evolution}
            </ReactMarkdown>
          </div>
        </section>
      </div>
    </>
  );
}
