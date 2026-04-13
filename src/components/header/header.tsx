'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaX } from 'react-icons/fa6';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className='px-6 md:px-32 py-12 grid grid-cols-6 md:grid-cols-12 gap-y-12 gap-x-8 md:w-4/5'>
      <div className='col-span-6 w-full md:w-4/5 flex flex-row gap-6 items-center'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <span className='text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>Gonthier Thomas</span>
            <h1 className='text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-700 to-usual-100'>Développeur Concepteur Junior</h1>
            <p className='text-xl text-gray-700 dark:text-gray-300'>Je suis un jeune développeur Web passionné et plein d&apos;énergie. Je vis sur l&apos;île de la Réunion, une île charger d&apos;émotions et de puissances. J&apos;adore faire du web et faire preuve de créativité.</p>
          </div>
          <div className='flex flex-col md:flex-row gap-6'>
            <Button type='button' size='lg'>
              Download CV
            </Button>
            <div className='flex flex-row items-center gap-4'>
              {[
                { Icon: FaGithub, label: 'GitHub' },
                { Icon: FaLinkedin, label: 'LinkedIn' },
                { Icon: FaX, label: 'X' },
                { Icon: FaFacebook, label: 'Facebook' },
                { Icon: FaInstagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='flex flex-row p-2 text-secondary-700 dark:text-secondary-300 hover:text-usual-100 hover:bg-secondary-700 dark:hover:bg-secondary-300 dark:hover:text-gray-900 border border-secondary-700 dark:border-secondary-300 rounded-full cursor-pointer transition duration-300'
                  aria-label={`Visit ${label} profile`}
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-6 w-full flex flex-row items-center justify-center'>
        <Image src='/profile_image.jpg' width={384} height={384} className='max-h-96 rounded-2xl ml-3 border-2 border-secondary-800 hover:border-secondary-600 transform rotate-3 hover:rotate-0 transition duration-300 ease-in-out' alt='Thomas Gonthier' />
      </div>
      <div className='col-span-6 p-4 md:col-span-12 flex flex-wrap md:flex-row md:px-8 justify-between gap-y-6'>
        {[
          { value: '2', label: 'Years of Experience' },
          { value: '15+', label: 'Project Completed' },
          { value: '100%', label: 'Clients Satisfaction' },
        ].map(({ value, label }) => (
          <div key={label} className='flex flex-col md:flex-row p-4 md:gap-4 w-1/2 md:w-fit items-center'>
            <span className='text-5xl font-bold text-gray-900 dark:text-gray-100'>{value}</span>
            <p className='text-center md:text-left text-gray-700 dark:text-gray-300'>
              {label.split(' ').map((word, i) => (
                <span key={i}>
                  {word}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
