import ContactForm from '@/components/form/contact-form';
import HeroSection from '@/components/header/header';
import Footer from '@/components/navigation/footer';
import Navigation from '@/components/navigation/navigation';
import RecentProjects from '@/components/projects/recent-projects';
import SkillsSection from '@/components/SkillsSection';
import competences from '@/data/competences.json';
import projects from '@/data/projects-new.json';

type Skill = {
  title: string;
  type: 'humaine' | 'technique';
  definition: string;
  proofs: {
    title: string;
    content: string;
  }[];
};

type Project = {
  slug: string;
  name: string;
  introduction: string;
  technologies: string[];
  media: {
    thumbnail: string;
  };
};

export default async function Home() {
  const typedCompetences = competences as Record<string, Skill>;
  const typedProjects = projects as Record<string, Project>;

  return (
    <>
      <Navigation />
      <HeroSection />
      <SkillsSection skills={typedCompetences} />
      <RecentProjects projects={typedProjects} />
      <ContactForm />
      <Footer />
    </>
  );
}
