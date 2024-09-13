"use client";

import { FaGithub, FaLinkedin, FaX, FaFacebook, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Header() {
    return(
        <header className="px-8 py-12 grid grid-cols-6 md:grid-cols-12 gap-8">
            <div className="col-span-6 w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <img src="/profile_image.jpg" className="w-12 h-12 rounded-full ml-3" alt="Thomas Gonthier" />
                    <h1 className="text-4xl font-bold">Jeune, dynamique, passioné, votre projet en de bonnes mains</h1>
                    <p className="text-lg">Je suis un jeune développeur Web passionné et plein d'énergie. Je vis sur l'île de la Réunion, une île charger d'émotions et de puissances. J'adore faire du web et faire preuve de créativité.</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                        <FaGithub />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                        <FaLinkedin />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                        <FaX />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                        <FaFacebook />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                        <FaInstagram />
                    </motion.div>
                </div>
            </div>
        </header>
    );
}