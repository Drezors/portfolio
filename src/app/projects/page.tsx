import ContactForm from '@/components/form/contact-form';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import { Card, CardContent } from '@/components/ui/card';
import projects from '@/data/projects-new.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Navigation />

      <div className='px-8 py-20 max-w-md md:max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold text-center'>Mes réalisations</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4 pb-10'>
        {Object.values(projects).map((project) => (
          <Card key={project.slug}>
            <CardContent>
              <Link href={`/projects/${project.slug}`} className='group border rounded-xl overflow-hidden hover:shadow-lg transition bg-white dark:bg-slate-900'>
                <div className='relative w-full aspect-[3/2]'>
                  <Image src={project.media.thumbnail} alt={project.name} fill className='object-cover' />
                </div>

                <div className='p-4 flex flex-col gap-2'>
                  <h3 className='text-lg font-bold group-hover:text-primary-500'>{project.name}</h3>

                  <p className='text-sm text-muted-foreground line-clamp-3'>{project.introduction?.replace(/\*\*/g, '')}</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
