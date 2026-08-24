'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

type Skill = {
  title: string;
  type: 'humaine' | 'technique';
  definition: string;
  proofs: {
    title: string;
    content: string;
  }[];
};

type SkillsSectionProps = {
  skills: Record<string, Skill>;
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const skillList = Object.entries(skills).slice(0, 6);

  return (
    <section className='px-6 md:px-16 lg:px-24 py-24 flex flex-col gap-16'>
      {/* HEADER */}
      <div className='max-w-3xl flex flex-col gap-4'>
        <span className='uppercase tracking-[0.3em] text-sm text-gray-500'>Compétences</span>
        <h2 className='text-4xl md:text-5xl font-bold leading-tight'>Une approche orientée produit, utilisateur et architecture.</h2>
        <p className='text-lg text-gray-600 dark:text-gray-300'>Mes compétences techniques et humaines sont construites à travers des projets réels, des problématiques terrain et des échanges métier.</p>
      </div>

      {/* GRID */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {skillList.map(([slug, skill], index) => (
          <motion.div key={slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }}>
            <Link href={`/competences/${slug}`}>
              <Card className='  hover:-translate-y-1 hover:shadow-2xl transition duration-300 flex flex-col h-full'>
                <CardHeader className='flex flex-row items-start justify-between gap-4'>
                  <div className='flex flex-col'>
                    <span className={`w-fit rounded-full text-xs uppercase tracking-wider ${skill.type === 'technique' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'}`}>{skill.type}</span>
                    <h3 className='text-2xl font-bold leading-snug'>{skill.title}</h3>
                  </div>
                  <ArrowRightIcon />
                </CardHeader>
                {/* DEFINITION */}
                <CardContent className='flex-grow'>
                  <p className='text-gray-600 dark:text-gray-300 line-clamp-3'>{(skill.definition ?? '').replace(/\*\*/g, '')}</p>
                </CardContent>
                {/* PROOFS */}
                <CardFooter className='flex flex-col gap-2 border-t items-start py-2'>
                  <span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>Preuves terrain</span>

                  {skill?.proofs?.slice(0, 1).map((proof, i) => (
                    <div key={i} className='flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400'>
                      <span className='line-clamp-2'>{proof.title}</span>
                    </div>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
