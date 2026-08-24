import ContactForm from '@/components/form/contact-form';
import HeroSection from '@/components/header/header';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import RecentProjects from '@/components/projects/recent-projects';
import SkillsSection from '@/components/SkillsSection';
import { promises as fs } from 'fs';

export default async function Home() {
  const projectsFile = await fs.readFile(process.cwd() + '/src/app/projects-new.json', 'utf8');
  const projects = JSON.parse(projectsFile);

  const competencesFile = await fs.readFile(process.cwd() + '/src/app/competences.json', 'utf8');
  const competences = JSON.parse(competencesFile);

  return (
    <>
      <Navigation />
      <HeroSection />
      <SkillsSection skills={competences} />
      <RecentProjects projects={projects} />
      <ContactForm />
      <Footer />
    </>
  );
}
