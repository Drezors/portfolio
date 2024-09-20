"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../app/project.types";

type ProjectsGridProps = {
    projects: Project[]
}

export default function ProjectsGrid({projects} : ProjectsGridProps) {
    console.log(projects);
    return(
        <AnimatePresence>
        // Petite animation de div avec framer-motion, attention il faut aboslument que lorsque tu as une animation ce soit un "use client"; sinon nextjs ne l'aimera pas. L'avantage ici c'est que tu es coté client, donc peut être y mettre ton filtre par technologie ici peut etre interessant avec un useState etc etc.
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-4 gap-y-6 text-usual-100">
            {projects.map((project) => 
            <motion.div initial={{opacity: 0, translateX: -100}} whileInView={{opacity: 1, translateX: 0}} transition={{type: "string", damping: 10, stiffness: 100}} className="col-span-4 bg-white dark:bg-slate-800 flex flex-col gap-4 justify-between w-full h-full border border-slate-100 dark:border-slate-300 shadow-sm p-4 rounded-xl">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <div className="grid grid-cols-3 gap-2 items-center">
                    {project.technologies.map((technology) => 
                    <span className="text-sm bg-indigo-100 dark:bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center px-1.5 py-1">{technology}</span>
                    )}
                </div>
            </div>
            <p className="font-medium">{project.description.substring(0, 100)}...</p>
            <img src={project.thumbnail} alt={`${project.name} screenshot`} className="w-full h-auto rounded-lg" />
            <div className="flex flex-row items-center justify-end">
                <Link href={`/projects/${project.slug}`} className="px-3 py-1 rounded-xl text-lg font-bold border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-500 flex items-center justify-center">Voir plus</Link>
            </div>
        </motion.div>
            )}
            
        </div>
        </AnimatePresence>
    );
}