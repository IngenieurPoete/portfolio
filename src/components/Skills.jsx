import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Cpu, Database, GitBranch, HeartHandshake, CheckCircle } from 'lucide-react';

const categoryIcons = {
  0: Cpu,
  1: Database,
  2: GitBranch,
  3: HeartHandshake,
};

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Matrice des Compétences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Savoir-Faire Technique & Qualités Humaines
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Une palette complète construite pour orchestrer la chaîne de valeur data du composant algorithmique le plus bas-niveau jusqu'à la transmission stratégique.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Cpu;
            const isSelected = selectedCat === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCat(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-lg shadow-emerald-950/20 scale-105'
                    : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Detail Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm max-w-5xl mx-auto">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {skillCategories[selectedCat].name}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {skillCategories[selectedCat].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories[selectedCat].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-slate-900 dark:text-white text-base">
                    {skill.name}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    skill.level === 'Expert' 
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
