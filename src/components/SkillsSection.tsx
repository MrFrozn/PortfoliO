import { useState, useEffect, useRef, type TouchEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Ticket,
  Server,
  Users,
  Network,
  GitFork,
  Brain,
  Monitor,
  Terminal,
  Code2,
} from 'lucide-react';

/* =========================================================================
   CERTIFICATIONS DATA (Modular: append objects here to add new certificates)
   ========================================================================= */
export interface CertificationItem {
  id: string;
  title: string;
  badge: string;
  issuer: string;
  description: string;
  certificateUrl: string;
  thumbnailUrl?: string;
  date: string;
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'mooc-anssi',
    title: 'MOOC ANSSI',
    badge: 'SecNumacadémie',
    issuer: 'ANSSI (Agence Nationale de la Sécurité des Systèmes d’Information)',
    description: 'SecNumacadémie - Initiation approfondie à la cybersécurité et aux bonnes pratiques de protection numérique.',
    certificateUrl: '/certifications/anssi.pdf',
    thumbnailUrl: '',
    date: '2024',
  },
  {
    id: 'redhat-rh124',
    title: 'Red Hat RH124',
    badge: 'Linux Enterprise',
    issuer: 'Red Hat Training & Certification',
    description: 'Red Hat System Administration I (RH124) - Administration système Linux Enterprise, gestion des utilisateurs, stockage et services réseau.',
    certificateUrl: '/certifications/rh124.pdf',
    thumbnailUrl: '',
    date: '2024',
  },
  {
    id: 'fortinet-nse1',
    title: 'Fortinet NSE 1',
    badge: 'Network Security',
    issuer: 'Fortinet Training Institute',
    description: 'Fortinet Network Security Expert 1 - Notions fondamentales de cybersécurité, paysage des menaces et protection réseau.',
    certificateUrl: '/certifications/nse1.pdf',
    thumbnailUrl: '',
    date: '2024',
  },
];

/* =========================================================================
   SKILLS DATA (9 Minimal Cards with detail modal data)
   ========================================================================= */
export interface SkillItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  relatedTools: string[];
  docUrl: string;
  docLabel: string;
}

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'ticketing',
    title: 'Ticketing',
    category: 'Support & Helpdesk',
    iconName: 'Ticket',
    shortDesc: 'Gestion des incidents, suivi des demandes et SLA utilisateurs.',
    fullDesc:
      'Prise en charge et qualification des incidents informatiques (niveaux 1 et 2), création et suivi rigoureux des tickets avec respect des SLA (Service Level Agreements). Documentation des procédures de résolution dans une base de connaissances (Knowledge Base) et communication proactive avec les utilisateurs.',
    relatedTools: ['ServiceNow', 'Jira Service Management', 'GLPI', 'Freshdesk'],
    docUrl: 'https://www.servicenow.com/',
    docLabel: 'En savoir plus (ServiceNow) ↗',
  },
  {
    id: 'virtualisation',
    title: 'Virtualisation',
    category: 'Infrastructure',
    iconName: 'Server',
    shortDesc: 'Déploiement et gestion d’hyperviseurs et machines virtuelles.',
    fullDesc:
      'Conception et administration d’architectures virtualisées. Création, clonage et configuration de machines virtuelles (VMs) sous VMware Workstation, allocation dynamique des ressources CPU/RAM/Stockage, gestion des snapshots, cartes réseaux virtuelles (Host-only, NAT, Bridged) et tests d’infrastructures.',
    relatedTools: ['VMware Workstation Pro', 'VMware ESXi', 'Proxmox VE', 'Hyper-V'],
    docUrl: 'https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion',
    docLabel: 'Documentation VMware Workstation ↗',
  },
  {
    id: 'active-directory',
    title: 'Active Directory',
    category: 'Système d’annuaire',
    iconName: 'Users',
    shortDesc: 'Gestion des identités, forêts, GPO et droits d’accès.',
    fullDesc:
      'Gestion centralisée des identités et des accès sous Windows Server. Création et maintenance des comptes utilisateurs, ordinateurs et groupes de sécurité. Conception et application de stratégies de groupe (GPO) pour durcir les postes clients et automatiser le déploiement d’environnements de travail.',
    relatedTools: ['AD DS', 'Group Policy (GPO)', 'DNS', 'DHCP', 'Microsoft Entra ID'],
    docUrl: 'https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/active-directory-domain-services',
    docLabel: 'Doc Microsoft AD DS ↗',
  },
  {
    id: 'tcpip-reseaux',
    title: 'TCP/IP & Réseaux',
    category: 'Architecture Réseau',
    iconName: 'Network',
    shortDesc: 'Protocoles, adressage IPv4/IPv6, sous-réseaux et routage.',
    fullDesc:
      'Maîtrise approfondie des couches du modèle OSI et de la pile TCP/IP. Calcul de masques et découpage en sous-réseaux (VLSM), configuration de tables de routage statiques et dynamiques, segmentation logique par VLANs, gestion des protocoles DHCP, DNS, NAT/PAT et analyse de trames avec Wireshark.',
    relatedTools: ['Wireshark', 'VLAN 802.1Q', 'Routage inter-VLAN', 'NAT / PAT', 'IPv4 / IPv6'],
    docUrl: 'https://www.wireshark.org/docs/',
    docLabel: 'Documentation Wireshark ↗',
  },
  {
    id: 'cisco-packet-tracer',
    title: 'Cisco Packet Tracer',
    category: 'Simulation & Configuration',
    iconName: 'GitFork',
    shortDesc: 'Modélisation de topologies et configuration Cisco IOS.',
    fullDesc:
      'Modélisation complète de topologies réseau d’entreprise avec commutateurs (switches Catalyst) et routeurs Cisco. Configuration en ligne de commande (CLI Cisco IOS) : configuration des interfaces, Trunking 802.1Q, VTP, Spanning Tree (STP), routage statique/OSPF, Access Control Lists (ACL) et sécurité des ports (Port Security).',
    relatedTools: ['Cisco IOS', 'Switch Catalyst', 'Routeurs Cisco', 'Spanning Tree', 'ACL'],
    docUrl: 'https://www.netacad.com/courses/packet-tracer',
    docLabel: 'Cisco Networking Academy ↗',
  },
  {
    id: 'ia',
    title: 'IA',
    category: 'Productivité & Automatisation',
    iconName: 'Brain',
    shortDesc: 'Ingénierie de prompt, scripting et assistance au diagnostic.',
    fullDesc:
      'Utilisation avancée des modèles d’intelligence artificielle générative pour accélérer la résolution d’incidents techniques, automatiser la rédaction de scripts PowerShell/Bash, analyser des journaux d’événements (logs) complexes et concevoir de la documentation technique synthétique.',
    relatedTools: ['LLMs (Gemini, Claude, GPT)', 'Automatisation scripts', 'Analyse de logs', 'Prompt Engineering'],
    docUrl: 'https://ai.google.dev/',
    docLabel: 'Documentation IA ↗',
  },
  {
    id: 'windows-server',
    title: 'Windows Server',
    category: 'Système Serveur',
    iconName: 'Monitor',
    shortDesc: 'Rôles serveurs, services réseau et administration système.',
    fullDesc:
      'Déploiement et administration de Windows Server (2019/2022). Installation et configuration des rôles clés : Active Directory Domain Services, serveur DNS, serveur d’adresses DHCP avec baux et réservations, serveur de fichiers avec permissions NTFS partagées, et gestionnaire de sauvegardes Windows.',
    relatedTools: ['Windows Server 2022', 'PowerShell', 'Gestionnaire de serveur', 'Partages SMB/NTFS'],
    docUrl: 'https://learn.microsoft.com/fr-fr/windows-server/',
    docLabel: 'Microsoft Learn Server ↗',
  },
  {
    id: 'linux-debian-alma',
    title: 'Linux (Debian/Alma)',
    category: 'Système Open Source',
    iconName: 'Terminal',
    shortDesc: 'Administration en CLI, paquets, SSH, pare-feu et services web.',
    fullDesc:
      'Administration courante de serveurs Linux sous distributions Debian/Ubuntu et RHEL/AlmaLinux en ligne de commande pure (CLI). Gestion des droits et permissions (chown, chmod), gestion des processus et services systemd, configuration du pare-feu (UFW / firewalld / iptables), accès sécurisé SSH par clé et automatisation de tâches via cron.',
    relatedTools: ['Debian', 'AlmaLinux / RHEL', 'Bash', 'Systemd', 'SSH / Keys', 'UFW / Firewalld'],
    docUrl: 'https://www.debian.org/doc/',
    docLabel: 'Documentation Debian ↗',
  },
  {
    id: 'vs-code',
    title: 'VS Code',
    category: 'Environnement & Code',
    iconName: 'Code2',
    shortDesc: 'Éditeur de code, scripting, gestion de versions Git et snippets.',
    fullDesc:
      'Utilisation quotidienne de Visual Studio Code comme environnement principal de travail pour le développement de scripts d’administration système (PowerShell, Bash, Python), l’édition de fichiers de configuration (JSON, YAML), et le versionnement collaboratif avec Git et GitHub.',
    relatedTools: ['Git / GitHub', 'Extensions PowerShell & Bash', 'Terminal intégré', 'Remote SSH'],
    docUrl: 'https://code.visualstudio.com/docs',
    docLabel: 'Documentation VS Code ↗',
  },
];

/* Helper to render icon by name */
function renderSkillIcon(name: string) {
  const iconProps = { className: 'w-6 h-6 text-white' };
  switch (name) {
    case 'Ticket':
      return <Ticket {...iconProps} />;
    case 'Server':
      return <Server {...iconProps} />;
    case 'Users':
      return <Users {...iconProps} />;
    case 'Network':
      return <Network {...iconProps} />;
    case 'GitFork':
      return <GitFork {...iconProps} />;
    case 'Brain':
      return <Brain {...iconProps} />;
    case 'Monitor':
      return <Monitor {...iconProps} />;
    case 'Terminal':
      return <Terminal {...iconProps} />;
    case 'Code2':
      return <Code2 {...iconProps} />;
    default:
      return <Terminal {...iconProps} />;
  }
}

export function SkillsSection() {
  /* ================= Certifications Slider State ================= */
  const [certIndex, setCertIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % CERTIFICATIONS_DATA.length);
  };

  const prevCert = () => {
    setCertIndex((prev) => (prev - 1 + CERTIFICATIONS_DATA.length) % CERTIFICATIONS_DATA.length);
  };

  /* Touch swipe handling for certification carousel */
  const handleTouchStart = (e: TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextCert();
      else prevCert();
    }
    touchStartXRef.current = null;
  };

  /* ================= Skill Modal State ================= */
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const skillIndex = selectedSkillId
    ? SKILLS_DATA.findIndex((s) => s.id === selectedSkillId)
    : -1;
  const currentSkill = skillIndex >= 0 ? SKILLS_DATA[skillIndex] : null;

  const handleOpenSkillModal = (id: string) => {
    setSelectedSkillId(id);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseSkillModal = () => {
    setSelectedSkillId(null);
    document.body.style.overflow = '';
  };

  const handlePrevSkill = () => {
    if (skillIndex < 0) return;
    const newIdx = (skillIndex - 1 + SKILLS_DATA.length) % SKILLS_DATA.length;
    setSelectedSkillId(SKILLS_DATA[newIdx].id);
  };

  const handleNextSkill = () => {
    if (skillIndex < 0) return;
    const newIdx = (skillIndex + 1) % SKILLS_DATA.length;
    setSelectedSkillId(SKILLS_DATA[newIdx].id);
  };

  /* Keyboard support for modal */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedSkillId) return;
      if (e.key === 'Escape') handleCloseSkillModal();
      if (e.key === 'ArrowLeft') handlePrevSkill();
      if (e.key === 'ArrowRight') handleNextSkill();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSkillId, skillIndex]);

  return (
    <section
      id="skills"
      className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-16 bg-transparent text-white overflow-hidden animate-fade-in select-none"
    >
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">

        {/* =========================================================
            PART 1: CERTIFICATIONS CAROUSEL / SLIDER
            ========================================================= */}
        <div id="certifications-part" className="flex flex-col">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-14 text-left">
            <span className="text-xs sm:text-sm font-medium tracking-widest text-white/50 uppercase mb-3 block">
              Validation & Diplômes
            </span>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shadow-inner">
                <Award className="w-5 h-5" />
              </div>
              <h2
                id="certifications-title"
                className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Certifications
              </h2>
            </div>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              Certificats et accréditations techniques validés durant mon cursus en cybersécurité et administration système.
            </p>
          </div>

          {/* Carousel Viewport */}
          <div
            id="certifications-slider-container"
            className="relative w-full overflow-hidden rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${certIndex * 100}%)` }}
            >
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="w-full flex-shrink-0 px-1 sm:px-2"
                >
                  <article className="relative rounded-3xl bg-black/30 backdrop-blur-sm md:backdrop-blur-md border border-white/10 p-7 sm:p-10 md:p-12 transition-all duration-300 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-between">
                    
                    {/* Left details */}
                    <div className="flex-1 text-left">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
                          {cert.badge}
                        </span>
                        <span className="text-sm text-white/50 font-mono">
                          {cert.date}
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {cert.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/60 font-medium mb-5">
                        {cert.issuer}
                      </p>

                      <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                        {cert.description}
                      </p>

                      {/* Action button: Opens PDF directly in new tab with NO download attribute */}
                      <div>
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium transition-all duration-200 hover:bg-neutral-200 active:scale-95 border border-white/20 shadow-xl cursor-pointer"
                        >
                          <span>Voir l'attestation</span>
                          <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </div>

                    {/* Right Visual Certificate Thumbnail Card */}
                    <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
                      <div className="relative aspect-[4/3] rounded-2xl bg-white/[0.04] border border-white/15 p-5 flex flex-col justify-between overflow-hidden shadow-inner group">
                        {cert.thumbnailUrl ? (
                          <img
                            src={cert.thumbnailUrl}
                            alt={cert.title}
                            loading="lazy"
                            decoding="async"
                            width={384}
                            height={288}
                            className="absolute inset-0 w-full h-full object-cover aspect-[4/3]"
                          />
                        ) : null}
                        <div className="flex justify-between items-start z-10">
                          <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                            OFFICIAL CERTIFICATE
                          </span>
                          <Award className="w-6 h-6 text-white/80" />
                        </div>
                        <div className="my-auto text-center py-4 z-10">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                            <span className="text-xl">📜</span>
                          </div>
                          <span className="text-sm font-semibold text-white tracking-wide block">
                            {cert.title}
                          </span>
                          <span className="text-xs text-white/50 block mt-1">
                            {cert.issuer}
                          </span>
                        </div>
                        <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[11px] text-white/40 font-mono z-10">
                          <span>VERIFIED</span>
                          <span>PDF DOCUMENT</span>
                        </div>
                      </div>
                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls (Arrows & Indicators) */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Indicator Dots */}
            <div className="flex items-center gap-2" id="slider-indicators">
              {CERTIFICATIONS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCertIndex(idx)}
                  aria-label={`Aller à la certification ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === certIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevCert}
                title="Certification précédente"
                aria-label="Certification précédente"
                className="slider-btn w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-white/50 font-mono">
                {certIndex + 1} / {CERTIFICATIONS_DATA.length}
              </span>
              <button
                type="button"
                onClick={nextCert}
                title="Certification suivante"
                aria-label="Certification suivante"
                className="slider-btn w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            PART 2: "SKILLS / COMPÉTENCES" GRID (9 Cards)
            ========================================================= */}
        <div id="skills-part" className="flex flex-col">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 text-left">
            <span className="text-xs sm:text-sm font-medium tracking-widest text-white/50 uppercase mb-3 block">
              Savoir-faire technique
            </span>
            <h3
              id="skills-heading"
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Mes Compétences <span className="text-white/40 text-2xl sm:text-3xl font-normal">/ Skills</span>
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Environnements, protocoles et outils maîtrisés au cours de mes projets et de mon apprentissage.
            </p>
          </div>

          {/* 9 Responsive Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SKILLS_DATA.map((skill) => (
              <article
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className="relative group rounded-3xl bg-black/25 backdrop-blur-sm md:backdrop-blur-md border border-white/10 p-6 sm:p-7 transition-all duration-300 hover:border-white/25 hover:bg-black/35 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {skill.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-sm text-white/70 leading-relaxed font-normal mb-6">
                    {skill.shortDesc}
                  </p>
                </div>

                {/* Pill Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    data-skill={skill.id}
                    onClick={() => handleOpenSkillModal(skill.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium transition-all duration-200 hover:bg-neutral-200 active:scale-95 border border-white/20 shadow-md cursor-pointer select-none"
                  >
                    <span>En savoir plus...</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================
          INTERACTIVE SKILL MODAL POPUP (#skillModal) - Root Portal
          ========================================================= */}
      {currentSkill && typeof document !== 'undefined' && createPortal(
        <div
          id="skillModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="skillModalTitle"
          className="fixed inset-0 z-[9999] w-screen h-screen bg-black/75 backdrop-blur-sm md:backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden animate-fade-in"
          style={{ top: 0, left: 0, position: 'fixed' }}
          onClick={handleCloseSkillModal}
        >
          <div
            id="skillModalCard"
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neutral-900/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm md:backdrop-blur-xl my-auto text-left select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="closeSkillModalBtn"
              type="button"
              aria-label="Fermer la fenêtre modale"
              onClick={handleCloseSkillModal}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Header with Icon */}
            <div className="flex items-center gap-3.5 mb-4 pr-12">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                {renderSkillIcon(currentSkill.iconName)}
              </div>
              <div>
                <span className="px-3 py-0.5 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider">
                  {currentSkill.category}
                </span>
              </div>
            </div>

            {/* Dynamic Modal Title */}
            <h3
              id="skillModalTitle"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {currentSkill.title}
            </h3>

            {/* Dynamic Detailed Description */}
            <div className="mb-6 space-y-2">
              <h5 className="text-xs uppercase tracking-wider text-white/40 font-semibold">
                Détail technique & Mise en pratique
              </h5>
              <p
                id="skillModalDescription"
                className="text-white/85 text-base sm:text-lg leading-relaxed font-normal"
              >
                {currentSkill.fullDesc}
              </p>
            </div>

            {/* Associated Tools */}
            <div className="mb-8">
              <h5 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-2.5">
                Outils & Technologies associés
              </h5>
              <div className="flex flex-wrap gap-2">
                {currentSkill.relatedTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Navigation & Official Link */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Prev / Next */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrevSkill}
                  title="Compétence précédente"
                  aria-label="Compétence précédente"
                  className="skill-modal-nav prev w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-white/40 px-1 font-mono">
                  {skillIndex + 1} / {SKILLS_DATA.length}
                </span>
                <button
                  type="button"
                  onClick={handleNextSkill}
                  title="Compétence suivante"
                  aria-label="Compétence suivante"
                  className="skill-modal-nav next w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Official Documentation Link */}
              <a
                id="skillModalWebsiteLink"
                href={currentSkill.docUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all active:scale-95 shadow-md cursor-pointer select-none"
              >
                <span>{currentSkill.docLabel}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
