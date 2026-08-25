'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Button } from '../ui/button';

export default function HeroSection() {
  const socials = [
    {
      icon: FaGithub,
      href: 'https://github.com/Drezors',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/thomas-gonthier-082771271/',
      label: 'LinkedIn',
    },
  ];

  return (
    <div className='min-h-[85vh] flex items-center px-6 md:px-16 lg:px-24 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center'>
        {/* LEFT */}
        <div className='md:col-span-7 flex flex-col gap-6'>
          {/* Identity */}
          <div className='flex flex-col gap-2'>
            <span className='text-xl uppercase tracking-widest text-gray-500 dark:text-gray-400'>Thomas Gonthier</span>

            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100'>Développeur d&apos;applications orienté produit</h1>

            <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl'>Je transforme des besoins métier en applications web et mobiles claires, utiles et maintenables.</p>
          </div>

          {/* Description */}
          <div className='flex flex-col gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl'>
            <p>Originaire de l&apos;île de La Réunion, j&apos;ai grandi dans un environnement qui m&apos;a appris la curiosité, l&apos;adaptabilité et la créativité.</p>

            <p>Aujourd&apos;hui, j&apos;applique cet état d&apos;esprit dans la conception de produits numériques centrés sur les utilisateurs.</p>
          </div>

          {/* CTAs */}
          <div className='flex flex-col md:flex-row gap-4 items-start md:items-center'>
            <Button size='lg' className='px-6' asChild>
              <a href='/CV_Thomas_Gonthier_07_2026.pdf' target='_blank' rel='noopener noreferrer'>
                Télécharger mon CV
              </a>
            </Button>

            <div className='flex items-center gap-3'>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={label}
                  title={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className='p-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition'
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='md:col-span-5 flex justify-center'>
          <div className='relative'>
            <Image src='/profile_image.jpg' width={380} height={380} alt='Portrait de Thomas Gonthier' priority className='rounded-2xl border shadow-lg rotate-2 hover:rotate-0 transition duration-300' />
          </div>
        </div>
      </div>
    </div>
  );
}
