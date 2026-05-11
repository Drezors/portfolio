import ContactForm from '@/components/form/contact-form';
import HeroSection from '@/components/header/header';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import ParcoursSection from '@/components/timeline/Parcours';
import { promises as fs } from 'fs';

export default async function Home() {
  const projectsFile = await fs.readFile(process.cwd() + '/src/app/projects.json', 'utf8');
  const projects = JSON.parse(projectsFile);

  return (
    <>
      <Navigation />
      <HeroSection />
      {/* <Services /> */}
      {/* <RecentProjects projects={projects} /> */}
      <ParcoursSection />
      <ContactForm />
      <Footer />
    </>
  );
}
