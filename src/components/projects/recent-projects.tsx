"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "../../app/project.types";

type RecentProjectsProps = {
  projects: {
    mobile: Project[],
    web: Project[],
    desktop: Project[],
  };
};

export default function RecentProjects({ projects }: RecentProjectsProps) {
  // Obtien les deux derniers projets de chaque catégorie
  const latestMobileProjects = projects.mobile.slice(0, 2);
  const latestWebProjects = projects.web.slice(0, 2);
  const latestDesktopProjects = projects.desktop.slice(0, 2);

  // Met les projets dans un tableau pour les afficher
  const allProjects = [
    ...latestMobileProjects.map((project) => ({ category: "apps", project })),
    ...latestWebProjects.map((project) => ({ category: "web", project })),
    ...latestDesktopProjects.map((project) => ({ category: "desktop", project })),
  ];

  // État pour le filtre actif
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtrer les projets en fonction du filtre actif
  const filteredProjects = activeFilter === "all"
    ? allProjects
    : allProjects.filter((item) => item.category === activeFilter);

  return (
    <section className="px-6 md:px-32 py-12 flex flex-col gap-14 items-center text-usual-100 md:w-4/5">
      {/* Barre de filtre */}
      <h2 className="col-span-6 md:col-span-12 text-3xl font-bold text-center">Mes projects récents</h2>
      <div className="flex justify-center gap-4 p-2 w-fit bg-usual-900 rounded-full">
        <button
          className={`px-4 py-2 rounded-full ${activeFilter === "all" ? "bg-secondary-600 text-white" : "bg-transparent"}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeFilter === "apps" ? "bg-secondary-600 text-white" : "bg-transparent"}`}
          onClick={() => setActiveFilter("apps")}
        >
          Apps
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeFilter === "web" ? "bg-secondary-600 text-white" : "bg-transparent"}`}
          onClick={() => setActiveFilter("web")}
        >
          Web
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeFilter === "desktop" ? "bg-secondary-600 text-white" : "bg-transparent"}`}
          onClick={() => setActiveFilter("desktop")}
        >
          Desktop
        </button>
      </div>

      {/* Affichage des projets filtrés */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: -50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-primary-950"
          >
            {/* Image */}
            <img
              src={item.project.thumbnail}
              alt={`${item.project.name} screenshot`}
              className="w-full h-80 object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-105"
            />

            {/* Barre de survol */}
            <Link href={`/projects/${item.project.slug}`}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-primary-800 mb-2">{item.project.name}</h2>
                <p className="text-primary-700 text-center">Cliquez pour plus d'informations sur le projet</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
