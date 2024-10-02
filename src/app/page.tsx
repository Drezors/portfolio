import Navigation from "@/components/navigation/navigation";
import Header from "@/components/header/header";
import SkillsContainer from "@/components/skills/skills-container";
import Services from "@/components/services/services";
import { promises as fs } from "fs";
import RecentProjects from "@/components/projects/recent-projects";
import ContactForm from "@/components/form/contact-form";
import Footer from "@/components/navigation/footer";
import React from "react";


export default async function Home() {

  const projectsFile = await fs.readFile(process.cwd() + '/src/app/projects.json', 'utf8');
  const projects = JSON.parse(projectsFile);

  return (
    <>
      <Navigation />
      <Header />
      <Services />
      <RecentProjects projects={projects} />
      <ContactForm />
      <Footer />
    </>
  );
}
