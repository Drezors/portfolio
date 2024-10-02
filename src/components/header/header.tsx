"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaX, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Header() {
    return(
        <header className="px-6 md:px-32 py-12 grid grid-cols-6 md:grid-cols-12 gap-y-12 gap-x-8 md:w-4/5">
            <div className="col-span-6 w-full md:w-4/5 flex flex-row gap-6 items-center">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl md:text-4xl font-bold">Gonthier Thomas</span>
                        <h1 className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-700 to-usual-100">Développeur Concepteur Junior</h1>
                        <p className="text-xl">Je suis un jeune développeur Web passionné et plein d'énergie. Je vis sur l'île de la Réunion, une île charger d'émotions et de puissances. J'adore faire du web et faire preuve de créativité.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <button className="bg-transparent text-nowrap w-fit hover:bg-primary-500 text-secondary-700 font-semibold hover:text-usual-50 py-4 px-9 border border-secondary-700 hover:border-transparent rounded-full">
                            Download CV
                        </button>
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
            </div>
            <div className="col-span-6 w-full flex flex-row items-center justify-center">
                <img
                    src="/profile_image.jpg"
                    className="max-h-96 rounded-2xl ml-3 border-2 border-secondary-800 hover:border-secondary-600 transform rotate-3 hover:rotate-0 transition duration-300 ease-in-out"
                    alt="Thomas Gonthier"
                />
            </div>
            <div className="col-span-6 p-4 md:col-span-12 flex flex-wrap md:flex-row md:px-8 justify-between gap-y-6">
                <div className="flex flex-col md:flex-row p-4 md:gap-4 w-1/2 md:w-fit items-center">
                    <span className="text-5xl font-bold">2</span>
                    <p className="text-center md:text-left">Years of<br/> Experience</p>
                </div>
                <div className="flex flex-col md:flex-row p-4 md:gap-4 w-1/2 md:w-fit items-center">
                    <span className="text-5xl font-bold">15+</span>
                    <p className="text-center md:text-left">Project<br/> Completed</p>
                </div>
                <div className="flex flex-col md:flex-row p-4 md:gap-4 w-full md:w-fit items-center">
                    <span className="text-5xl font-bold">100%</span>
                    <p className="text-center md:text-left">Clients<br/> Satisfaction</p>
                </div>
            </div>
        </header>
    );
}