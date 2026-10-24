import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Github, ExternalLink, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const categories = [
    'Tous',
    'Data Engineering & IA',
    'MLOps & Data Science',
    'Machine Learning & BI',
    'Génie Logiciel & Mobile',
  ];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Réalisations Concrètes
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projets & Systèmes Déployés
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Chaque projet ci-dessous est auditable sur GitHub et illustre la résolution d'une problématique d'ingénierie réelle.
            </p>
          </div>

          {/* Quick Github Counter */}
          <a
            href="https://github.com/IngenieurPoete"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 text-sm font-semibold border border-slate-200 dark:border-slate-700 transition-colors w-fit"
          >
            <Github className="w-4 h-4" />
            <span>Voir tous les dépôts sur GitHub</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                project.featured 
                  ? 'bg-white dark:bg-slate-900/90 border-2 border-emerald-500/40 shadow-xl shadow-emerald-950/5 relative overflow-hidden' 
                  : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-emerald-600 to-teal-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-bl-xl shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Projet Vedette</span>
                </div>
              )}

              <div>
                {/* Category & Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                  {project.subtitle}
                </p>

                {/* Key Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 mb-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[11px] text-slate-400 font-medium truncate">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Problem & Solution Accordion-style layout */}
                <div className="space-y-4 mb-6 text-sm">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">Problème résolu : </span>
                    <span className="text-slate-600 dark:text-slate-400">{project.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Solution apportée : </span>
                    <span className="text-slate-600 dark:text-slate-300">{project.solution}</span>
                  </div>
                </div>

                {/* Key highlights bullet points */}
                <div className="mb-6 space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Consulter le code source</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Démo en ligne</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
