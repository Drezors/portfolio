'use client';

import { motion } from 'framer-motion';
import { Clock, Cloud, Code2, Layers, LayoutDashboard, MessageSquare, PenTool, Rocket, Search, Users } from 'lucide-react';

type IconKey = 'autonomie' | 'travail-equipe' | 'gestion-temps' | 'analyse-besoins' | 'relation-client' | 'polyvalence' | 'typescript' | 'nextjs-shadcn' | 'aws-cloud' | 'figma';

const iconMap: Record<IconKey, any> = {
  autonomie: Rocket,
  'travail-equipe': Users,
  'gestion-temps': Clock,
  'analyse-besoins': Search,
  'relation-client': MessageSquare,
  polyvalence: Layers,
  typescript: Code2,
  'nextjs-shadcn': LayoutDashboard,
  'aws-cloud': Cloud,
  figma: PenTool,
};

type Competence = {
  slug: IconKey;
  title: string;
  definition: string;
  level: number;
};

export default function CompetencesList({ techniques, humaines }: { techniques: Competence[]; humaines: Competence[] }) {
  const Card = ({ c }: { c: Competence }) => {
    const Icon = iconMap[c.slug] ?? Search;

    return (
      <motion.a href={`/competences/${c.slug}`} whileHover={{ scale: 1.02 }} className='group border rounded-xl p-5 bg-background hover:shadow-lg transition flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            {Icon && <Icon className='w-5 h-5 text-primary' />}
            <span className='font-medium'>{c.title}</span>
          </div>
          <div className='text-xs text-muted-foreground font-medium'>{c.level}/5</div>
        </div>

        <p className='text-sm text-muted-foreground line-clamp-2'>{c.definition}</p>
      </motion.a>
    );
  };

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold'>Compétences techniques</h2>
        {techniques.map((c) => (
          <Card key={c.slug} c={c} />
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold'>Compétences humaines</h2>
        {humaines.map((c) => (
          <Card key={c.slug} c={c} />
        ))}
      </div>
    </section>
  );
}
