'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const projects = [
  { slug: 'tousaumarche', name: 'TousAuMarché' },
  { slug: 'scan-and-share', name: 'Scan & Share' },
  { slug: 'portfolio', name: 'Portfolio' },
  { slug: 'uptera', name: 'Uptera' },
  { slug: 'e-fusion', name: 'E-Fusion' },
];

const techSkills = [
  { slug: 'typescript', name: 'TypeScript' },
  { slug: 'nextjs-shadcn', name: 'Next.js / Shadcn' },
  { slug: 'aws-cloud', name: 'AWS / Cloud' },
  { slug: 'figma', name: 'Figma' },
];

const humanSkills = [
  { slug: 'analyse-besoins', name: 'Analyse des besoins' },
  { slug: 'relation-client', name: 'Relation client' },
  { slug: 'autonomie', name: 'Autonomie' },
  { slug: 'travail-equipe', name: 'Travail d’équipe' },
  { slug: 'polyvalence', name: 'Polyvalence' },
  { slug: 'gestion-temps', name: 'Gestion du temps' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initial = stored ?? (prefersDark ? 'dark' : 'light');

    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  return (
    <header className='sticky top-0 z-50 w-full px-4 py-2 mt-2 rounded-full backdrop-blur bg-white/80 dark:bg-slate-900/80 flex items-center justify-between'>
      {/* BRAND */}
      <Link href='/' className='flex items-center gap-3'>
        {pathname === '/' ? (
          <span className='font-bold text-2xl'>Portfolio</span>
        ) : (
          <>
            <Image src='/profile_image.jpg' width={40} height={40} alt='avatar' className='rounded-full border' />
            <div className='leading-tight'>
              <p className='font-semibold text-sm'>Thomas</p>
              <p className='text-xs text-gray-500'>Gonthier</p>
            </div>
          </>
        )}
      </Link>

      {/* NAV */}
      <nav className='flex items-center gap-4 text-sm'>
        <Link className='hover:text-indigo-600' href='/'>
          Accueil
        </Link>

        {/* PROJECTS */}
        <div className='relative group'>
          <Link className='hover:text-indigo-600' href='/projects'>
            Projets ▾
          </Link>

          <div className='absolute left-0 top-8 w-56 bg-background dark:bg-slate-900 border rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition'>
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className='block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'>
                {p.name}
              </Link>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div className='relative group'>
          <Link className='hover:text-indigo-600' href='/competences'>
            Compétences ▾
          </Link>

          <div className='absolute left-0 top-8 w-64 bg-background dark:bg-slate-900 border rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition'>
            {/* TECH */}
            <p className='px-2 py-1 text-xs font-semibold text-gray-500'>Techniques</p>
            {techSkills.map((s) => (
              <Link key={s.slug} href={`/competences/${s.slug}`} className='block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'>
                {s.name}
              </Link>
            ))}

            <div className='my-2 border-t' />

            {/* HUMAN */}
            <p className='px-2 py-1 text-xs font-semibold text-gray-500'>Humaines</p>
            {humanSkills.map((s) => (
              <Link key={s.slug} href={`/competences/${s.slug}`} className='block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800'>
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        <Link className='hover:text-indigo-600' href='/about'>
          À propos
        </Link>
      </nav>

      {/* THEME */}
      <button onClick={toggleTheme} className='invisible px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-sm'>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
