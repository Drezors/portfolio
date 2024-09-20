"use client";

import Navigation from "@/components/navigation/navigation";
import SkillsContainer from "@/components/skills/skills-container";
import SkillsItem from "@/components/skills/skills-item";
import { motion } from "framer-motion";
import { FaThumbsUp } from "react-icons/fa";
import { FaAngular, FaClock, FaCss3, FaEarListen, FaHtml5, FaNodeJs, FaReact, FaRocket, FaSwift, FaWebflow, FaWix, FaWordpress } from "react-icons/fa6";

export default function About() {
    return(
        <>
            <Navigation />
            <div className="text-usual-100">
            <div className="h-[50vh] px-8 py-20 bg-cyan-700 flex flex-row justify-center items-center">
                <h1 className="font-bold text-2xl">À propos</h1>
            </div>
            <section className="flex flex-row justify-between items-center px-60 py-14 gap-20">
                <div className="flex flex-col gap-8">
                    <h2 className="font-bold text-2xl">Quelques infos sur moi</h2>
                    <p>Je m'appelle GONTHIER Thomas, j'ai 21 ans, et je suis passionné par le développement depuis très longtemps. De nature curieuse et toujours désireux de progresser, j'ai développé mes compétences de manière <span className="font-bold">autodidacte</span> ainsi qu'à travers mes formations.</p>
                    <p>Mon goût pour le développement m'est venu très naturellement, car j'étais fasciné par les diverses créations que je pouvais observer sur internet.</p>
                    <p>J'ai donc orienté mes études vers le domaine du développement, en commençant par des cours théoriques, avant de m'orienter vers l'alternance pour acquérir plus de compétences et de responsabilités. Je me suis spécialisé dans le <span className="font-bold">développement front-end</span>, travaillant sur des <span className="font-bold">sites web</span>, des <span className="font-bold">applications web</span>, et même des <span className="font-bold">applications mobiles</span>.</p>
                    <p>Récemment, je me suis lancé en <span className="font-bold">freelance</span> en complément de mon alternance, une expérience enrichissante pleine de surprises, je le sens ! 😄</p>
                </div>
                <img src="/profile_image.jpg" className="w-40 h-40 rounded-full ml-3" alt="Thomas Gonthier" />
            </section>
            <section className="flex flex-row justify-between items-center px-60 py-14 gap-20">
                <div className="flex flex-col gap-8">
                    <h2 className="font-bold text-2xl">Mes valeurs</h2>
                    <div className="flex flex-row gap-12 justify-around items-center">
                        <div className="flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <FaThumbsUp className="text-4xl" />
                            </motion.div>
                            <h3 className="text-lg font-semibold">La simplicité</h3>
                            <p>Je simplifie les parcours utilisateurs et les interfaces visuelles afin que l’expérience sur votre produit soit la plus agréable</p>
                        </div>

                        <div className="flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <FaClock className="text-4xl" />
                            </motion.div>
                            <h3 className="text-lg font-semibold">La flexibilité</h3>
                            <p>Je m’adapte à toutes les situations et je sais réagir en cas d’imprévu et de difficulté</p>
                        </div>

                        <div className="flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <FaEarListen className="text-4xl" />
                            </motion.div>
                            <h3 className="text-lg font-semibold">L'écoute</h3>
                            <p>Je reste attentif aux besoins de mes clients et de leurs utilisateurs pour garantir un service personnalisé</p>
                        </div>

                        <div className="flex flex-col gap-4 shadow-lg rounded-lg px-6 py-10 bg-slate-200 w-full h-full basis-1/4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <FaRocket className="text-4xl" />
                            </motion.div>
                            <h3 className="text-lg font-semibold">La curiosité</h3>
                            <p>Je me renseigne sur les dernières tendances afin de rester à jour et de vous proposer un meilleur service</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row justify-between items-center px-8 sm:px-16 lg:px-60 py-14 gap-20">
                <div className="flex flex-col gap-4 my-4 px-8 py-10 w-full">
                    <h3 className="text-xl font-bold">Mes compétences</h3>
                    <span className="bg-indigo-100 dark:bg-indigo-200 text-indigo-700 px-3 text-sm flex items-center justify-center w-fit rounded-full">Toujours en apprentissage</span>
                    <SkillsContainer />
                </div>
            </section>
            </div>
        </>
    )
}