"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaX, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return(
        <>
        {/* <div className="w-full px-3 py-2 bg-usual-950 flex flex-row items-center gap-4 justify-between text-usual-50">
            <span className="font-bold">Portfolio</span>
            <nav className="w-fit mx-auto px-3 py-2 rounded-full bg-white dark:bg-slate-800 flex flex-row items-center gap-4">
                <Link href="/" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">Accueil</Link>
                <Link href="/projects" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">Projets</Link>
                <Link href="/about" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">A propos</Link>
            </nav>
            <span className="font-bold text-lg text-secondary-700">© 2024 All Rights Reserved by ThemeJunction</span>
        </div> */}
        <div className="flex flex-col md:flex-row bg-usual-950 py-10 px-12 justify-between text-usual-50 w-full">
            <div className="flex flex-col p-1 gap-4 w-fit">
                <Link href="#" className="hover:text-secondary-600 hover:underline">Mentions légales</Link>
                <Link href="#" className="hover:text-secondary-600 hover:underline">Politique de confidentialité</Link>
                <div className="flex flex-col gap-1">
                    <span className="font-bold">Gonthier Thomas.</span>
                    <span>Tout droits réservés © 2024</span>
                </div>
            </div>
            <div className="flex flex-col p-1 gap-4 w-fit justify-between">
                <div className="flex flex-row gap-4">
                    <Link href="/" className="hover:text-secondary-600">Accueil</Link>-
                    <Link href="/projects" className="hover:text-secondary-600">Projets</Link>-
                    <Link href="/about" className="hover:text-secondary-600">A propos</Link>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex flex-row p-2 text-secondary-700 hover:text-usual-100 hover:bg-secondary-700 border border-secondary-700 rounded-full">
                        <FaGithub />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex flex-row p-2 text-secondary-700 hover:text-usual-100 hover:bg-secondary-700 border border-secondary-700 rounded-full">
                        <FaLinkedin />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex flex-row p-2 text-secondary-700 hover:text-usual-100 hover:bg-secondary-700 border border-secondary-700 rounded-full">
                        <FaX />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex flex-row p-2 text-secondary-700 hover:text-usual-100 hover:bg-secondary-700 border border-secondary-700 rounded-full">
                        <FaFacebook />
                    </motion.div>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex flex-row p-2 text-secondary-700 hover:text-usual-100 hover:bg-secondary-700 border border-secondary-700 rounded-full">
                        <FaInstagram />
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    );
}