import Navigation from "@/components/navigation/navigation";
import { promises as fs } from "fs";
import { Project } from "../../project.types";
import Link from "next/link";

// Fonction qui permet de récupéré le projet en fonction du slug répértorié.
export async function getPostBySlug(slug: string) {
    const projectsFile = await fs.readFile(process.cwd() + '/src/app/projects.json', 'utf8');
    const projects = JSON.parse(projectsFile);
    const projectsType = Object.keys(projects);
    var project = null;

    for(var i = 0; i < projectsType.length; i++) {
        projects[projectsType[i]].map((projectToRetrieve : Project) => {
            console.log(projectToRetrieve.slug);
            console.log(slug);
            console.log(projectToRetrieve.slug == slug);
            if(projectToRetrieve.slug == slug) {
                project = projectToRetrieve;
            }
        });
    }
    return project;
}


export default async function ProjectDetails({ params }: { params: { slug: string } }) {
    let project = await getPostBySlug(params.slug);
    
    // Affiche le projet en question (je te laisse faire le style comme tu le souhaite)
    if(project != undefined && project != null) {
        return(
            <>
                <Navigation />
                <div className="px-8 py-20">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-xl font-bold">{project.name}</h1>
                        <div className="flex flex-row items-center gap-6">
                        {project.technologies.map((technology) => 
                            <span className="text-sm bg-indigo-100 dark:bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center px-1.5 py-1">{technology}</span>
                        )}
                        </div>
                        <p>{project.description}</p>
                        <img src={project.thumbnail} alt={`${project.name} screenshot`} className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </>
        );
    } else {
        return(
            <>
                <Navigation />
                <div className="flex flex-col gap-4 items-center justify-center mt-20">
                    <h1 className="text-4xl font-bold">Impossible de trouver ce projet</h1>
                    <p className="text-lg font-semibold">Cela peut être une erreur de notre part. Mais nous vous invitons à retenter depuis la page de projet.</p>
                    <div className="flex flex-row gap-6 items-center justify-center">
                        <Link href="/projects" className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600 text-slate-50 font-bold flex items-center justify-center rounded-lg px-2.5 py-1">Retour aux projets</Link>
                        <Link href="/" className="border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-500 rounded-lg px-2.5 py-1 flex items-center justify-center">Retour à l'accueil</Link>
                    </div>
                </div>
            </>
        );
    }
    
}