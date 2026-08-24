import React from "react";
import { IconType } from "react-icons";

type SkillItemProps = {
    skillName: string;
    icon: IconType;
    level: 'Toujours en apprentissage' | 'maîtrisé' | 'notion';
};

export default function SkillsItem({ skillName, icon, level }: SkillItemProps) {

    const levelClasses = {
        'Toujours en apprentissage': 'bg-indigo-100 dark:bg-indigo-200 text-indigo-700',
        'maîtrisé': 'bg-green-100 dark:bg-green-200 text-green-700',
        'notion': 'bg-gray-100 dark:bg-gray-200 text-gray-700',
    };

    return(
        <div className="flex flex-col gap-4 p-6 border-solid border-2 border-slate-50 hover:border-purple-600 rounded-lg">
            <div className="flex flex-col gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-indigo-300 text-indigo-700 rounded-full">
                    {React.createElement(icon)}
                </div>
                <span className="font-semibold">{skillName}</span>
            </div>
            <h3 className="text-lg font-medium text-slate-400">Niveau de confiance</h3>
            <span className={`px-3 text-sm flex items-center justify-center w-fit rounded-full ${levelClasses[level]}`}>{level}</span>
        </div>
    );
}