import React from 'react';
import { valuePropositions } from '../data/valueProp';
import { Database, Cpu, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

const iconMap = {
  database: Database,
  cpu: Cpu,
  'trending-up': TrendingUp,
  users: Users,
};

export default function ValueAdded() {
  return (
    <section id="value" className="py-20 bg-slate-100/50 dark:bg-[#0d131f]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Valeur Ajoutée & ROI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ce que j'apporte concrètement à votre équipe
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Au-delà des lignes de code et des formules mathématiques, voici comment mon intervention sécurise vos projets et accélère votre prise de décision.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valuePropositions.map((item) => {
            const Icon = iconMap[item.icon] || Database;
            return (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-4">
                    {item.tagline}
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                    Livrables & Garanties :
                  </div>
                  <ul className="space-y-2">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
