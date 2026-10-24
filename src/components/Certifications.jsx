import React from 'react';
import { certificates } from '../data/certificates';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Database, BarChart3, FileSpreadsheet, Cpu } from 'lucide-react';

const iconMap = {
  database: Database,
  'bar-chart': BarChart3,
  'file-spreadsheet': FileSpreadsheet,
  cpu: Cpu,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-100/50 dark:bg-[#0d131f]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Accréditations Officielles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications Microsoft & IBM
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Compétences formellement éprouvées et validées sur la plateforme internationale Coursera par les leaders mondiaux de la technologie.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificates.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            const isMicrosoft = cert.issuer === 'Microsoft';
            return (
              <div
                key={cert.id}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Bar: Issuer & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      {isMicrosoft ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-xs">
                          <span>Microsoft Certified</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs">
                          <span>IBM Certified</span>
                        </div>
                      )}
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">via Coursera</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Vérifié</span>
                    </div>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Délivré à <span className="font-semibold text-slate-700 dark:text-slate-300">Aboubakar MBOPUWOUO FADIL</span> • {cert.date}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Skills tags & verification */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Verification Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            💡 <strong className="text-slate-900 dark:text-white">Gage d'exigence et de mise à jour continue :</strong> Les programmes officiels Microsoft et IBM garantissent l'application des standards industriels récents en Data Modeling, DAX, Power Query et gouvernance des données.
          </p>
        </div>

      </div>
    </section>
  );
}
