import Navigation from "@/components/navigation/navigation";
import ProjectsGrid from "@/components/projects/projects-grid";
import { promises as fs } from "fs";

export default async function Projects() {
    // Ici on récupère le projects.json directement depuis ton dossier (il n'est pas visible coté client heureusement)
    const projectsFile = await fs.readFile(process.cwd() + '/src/app/projects.json', 'utf8');
    const projects = JSON.parse(projectsFile);
    // Ca c'est juste un objet pour afficher les clés, tu peux l'utiliser pour l'afficher en tabs
    const projectsType = Object.keys(projects);

    return(
        <>
            <Navigation />
            <div className="px-8 py-20 max-w-md md:max-w-2xl mx-auto text-usual-100">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="rounded-full px-2 py-1 border border-indigo-300 dark:border-indigo-600 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-300 flex flex-row items-center justify-between">
                        <span className="text-sm font-bold">Ceci est une liste non exhaustive</span>
                    </div>
                    <h1 className="text-4xl font-bold text-center">Réaliser des projets en tout genre</h1>
                    <p className="text-lg text-center">Avec une appétance pour les applications web. Découvrez un ensemble de projets que j'ai pu réalisé</p>
                    <div className="flex flex-row items-center gap-4 justify-center">
                        <a href="mailto:" className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600 text-slate-50 text-lg font-bold px-2.5 py-2 rounded-xl flex items-center justify-center">Me contacter</a>
                    </div>
                </div>
            </div>
            <div className="px-8 py-10 flex flex-col gap-2">
            { //Ici tu parse ton objet, c'est ce qui peut être utile pour faire des tabs de filtres etc
            projectsType.map((projectType) => 
            <>
                <h3 className="text-xl font-bold">{projectType.charAt(0).toUpperCase()+ projectType.slice(1).toLowerCase().trim()}</h3> 
                <ProjectsGrid projects={projects[projectType]} /> 
            </>
            )}
            </div>
            <div className="px-8 py-10">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Mon parcours professionnel</h3>
                </div>
            </div>
        </>
    );
}