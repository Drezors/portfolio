'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'À propos' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com' },
  { icon: FaLinkedin, href: 'https://linkedin.com' },
  { icon: FaXTwitter, href: 'https://x.com' },
  { icon: FaFacebook, href: 'https://facebook.com' },
  { icon: FaInstagram, href: 'https://instagram.com' },
];

export default function Footer() {
  return (
    <footer className='w-full border-t bg-foreground text-background dark:bg-slate-900/80 backdrop-blur px-6 py-10'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10'>
        {/* LEFT */}
        <div className='flex flex-col gap-4'>
          <div className='text-sm text-gray-500 dark:text-gray-400'>© {new Date().getFullYear()} Gonthier Thomas</div>

          <div className='flex flex-col gap-2 text-sm'>
            <Link className='hover:text-indigo-600' href='/legal'>
              Mentions légales
            </Link>
            <Link className='hover:text-indigo-600' href='/privacy'>
              Politique de confidentialité
            </Link>
          </div>
        </div>

        {/* CENTER NAV */}
        <div className='flex flex-col gap-3 text-sm'>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className='hover:text-indigo-600'>
              {l.label}
            </Link>
          ))}
        </div>

        {/* SOCIAL */}
        <div className='flex flex-col gap-3'>
          <div className='text-sm text-gray-500 dark:text-gray-400'>Réseaux</div>

          <div className='flex gap-3'>
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a key={i} href={href} target='_blank' rel='noopener noreferrer' whileHover={{ scale: 1.1 }} className='p-2 rounded-full border border-gray-300 dark:border-slate-700 hover:bg-indigo-600 hover:text-white transition'>
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
