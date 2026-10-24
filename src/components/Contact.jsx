import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const email = 'bayerof11@gmail.com';
  const phone = '+212 617-540718';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending or mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject || 'Prise de contact via Portfolio')}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Passons à l'Action
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Construisons Quelque Chose d'Impactant Ensemble
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Vous avez un projet en Business Intelligence, un défi MLOps à relever ou une opportunité de collaboration ? Échangeons dès aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Coordonnées Directes
              </h3>
              
              <div className="space-y-4">
                
                {/* Email with 1-click copy */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Email professionnel</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{email}</div>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
                    title="Copier l'adresse email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Téléphone & WhatsApp</div>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500">
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Localisation</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Rabat, Maroc</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social channels card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/20 text-white">
              <h4 className="font-bold text-base mb-2">Suivez mes travaux en continu</h4>
              <p className="text-xs text-slate-300 mb-4">
                Je partage régulièrement mes avancées sur GitHub et LinkedIn.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/IngenieurPoete"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub (@IngenieurPoete)</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/fadil-aboubakar-533205312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <span>Envoyez-moi un message direct</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Remplissez ce formulaire pour m'adresser votre demande directement sur ma boîte mail.
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
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ex: Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Votre Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jean@entreprise.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Sujet de la demande *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Ex: Opportunité de Stage / Projet Business Intelligence"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Votre Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez votre besoin, les objectifs ou le cadre du projet..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer mon message</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs text-center font-medium">
                    ✓ Votre client de messagerie a été ouvert avec les informations pré-remplies !
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
