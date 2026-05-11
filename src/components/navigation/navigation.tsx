'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
  const [theme, setTheme] = useState('dark');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.className = storedTheme === 'dark' ? 'dark' : '';
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.className = 'dark';
    } else {
      setTheme('light');
      document.documentElement.className = '';
    }
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('/projects-new.json')
      .then((res) => res.json())
      .then((data) => {
        const list = Object.values(data).map((p: any) => ({
          slug: p.slug,
          name: p.name,
        }));
        setProjects(list);
      });
  }, []);

  return (
    <div className='sticky top-0 z-50 w-full mt-2 px-3 py-2 rounded-full bg-white/80 dark:bg-slate-800 backdrop-blur flex flex-row items-center gap-4 justify-between'>
      <span className='font-bold text-4xl'>Portfolio</span>

      {/* NAV */}
      <nav className='flex items-center gap-4'>
        <Link href='/' className='px-2 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700'>
          Accueil
        </Link>

        {/* DROPDOWN */}
        <div className='relative group'>
          {/* bouton principal */}
          <Link href='/projects' className='px-2 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700'>
            Projets ▾
          </Link>

          {/* dropdown */}
          <div className='absolute top-10 left-0 w-64 bg-white dark:bg-slate-900 shadow-lg rounded-xl p-2 flex flex-col gap-1 border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition'>
            <Link href='/projects/tousaumarche' className='px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800'>
              TousAuMarché
            </Link>
          </div>
        </div>

        {/* DROPDOWN */}
        <div className='relative group'>
          {/* bouton principal */}
          <Link href='/competences' className='px-2 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700'>
            Compétences ▾
          </Link>

          {/* dropdown */}
          <div className='absolute top-10 left-0 w-64 bg-white dark:bg-slate-900 shadow-lg rounded-xl p-2 flex flex-col gap-1 border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition'>
            <Link href='/competences/analyse-besoins' className='px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800'>
              Analyse des besoins
            </Link>

            <Link href='/competences/structuration' className='px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800'>
              Structuration métier
            </Link>

            <Link href='/competences/freelance' className='px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800'>
              Relation client
            </Link>
          </div>
        </div>

        <Link href='/about' className='px-2 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700'>
          À propos
        </Link>
      </nav>

      {/* THEME */}
      {/* FIXME */}
      <button onClick={toggleTheme} className='invisible p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}
