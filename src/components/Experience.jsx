import React, { useState } from 'react';
import { experiences, education } from '../data/experiences';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-[#0d131f]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Trajectoire
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Parcours & Formations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Des classes préparatoires d'ingénieurs au Cameroun jusqu'au cycle d'ingénieur d'État en Business Intelligence & Data Science à Rabat.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'experience'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Expériences Professionnelles</span>
          </button>
          
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'education'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Formation Académique</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' ? (
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end text-xs text-slate-500 space-y-1">
                      <div className="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {edu.school}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end text-xs text-slate-500 space-y-1">
                      <div className="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
