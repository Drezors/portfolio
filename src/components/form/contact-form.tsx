'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className='px-6 md:px-16 lg:px-24 py-24'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='lg:col-span-5 flex flex-col gap-10'>
          <div className='flex flex-col gap-5'>
            <span className='uppercase tracking-[0.3em] text-sm text-gray-500'>Contact</span>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight'>Construisons quelque chose d’utile.</h2>

            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>Je conçois des applications web et mobiles orientées produit, maintenables et pensées pour les utilisateurs réels.</p>
          </div>

          {/* CONTACT INFOS */}
          <div className='flex flex-col gap-5'>
            <Card className='p-5 rounded-2xl border'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-xl bg-muted'>
                  <Mail className='w-5 h-5' />
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm text-muted-foreground'>Email</span>

                  <a href='mailto:pro.thomasgonthier@gmail.com' className='font-medium hover:underline'>
                    pro.thomasgonthier@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className='p-5 rounded-2xl border opacity-70'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-xl bg-muted'>
                  <Phone className='w-5 h-5' />
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm text-muted-foreground'>Téléphone</span>

                  <span className='font-medium'>Disponible après premier échange</span>
                </div>
              </div>
            </Card>

            <Card className='p-5 rounded-2xl border opacity-70'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-xl bg-muted'>
                  <MapPin className='w-5 h-5' />
                </div>

                <div className='flex flex-col'>
                  <span className='text-sm text-muted-foreground'>Localisation</span>

                  <span className='font-medium'>Toulouse / Remote</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className='lg:col-span-7'>
          <Card className='p-8 md:p-10 rounded-3xl border'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
              {/* ROW */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <Label>Prénom</Label>

                  <Input name='firstname' value={formData.firstname} onChange={handleChange} placeholder='Thomas' />
                </div>

                <div className='flex flex-col gap-2'>
                  <Label>Nom</Label>

                  <Input name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Gonthier' />
                </div>
              </div>

              {/* ROW */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <Label>Email</Label>

                  <Input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='vous@entreprise.com' />
                </div>

                <div className='flex flex-col gap-2'>
                  <Label>Téléphone</Label>

                  <Input name='phone' value={formData.phone} onChange={handleChange} placeholder='+33 6 00 00 00 00' />
                </div>
              </div>

              {/* MESSAGE */}
              <div className='flex flex-col gap-2'>
                <Label>Votre besoin</Label>

                <Textarea name='message' value={formData.message} onChange={handleChange} placeholder='Parlez-moi de votre projet, besoin ou problématique.' className='min-h-[180px] resize-none' />
              </div>

              {/* CTA */}
              <div className='flex items-center justify-between gap-4 flex-col md:flex-row'>
                <p className='text-sm text-muted-foreground'>Réponse généralement sous 24 à 48h.</p>

                <Button type='submit' size='lg' className='rounded-xl gap-2'>
                  Envoyer le message
                  <Send className='w-4 h-4' />
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
