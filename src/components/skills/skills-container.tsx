"use client";

import { motion } from "framer-motion";
import SkillsItem from "./skills-item";
import { FaAngular, FaHtml5, FaNodeJs, FaReact, FaSwift } from "react-icons/fa6";

// Ici tu peux réutiliser la même chose qu'avec les projets.
export default function SkillsContainer() {
    return(
        <div className="grid grid-cols-3 md:grid-cols-12 gap-x-4 gap-y-6">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                <SkillsItem skillName="NodeJS" icon={FaNodeJs} level="Toujours en apprentissage"/>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                <SkillsItem skillName="ReactJS" icon={FaReact} level="Toujours en apprentissage" />
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                <SkillsItem skillName="Angular" icon={FaAngular} level="Toujours en apprentissage"/>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                <SkillsItem skillName="Swift" icon={FaSwift} level="notion"/>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="col-span-3">
                <SkillsItem skillName="Swift" icon={FaHtml5} level="maîtrisé"/>
            </motion.div>
        </div>
    );
}