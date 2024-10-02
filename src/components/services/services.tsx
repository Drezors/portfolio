"use client";

import { motion } from "framer-motion";

export default function Services() {
    return(
        <section className="px-6 md:px-32 py-12 grid grid-cols-6 md:grid-cols-12 gap-y-8 gap-x-8 items-center bg-usual-100 bg-opacity-30 dark:bg-opacity-30 dark:bg-usual-950 ">
            <h2 className="col-span-6 md:col-span-12 text-3xl font-bold text-center">Mes services</h2>
            <div className="col-span-6 p-8 flex flex-col gap-6 border hover:text-usual-100 border-secondary-700 rounded-2xl hover:bg-secondary-700 hover:border-usual-100">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                    <img className="bg-secondary-700 p-2 rounded-full" src="/icons/dev-web-icon.png" alt="dev web icon" />
                </motion.div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Développeur Web</h3>
                    <p className="">Je conçois des sites web avec des technologies de code ou des outils no-code tels que Webflow et WordPress, pour offrir des solutions rapides et sur mesure.</p>
                </div>
            </div>
            <div className="col-span-6 p-8 flex flex-col gap-6 border  hover:text-usual-100 border-secondary-700 rounded-2xl hover:bg-secondary-700 hover:border-usual-100">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                    <img className="bg-secondary-700 p-2 rounded-full" src="/icons/dev-mobile-icon.png" alt="dev mobile icon" />
                </motion.div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold ">Développeur Mobile</h3>
                    <p className="">Je développe des applications mobiles natives, principalement sous Android (Kotlin), ainsi qu'avec des technologies multiplateformes comme React Native et Flutter pour couvrir les besoins d'applications sur plusieurs appareils.</p>
                </div>
            </div>
            <div className="col-span-6 p-8 flex flex-col gap-6 border  hover:text-usual-100 border-secondary-700 rounded-2xl hover:bg-secondary-700 hover:border-usual-100">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                    <img className="bg-secondary-700 p-2 rounded-full" src="/icons/dev-front-icon.png" alt="dev front icon" />
                </motion.div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold ">Développeur FRONT-END</h3>
                    <p>Je réalise des interfaces utilisateurs interactives et intuitives en utilisant divers langages et frameworks, notamment Angular et React, tout en m'adaptant aux besoins spécifiques du projet, avec ou sans framework.</p>
                </div>
            </div>
            <div className="col-span-6 p-8 flex flex-col gap-6 border  hover:text-usual-100 border-secondary-700 rounded-2xl hover:bg-secondary-700 hover:border-usual-100">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                    <img className="bg-secondary-700 p-2 rounded-full" src="/icons/design-icon.png" alt="design icon" />
                </motion.div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold ">Conception de produits numériques</h3>
                    <p className="">Je me spécialise dans la conception de produits numériques centrés sur l’utilisateur, en créant des solutions esthétiques et fonctionnelles qui répondent aux besoins spécifiques des utilisateurs et des entreprises.</p>
                </div>
            </div>
        </section>
    );
}