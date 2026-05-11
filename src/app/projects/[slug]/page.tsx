import Navigation from '@/components/navigation/navigation';
import { promises as fs } from 'fs';
import { ExternalLinkIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function getPostBySlug(slug: string) {
  const projectsFile = await fs.readFile(process.cwd() + '/src/app/projects-new.json', 'utf8');

  const projects = JSON.parse(projectsFile);

  return projects[slug] || null;
}

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = await getPostBySlug(params.slug);

  if (!project) {
    return (
      <>
        <Navigation />
        <div className='flex flex-col gap-4 items-center justify-center mt-20'>
          <h1 className='text-4xl font-bold'>Projet introuvable</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />

      <div className='px-20 py-16 flex flex-col gap-10 container'>
        {/* HEADER */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>{project.name}</h1>

          <div className='flex gap-2 flex-wrap'>
            {project.technologies.map((tech) => (
              <span key={tech} className='px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm'>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* INTRO */}
        <Section title='Présentation'>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className='text-lg font-semibold'>{children}</h2>,
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
              {project.introduction}
            </ReactMarkdown>
          </div>
        </Section>

        {/* CONTEXTE */}
        <Section title='Contexte / enjeux / risques'>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className='text-lg font-semibold'>{children}</h2>,
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
              {project.context}
            </ReactMarkdown>
          </div>
        </Section>

        {/* STEPS */}
        <Section title='Étapes réalisées'>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className='text-lg font-semibold'>{children}</h2>,
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
              {project.steps}
            </ReactMarkdown>
          </div>
        </Section>

        {/* ACTORS */}
        <Section title='Acteurs et interactions'>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className='text-lg font-semibold'>{children}</h2>,
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
              {project.actors}
            </ReactMarkdown>
          </div>
        </Section>

        {/* RESULTS */}
        <Section title='Résultats'>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className='text-lg font-semibold'>{children}</h2>,
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
              {project.results}
            </ReactMarkdown>
          </div>
        </Section>

        {/* FUTURE */}
        <Section title='Suite du projet'>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className='text-lg font-semibold'>{children}</h2>,
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
              {project.future}
            </ReactMarkdown>
          </div>
        </Section>

        {/* CRITIQUE */}
        <Section title='Regard critique'>
          <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className='text-lg font-semibold'>{children}</h2>,
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
              {project.critique}
            </ReactMarkdown>
          </div>
        </Section>
      </div>
    </>
  );
}

function Section({ title, children }: any) {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-2xl font-semibold uppercase'>{title}</h2>
      <p className='text-base leading-relaxed'>{children}</p>
    </div>
  );
}
