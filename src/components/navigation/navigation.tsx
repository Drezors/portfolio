import Link from "next/link";

export default function Navigation() {
    return(
        <nav className="w-fit mx-auto mt-2 px-3 py-2 rounded-full bg-white dark:bg-slate-800 flex flex-row items-center gap-4">
            <Link href="/" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">Accueil</Link>
            <Link href="/projects" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">Projets</Link>
            <Link href="/about" className="rounded-full px-2 py-1 bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-300 hover:text-indigo-700 flex items-center justify-center">A propos</Link>
        </nav>
    );
}