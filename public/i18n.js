/**
 * Vanilla JavaScript i18n (Internationalization) Engine
 * Supports French (FR) and English (EN) with LocalStorage persistence.
 * Zero external dependencies.
 */

const i18nData = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_experiences: "Parcours",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_exams: "Épreuves BTS",
    nav_contact: "Me contacter",
    nav_back_top_aria: "Retour en haut",

    // Hero
    hero_typewriter: "Bienvenue sur mon portfolio, j'espère qu'il vous plaira !",
    hero_contact_pill: "Me contacter : maxencefontainegros@ik.me",
    hero_contact_pill_title: "Cliquer pour copier l'email",
    hero_email_copied: "Email copié dans le presse-papier !",

    // About Section
    about_tag: "PROFIL & PRÉSENTATION",
    about_title: "À propos",
    about_bio_p1: `Je suis étudiant en <a href="bts-sio.html" id="bts-sio-link" title="Découvrir le BTS SIO" class="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 decoration-[#7A553A] hover:decoration-white transition-all duration-200 group"><span>BTS SIO SISR</span><svg class="w-4 h-4 inline-block text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a> (Solutions d'Infrastructure, Systèmes et Réseaux), spécialisé dans la gestion d'infrastructures, l'administration système, les réseaux et la cybersécurité.`,
    about_bio_p2: "Passionné par la création d'architectures informatiques fiables et sécurisées, j'allie enseignements académiques et compétences pratiques à travers mes projets et mes expériences sur le terrain.",
    about_bts_learn_more: "En savoir plus sur le diplôme BTS SIO & ses options →",
    cv_card_title: "Résumé du CV",
    cv_formation_label: "Formation",
    cv_formation_val: "BTS SIO SISR (Bac +2)",
    cv_spec_label: "Spécialisation",
    cv_spec_val: "Infrastructures, Systèmes & Réseaux",
    cv_skills_label: "Compétences Clés",
    cv_skills_val: "Linux, Windows Server, Cisco, Sécurité",
    cv_langs_label: "Langues",
    cv_langs_val: "Français (Natif), Anglais (B2+)",
    btn_download_cv: "Télécharger mon CV ⬇",

    // Experiences Section
    exp_tag: "Parcours & Expérience",
    exp_title: `Parcours <span class="text-white/40 text-2xl sm:text-3xl font-normal">/ Path</span>`,
    exp_desc: "Découvrez mon cheminement académique et mes expériences pratiques dans les systèmes, réseaux et infrastructures informatiques.",
    exp_col_education: `Education <span class="text-white/40 text-lg font-normal">/ Formation</span>`,
    exp_col_experience: `Experience <span class="text-white/40 text-lg font-normal">/ Expérience</span>`,
    btn_learn_more: "En savoir plus... →",
    btn_learn_more_short: "En savoir plus...",
    badge_bac2_ongoing: "Bac +2 • En cours",
    badge_bac_general: "Baccalauréat Général",
    badge_stage_pro_2026: "Stage Professionnel • 2026",
    badge_stage_pro: "Stage Professionnel",
    btn_view_project_doc: "Voir le document du projet (PDF) ↗",
    btn_back_to_projects: "Retour aux projets →",
    btn_view_specs: "Voir le cahier des charges ↗",

    // Parcours Section Items
    parcours_bts_badge: "Bac +2 • En cours",
    parcours_bts_title: "BTS - SIO SISR",
    parcours_bts_subtitle: "Institution des Chartreux, Lyon",
    parcours_bts_desc: "Spécialisation en Solutions d’Infrastructure, Systèmes, Réseaux et Sécurité informatique.",
    parcours_bac_badge: "Baccalauréat Général",
    parcours_bac_title: "Bac Général",
    parcours_bac_subtitle: "Lycée La Favorite - Lyon",
    parcours_bac_desc: "Spécialités Mathématiques et LLCERAMC avec option Mathématiques Expertes.",
    parcours_chubb_badge: "Stage Professionnel • 2026",
    parcours_chubb_title: "Stagiaire Systèmes, Réseaux & Sécurité",
    parcours_chubb_subtitle: "Chubb Delta — Siège / Agence",
    parcours_chubb_desc: "Maintenance et mise à jour des équipements réseau, supervision de la sécurité via FortiAnalyzer et déploiement de serveurs virtuels Windows Server.",
    parcours_nomios_badge: "Stage Professionnel",
    parcours_nomios_title: "Stagiaire Réseau & Cybersécurité",
    parcours_nomios_subtitle: "Nomios",
    parcours_nomios_desc: "Immersion au sein d'un expert intégrateur en réseaux et cybersécurité. Découverte de l'architecture pare-feu entreprise, audit et solutions de protection.",

    // Skills Cards
    skill_ticketing_cat: "Support & Helpdesk",
    skill_ticketing_title: "Ticketing",
    skill_ticketing_desc: "Gestion des incidents, suivi des demandes et respect des SLA utilisateurs.",
    skill_virtualisation_cat: "Infrastructure",
    skill_virtualisation_title: "Virtualisation",
    skill_virtualisation_desc: "Déploiement et gestion d’hyperviseurs et machines virtuelles.",
    skill_active_directory_cat: "Système d’annuaire",
    skill_active_directory_title: "Active Directory",
    skill_active_directory_desc: "Gestion des identités, forêts, GPO et droits d’accès centralisés.",
    skill_tcpip_reseaux_cat: "Architecture Réseau",
    skill_tcpip_reseaux_title: "TCP/IP & Réseaux",
    skill_tcpip_reseaux_desc: "Protocoles, adressage IPv4/IPv6, sous-réseaux et routage inter-VLAN.",
    skill_cisco_packet_tracer_cat: "Simulation Réseau",
    skill_cisco_packet_tracer_title: "Cisco Packet Tracer",
    skill_cisco_packet_tracer_desc: "Modélisation de topologies d’entreprise et configuration CLI Cisco IOS.",
    skill_ia_cat: "Productivité",
    skill_ia_title: "IA",
    skill_ia_desc: "Ingénierie de prompt, scripting et assistance au diagnostic technique.",
    skill_windows_server_cat: "Système Serveur",
    skill_windows_server_title: "Windows Server",
    skill_windows_server_desc: "Rôles serveurs (AD, DNS, DHCP), services réseau et administration.",
    skill_linux_cat: "Système Open Source",
    skill_linux_title: "Linux (Debian/Alma)",
    skill_linux_desc: "Administration en CLI, paquets, SSH, pare-feu et services web.",
    skill_vs_code_cat: "Environnement & Code",
    skill_vs_code_title: "VS Code",
    skill_vs_code_desc: "Éditeur de code, scripting PowerShell/Bash, gestion Git et snippets.",

    // Certifications
    cert_tag: "Validation & Diplômes",
    cert_heading: "Certifications",
    cert_btn_view: "Voir l'attestation ↗",

    // Skills
    skills_tag: "Savoir-faire technique",
    skills_heading: `Compétences <span class="text-white/40 text-2xl sm:text-3xl font-normal">/ Skills</span>`,
    skills_desc: "Environnements, protocoles et outils maîtrisés au cours de mes projets et de mon apprentissage.",

    // Projects
    projects_tag: "📁 <span>Réalisations & Projets</span>",
    projects_heading: `Projets <span class="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Projects</span>`,
    projects_desc: "Découvrez une sélection de projets majeurs réalisés dans le cadre de mes études en BTS SIO SISR et de mes travaux personnels.",
    project_portfolio_badge: "Personnel & Professionnel",
    project_portfolio_title: "Portfolio BTS SIO SISR",
    project_portfolio_desc: "Conception et développement complet de mon portfolio d’étudiant en BTS SIO SISR. Architecture responsive, animations interactives, design glassmorphism soigné et documentation technique détaillée pour les épreuves.",
    project_holazyv_badge: "Branding & E-Commerce",
    project_holazyv_title: "HoLazyV",
    project_holazyv_desc: "Création globale d’une identité de marque et d’une boutique en ligne. Direction artistique complète, conception de logo vectoriel, effets visuels et ergonomie d’achat e-commerce.",
    btn_discover_project: "Découvrir le projet →",

    // BTS Exams
    exams_badge: "🎓 <span>Certification & Diplôme</span>",
    exams_heading: `Épreuves BTS <span class="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Exams</span>`,
    exams_subheading: "Portefeuille de compétences professionnelles",
    exams_intro: "Accès aux dossiers officiels, fiches de situations professionnelles et grilles d’évaluation du référentiel BTS SIO option SISR.",
    exams_card_tag: "BTS SIO SISR · Session 2026",
    exams_card_title: "Dossiers d'Épreuves Pratiques & Orales",
    exams_card_desc: "Consultez les supports préparatoires, fiches d'activités techniques et documentations d’architecture nécessaires pour le passage des épreuves terminales.",
    btn_e5: "Accéder à l'épreuve E5 ↗",
    btn_e6: "Épreuve E6 (Dossier en cours) 🔒",
    toast_e6_title: "Épreuve E6 en cours de préparation",
    toast_e6_text: "Le dossier d'épreuve E6 est actuellement en cours de préparation selon les consignes académiques.",

    // Contact
    contact_badge: "✉️ <span>Prise de contact</span>",
    contact_heading: `Me Contacter <span class="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Get in touch</span>`,
    contact_subheading: "Une demande d'information ou une opportunité de collaboration ? Contactez-moi directement.",
    contact_desc: "Disponible pour échanger sur des opportunités professionnelles, projets d’infrastructure ou questions relatives à mon parcours.",
    contact_email_badge: "Messagerie Directe",
    contact_email_title: "Email",
    contact_email_desc: "Envoyez-moi un message pour toute demande d'information, proposition de stage, alternance ou collaboration technique.",
    contact_email_action: "Écrire",
    email_copied: "Email copié dans le presse-papier !",
    contact_linkedin_badge: "Réseau Professionnel",
    contact_linkedin_title: "LinkedIn",
    contact_linkedin_desc: "Retrouvez mon parcours actualisé, mes certifications et connectons-nous sur mon profil professionnel.",
    contact_linkedin_action: "Connecter ↗",

    // Footer
    footer_desc: "Étudiant en BTS SIO (option SISR — Solutions d'Infrastructure, Systèmes et Réseaux). Passionné par l’architecture réseau, l'automatisation et l'administration système.",
    footer_quick_links: "Liens Rapides",
    footer_contact_title: "Contact",
    footer_rights: "© 2026 Maxence FONTAINE GROS. Tous droits réservés.",
    footer_scroll_top: "Haut de page ↑",
    footer_legal: "Mentions Légales",

    // Modals
    modal_detailed_desc: "Description détaillée",
    modal_associated_skills: "Compétences associées",
    modal_visit_site: "Visiter le site ↗",
    modal_category: "Catégorie",
    modal_skill: "Compétence",
    modal_skill_detail: "Détail technique & Mise en pratique",
    modal_skill_tools: "Outils & Technologies associés",
    modal_official_doc: "Documentation officielle ↗",
    modal_technologies: "Technologies",
    modal_access_project: "Accéder à la page du projet →",

    // E5 Specific Page Strings
    e5_back_btn: "← Retour portfolio",
    e5_badge: "Épreuve E5 · SISR",
    e5_title: "Épreuve E5 — Portefeuille de Compétences",
    e5_subtitle: `Présentation des fiches descriptives d'activités techniques réalisées en milieu professionnel (stage chez <strong class="text-white font-semibold">Chubb Delta</strong>) et en milieu scolaire (projets BTS SIO SISR).`,
    e5_btn_download_pdf: "Télécharger le tableau E5 (PDF) ↗",
    e5_legend_title: "Domaines de compétences du référentiel BTS SIO (D1 à D6)",
    e5_legend_subtitle: "6 blocs de compétences",
    sidebar_dashboard_title: "Tableau de bord — E5",
    sidebar_fiches_count: "5 fiches",
    sidebar_status_header: "Statut Référentiel SISR",
    sidebar_status_ratio: "5 validés / 1 en cours",
    sidebar_domains_header: "Compétences couvertes",
    sidebar_activities_header: "Activités & Réalisations (5)",
    sidebar_quick_access: "Accès rapide aux fiches",
    sidebar_grille_btn: "Grille de notation officielle ↗",
    mobile_accordion_title: "Statut des compétences E5",
    mobile_accordion_show: "Afficher",
    mobile_accordion_hide: "Masquer",
    filter_all_tasks: "Toutes les fiches (5)",
    filter_scolaire: "En milieu Scolaire (3)",
    filter_pro: "En milieu Professionnel (2)",
    filter_competencies_default: "Filtrer par compétence D1-D6 ▾",
    filter_all_competencies: "Toutes les compétences",
    filter_reset_btn: "Réinitialiser les filtres",
    empty_state_msg: "Aucune réalisation ne correspond aux filtres sélectionnés.",
    badge_fiche_detaillee: "Fiche détaillée ↗",
    badge_bts_sisr_fiche: "BTS SISR · Fiche #",
    status_en_cours: "En cours",
    status_valide: "Validé",
    btn_learn_more_arrow: "En savoir plus... →",
    e5_d1_title: "D1 · Gérer le patrimoine",
    e5_d1_desc: "Gérer le patrimoine informatique (parc, serveurs, licences, configurations)",
    e5_d1_filter: "D1 · Gérer le patrimoine informatique",
    e5_d2_title: "D2 · Répondre aux incidents",
    e5_d2_desc: "Assistance utilisateurs, traitement des incidents ITIL & résolutions",
    e5_d2_filter: "D2 · Répondre aux incidents & demandes",
    e5_d3_title: "D3 · Présence en ligne",
    e5_d3_desc: "Développer et valoriser la présence web de l’organisation",
    e5_d3_filter: "D3 · Développer la présence en ligne",
    e5_d4_title: "D4 · Mode projet",
    e5_d4_desc: "Planification, cahier des charges, jalons & revues d'étape",
    e5_d4_filter: "D4 · Travailler en mode projet",
    e5_d5_title: "D5 · Service informatique",
    e5_d5_desc: "Mettre à disposition des utilisateurs un service IT opérationnel",
    e5_d5_filter: "D5 · Mettre à disposition un service IT",
    e5_d6_title: "D6 · Développement pro",
    e5_d6_desc: "Organiser son développement professionnel & veilles technologiques",
    e5_d6_filter: "D6 · Organiser son développement pro",
    modal_summary_heading: "SYNTHÈSE DE L'ACTIVITÉ",
    modal_justification_heading: "Démarche & Justification Technique Détaillée",
    modal_env_heading: "ENVIRONNEMENT, OUTILS & TECHNOLOGIES :",
    modal_associated_skills: "Compétences validées :",
    modal_btn_dossier: "Accéder au dossier ↗",
    modal_btn_site: "Accéder au site ↗",
    modal_btn_project: "Consulter la page dédiée du projet ↗",
    modal_btn_prev: "← Précédente",
    modal_btn_next: "Suivante →",
    modal_btn_close: "Fermer",
    modal_close_aria: "Fermer la fenêtre",
    lang_btn_aria: "Changer de langue",
    nav_back_portfolio: "← Retour portfolio",
    nav_back_to_projects: "Retour aux projets",

    // =========================================================================
    // BTS SIO PAGE TRANSLATIONS (FR)
    // =========================================================================
    bts_meta_title: "Le BTS SIO, qu'est-ce que c'est ? — Maxence FONTAINE GROS",
    bts_header_badge: "DIPLÔME & RÉFÉRENTIEL",
    bts_header_credits: "Bac +2 • 120 ECTS",
    bts_header_title: "Le BTS SIO, qu'est-ce que c'est&nbsp;?",
    bts_header_desc1: "Le <strong class=\"text-white font-semibold\">BTS Services Informatiques aux Organisations (SIO)</strong> est un diplôme national d'État de niveau Bac+2 formant des techniciens supérieurs hautement qualifiés pour répondre aux besoins numériques des entreprises, des administrations et des ESN (Entreprises de Services du Numérique).",
    bts_header_desc2: "La formation combine un socle académique solide (culture générale, anglais technique, mathématiques appliquées, économie, management et droit du numérique) avec une immersion professionnelle concrète : <strong class=\"text-white font-medium\">ateliers de professionnalisation (AP)</strong>, projets collaboratifs en situation réelle, et périodes de stage ou d'alternance.",
    bts_stat_duration: "Durée",
    bts_stat_duration_val: "2 Ans",
    bts_stat_credits: "Crédits",
    bts_stat_credits_val: "120 ECTS",
    bts_stat_options: "Spécialisations",
    bts_stat_options_val: "2 Options",
    bts_stat_immersion: "Immersion",
    bts_stat_immersion_val: "Stage / Alternance",

    // SISR Card
    bts_sisr_badge: "★ Mon option • Spécialisation",
    bts_sisr_track_tag: "Systèmes & Réseaux",
    bts_sisr_title: "Option SISR",
    bts_sisr_subtitle: "Solutions d'Infrastructure, Systèmes et Réseaux",
    bts_sisr_desc: "L'option SISR prépare les professionnels chargés de la mise en place, de la gestion et de la sécurité des équipements informatiques. L'étudiant apprend à administrer des parcs informatiques, configurer des commutateurs et routeurs, concevoir des environnements virtualisés et garantir la cyber-résilience d'une organisation.",
    bts_skills_title: "Compétences clés",
    bts_sisr_skill1: "Administration Windows Server",
    bts_sisr_skill2: "Linux (Debian / AlmaLinux)",
    bts_sisr_skill3: "Switchs & Routeurs Cisco (CLI IOS)",
    bts_sisr_skill4: "Virtualisation (VMware / Proxmox)",
    bts_sisr_skill5: "Pare-feu & Filtrage (Fortinet / Palo Alto)",
    bts_sisr_skill6: "Active Directory, GPO & DNS/DHCP",
    bts_sisr_skill7: "VLANs 802.1Q & Routage inter-VLAN",
    bts_sisr_skill8: "Sauvegardes & Reprise d'Activité (PRA)",
    bts_careers_title: "Débouchés professionnels",
    bts_sisr_career1: "Administrateur systèmes & réseaux",
    bts_sisr_career2: "Technicien support d'infrastructure",
    bts_sisr_career3: "Gestionnaire de parc informatique",
    bts_sisr_career4: "Auditeur cybersécurité junior",
    bts_sisr_career5: "Intégrateur solutions réseaux",

    // SLAM Card
    bts_slam_badge: "Développement Logiciel",
    bts_slam_track_tag: "Web, Mobile & BD",
    bts_slam_title: "Option SLAM",
    bts_slam_subtitle: "Solutions Logicielles et Applications Métiers",
    bts_slam_desc: "L'option SLAM forme des spécialistes de la conception et du développement d'applications logicielles, web et mobiles. L'étudiant apprend à traduire les besoins des utilisateurs en solutions logicielles fiables, modéliser des bases de données relationnelles et maintenir les applications en production.",
    bts_slam_skill1: "Développement Web (HTML, CSS, JavaScript)",
    bts_slam_skill2: "Programmation Orientée Objet (Python, Java, C#)",
    bts_slam_skill3: "Bases de données relationnelles (SQL, MySQL)",
    bts_slam_skill4: "Conception & Consommation d'APIs REST",
    bts_slam_skill5: "Frameworks Modernes (React, Symfony)",
    bts_slam_skill6: "Gestion de versions avec Git & GitHub",
    bts_slam_skill7: "Méthodologies Agiles (Scrum, Kanban)",
    bts_slam_skill8: "Sécurité applicative (Normes OWASP)",
    bts_slam_career1: "Développeur d'applications web & mobile",
    bts_slam_career2: "Analyste programmeur",
    bts_slam_career3: "Concepteur / Intégrateur logiciel",
    bts_slam_career4: "Gestionnaire de bases de données junior",
    bts_slam_career5: "Technicien support applicatif",

    // Section 3: Exams
    bts_exams_section_badge: "ÉVALUATION & CERTIFICATION",
    bts_exams_section_title: "Les Épreuves Pratiques du BTS SIO",
    bts_exams_section_link: "Consulter la section Épreuves",
    bts_e4_badge: "Épreuve E4",
    bts_e4_title: "Support & Mise à disposition",
    bts_e4_desc: "Gestion du patrimoine informatique, réponse aux incidents utilisateurs et développement de la présence en ligne.",
    bts_e5_badge: "Épreuve E5 (SISR)",
    bts_e5_title: "Conception & Maintenance",
    bts_e5_desc: "Déploiement d'architectures réseaux, virtualisation de serveurs et administration avancée de parcs systèmes.",
    bts_e6_badge: "Épreuve E6",
    bts_e6_title: "Cybersécurité",
    bts_e6_desc: "Audit de vulnérabilités, durcissement d'équipements, politique de sécurité et mise en conformité des systèmes.",
    bts_cta_box_title: "Envie de découvrir mes réalisations techniques&nbsp;?",
    bts_cta_box_desc: "Explorez mes compétences pratiques, mes projets et mes certifications sur mon portfolio.",
    bts_cta_box_btn: "Retourner au portfolio →",
    bts_footer_brand: "Maxence FONTAINE GROS — Portfolio BTS SIO SISR",

    // =========================================================================
    // HOLAZYV PROJECT PAGE TRANSLATIONS (FR)
    // =========================================================================
    holazyv_page_title: "Projet HoLazyV — Maxence FONTAINE GROS",
    holazyv_category: "Branding · E-Commerce & Direction Artistique",
    holazyv_hero_title: "Projet HoLazyV",
    holazyv_hero_desc: "Création de boutique en ligne, identité visuelle complète, branding vectoriel et design e-commerce pour le projet HoLazyV. Une expérience moderne axée sur l'originalité graphique et l'ergonomie d'achat.",
    holazyv_btn_pdf: "Voir le document du projet (PDF)",
    holazyv_btn_back: "Retour aux projets",
    holazyv_section_title: "Direction Artistique & Conception",
    holazyv_section_intro: "Le projet HoLazyV est né de la volonté de fusionner une esthétique streetwear underground avec une boutique en ligne haut de gamme et parfaitement fluide.",
    holazyv_card1_tag: "Identité & ADN",
    holazyv_card1_title: "Concept de Marque (Branding)",
    holazyv_card1_desc: "Définition des valeurs fondamentales de la marque : décontraction assumée, culture urbaine contemporaine et exclusivité. Création de la charte graphique globale comprenant le logotype, les déclinaisons monochrome et couleurs, ainsi que le packaging digital.",
    holazyv_card1_footer: "Logotype · Moodboard · Charte graphique",
    holazyv_card2_tag: "Typographie",
    holazyv_card2_title: "Choix Typographiques",
    holazyv_card2_desc: "Sélection minutieuse de polices à fort impact visuel : des titrages display imposants et expressifs associés à des polices de corps géométriques sans-serif hautement lisibles sur mobile comme sur desktop pour maximiser le taux de conversion.",
    holazyv_card2_footer: "Hiérarchie visuelle · Display Fonts · Ratios optiques",
    holazyv_card3_tag: "Illustration & Vector",
    holazyv_card3_title: "Graphismes Vectoriels",
    holazyv_card3_desc: "Réalisation de tracés vectoriels originaux sous Kittle : icônes personnalisées pour la boutique, motifs de broderie/sérigraphie, badges de certification et éléments d'habillage responsive sans perte de résolution.",
    holazyv_card3_footer: "Figma · SVG optimisés",
    holazyv_card4_tag: "Effets Visuels & Shaders",
    holazyv_card4_title: "Effets Astronomiques",
    holazyv_card4_desc: "Signature visuelle distinctive du projet : mise au point d'une ambiance astronomique appliqués aux éléments d'arrière-plan, conférant une atmosphère futuriste et dynamique à la vitrine e-commerce.",
    holazyv_card4_footer: "Spacey Atmosphere · Textures · Street-wear · Future",
    holazyv_footer_text: "© 2026 - 2027 Projet HoLazyV · Direction Artistique & E-commerce · Maxence FONTAINE GROS",

    // =========================================================================
    // PORTFOLIO PROJECT PAGE TRANSLATIONS (FR)
    // =========================================================================
    portfolio_page_doc_title: "Projet Mon Portfolio — Maxence FONTAINE GROS",
    portfolio_page_eyebrow: "Projet Phare · Web & Documentation",
    portfolio_page_title: "Mon Portfolio",
    portfolio_page_intro: "Vous trouverez ici une présentation de la création de mon portfolio. Conçu comme une vitrine vivante de mes compétences en administration systèmes, réseaux et technologies web modernes.",
    portfolio_btn_specs: "Voir le cahier des charges",
    portfolio_btn_more: "En savoir plus",
    portfolio_why_heading: "Pourquoi un Portfolio en BTS SIO ?",
    portfolio_why_intro: "Dans le cadre du diplôme BTS SIO (option SISR — Solutions d'Infrastructure, Systèmes et Réseaux), le portfolio représente bien plus qu'un simple curriculum vitae : il constitue la synthèse vivante des compétences acquises, des architectures réseau déployées, des travaux pratiques d'administration et des résolutions d'incidents informatiques.",
    portfolio_card1_tag: "Objectif Pédagogique",
    portfolio_card1_title: "Évaluation & Suivi des Compétences",
    portfolio_card1_desc: "Le portfolio est l'outil indispensable pour présenter l'ensemble de mes réalisations techniques devant les examinateurs lors des épreuves professionnelles du BTS SIO (notamment les épreuves E4 et E5). Il conserve un historique précis de mes fiches de situations professionnelles, documentations techniques, scripts d'automatisation et topologies réseau.",
    portfolio_card1_footer: "Épreuves E4 / E5 · Fiches d'activités",
    portfolio_card2_tag: "Carrière & Insertion",
    portfolio_card2_title: "Référence Professionnelle",
    portfolio_card2_desc: "Au-delà du cadre scolaire, ce site web sert de support professionnel direct auprès des recruteurs, maîtres d'apprentissage et tuteurs de stage. Il valorise concrètement ma rigueur documentaire, ma veille technologique continue et mon approche méthodique de la résolution d'incidents.",
    portfolio_card2_footer: "Alternance · Stages · Insertion professionnelle",
    portfolio_how_heading: "Comment j'ai réalisé mon Portfolio",
    portfolio_how_intro: "La conception de cette plateforme s'est étalée sur un cycle complet d'une année scolaire, en parallèle de mes cours et de mes projets en entreprise, combinant exigence ergonomique, esthétique épurée et technologies modernes.",
    portfolio_card3_tag: "Stack & Ingénierie",
    portfolio_card3_title: "Outils Utilisés",
    portfolio_card3_desc: "Développé au moyen de <strong>VS Code</strong>, avec l'assistance d'intelligence artificielle avancée (<strong>Google Gemini</strong>) et de modèles LLM locaux pour accélérer le prototypage. Le design s'appuie sur <strong>Tailwind CSS</strong>, une suite de composants réactifs et des éléments visuels 3D sur-mesure.",
    portfolio_card3_footer: "Architecture modulaire · Accessibilité · Performance",
    portfolio_card4_tag: "Chronologie & Rigueur",
    portfolio_card4_title: "Temps de Réalisation",
    portfolio_card4_desc: "Développé en continu sur une <strong>durée d'environ 1 an</strong>, ce portfolio a fait l'objet de multiples itérations : affinement des palettes chromatiques (tons terre chaude et taupe), intégration de la vidéo scrubbing réactive à la souris, optimisation des fenêtres modales avec centrage absolu viewport et vérification constante de la lisibilité.",
    portfolio_phase1_label: "Phase 1 : Cadrage & Cahier des charges",
    portfolio_phase1_time: "Mois 1 - 2",
    portfolio_phase2_label: "Phase 2 : Intégration UI/UX & Vidéo Scrub",
    portfolio_phase2_time: "Mois 3 - 6",
    portfolio_phase3_label: "Phase 3 : Modularisation & Sections BTS",
    portfolio_phase3_time: "Mois 7 - 12",
    portfolio_card4_footer: "Itérations continues · Qualité de code certifiée",
    portfolio_footer_text: "© 2026 - 2027 Maxence FONTAINE GROS · Portfolio BTS SIO SISR · Tous droits réservés.",

    // E5 Domains
    e5_domains: {
      D1: { title: "D1 · Gérer le patrimoine", label: "Gérer le patrimoine informatique", desc: "Gérer le patrimoine informatique (parc, serveurs, licences, configurations)" },
      D2: { title: "D2 · Répondre aux incidents", label: "Répondre aux incidents & demandes d’assistance", desc: "Assistance utilisateurs, traitement des incidents ITIL & résolutions" },
      D3: { title: "D3 · Présence en ligne", label: "Développer la présence en ligne de l’organisation", desc: "Développer et valoriser la présence web de l’organisation" },
      D4: { title: "D4 · Mode projet", label: "Travailler en mode projet", desc: "Planification, cahier des charges, jalons & revues d'étape" },
      D5: { title: "D5 · Service informatique", label: "Mettre à disposition un service informatique", desc: "Mettre à disposition des utilisateurs un service IT opérationnel" },
      D6: { title: "D6 · Développement pro", label: "Organiser son développement professionnel", desc: "Organiser son développement professionnel & veilles technologiques" }
    },

    // E5 Tasks
    e5_tasks: {
      'chubb-vm-cisco': {
        title: "Déploiement de VM Windows Server & qualification de switchs Cisco",
        contextLabel: "EN MILIEU PROFESSIONNEL (Chubb Delta)",
        summary: "Déploiement de machines virtuelles d'administration sous Windows Server et qualification/mise à jour de commutateurs réseau Cisco.",
        justification: "Durant mon stage chez Chubb Delta, j'ai participé à la modernisation et au maintien en condition opérationnelle de l'infrastructure d'entreprise. J'ai déployé des VM sous Windows Server pour l'administration interne, configuré des port-profiles et des VLANs sur des switchs Cisco, et procédé à des tests de connectivité sécurisée."
      },
      'chubb-forti-servicenow': {
        title: "Supervision FortiAnalyzer & gestion d'incidents sous ServiceNow",
        contextLabel: "EN MILIEU PROFESSIONNEL (Chubb Delta)",
        summary: "Supervision des flux réseau, analyse des journaux d'événements de sécurité Fortinet et traitement des demandes d'assistance ITIL sous ServiceNow.",
        justification: "Au pôle sécurité de Chubb Delta, j'ai analysé les logs de sécurité et le trafic réseau via FortiAnalyzer afin d'identifier d'éventuelles anomalies. En parallèle, j'ai assuré le suivi, le traitement et la résolution des tickets d'incidents informatiques de niveaux 1 et 2 attribués dans ServiceNow."
      },
      'holazyv': {
        title: "Projet HoLazyV : Conception web & valorisation de la présence en ligne",
        contextLabel: "EN MILIEU SCOLAIRE (BTS SIO)",
        summary: "Création complète de l'identité visuelle et développement du site web pour structurer la présence en ligne de l'organisation.",
        justification: "Conception graphique et technique du site web du projet HoLazyV. Travail sur la charte graphique, le choix de l'ergonomie, la structuration des contenus et l'optimisation de la visibilité numérique."
      },
      'aegis': {
        title: "Architecture réseau AEGIS : VLANs, agrégats PAgP & DNS BIND 9 sous Docker",
        contextLabel: "EN MILIEU SCOLAIRE (BTS SIO)",
        summary: "Conception d'une maquette réseau sécurisée avec segmentation VLAN/PAgP et déploiement conteneurisé d'un service DNS interne.",
        justification: "Élaboration de la topologie réseau de l'entreprise fictive AEGIS sous Cisco Packet Tracer (intégration du protocole d'agrégation de liens PAgP et VLANs). Déploiement réel d'un service DNS BIND 9 dans un conteneur Docker hébergé sur une VM AlmaLinux 9."
      },
      'chefferie-projet': {
        title: "Cadrage, planification & méthodologie de chefferie de projet IT",
        contextLabel: "EN MILIEU SCOLAIRE (BTS SIO)",
        summary: "Analyse des besoins, rédaction du cahier des charges, planification des jalons et évaluation des indicateurs de suivi de projet.",
        justification: "Mise en œuvre des méthodes de gestion de projet informatique lors du TP de chefferie de projet. Définition des objectifs, découpage des tâches (WBS), planification des étapes sur diagramme de Gantt et identification des risques majeurs."
      }
    },

    // Parcours items
    parcours_items: {
      'bts-sio': {
        badge: 'Bac +2 • En cours',
        title: 'BTS - SIO SISR',
        subtitle: 'Institution des Chartreux, Lyon',
        description: 'Formation supérieure spécialisée dans l’administration d’infrastructures informatiques, le déploiement d’architectures réseaux résilientes, la virtualisation de serveurs et la mise en œuvre de politiques de cybersécurité en entreprise. Apprentissage approfondi des environnements Windows Server, Linux (Debian, Ubuntu), switching/routing Cisco, firewalling et gestion de parcs informatiques.'
      },
      'bac-general': {
        badge: 'Baccalauréat Général',
        title: 'Bac Général',
        subtitle: 'Lycée La Favorite - Lyon',
        description: 'Formation au Lycée La Favorite (Lyon) avec spécialités Mathématiques et LLCERAMC (option Mathématiques Expertes). Développement d’un raisonnement analytique rigoureux, de compétences en modélisation et logique appliquées aux technologies informatiques.'
      },
      'chubb-delta': {
        badge: 'STAGE PROFESSIONNEL • 2026',
        title: 'Stagiaire Systèmes, Réseaux & Sécurité — Chubb Delta',
        subtitle: 'Chubb Delta — Siège / Agence',
        description: "Réalisation d'un stage technique axé sur la gestion d'infrastructure et la cybersécurité. Audit et suivi des règles de pare-feu, analyse des journaux d'événements sur FortiAnalyzer, mise à jour de commutateurs réseau Cisco et déploiement de machines virtuelles sous Windows Server pour des besoins d'administration."
      },
      'nomios': {
        badge: 'STAGE PROFESSIONNEL',
        title: 'Stagiaire Réseau & Cybersécurité — Nomios',
        subtitle: 'Nomios',
        description: "Immersion professionnelle chez Nomios, intégrateur spécialisé en architectures réseau et cybersécurité de pointe. Observation des méthodologies d'audit de sécurité, découverte de solutions pare-feu d'entreprise (Palo Alto, Fortinet) et sensibilisation au fonctionnement des centres d'opérations de sécurité (SOC)."
      }
    },

    // Skills items
    skills_items: {
      'ticketing': {
        category: 'Support & Helpdesk',
        description: 'Prise en charge et qualification des incidents informatiques (niveaux 1 et 2), création et suivi rigoureux des tickets avec respect des SLA (Service Level Agreements). Documentation des procédures de résolution dans une base de connaissances (Knowledge Base) et communication proactive avec les utilisateurs.'
      },
      'virtualisation': {
        category: 'Infrastructure',
        description: 'Conception et administration d’architectures virtualisées. Création, clonage et configuration de machines virtuelles (VMs) sous VMware Workstation, allocation dynamique des ressources CPU/RAM/Stockage, gestion des snapshots, cartes réseaux virtuelles (Host-only, NAT, Bridged) et tests d’infrastructures.'
      },
      'active-directory': {
        category: 'Système d’annuaire',
        description: 'Gestion centralisée des identités et des accès sous Windows Server. Création et maintenance des comptes utilisateurs, ordinateurs et groupes de sécurité. Conception et application de stratégies de groupe (GPO) pour durcir les postes clients et automatiser le déploiement d’environnements de travail.'
      },
      'tcpip-reseaux': {
        category: 'Architecture Réseau',
        description: 'Maîtrise approfondie des couches du modèle OSI et de la pile TCP/IP. Calcul de masques et découpage en sous-réseaux (VLSM), configuration de tables de routage statiques et dynamiques, segmentation logique par VLANs, gestion des protocoles DHCP, DNS, NAT/PAT et analyse de trames avec Wireshark.'
      },
      'cisco-packet-tracer': {
        category: 'Simulation & Configuration',
        description: 'Modélisation complète de topologies réseau d’entreprise avec commutateurs (switches Catalyst) et routeurs Cisco. Configuration en ligne de commande (CLI Cisco IOS) : configuration des interfaces, Trunking 802.1Q, VTP, Spanning Tree (STP), routage statique/OSPF, Access Control Lists (ACL) et sécurité des ports (Port Security).'
      },
      'ia': {
        category: 'Productivité & Automatisation',
        description: 'Utilisation avancée des modèles d’intelligence artificielle générative pour accélérer la résolution d’incidents techniques, automatiser la rédaction de scripts PowerShell/Bash, analyser des journaux d’événements (logs) complexes et concevoir de la documentation technique synthétique.'
      },
      'windows-server': {
        category: 'Système Serveur',
        description: 'Déploiement et administration de Windows Server (2019/2022). Installation et configuration des rôles clés : Active Directory Domain Services, serveur DNS, serveur d’adresses DHCP avec baux et réservations, serveur de fichiers avec permissions NTFS partagées, et gestionnaire de sauvegardes Windows.'
      },
      'linux': {
        category: 'Système Open Source',
        description: 'Administration courante de serveurs Linux sous distributions Debian/Ubuntu et RHEL/AlmaLinux en ligne de commande pure (CLI). Gestion des droits et permissions (chown, chmod), gestion des processus et services systemd, configuration du pare-feu (UFW / firewalld / iptables), accès sécurisé SSH par clé et automatisation de tâches via cron.'
      },
      'vs-code': {
        category: 'Environnement & Code',
        description: 'Utilisation quotidienne de Visual Studio Code comme environnement principal de travail pour le développement de scripts d’administration système (PowerShell, Bash, Python), l’édition de fichiers de configuration (JSON, YAML), et le versionnement collaboratif avec Git et GitHub.'
      }
    }
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_experiences: "Experiences",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_exams: "BTS Exams",
    nav_contact: "Reach Me",
    nav_back_top_aria: "Back to top",

    // Hero
    hero_typewriter: "Welcome to my portfolio, I hope you'll enjoy it!",
    hero_contact_pill: "Contact me: maxencefontainegros@ik.me",
    hero_contact_pill_title: "Click to copy email",
    hero_email_copied: "Email copied to clipboard!",

    // About Section
    about_tag: "PROFILE & OVERVIEW",
    about_title: "About",
    about_bio_p1: `I am a student in <a href="bts-sio.html" id="bts-sio-link" title="Discover BTS SIO" class="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 decoration-[#7A553A] hover:decoration-white transition-all duration-200 group"><span>BTS SIO SISR</span><svg class="w-4 h-4 inline-block text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a> (Infrastructure Solutions, Systems and Networks), specializing in enterprise infrastructure management, system administration, networking, and cybersecurity.`,
    about_bio_p2: "Passionate about designing reliable and resilient IT architectures, I unite solid academic foundations with hands-on skills acquired through real-world projects and field engagements.",
    about_bts_learn_more: "Learn more about the BTS SIO degree & options →",
    cv_card_title: "Resume Summary",
    cv_formation_label: "Studies",
    cv_formation_val: "BTS SIO SISR (Associate Degree)",
    cv_spec_label: "Specialization",
    cv_spec_val: "Infrastructure, Systems & Networks",
    cv_skills_label: "Core Competencies",
    cv_skills_val: "Linux, Windows Server, Cisco, Security",
    cv_langs_label: "Languages",
    cv_langs_val: "French (Native), English (B2+)",
    btn_download_cv: "Download my CV ⬇",

    // Experiences Section
    exp_tag: "Experience",
    exp_title: `Experiences <span class="text-white/40 text-2xl sm:text-3xl font-normal">/ Path</span>`,
    exp_desc: "Explore my academic milestones and practical experiences in systems administration, network engineering, and enterprise infrastructure.",
    exp_col_education: `Education <span class="text-white/40 text-lg font-normal">/ Academic</span>`,
    exp_col_experience: `Experience <span class="text-white/40 text-lg font-normal">/ Professional</span>`,
    btn_learn_more: "Learn more... →",
    btn_learn_more_short: "Learn more...",
    badge_bac2_ongoing: "Associate Degree • Ongoing",
    badge_bac_general: "General Baccalaureate",
    badge_stage_pro_2026: "Professional Internship • 2026",
    badge_stage_pro: "Professional Internship",
    btn_view_project_doc: "View project document (PDF) ↗",
    btn_back_to_projects: "Back to projects →",
    btn_view_specs: "View technical specifications ↗",

    // Parcours Section Items
    parcours_bts_badge: "Associate Degree • Ongoing",
    parcours_bts_title: "BTS - SIO SISR",
    parcours_bts_subtitle: "Institution des Chartreux, Lyon",
    parcours_bts_desc: "Specialized in Infrastructure Solutions, Systems, Networks and IT Security.",
    parcours_bac_badge: "General Baccalaureate",
    parcours_bac_title: "General Baccalaureate",
    parcours_bac_subtitle: "Lycée La Favorite - Lyon",
    parcours_bac_desc: "Majoring in Mathematics and LLCERAMC with Expert Mathematics option.",
    parcours_chubb_badge: "Professional Internship • 2026",
    parcours_chubb_title: "Systems, Networks & Security Intern",
    parcours_chubb_subtitle: "Chubb Delta — Headquarters / Branch",
    parcours_chubb_desc: "Maintenance and updates of network hardware, security monitoring via FortiAnalyzer, and deployment of Windows Server virtual machines.",
    parcours_nomios_badge: "Professional Internship",
    parcours_nomios_title: "Network & Cybersecurity Intern",
    parcours_nomios_subtitle: "Nomios",
    parcours_nomios_desc: "Immersion with a network and cybersecurity integrator. Discovery of enterprise firewall architecture, audit and protection solutions.",

    // Skills Cards
    skill_ticketing_cat: "Support & Helpdesk",
    skill_ticketing_title: "Ticketing",
    skill_ticketing_desc: "Incident management (L1/L2), request tracking, and SLA compliance.",
    skill_virtualisation_cat: "Infrastructure",
    skill_virtualisation_title: "Virtualization",
    skill_virtualisation_desc: "Virtual machine deployment, snapshots, and resource management.",
    skill_active_directory_cat: "Directory Service",
    skill_active_directory_title: "Active Directory",
    skill_active_directory_desc: "User management, organizational units (OUs), and Group Policy Objects (GPOs).",
    skill_tcpip_reseaux_cat: "Network Architecture",
    skill_tcpip_reseaux_title: "TCP/IP & Networks",
    skill_tcpip_reseaux_desc: "IP addressing, routing, VLAN segmentation, and packet analysis.",
    skill_cisco_packet_tracer_cat: "Simulation & Configuration",
    skill_cisco_packet_tracer_title: "Cisco Packet Tracer",
    skill_cisco_packet_tracer_desc: "Infrastructure modeling, switches, routers, and associated protocols.",
    skill_ia_cat: "Productivity & Automation",
    skill_ia_title: "AI",
    skill_ia_desc: "Prompt engineering, scripting, and technical diagnostic assistance.",
    skill_windows_server_cat: "Server Operating System",
    skill_windows_server_title: "Windows Server",
    skill_windows_server_desc: "Server roles (AD, DNS, DHCP), network services, and administration.",
    skill_linux_cat: "Open Source System",
    skill_linux_title: "Linux (Debian/Alma)",
    skill_linux_desc: "CLI administration, packages, SSH, firewalls, and web services.",
    skill_vs_code_cat: "Environment & Tooling",
    skill_vs_code_title: "VS Code",
    skill_vs_code_desc: "Code editor, PowerShell/Bash scripting, Git management, and snippets.",

    // Certifications
    cert_tag: "Validation & Credentials",
    cert_heading: "Certifications",
    cert_btn_view: "View certificate ↗",

    // Skills
    skills_tag: "Technical Expertise",
    skills_heading: `Skills <span class="text-white/40 text-2xl sm:text-3xl font-normal">/ Skills</span>`,
    skills_desc: "Operating systems, protocols, and tooling mastered through coursework and production environments.",

    // Projects
    projects_tag: "📁 <span>Achievements & Projects</span>",
    projects_heading: `Projects <span class="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Projects</span>`,
    projects_desc: "Explore a curated selection of major projects built during my BTS SIO SISR coursework and personal technical ventures.",
    project_portfolio_badge: "Personal & Professional",
    project_portfolio_title: "BTS SIO SISR Portfolio",
    project_portfolio_desc: "Complete design and development of my BTS SIO SISR student portfolio. Responsive architecture, interactive animations, refined glassmorphism design, and detailed technical documentation for examinations.",
    project_holazyv_badge: "Branding & E-Commerce",
    project_holazyv_title: "HoLazyV",
    project_holazyv_desc: "Comprehensive brand identity creation and e-commerce store development. Complete artistic direction, vector logo design, visual effects, and optimized shopping user experience.",
    btn_discover_project: "Explore project →",

    // BTS Exams
    exams_badge: "🎓 <span>Certification & Degree</span>",
    exams_heading: `BTS Exams <span class="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Exams</span>`,
    exams_subheading: "Professional skills portfolio",
    exams_intro: "Access official project portfolios, technical scenario records, and evaluation rubrics from the BTS SIO SISR curriculum.",
    exams_card_tag: "BTS SIO SISR · 2026 Session",
    exams_card_title: "Practical & Oral Examination Dossiers",
    exams_card_desc: "Consult preparatory documentation, technical activity files, and architectural schematics required for national board examinations.",
    btn_e5: "Access E5 Exam Page ↗",
    btn_e6: "E6 Exam (Work in progress) 🔒",
    toast_e6_title: "E6 Exam currently in preparation",
    toast_e6_text: "The digital documentation for the E6 Exam (Cybersecurity) is currently being finalized according to academic guidelines.",

    // Contact
    contact_badge: "✉️ <span>Get in touch</span>",
    contact_heading: `Contact Me <span class="text-white/40 text-xl sm:text-2xl md:text-3xl font-normal">/ Get in touch</span>`,
    contact_subheading: "An inquiry, internship opportunity, or technical collaboration? Reach out directly.",
    contact_desc: "Available to discuss professional opportunities, infrastructure architectures, or technical challenges.",
    contact_email_badge: "Direct Messaging",
    contact_email_title: "Email",
    contact_email_desc: "Send me a message for questions, internship or work-study offers, or engineering collaborations.",
    contact_email_action: "Compose",
    email_copied: "Email copied to clipboard!",
    contact_linkedin_badge: "Professional Network",
    contact_linkedin_title: "LinkedIn",
    contact_linkedin_desc: "View my updated career milestones, certifications, and let's connect on my professional profile.",
    contact_linkedin_action: "Connect ↗",

    // Footer
    footer_desc: "BTS SIO SISR student (Infrastructure Solutions, Systems and Networks). Passionate about network engineering, automation, and systems administration.",
    footer_quick_links: "Quick Links",
    footer_contact_title: "Contact",
    footer_rights: "© 2026 Maxence FONTAINE GROS. All rights reserved.",
    footer_scroll_top: "Back to top ↑",
    footer_legal: "Legal Notices",

    // Modals
    modal_detailed_desc: "Detailed Description",
    modal_associated_skills: "Associated Competencies",
    modal_visit_site: "Visit website ↗",
    modal_category: "Category",
    modal_skill: "Skill",
    modal_skill_detail: "Technical Details & Practical Implementation",
    modal_skill_tools: "Associated Tools & Technologies",
    modal_official_doc: "Official documentation ↗",
    modal_technologies: "Technologies",
    modal_access_project: "View project page →",

    // E5 Specific Page Strings
    e5_back_btn: "← Back to portfolio",
    e5_badge: "E5 Exam · SISR",
    e5_title: "E5 Exam — Skills Portfolio",
    e5_subtitle: `Presentation of technical activity records completed in professional environments (internship at <strong class="text-white font-semibold">Chubb Delta</strong>) and academic projects (BTS SIO SISR).`,
    e5_btn_download_pdf: "Download E5 matrix (PDF) ↗",
    e5_legend_title: "BTS SIO competency domains (D1 to D6)",
    e5_legend_subtitle: "6 competency blocks",
    sidebar_dashboard_title: "E5 Dashboard",
    sidebar_fiches_count: "5 records",
    sidebar_status_header: "SISR Curriculum Status",
    sidebar_status_ratio: "5 validated / 1 in progress",
    sidebar_domains_header: "Covered competencies",
    sidebar_activities_header: "Activities & Achievements (5)",
    sidebar_quick_access: "Quick access to records",
    sidebar_grille_btn: "Official grading matrix ↗",
    mobile_accordion_title: "E5 Competency Status",
    mobile_accordion_show: "Show",
    mobile_accordion_hide: "Hide",
    filter_all_tasks: "All records (5)",
    filter_scolaire: "Academic environment (3)",
    filter_pro: "Professional environment (2)",
    filter_competencies_default: "Filter by competency D1-D6 ▾",
    filter_all_competencies: "All competencies",
    filter_reset_btn: "Reset filters",
    empty_state_msg: "No records match the selected filters.",
    badge_fiche_detaillee: "Detailed record ↗",
    badge_bts_sisr_fiche: "BTS SISR · Record #",
    status_en_cours: "In progress",
    status_valide: "Validated",
    btn_learn_more_arrow: "Learn more... →",
    e5_d1_title: "D1 · Manage IT infrastructure",
    e5_d1_desc: "Manage IT infrastructure (fleet, servers, licenses, system configurations)",
    e5_d1_filter: "D1 · Manage IT infrastructure & assets",
    e5_d2_title: "D2 · Respond to incidents",
    e5_d2_desc: "User support, ITIL incident resolution & service requests",
    e5_d2_filter: "D2 · Respond to incidents & requests",
    e5_d3_title: "D3 · Online presence",
    e5_d3_desc: "Develop and enhance the organization's digital web presence",
    e5_d3_filter: "D3 · Develop digital web presence",
    e5_d4_title: "D4 · Project mode",
    e5_d4_desc: "Planning, technical specifications, milestones & milestone reviews",
    e5_d4_filter: "D4 · Work in project management mode",
    e5_d5_title: "D5 · IT service delivery",
    e5_d5_desc: "Provide end-users with an operational and resilient IT service",
    e5_d5_filter: "D5 · Deliver an operational IT service",
    e5_d6_title: "D6 · Professional growth",
    e5_d6_desc: "Organize ongoing professional training & technology watch",
    e5_d6_filter: "D6 · Organize professional development",
    modal_summary_heading: "ACTIVITY SUMMARY",
    modal_justification_heading: "Detailed Technical Methodology & Justification",
    modal_env_heading: "ENVIRONMENT, TOOLS & TECHNOLOGIES:",
    modal_associated_skills: "Validated competencies:",
    modal_btn_dossier: "Open dossier ↗",
    modal_btn_site: "Visit website ↗",
    modal_btn_project: "View dedicated project page ↗",
    modal_btn_prev: "← Previous",
    modal_btn_next: "Next →",
    modal_btn_close: "Close",
    modal_close_aria: "Close modal",
    lang_btn_aria: "Switch language",
    nav_back_portfolio: "← Back to Portfolio",
    nav_back_to_projects: "Back to projects",

    // =========================================================================
    // BTS SIO PAGE TRANSLATIONS (EN)
    // =========================================================================
    bts_meta_title: "What is BTS SIO? — Maxence FONTAINE GROS",
    bts_header_badge: "DIPLOMA & CURRICULUM",
    bts_header_credits: "Associate Degree • 120 ECTS",
    bts_header_title: "What is the BTS SIO degree?",
    bts_header_desc1: "The <strong class=\"text-white font-semibold\">BTS Services Informatiques aux Organisations (SIO)</strong> is a French national state diploma (Bac+2 / Associate Degree) training highly qualified technicians to address the digital infrastructure and software needs of corporations, public administrations, and digital service firms.",
    bts_header_desc2: "The curriculum combines a solid academic core (business English, applied mathematics, economics, IT management and cyber-law) with concrete professional immersion: <strong class=\"text-white font-medium\">professionalization workshops (AP)</strong>, collaborative real-world projects, and hands-on internship periods.",
    bts_stat_duration: "Duration",
    bts_stat_duration_val: "2 Years",
    bts_stat_credits: "Credits",
    bts_stat_credits_val: "120 ECTS",
    bts_stat_options: "Specializations",
    bts_stat_options_val: "2 Tracks",
    bts_stat_immersion: "Immersion",
    bts_stat_immersion_val: "Internship / Work-Study",

    // SISR Card
    bts_sisr_badge: "★ My Option • Specialization",
    bts_sisr_track_tag: "Systems & Networks",
    bts_sisr_title: "SISR Option",
    bts_sisr_subtitle: "Infrastructure Solutions, Systems and Networks",
    bts_sisr_desc: "The SISR option trains specialists responsible for implementing, managing, and securing organizational IT infrastructure. Students learn to administer enterprise computer fleets, configure switches and routers, design virtualized environments, and ensure corporate cyber-resilience.",
    bts_skills_title: "Key Competencies",
    bts_sisr_skill1: "Windows Server Administration",
    bts_sisr_skill2: "Linux (Debian / AlmaLinux)",
    bts_sisr_skill3: "Cisco Switches & Routers (IOS CLI)",
    bts_sisr_skill4: "Virtualization (VMware / Proxmox)",
    bts_sisr_skill5: "Firewalls & Filtering (Fortinet / Palo Alto)",
    bts_sisr_skill6: "Active Directory, GPOs & DNS/DHCP",
    bts_sisr_skill7: "802.1Q VLANs & Inter-VLAN Routing",
    bts_sisr_skill8: "Backups & Disaster Recovery Plans (DRP)",
    bts_careers_title: "Career Opportunities",
    bts_sisr_career1: "Systems & Network Administrator",
    bts_sisr_career2: "Infrastructure Support Technician",
    bts_sisr_career3: "IT Systems Fleet Manager",
    bts_sisr_career4: "Junior Cybersecurity Auditor",
    bts_sisr_career5: "Network Solutions Integrator",

    // SLAM Card
    bts_slam_badge: "Software Development",
    bts_slam_track_tag: "Web, Mobile & Databases",
    bts_slam_title: "SLAM Option",
    bts_slam_subtitle: "Software Solutions and Business Applications",
    bts_slam_desc: "The SLAM option trains specialists in the architecture and development of software, web, and mobile applications. Students learn to translate business requirements into dependable software solutions, model relational databases, and maintain applications in production.",
    bts_slam_skill1: "Web Development (HTML, CSS, JavaScript)",
    bts_slam_skill2: "Object-Oriented Programming (Python, Java, C#)",
    bts_slam_skill3: "Relational Databases (SQL, MySQL)",
    bts_slam_skill4: "REST API Architecture & Integration",
    bts_slam_skill5: "Modern Frameworks (React, Symfony)",
    bts_slam_skill6: "Version Control with Git & GitHub",
    bts_slam_skill7: "Agile Methodologies (Scrum, Kanban)",
    bts_slam_skill8: "Application Security (OWASP Standards)",
    bts_slam_career1: "Web & Mobile Application Developer",
    bts_slam_career2: "Programmer Analyst",
    bts_slam_career3: "Software Designer / Integrator",
    bts_slam_career4: "Junior Database Administrator",
    bts_slam_career5: "Application Support Technician",

    // Section 3: Exams
    bts_exams_section_badge: "ASSESSMENT & CERTIFICATION",
    bts_exams_section_title: "Practical BTS SIO Examinations",
    bts_exams_section_link: "View Examinations Section",
    bts_e4_badge: "Exam E4",
    bts_e4_title: "Support & Deployment",
    bts_e4_desc: "IT asset management, user incident handling, and organization online presence deployment.",
    bts_e5_badge: "Exam E5 (SISR)",
    bts_e5_title: "Design & Maintenance",
    bts_e5_desc: "Network architecture deployment, server virtualization, and advanced systems administration.",
    bts_e6_badge: "Exam E6",
    bts_e6_title: "Cybersecurity",
    bts_e6_desc: "Vulnerability auditing, equipment hardening, security policies, and regulatory compliance.",
    bts_cta_box_title: "Want to discover my technical accomplishments?",
    bts_cta_box_desc: "Explore my practical skills, engineering projects, and certifications on my portfolio.",
    bts_cta_box_btn: "Return to portfolio →",
    bts_footer_brand: "Maxence FONTAINE GROS — BTS SIO SISR Portfolio",

    // =========================================================================
    // HOLAZYV PROJECT PAGE TRANSLATIONS (EN)
    // =========================================================================
    holazyv_page_title: "HoLazyV Project — Maxence FONTAINE GROS",
    holazyv_category: "Branding · E-Commerce & Art Direction",
    holazyv_hero_title: "HoLazyV Project",
    holazyv_hero_desc: "Online store creation, comprehensive visual identity, vector branding, and e-commerce design for the HoLazyV project. A modern shopping experience focusing on graphic originality and seamless user purchase flows.",
    holazyv_btn_pdf: "View project document (PDF)",
    holazyv_btn_back: "Back to projects",
    holazyv_section_title: "Art Direction & Conception",
    holazyv_section_intro: "The HoLazyV project was born from the vision of merging underground streetwear aesthetics with a premium, seamless e-commerce storefront.",
    holazyv_card1_tag: "Identity & DNA",
    holazyv_card1_title: "Brand Concept (Branding)",
    holazyv_card1_desc: "Defining core brand values: effortless streetwear attitude, contemporary urban culture, and exclusive drops. Creation of the comprehensive graphic charter including the logotype, monochrome/color variations, and digital packaging.",
    holazyv_card1_footer: "Logotype · Moodboard · Brand Guidelines",
    holazyv_card2_tag: "Typography",
    holazyv_card2_title: "Typographic Choices",
    holazyv_card2_desc: "Meticulous selection of high-impact typefaces: expressive display headlines paired with geometric, highly legible body sans-serif fonts optimized across mobile and desktop to maximize conversion rates.",
    holazyv_card2_footer: "Visual Hierarchy · Display Fonts · Optical Ratios",
    holazyv_card3_tag: "Illustration & Vector",
    holazyv_card3_title: "Vector Graphics",
    holazyv_card3_desc: "Designing custom vector artwork using Kittle: bespoke e-commerce icons, silkscreen & embroidery motifs, certification badges, and responsive UI elements with zero resolution loss.",
    holazyv_card3_footer: "Figma · Optimized SVGs",
    holazyv_card4_tag: "Visual Effects & Ambience",
    holazyv_card4_title: "Astronomical Visuals",
    holazyv_card4_desc: "Distinctive project visual signature: creation of a space-themed astronomical ambiance applied to backdrop elements, imparting a futuristic and dynamic atmosphere to the e-commerce showcase.",
    holazyv_card4_footer: "Space Atmosphere · Textures · Streetwear · Futuristic",
    holazyv_footer_text: "© 2026 - 2027 HoLazyV Project · Art Direction & E-commerce · Maxence FONTAINE GROS",

    // =========================================================================
    // PORTFOLIO PROJECT PAGE TRANSLATIONS (EN)
    // =========================================================================
    portfolio_page_doc_title: "Portfolio Project — Maxence FONTAINE GROS",
    portfolio_page_eyebrow: "Flagship Project · Web & Documentation",
    portfolio_page_title: "My Portfolio",
    portfolio_page_intro: "Here you will find an in-depth breakdown of my portfolio development. Built as a living showcase of my skills across systems administration, network engineering, and modern web technologies.",
    portfolio_btn_specs: "View technical specifications",
    portfolio_btn_more: "Learn more",
    portfolio_why_heading: "Why a Portfolio in BTS SIO?",
    portfolio_why_intro: "In the BTS SIO curriculum (SISR option — Infrastructure Solutions, Systems and Networks), a portfolio represents much more than a traditional resume: it stands as a living synthesis of acquired technical skills, deployed network architectures, hands-on administration labs, and real-world incident resolutions.",
    portfolio_card1_tag: "Educational Objective",
    portfolio_card1_title: "Assessment & Skills Tracking",
    portfolio_card1_desc: "The portfolio is the essential platform for demonstrating technical achievements before jury members during BTS SIO professional exams (particularly E4 and E5). It maintains an authoritative record of professional situation sheets, technical documentations, automation scripts, and network topologies.",
    portfolio_card1_footer: "E4 / E5 Examinations · Activity Sheets",
    portfolio_card2_tag: "Career & Integration",
    portfolio_card2_title: "Professional Reference",
    portfolio_card2_desc: "Beyond academic requirements, this website serves as a primary professional asset for recruiters, apprenticeship supervisors, and internship mentors. It concretely highlights my documentation rigor, ongoing technological watch, and methodical troubleshooting process.",
    portfolio_card2_footer: "Apprenticeship · Internships · Career Integration",
    portfolio_how_heading: "How I Built My Portfolio",
    portfolio_how_intro: "The design and engineering of this platform spanned a full academic year alongside coursework and company projects, combining ergonomic precision, a refined aesthetic, and modern web technologies.",
    portfolio_card3_tag: "Stack & Engineering",
    portfolio_card3_title: "Tools Used",
    portfolio_card3_desc: "Built using <strong>VS Code</strong>, assisted by advanced artificial intelligence (<strong>Google Gemini</strong>) and local LLMs to accelerate rapid prototyping. The visual interface leverages <strong>Tailwind CSS</strong>, a suite of reactive components, and bespoke 3D claymation assets.",
    portfolio_card3_footer: "Modular Architecture · Accessibility · Performance",
    portfolio_card4_tag: "Timeline & Rigor",
    portfolio_card4_title: "Development Timeline",
    portfolio_card4_desc: "Developed continuously over <strong>approximately 1 year</strong>, this portfolio underwent numerous design iterations: refining warm earth and taupe palettes, integrating mouse-driven video scrubbing, viewport-centered modal architecture, and rigorous legibility audits.",
    portfolio_phase1_label: "Phase 1: Scoping & Specifications",
    portfolio_phase1_time: "Months 1 - 2",
    portfolio_phase2_label: "Phase 2: UI/UX & Video Scrub Integration",
    portfolio_phase2_time: "Months 3 - 6",
    portfolio_phase3_label: "Phase 3: Modularization & BTS Modules",
    portfolio_phase3_time: "Months 7 - 12",
    portfolio_card4_footer: "Continuous Iterations · Certified Code Quality",
    portfolio_footer_text: "© 2026 - 2027 Maxence FONTAINE GROS · BTS SIO SISR Portfolio · All rights reserved.",

    // E5 Domains
    e5_domains: {
      D1: { title: "D1 · Manage IT infrastructure", label: "Manage IT infrastructure and assets", desc: "Manage IT infrastructure (fleet, servers, licenses, system configurations)" },
      D2: { title: "D2 · Respond to incidents", label: "Respond to incidents & support requests", desc: "User support, ITIL incident resolution & service requests" },
      D3: { title: "D3 · Online presence", label: "Develop the organization's online presence", desc: "Develop and enhance the organization's digital web presence" },
      D4: { title: "D4 · Project mode", label: "Work in project management mode", desc: "Planning, technical specifications, milestones & milestone reviews" },
      D5: { title: "D5 · IT service delivery", label: "Deliver an operational IT service", desc: "Provide end-users with an operational and resilient IT service" },
      D6: { title: "D6 · Professional growth", label: "Organize professional development", desc: "Organize ongoing professional training & technology watch" }
    },

    // E5 Tasks
    e5_tasks: {
      'chubb-vm-cisco': {
        title: "Windows Server VM Deployment & Cisco Switch Qualification",
        contextLabel: "IN PROFESSIONAL ENVIRONMENT (CHUBB DELTA)",
        summary: "Deployment of management virtual machines on Windows Server and qualification/upgrade of Cisco network switches.",
        justification: "During my internship at Chubb Delta, I contributed to enterprise infrastructure modernization and operational maintenance. I provisioned Windows Server VMs for internal administration, configured port-profiles and VLANs on Cisco switches, and performed secure connectivity tests."
      },
      'chubb-forti-servicenow': {
        title: "FortiAnalyzer Monitoring & ServiceNow Incident Management",
        contextLabel: "IN PROFESSIONAL ENVIRONMENT (CHUBB DELTA)",
        summary: "Network traffic monitoring, Fortinet security log analysis, and ITIL support ticket resolution in ServiceNow.",
        justification: "Within Chubb Delta's security division, I inspected security logs and network telemetry via FortiAnalyzer to detect potential anomalies. Concurrently, I tracked, handled, and resolved tier 1 and 2 IT support tickets assigned in ServiceNow."
      },
      'holazyv': {
        title: "HoLazyV Project: Web Design & Online Presence Optimization",
        contextLabel: "IN ACADEMIC ENVIRONMENT (BTS SIO)",
        summary: "Complete brand identity creation and web design to establish the organization's digital presence.",
        justification: "Graphic and technical design of the HoLazyV project website. Creation of the visual charter, UX/UI ergonomics, content structuring, and search optimization."
      },
      'aegis': {
        title: "AEGIS Network Architecture: VLANs, PAgP Aggregates & BIND 9 DNS on Docker",
        contextLabel: "IN ACADEMIC ENVIRONMENT (BTS SIO)",
        summary: "Design of a secure enterprise network prototype with VLAN/PAgP segmentation and containerized deployment of an internal DNS service.",
        justification: "Architecture of the corporate network topology for the fictitious firm AEGIS in Cisco Packet Tracer (implementing link aggregation with PAgP and VLAN segmentation). Production deployment of a BIND 9 DNS service in a Docker container hosted on an AlmaLinux 9 VM."
      },
      'chefferie-projet': {
        title: "Scoping, Planning & IT Project Management Methodology",
        contextLabel: "IN ACADEMIC ENVIRONMENT (BTS SIO)",
        summary: "Requirements gathering, specifications drafting, milestone scheduling, and project monitoring KPIs.",
        justification: "Application of IT project management frameworks during hands-on lab sessions. Defining objectives, Work Breakdown Structure (WBS), Gantt milestone tracking, and critical risk assessment."
      }
    },

    // Parcours items
    parcours_items: {
      'bts-sio': {
        badge: 'Associate Degree • In progress',
        title: 'BTS - SIO SISR',
        subtitle: 'Institution des Chartreux, Lyon',
        description: 'Higher vocational curriculum specialized in enterprise IT infrastructure administration, deployment of resilient network architectures, server virtualization, and enforcement of cybersecurity policies. Hands-on learning of Windows Server, Linux (Debian, Ubuntu), Cisco switching & routing, firewalling, and IT fleet management.'
      },
      'bac-general': {
        badge: 'High School Diploma (Baccalauréat)',
        title: 'General Baccalaureate',
        subtitle: 'Lycée La Favorite - Lyon',
        description: 'Secondary education at Lycée La Favorite (Lyon) majoring in Mathematics and LLCERAMC (with Expert Mathematics option). Development of rigorous analytical reasoning, algorithmic modeling, and applied logic.'
      },
      'chubb-delta': {
        badge: 'PROFESSIONAL INTERNSHIP • 2026',
        title: 'Systems, Networks & Security Intern — Chubb Delta',
        subtitle: 'Chubb Delta — Headquarters / Branch',
        description: 'Technical internship focused on infrastructure administration and cybersecurity. Firewall rule auditing and tracking, security event log inspection on FortiAnalyzer, upgrading Cisco network switches, and provisioning Windows Server virtual machines for IT operations.'
      },
      'nomios': {
        badge: 'PROFESSIONAL INTERNSHIP',
        title: 'Network & Cybersecurity Intern — Nomios',
        subtitle: 'Nomios',
        description: 'Professional immersion at Nomios, an elite cybersecurity and network systems integrator. Observational study of security audit methodologies, discovery of next-gen enterprise firewalls (Palo Alto, Fortinet), and understanding Security Operations Centers (SOC).'
      }
    },

    // Skills items
    skills_items: {
      'ticketing': {
        category: 'Support & Helpdesk',
        description: 'Tier 1 and 2 incident triaging, ticket creation and tracking with strict SLA compliance. Writing resolution workflows in the internal Knowledge Base and proactive user communication.'
      },
      'virtualisation': {
        category: 'Infrastructure',
        description: 'Design and administration of virtualized systems. VM provisioning, cloning, and tuning on VMware Workstation, dynamic resource provisioning (CPU/RAM/storage), snapshot workflows, virtual networking (Host-only, NAT, Bridged), and sandbox testing.'
      },
      'active-directory': {
        category: 'Directory Service',
        description: 'Centralized identity and access management on Windows Server. Administration of user accounts, workstations, and security groups. Designing and deploying Group Policy Objects (GPO) to harden clients and automate workspaces.'
      },
      'tcpip-reseaux': {
        category: 'Network Architecture',
        description: 'In-depth mastery of the OSI model and TCP/IP stack. Subnetting & VLSM calculations, static and dynamic routing tables, 802.1Q VLAN segmentation, DHCP, DNS, NAT/PAT protocol management, and packet sniffing with Wireshark.'
      },
      'cisco-packet-tracer': {
        category: 'Simulation & Configuration',
        description: 'Comprehensive network topology modeling with Catalyst switches and Cisco routers. Cisco IOS CLI configuration: interfaces, 802.1Q Trunking, VTP, Spanning Tree (STP), static/OSPF routing, ACLs, and Port Security.'
      },
      'ia': {
        category: 'Productivity & Automation',
        description: 'Advanced utilization of generative AI models to accelerate incident diagnosis, automate PowerShell and Bash script generation, parse complex server logs, and draft concise technical documentation.'
      },
      'windows-server': {
        category: 'Server Operating System',
        description: 'Deployment and administration of Windows Server (2019/2022). Setup and management of critical roles: Active Directory Domain Services, DNS, DHCP scopes and reservations, SMB/NTFS shared file systems, and Windows Backup.'
      },
      'linux': {
        category: 'Open Source System',
        description: 'CLI systems administration across Debian/Ubuntu and RHEL/AlmaLinux distributions. File permissions (chmod, chown), systemd service and process management, firewalling (UFW / firewalld / iptables), SSH key authentication, and cron automation.'
      },
      'vs-code': {
        category: 'Environment & Tooling',
        description: 'Daily driver development environment for system administration scripting (PowerShell, Bash, Python), configuration file authoring (JSON, YAML), and Git/GitHub collaborative version control.'
      }
    }
  }
};

/**
 * Get current active language ('fr' or 'en')
 */
function getCurrentLanguage() {
  const stored = localStorage.getItem('portfolio_lang');
  if (stored === 'fr' || stored === 'en') return stored;
  return 'fr';
}

/**
 * Update active state on language switcher buttons
 */
function updateSwitcherButtonsUI(lang) {
  // Update all FR/EN label elements
  document.querySelectorAll('#lang-fr, .lang-fr-label').forEach(el => {
    if (lang === 'fr') {
      el.className = 'text-white font-bold transition-opacity';
      el.style.opacity = '1';
    } else {
      el.className = 'text-white/40 font-normal transition-opacity';
      el.style.opacity = '0.4';
    }
  });

  document.querySelectorAll('#lang-en, .lang-en-label').forEach(el => {
    if (lang === 'en') {
      el.className = 'text-white font-bold transition-opacity';
      el.style.opacity = '1';
    } else {
      el.className = 'text-white/40 font-normal transition-opacity';
      el.style.opacity = '0.4';
    }
  });

  document.querySelectorAll('#lang-switcher-btn, #lang-switcher-btn-mobile, .lang-switcher-toggle').forEach(btn => {
    btn.setAttribute('aria-label', lang === 'fr' ? 'Passer en Anglais' : 'Switch to French');
  });
}

/**
 * Core Language Setter Function
 * @param {'fr' | 'en'} lang 
 */
function setLanguage(lang) {
  if (lang !== 'fr' && lang !== 'en') {
    lang = 'fr';
  }

  // 1. Update HTML document lang attribute
  document.documentElement.lang = lang;

  // 2. Persist in localStorage
  localStorage.setItem('portfolio_lang', lang);

  const dict = i18nData[lang] || i18nData.fr;

  // 3. Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key] !== undefined) {
      if (typeof dict[key] === 'string' && dict[key].includes('<') && dict[key].includes('>')) {
        el.innerHTML = dict[key];
      } else if (typeof dict[key] === 'string') {
        el.textContent = dict[key];
      }
    }
  });

  // 4. Update [data-i18n-title]
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key && dict[key] !== undefined) {
      el.setAttribute('title', dict[key]);
    }
  });

  // 5. Update [data-i18n-aria]
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // 6. Update [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 7. Update Switcher buttons visual states
  updateSwitcherButtonsUI(lang);

  // 8. Trigger custom event for dynamic components (typewriter, E5 cards, modals)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Toggle Language between FR and EN
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  const next = current === 'fr' ? 'en' : 'fr';
  setLanguage(next);
}

// Expose globally
window.i18nData = i18nData;
window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;
window.getCurrentLanguage = getCurrentLanguage;

// Self-init on DOM ready
function initI18n() {
  const initialLang = getCurrentLanguage();
  setLanguage(initialLang);

  // Bind click event to any switcher button
  document.querySelectorAll('#lang-switcher-btn, #lang-switcher-btn-mobile, .lang-switcher-toggle').forEach(btn => {
    btn.removeEventListener('click', toggleLanguage);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
