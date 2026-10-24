export const projects = [
  {
    id: "smart-hr-analytics",
    title: "Smart HR Analytics Platform",
    subtitle: "Système décisionnel d'entreprise & IA RAG pour DRH",
    category: "Data Engineering & IA",
    featured: true,
    badge: "Enterprise Grade",
    githubUrl: "https://github.com/IngenieurPoete/smart-hr-analytics",
    demoUrl: null,
    metrics: [
      { label: "Architecture", value: "Medallion (Bronze/Silver/Gold)" },
      { label: "Cubes OLAP", value: "SSAS Multi-dim" },
      { label: "GenAI", value: "RAG LangChain + ChromaDB" }
    ],
    problem: "Dispersion critique des données de paie, d'évaluations et d'absentéisme des collaborateurs, entraînant un manque d'anticipation sur le turnover et une surcharge des équipes RH.",
    solution: "Conception d'une plateforme unifiée de bout en bout : pipeline ETL Medallion en Python (POO) et SSIS, Data Warehouse SQL Server dimensionnel, modélisation OLAP sous SSAS, dashboards Power BI décisionnels, modèle de scoring de turnover tracké avec MLflow déployé sur FastAPI, et assistant conversationnel RAG pour les directeurs RH.",
    valueAdded: "Permet aux DRH de réduire l'attrition des talents grâce à la prédiction et d'obtenir des réponses instantanées en langage naturel sur leurs effectifs.",
    tags: ["SQL Server", "Python (ETL POO)", "SSIS", "SSAS", "Power BI", "MLflow", "FastAPI", "LangChain", "ChromaDB", "Docker"],
    highlights: [
      "Pipeline ETL respectant les principes SOLID en Python et SSIS",
      "Schéma en étoile complet (Dim_Employe, Dim_Temps, Fact_Absences, Fact_Paie...)",
      "Assistant RAG sécurisé connecté à une base vectorielle ChromaDB",
      "Conteneurisation Docker & automatisation CI/CD avec GitHub Actions"
    ]
  },
  {
    id: "telecom-churn-mlops",
    title: "Industrial Telecom Churn MLOps Pipeline",
    subtitle: "Pipeline Machine Learning reproductible & orchestré",
    category: "MLOps & Data Science",
    featured: true,
    badge: "Production Ready",
    githubUrl: "https://github.com/IngenieurPoete/telecom-churn-mlops",
    demoUrl: null,
    metrics: [
      { label: "Versioning Données", value: "DVC" },
      { label: "Validation Qualité", value: "Great Expectations" },
      { label: "Orchestration", value: "Apache Airflow" }
    ],
    problem: "Les modèles de prédiction de churn restent trop souvent cantonnés à des notebooks sans gouvernance, avec des risques élevés de data drift et d'échecs lors des mises à l'échelle.",
    solution: "Mise en place d'un cycle de vie MLOps complet : contrôle qualité des données automatisé avec Great Expectations, versioning des datasets lourds avec DVC, orchestration des DAGs via Airflow, registre d'expérimentations MLflow, et micro-service d'inférence conteneurisé Docker.",
    valueAdded: "Assure aux organisations une fiabilité totale de leurs modèles prédictifs, avec traçabilité intégrale et détection immédiate des régressions de performances.",
    tags: ["MLflow", "DVC", "Apache Airflow", "Great Expectations", "Docker", "FastAPI", "Python", "Scikit-Learn"],
    highlights: [
      "Tests d'intégrité automatisés sur chaque batch de données avec Great Expectations",
      "Tracking des hyperparamètres, courbes AUC-ROC et matrices de confusion sous MLflow",
      "Pipelines d'inférence découplés et scalables via Docker Compose"
    ]
  },
  {
    id: "detection-anomalie-financiere",
    title: "Prédiction de Faillite & Détection d'Anomalies",
    subtitle: "Scoring de risque & application interactive 8 étapes",
    category: "Machine Learning & BI",
    featured: true,
    badge: "75% Recall",
    githubUrl: "https://github.com/IngenieurPoete/DetectionAnomalieFinanciere",
    demoUrl: null,
    metrics: [
      { label: "Recall Prédictif", value: "75% (SMOTE)" },
      { label: "Moteur Web", value: "Streamlit (8 étapes)" },
      { label: "Reporting", value: "Export PDF Automatisé" }
    ],
    problem: "Asymétrie critique et déséquilibre extrême des données financières d'entreprises, rendant la détection précoce des défaillances difficile avec des modèles classiques.",
    solution: "Pipeline complet d'ingénierie financière : collecte automatisée de données, rééquilibrage de classes par SMOTE, modélisation par Gradient Boosting atteignant 75% de rappel, réduction de dimensionnalité (PCA, LDA, MCA) et déploiement d'une application Streamlit avec générateur de dossiers d'audit PDF instantanés via ReportLab.",
    valueAdded: "Donne aux auditeurs et analystes financiers un tableau de bord d'alerte précoce capable de générer en un clic un rapport d'audit certifié pour les comités de risque.",
    tags: ["Python", "Scikit-Learn", "SMOTE", "Streamlit", "ReportLab", "PCA / LDA / MCA", "Gradient Boosting"],
    highlights: [
      "Algorithme Gradient Boosting entraîné spécifiquement sur données asymétriques",
      "Interface Streamlit modulaire en 8 phases interactives (EDA, transformations, prédictions)",
      "Génération automatique d'un rapport PDF exécutif personnalisé pour l'investisseur"
    ]
  },
  {
    id: "detection-fraude-bancaire",
    title: "Détection de Fraude Bancaire & Scoring Crédit",
    subtitle: "Audit statistique rigoureux sur 284 000+ transactions",
    category: "Data Science & Statistiques",
    featured: false,
    badge: "284k+ Transactions",
    githubUrl: "https://github.com/IngenieurPoete/Detection-de-fraude-bancaire-et-ScoringIA",
    demoUrl: null,
    metrics: [
      { label: "Volume Analysé", value: "284 807 transactions" },
      { label: "Validation Statistique", value: "Mann-Whitney U" },
      { label: "Stockage", value: "SQLite Optimisé" }
    ],
    problem: "Les transactions frauduleuses représentent moins de 0.2% des flux bancaires, provoquant d'importants faux positifs coûteux pour les banques et frustrants pour les clients.",
    solution: "Diagnostic probabiliste et pipeline d'isolation sous SQLite et Python : tests d'hypothèses statistiques non paramétriques (Mann-Whitney U) pour sélectionner scientifiquement les variables discriminantes et modélisation de scoring de crédit optimisant la courbe Précision-Rappel.",
    valueAdded: "Réduction drastique des faux positifs et identification claire des schémas anormaux avant la survenue du préjudice financier.",
    tags: ["Python", "SQLite", "SciPy", "Statistiques Inférentielles", "Courbes PR / ROC", "Credit Scoring"],
    highlights: [
      "Validation scientifique rigoureuse via le test Mann-Whitney U",
      "Optimisation des requêtes sur un volume de 284k+ enregistrements sous SQLite",
      "Visualisation comparative approfondie (Violin plots, distributions de probabilité)"
    ]
  },
  {
    id: "safefocus-android",
    title: "SafeFocus : Application Mobile de Concentration",
    subtitle: "Productivité native Android & gamification anti-distraction",
    category: "Génie Logiciel & Mobile",
    featured: false,
    badge: "Mobile Natif",
    githubUrl: "https://github.com/IngenieurPoete",
    demoUrl: null,
    metrics: [
      { label: "Langage", value: "Java Natif" },
      { label: "Architecture", value: "MVC Modulaire" },
      { label: "Détection", value: "Cycle de vie Android" }
    ],
    problem: "Baisse continue de la concentration et fragmentation de l'attention causée par les notifications et interruptions répétées sur smartphone.",
    solution: "Conception et développement d'une application Android native en Java utilisant les écouteurs du cycle de vie des activités pour détecter toute tentative de sortie de l'application pendant les sessions de travail, récompensant la discipline par un système de progression gamifié.",
    valueAdded: "Illustration de la maîtrise du génie logiciel natif, de la gestion des états système et du design centré utilisateur.",
    tags: ["Java", "Android SDK", "Architecture MVC", "Gamification", "Gestion du Cycle de Vie"],
    highlights: [
      "Détection d'interruption en temps réel sur les événements système Android",
      "Mécaniques de récompense et statistiques de focus hebdomadaires",
      "Architecture MVC découplée facilitant l'évolution des fonctionnalités"
    ]
  },
  {
    id: "dw-hr-adventureworks",
    title: "Data Warehouse HR AdventureWorks",
    subtitle: "Ingénierie décisionnelle d'entreprise & Cubes SSAS",
    category: "Business Intelligence",
    featured: false,
    badge: "BI Traditionnel",
    githubUrl: "https://github.com/IngenieurPoete/DW_HR_AdventureWorks",
    demoUrl: null,
    metrics: [
      { label: "SGBD", value: "SQL Server (T-SQL)" },
      { label: "ETL", value: "SSIS Packages" },
      { label: "Analytique", value: "SSAS Cubes" }
    ],
    problem: "Besoin de structurer les flux RH d'une multinationale avec des règles de gestion d'entreprise rigoureuses.",
    solution: "Création complète d'un entrepôt de données relationnel et multidimensionnel : scripts T-SQL de modélisation en étoile, flux de chargement incrémental SSIS, dimensionnement SSAS et restitution visuelle Power BI.",
    valueAdded: "Permet aux analystes métier de naviguer dans les hiérarchies temporelles et organisationnelles avec un temps de réponse inférieur à la seconde.",
    tags: ["T-SQL", "SSIS", "SSAS", "SQL Server", "Power BI", "Data Modeling"],
    highlights: [
      "Modélisation en étoile conforme aux principes de Ralph Kimball",
      "Automatisation des flux d'extraction et de validation des données sources",
      "Rapports décisionnels interactifs avec drill-down hiérarchique"
    ]
  }
];
