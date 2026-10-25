import React, { useState } from 'react';
import { testimonials as initialTestimonials } from '../data/testimonials';
import { Quote, Star, CheckCircle, Linkedin, MessageSquarePlus, Send, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [newRecommendation, setNewRecommendation] = useState({
    name: '',
    role: '',
    institution: '',
    relationship: 'Professeur / Enseignant',
    text: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:bayerof11@gmail.com?subject=${encodeURIComponent(`Nouvelle recommandation de ${newRecommendation.name} (${newRecommendation.institution})`)}&body=${encodeURIComponent(`Nom: ${newRecommendation.name}\nRôle: ${newRecommendation.role}\nÉtablissement/Entreprise: ${newRecommendation.institution}\nRelation: ${newRecommendation.relationship}\n\nRecommandation:\n${newRecommendation.text}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setNewRecommendation({ name: '', role: '', institution: '', relationship: 'Professeur / Enseignant', text: '' });
    }, 4000);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Confiance & Reconnaissance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Recommandations & Appréciations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ce que professeurs, tuteurs de stage et collaborateurs disent de ma rigueur technique, de mon autonomie et de mon esprit d'équipe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between group relative"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic leading-relaxed mb-8">
                  « {item.text} »
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/30"
                />
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-sm">
                    <span>{item.name}</span>
                    {item.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-500" title="Recommandation vérifiée" />
                    )}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {item.role}
                  </div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">
                    {item.institution} • {item.relationship}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action Banner for Professors / Mentors / Recruiters */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 border border-emerald-500/30 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Espace Enseignants & Collaborateurs</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Vous avez collaboré avec Fadil ?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Votre avis compte énormément pour les futurs recruteurs. Déposez une recommandation sur son profil LinkedIn ou partagez votre appréciation directement.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://www.linkedin.com/in/fadil-aboubakar-533205312/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
              <span>Recommander sur LinkedIn</span>
            </a>

            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              <MessageSquarePlus className="w-4 h-4 text-emerald-400" />
              <span>{showForm ? 'Fermer le formulaire' : 'Rédiger une appréciation'}</span>
            </button>
          </div>
        </div>

        {/* Expandable Form Modal / Inline Form */}
        {showForm && (
          <div className="mt-8 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Transmettre une recommandation pour Fadil
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Ce formulaire enverra votre recommandation directement à Fadil pour validation et intégration sur son portfolio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Votre Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={newRecommendation.name}
                    onChange={(e) => setNewRecommendation({...newRecommendation, name: e.target.value})}
                    placeholder="Pr. Prénom Nom"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Votre Titre ou Rôle *
                  </label>
                  <input
                    type="text"
                    required
                    value={newRecommendation.role}
                    onChange={(e) => setNewRecommendation({...newRecommendation, role: e.target.value})}
                    placeholder="Professeur de Machine Learning"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Établissement ou Entreprise *
                  </label>
                  <input
                    type="text"
                    required
                    value={newRecommendation.institution}
                    onChange={(e) => setNewRecommendation({...newRecommendation, institution: e.target.value})}
                    placeholder="ISMAGI Rabat"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Contexte de la collaboration *
                  </label>
                  <select
                    value={newRecommendation.relationship}
                    onChange={(e) => setNewRecommendation({...newRecommendation, relationship: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none"
                  >
                    <option value="Professeur / Superviseur">Professeur / Superviseur</option>
                    <option value="Tuteur de Stage / Entreprise">Tuteur de Stage / Entreprise</option>
                    <option value="Collaborateur / Collègue">Collaborateur / Collègue de projet</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Votre Témoignage / Appréciation *
                </label>
                <textarea
                  rows={4}
                  required
                  value={newRecommendation.text}
                  onChange={(e) => setNewRecommendation({...newRecommendation, text: e.target.value})}
                  placeholder="Décrivez les qualités de Fadil, son travail sur vos projets, sa rigueur, etc."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500/50 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer mon appréciation à Fadil</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs text-center font-medium">
                  ✓ Merci ! Votre messagerie s'est ouverte pour transmettre votre avis à Fadil.
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
