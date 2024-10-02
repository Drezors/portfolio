"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navigation() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.className = storedTheme === "dark" ? "dark" : "";
        } else if (prefersDark) {
            setTheme("dark");
            document.documentElement.className = "dark";
        } else {
            setTheme("light");
            document.documentElement.className = "";
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
    };
        
    return(
        <>
        <div className="w-full mt-2 px-3 py-2 rounded-full bg-white dark:bg-slate-800 flex flex-row items-center gap-4 justify-between">
            <span className="font-bold text-4xl">Portfolio</span>
            <nav className="w-fit mx-auto px-3 py-2 rounded-full bg-white dark:bg-slate-800 flex flex-row items-center gap-4">
                <Link href="/" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">Accueil</Link>
                <Link href="/projects" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">Projets</Link>
                <Link href="/about" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">A propos</Link>
            </nav>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </div>
        </>
    );
}