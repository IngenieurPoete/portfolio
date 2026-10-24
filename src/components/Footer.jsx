import React from 'react';
import { Terminal, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070a11] text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white">
                Mbopuwouo Fadil Aboubakar Sidik
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                « L'Ingénieur Poète » • Data Science, BI & MLOps
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500 italic">
            « Donner du sens à la complexité algorithmique pour éclairer les décisions humaines. »
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs">
              © {new Date().getFullYear()} Tous droits réservés.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
              title="Retourner en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
