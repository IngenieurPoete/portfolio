export const skillCategories = [
  {
    name: "Data Science & Machine Learning",
    description: "Modélisation prédictive, statistiques et IA générative",
    skills: [
      { name: "Python", level: "Expert", tags: ["Pandas", "NumPy", "Scikit-Learn"] },
      { name: "RAG & LLM", level: "Avancé", tags: ["LangChain", "ChromaDB", "Prompt Eng"] },
      { name: "Statistiques Inférentielles", level: "Avancé", tags: ["Mann-Whitney U", "EDA", "Corrélations"] },
      { name: "Gestion Déséquilibre", level: "Avancé", tags: ["SMOTE", "Under/Over-sampling"] },
      { name: "Scoring & Algorithmes", level: "Avancé", tags: ["Gradient Boosting", "Random Forest", "Régression"] },
      { name: "Visualisation Scientifique", level: "Avancé", tags: ["Seaborn", "Matplotlib", "Streamlit"] }
    ]
  },
  {
    name: "Business Intelligence & Data Engineering",
    description: "Architectures décisionnelles, modélisation dimensionnelle et reporting exécutif",
    skills: [
      { name: "SQL & Bases de données", level: "Expert", tags: ["SQL Server", "T-SQL", "SQLite", "Optimisation"] },
      { name: "Power BI (Certifié MS)", level: "Expert", tags: ["DAX", "Power Query", "Data Modeling", "KPI"] },
      { name: "Architecture Medallion", level: "Avancé", tags: ["Bronze", "Silver", "Gold", "Clean Architecture"] },
      { name: "Suite Microsoft BI", level: "Avancé", tags: ["SSIS (ETL)", "SSAS (Cubes OLAP)"] },
      { name: "Excel Avancé (Certifié MS)", level: "Expert", tags: ["TCD", "Power Query", "Modèles de calcul"] }
    ]
  },
  {
    name: "MLOps & Génie Logiciel",
    description: "Industrialisation, orchestration, conteneurisation et qualité",
    skills: [
      { name: "MLOps & Registres", level: "Avancé", tags: ["MLflow", "DVC", "Versioning Données"] },
      { name: "Conteneurisation & CI/CD", level: "Intermédiaire", tags: ["Docker", "Docker Compose", "GitHub Actions"] },
      { name: "Orchestration & Qualité", level: "Intermédiaire", tags: ["Apache Airflow", "Great Expectations"] },
      { name: "API & Backend", level: "Avancé", tags: ["FastAPI", "Python POO", "PHP"] },
      { name: "Mobile & Web", level: "Intermédiaire", tags: ["Java Android", "MVC", "HTML5 / Tailwind"] },
      { name: "Gestion de Version & Méthodes", level: "Avancé", tags: ["Git / GitHub", "Scrum / Agile"] }
    ]
  },
  {
    name: "Dimension Humaine & Leadership (« L'Ingénieur Poète »)",
    description: "Art oratoire, transmission, vulgarisation et gestion d'équipe",
    skills: [
      { name: "Prise de Parole en Public", level: "Expert", tags: ["+27 personnes formées", "Conférences", "Éloquence"] },
      { name: "Copywriting & Storytelling", level: "Avancé", tags: ["Data Storytelling", "Rédaction percutante"] },
      { name: "Management d'Équipe", level: "Confirmé", tags: ["Lead équipe de 4 devs", "Mentoring"] },
      { name: "Résolution de Problèmes Complexes", level: "Expert", tags: ["Esprit critique", "Orientation ROI"] }
    ]
  }
];
