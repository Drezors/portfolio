import React from "react";
import { IconType } from "react-icons";

export default function SkillsItem({skillName, icon, confidence} : {skillName: string, icon: IconType, confidence: number}) {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-indigo-300 text-indigo-700 rounded-full">
                    {React.createElement(icon)}
                </div>
                <span className="font-semibold">{skillName}</span>
            </div>
            <h3 className="text-lg font-medium text-slate-400">Niveau de confiance</h3>
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-500">{confidence} <span className="text-sm font-light">/100</span></span>
        </div>
    );
}