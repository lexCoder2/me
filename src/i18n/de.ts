export const de = {
  nav: {
    about: 'Über mich',
    experience: 'Erfahrung',
    skills: 'Fähigkeiten',
    contact: 'Kontakt',
    blog: 'Blog',
    toggleMenu: 'Menü öffnen',
    toggleTheme: 'Design wechseln',
  },
  hero: {
    badge: 'Offen für neue Stellen',
    greeting: 'Hallo, ich bin',
    role: 'Senior Full-Stack-Entwickler',
    tagline:
      'Ich baue schnelle, sichere und durchdachte Web-Erlebnisse — und liebe jede Ebene des Stacks.',
    statsYears: 'Jahre',
    cta: {
      contact: 'Kontakt aufnehmen',
      blog: 'Blog lesen',
      resume: 'Lebenslauf herunterladen',
    },
    scrollLabel: 'Zum Über-mich-Abschnitt scrollen',
  },
  about: {
    label: 'Über mich',
    title: 'Ein bisschen Hintergrund',
    p1: `Senior Full-Stack-Ingenieur mit über 10 Jahren Erfahrung in der Entwicklung skalierbarer Webanwendungen, REST-APIs und Cloud-nativer Systeme in den Bereichen Fintech, Gesundheitswesen und Unternehmen. Mit <strong>React</strong>, <strong>Angular</strong>, <strong>Node.js</strong> und <strong>Python</strong> habe ich den gesamten Stack abgedeckt — vom Datenbankdesign bis zur Cloud-Infrastruktur auf <strong>Azure</strong> und <strong>AWS</strong>.`,
    p2: `In den letzten Jahren habe ich mich auf generative KI spezialisiert: sichere, produktionsreife LLM-Workflows entworfen, MCP-Server gebaut und Multi-Agenten-Systeme orchestriert. Mir liegt viel an Codequalität, Sicherheit und daran, Dinge zu liefern, die in der Praxis wirklich funktionieren.`,
    p3: `Ich gedeihe in funktionsübergreifenden Teams, schätze klare Kommunikation und lege großen Wert auf Sicherheit, Codequalität und die Lieferung von Software, die wirklich im großen Maßstab funktioniert.`,
    labels: {
      location: 'Standort',
      email: 'E-Mail',
      education: 'Ausbildung',
    },
    meta: {
      location: 'Cuauhtémoc, Mexiko-Stadt, MX',
      email: 'hi@iarodriguez.com',
      education: 'Software-Engineering — IPN, ESIME',
    },
  },
  experience: {
    label: 'Berufliche Laufbahn',
    title: 'Erfahrung',
    clientProjects: 'Kundenprojekte',
    stackLabel: 'Technologie-Stack',
    kunai: {
      highlights: [
        'Senior-Ingenieur in hochregulierten, sicheren Projekten für Finanzinstitutionen; Leitung funktionsübergreifender Teams zur Lieferung hochwertiger Software.',
        'KI-gestützte Workflows und Automatisierungen in interne Tools integriert und manuelle Prozesse reduziert.',
      ],
      projects: {
        capitalOne: {
          desc: 'Leitete die Entwicklung einer internen Plattform zur Automatisierung der Sicherheits-Compliance und Software-Auslieferung in der gesamten Entwicklungsorganisation, manuelle Review-Zyklen reduziert und Deployment-Standards verbessert.',
        },
        pwc: {
          desc: 'Hauptarchitekt eines KI-gestützten Forschungs- und Portfolio-Automatisierungssystems; implementierte RAG-Pipelines und LLM-gesteuerte Agenten zur Generierung datengetriebener Kundenanalysereports.',
        },
      },
    },
    wizeline: {
      highlights: [
        'Arbeitete an mehreren Projekten für nordamerikanische Kunden als Entwickler und Berater; lieferte Full-Stack-Lösungen und architektonische Verbesserungen für Cloud- und Mobile-Plattformen.',
      ],
      projects: {
        google: {
          desc: 'Entwickelte und optimierte verteilte Datenverarbeitungs-Pipelines in Python und Java mit Apache Beam auf Google Cloud Dataflow zur Verarbeitung großer Event-Streams.',
        },
        baz: {
          desc: 'Entwickelte Full-Stack-Funktionen für eine hochfrequentierte Fintech-Super-App (BAZ) mit React und Node.js für Millionen von Nutzern in Mexiko.',
        },
        awr: {
          desc: 'Entwarf und implementierte ein skalierbares Plan-Verkaufssystem mit Angular und Node.js, integriert mit Drittanbieter-Zahlungs- und CRM-APIs.',
        },
      },
    },
    purpura: {
      highlights: [
        'Leitender Entwickler, verantwortlich für alle Kundenprojekte und deren Architekturen.',
        'Erstellte Code-Richtlinien und leitete Team-Meetings und Aufgabenmanagement.',
        'Entwickelte Web-Apps mit Angular 4+, Vue.js und mobile Apps mit Ionic.',
        'Entwarf und entwickelte REST-APIs mit Node.js und Laravel; Datenbankdesign mit MongoDB und MySQL.',
      ],
      projects: {},
    },
    creatima: {
      highlights: [
        'Wartete Legacy-Systeme auf Basis von PHP Laravel und entwickelte neue SPAs.',
        'Lieferte individuelle UI/UX-Websites und kundenspezifische Datenbankberichte.',
        'Entwickelte Web-Apps mit Angular 2+ und Laravel; Websites mit HTML5, CSS3 und JavaScript.',
      ],
      projects: {},
    },
  },
  education: {
    label: 'Akademischer Hintergrund',
    title: 'Ausbildung',
    school: 'Instituto Politécnico Nacional',
    faculty: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME)',
    degree: 'B.E. Elektronik & Kommunikation',
    specialty: 'Schwerpunkt Software-Engineering',
  },
  skills: {
    label: 'Womit ich arbeite',
    title: 'Fähigkeiten',
    advancedNote: 'Fortgeschrittene Kenntnisse',
    categories: {
      Frameworks: 'Frameworks',
      Languages: 'Sprachen',
      'AI / ML': 'KI / ML',
      'Cloud & DevOps': 'Cloud & DevOps',
      Databases: 'Datenbanken',
      'Process & Leadership': 'Prozess & Führung',
    } as Record<string, string>,
  },
  projects: {
    label: 'Open Source',
    title: 'GitHub-Projekte',
    filterAll: 'Alle',
    filterAi: 'KI / MCP',
    filterWeb: 'Web-Apps',
    filterTools: 'Entwickler-Tools',
    viewAll: 'Alle Repositories auf GitHub anzeigen',
    featured: 'Empfohlen',
    starsLabel: 'Sterne',
    descriptions: {
      'lxDIG-MCP':
        'Dynamic Intelligence Graph (DIG) MCP-Server für KI-Coding-Agenten. Persistenter Code-Wissensgraph mit hybridem Graph + Vector + BM25-Retrieval, Agenten-Speicher, Multi-Agenten-Koordination und auswirkungsbasierter Testauswahl. Kompatibel mit Claude Code, VS Code Copilot und Cursor.',
      'lxDIG-visual':
        'Interaktiver Code-Graph-Explorer und Codebase-Visualisierungswerkzeug für die lxDIG-Plattform. Rendert Abhängigkeitsgraphen, Architekturschichten und Aufrufkanten als navigierbares Live-Canvas.',
      'touch-grass-js':
        'Ein witziger CLI-Hinweis für Entwickler, mal nach draußen zu gehen. Installierbar als npx-Befehl oder VS Code-Erweiterung mit ASCII-Kunst und Wellness-Tipps.',
      POSDic:
        'Kassensystem mit integriertem Produktwörterbuch und Bestandsverwaltung. Entwickelt mit TypeScript und einem modernen Stack für Echtzeit-Einzelhandelsoperationen.',
      camtrack:
        'Kamera-Tracking-Anwendung entwickelt mit TypeScript. Bietet Echtzeit-Geräte-Tracking und -Überwachungsfunktionen.',
      'concepto-shop':
        'Voll ausgestattete E-Commerce-Plattform mit Produktkatalog, Warenkorb, Checkout und Admin-Dashboard. Entwickelt mit PHP und einem modernen Frontend.',
      'tiendadic + tiendaApi':
        'Full-Stack-Shop-Anwendung mit getrenntem Frontend (tiendadic) und REST-API (tiendaApi). Beide mit TypeScript nach Clean-Architecture-Prinzipien entwickelt.',
      'angular-referenec-template-extention':
        'VS Code-Erweiterung für Angular-Template-Referenz-Vervollständigungen und Snippet-Helfer, im Marketplace veröffentlicht.',
    } as Record<string, string>,
  },
  contact: {
    label: 'Lass uns reden',
    title: 'Kontakt aufnehmen',
    intro:
      'Offen für neue Möglichkeiten, Zusammenarbeiten und interessante Gespräche. Der beste Weg, mich zu erreichen, ist per E-Mail — ich antworte zeitnah.',
    form: {
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'ihre@email.de',
      messagePlaceholder: 'Was beschäftigt Sie?',
      submit: 'Nachricht senden',
    },
    items: {
      email: 'E-Mail',
      phone: 'Telefon',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Standort',
    },
  },
  blog: {
    label: 'Artikel',
    title: 'Blog',
    intro:
      'Notizen, Meinungen und Tiefenanalysen aus über 10 Jahren im Stack. Ich schreibe über das, was ich tatsächlich baue — nicht über das, was theoretisch gut klingt.',
    readPost: 'Artikel lesen',
    noPosts: 'Noch keine Beiträge. Schau bald wieder vorbei.',
    backLink: '← Alle Beiträge',
  },
  footer: {
    builtWith: 'Entwickelt mit',
  },
  meta: {
    description:
      'Irwin Rodriguez — Senior Full-Stack-Entwickler mit über 10 Jahren Erfahrung in React, Angular, Node.js, Python, KI/LLM-Workflows und Cloud-Infrastruktur.',
    blogDescription:
      'Artikel über Full-Stack-Entwicklung, KI/LLM-Engineering, verteilte Systeme und Erkenntnisse aus der Arbeit mit einigen der weltweit größten Tech-Teams.',
    homeTitle: 'Irwin Rodriguez — Senior Full-Stack-Entwickler',
  },
};
