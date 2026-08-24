'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type Project = {
  slug: string;
  name: string;
  introduction: string;
  technologies: string[];
  media: {
    thumbnail: string;
  };
};

type ProjectsSectionProps = {
  projects: Record<string, Project>;
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const projectList = Object.values(projects).slice(0, 5);

  return (
    <section className='px-6 md:px-16 lg:px-24 py-24 flex flex-col gap-8'>
      {/* HEADER */}
      <div className='max-w-3xl flex flex-col gap-4'>
        <span className='uppercase tracking-[0.3em] text-sm text-gray-500'>Réalisations</span>
        <h2 className='text-4xl md:text-5xl font-bold leading-tight'>Des projets construits autour de vrais problèmes.</h2>
        <p className='text-lg text-gray-600 dark:text-gray-300'>Applications web, mobile et outils métiers conçus avec une approche produit, centrée utilisateur et maintenable.</p>
      </div>

      {/* PROJECTS */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {projectList.map((project, index) => (
          <motion.div key={project.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
            <Link href={`/projects/${project.slug}`}>
              <Card className='hover:-translate-y-1 hover:shadow-2xl transition duration-300 overflow-hidden'>
                {/* IMAGE */}
                <CardHeader className='p-0 border-b'>
                  <div className='relative h-72 overflow-hidden'>
                    <Image src={project?.media?.thumbnail} alt={project.name} fill className='object-cover transition duration-700 group-hover:scale-105' />
                  </div>
                </CardHeader>

                {/* CONTENT */}
                <CardContent className='pt-6 flex flex-col gap-4'>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-bold'>{project.name}</h3>
                    <p className='text-gray-600 dark:text-gray-300 line-clamp-3'>{project.introduction.replace(/\*\*/g, '')}</p>
                  </div>

                  {/* TECHS */}
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant='outline'>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {/* CTA */}
                <CardFooter className='flex flex-row gap-2 items-center w-full justify-between border-t px-6 py-2'>
                  <span className='text-sm text-gray-500'>Voir le projet</span>
                  <ArrowRightIcon />
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
