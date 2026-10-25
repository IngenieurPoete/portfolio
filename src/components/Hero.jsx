import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users,
  Database,
  Cpu,
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Profile Photo with Glowing Ring & Status Indicator */}
          <div className="relative mb-6 group">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 shadow-xl shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/profile.jpg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://github.com/IngenieurPoete.png";
                }}
                alt="Mbopuwouo Fadil Aboubakar Sidik"
                className="w-full h-full rounded-full object-cover bg-slate-800 border-2 border-white dark:border-[#090d16]"
              />
            </div>
            {/* Status dot indicator */}
            <div className="absolute bottom-1 right-2 bg-white dark:bg-[#090d16] p-1 rounded-full shadow-md">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white" title="Disponible pour missions & stages">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Étudiant Ingénieur à l'ISMAGI (BI & Data Science) • En quête de défis à fort impact</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            L'alliance de la <span className="gradient-text">rigueur des données</span> et de la vision humaine.
          </h1>

          {/* Subtitle / Philosophy */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Moi, c'est <strong className="text-slate-900 dark:text-white font-semibold">Mbopuwouo Fadil Aboubakar Sidik</strong>, connu sous le pseudonyme de 
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono"> « L'Ingénieur Poète »</span>. 
            Je conçois des architectures décisionnelles pérennes (Data Warehouse, Medallion), 
            des pipelines MLOps de production et des applications d'aide à la décision stratégique avec l'art de rendre la complexité limpide.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explorer mes projets</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#testimonials"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-all"
            >
              <Users className="w-4 h-4 text-emerald-500" />
              <span>Voir les recommandations</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-500" />
              <span>Me contacter</span>
            </a>

            <a
              href="https://github.com/IngenieurPoete"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all hover:text-emerald-500"
              title="GitHub: @IngenieurPoete"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/fadil-aboubakar-533205312/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all hover:text-cyan-500"
              title="LinkedIn: Fadil Aboubakar"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Key Stat Cards Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:border-emerald-500/40 transition-all text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  +284 000
                </span>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Database className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Transactions analysées avec rigueur statistique
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:border-cyan-500/40 transition-all text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  75%
                </span>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Recall prédictif (Faillite financière sous SMOTE)
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:border-amber-500/40 transition-all text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  4
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Certifications officielles (Microsoft & IBM)
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:border-indigo-500/40 transition-all text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  +27
                </span>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Personnes formées en prise de parole & leadership
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
