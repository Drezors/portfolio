"use client";

import { motion } from "framer-motion";
import SkillsItem from "./skills-item";
import { FaAngular, FaNodeJs, FaReact, FaSwift } from "react-icons/fa6";

// Ici tu peux réutiliser la même chose qu'avec les projets.
export default function SkillsContainer() {
    return(
        <div className="flex flex-col gap-4 my-4 px-8 py-10">
            <h3 className="text-xl font-bold">Mes compétences</h3>
            <span className="bg-indigo-100 dark:bg-indigo-200 text-indigo-700 px-3 text-sm flex items-center justify-center w-fit rounded-full">Toujours en apprentissage</span>
            <div className="grid grid-cols-3 md:grid-cols-12 gap-x-4 gap-y-6">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                    <SkillsItem skillName="NodeJS" icon={FaNodeJs} confidence={40} />
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                    <SkillsItem skillName="ReactJS" icon={FaReact} confidence={80} />
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                    <SkillsItem skillName="Angular" icon={FaAngular} confidence={40} />
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                    <SkillsItem skillName="Swift" icon={FaSwift} confidence={40} />
                </motion.div>
            </div>
        </div>
    );
}