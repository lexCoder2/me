export const es = {
  nav: {
    about: "Acerca de",
    experience: "Experiencia",
    skills: "Habilidades",
    contact: "Contacto",
    blog: "Blog",
    toggleMenu: "Abrir menú",
    toggleTheme: "Cambiar tema",
  },
  hero: {
    badge: "Disponible",
    greeting: "Hola, soy",
    role: "Desarrollador Senior Full-Stack",
    tagline:
      "Construyo experiencias web rápidas, seguras y eficientes — y me encanta cada parte del proceso.",
    statsYears: "años",
    cta: {
      contact: "Contáctame",
      blog: "Leer el blog",
      resume: "Descargar CV",
    },
    scrollLabel: "Desplazarse a la sección Acerca de",
  },
  about: {
    label: "Sobre mí",
    title: "Un poco de contexto",
    p1: `Ingeniero Full-Stack Senior con más de 10 años de experiencia construyendo aplicaciones web escalables, APIs REST y sistemas nativos en la nube en sectores como fintech, salud y empresarial. Usando <strong>React</strong>, <strong>Angular</strong>, <strong>Node.js</strong> y <strong>Python</strong>, he trabajado en todo el stack — desde diseño de bases de datos hasta infraestructura en la nube con <strong>Azure</strong> y <strong>AWS</strong>.`,
    p2: `En los últimos años me he especializado en IA generativa: diseñando flujos de trabajo con LLMs seguros y listos para producción, construyendo servidores MCP y orquestando sistemas multi-agente. Me importa mucho la calidad del código, la seguridad y entregar soluciones que realmente funcionan en el mundo real.`,
    p3: `Prospero en equipos multifuncionales, valoro la comunicación clara y me preocupa profundamente la seguridad, la calidad del código y entregar software que genuinamente funciona a escala.`,
    labels: {
      location: "Ubicación",
      email: "Correo",
      education: "Educación",
    },
    meta: {
      location: "Cuauhtémoc, Ciudad de México, MX",
      email: "hi@iarodriguez.com",
      education: "Ingeniería de Software — IPN, ESIME",
    },
  },
  experience: {
    label: "Historial laboral",
    title: "Experiencia",
    clientProjects: "Proyectos de clientes",
    stackLabel: "Stack tecnológico",
    kunai: {
      highlights: [
        "Ingeniero senior en proyectos altamente regulados y seguros para instituciones financieras, liderando equipos multifuncionales para entregar software de alta calidad.",
        "Integré flujos de trabajo y automatizaciones impulsadas por IA en herramientas internas, reduciendo procesos manuales.",
      ],
      projects: {
        capitalOne: {
          desc: "Lideré el desarrollo de una plataforma interna para automatizar el cumplimiento de seguridad y la entrega de software en toda la organización de ingeniería, reduciendo los ciclos de revisión manual y mejorando los estándares de implementación.",
        },
        pwc: {
          desc: "Arquitecto principal de un sistema de automatización de investigación y portafolio impulsado por IA; implementé pipelines RAG y agentes dirigidos por LLM para generar informes de análisis de clientes basados en datos.",
        },
      },
    },
    wizeline: {
      highlights: [
        "Trabajé en múltiples proyectos para clientes en América del Norte como desarrollador y consultor, entregando soluciones full-stack y mejoras arquitectónicas en plataformas cloud y móviles.",
      ],
      projects: {
        google: {
          desc: "Desarrollé y optimicé pipelines de procesamiento de datos distribuido en Python y Java usando Apache Beam en Google Cloud Dataflow, manejando flujos de eventos a gran escala.",
        },
        baz: {
          desc: "Construí funcionalidades full-stack para una super-app fintech de alto tráfico (BAZ) usando React y Node.js, sirviendo a millones de usuarios en México.",
        },
        awr: {
          desc: "Diseñé e implementé un sistema escalable de venta de planes con Angular y Node.js, integrando APIs de pago y CRM de terceros.",
        },
      },
    },
    purpura: {
      highlights: [
        "Desarrollador líder responsable de todos los proyectos de clientes y sus arquitecturas.",
        "Creé guías de código y lideré reuniones de equipo y gestión de tareas.",
        "Construí aplicaciones web con Angular 4+, Vue.js, y aplicaciones móviles con Ionic.",
        "Diseñé y construí APIs REST con Node.js y Laravel; diseño de bases de datos con MongoDB y MySQL.",
      ],
      projects: {},
    },
    creatima: {
      highlights: [
        "Mantuve sistemas legados construidos con PHP Laravel y desarrollé nuevas SPAs.",
        "Entregué sitios web personalizados con UI/UX y reportes de bases de datos personalizados por cliente.",
        "Construí aplicaciones web con Angular 2+ y Laravel; sitios web con HTML5, CSS3 y JavaScript.",
      ],
      projects: {},
    },
  },
  education: {
    label: "Formación académica",
    title: "Educación",
    school: "Instituto Politécnico Nacional",
    faculty: "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME)",
    degree: "Ing. Electrónica y Comunicaciones",
    specialty: "Especialidad en Ingeniería de Software",
  },
  skills: {
    label: "Con qué trabajo",
    title: "Habilidades",
    advancedNote: "Dominio avanzado",
    categories: {
      Frameworks: "Frameworks",
      Languages: "Lenguajes",
      "AI / ML": "IA / ML",
      "Cloud & DevOps": "Nube y DevOps",
      Databases: "Bases de datos",
      "Process & Leadership": "Proceso y Liderazgo",
    } as Record<string, string>,
  },
  projects: {
    label: "Código abierto",
    title: "Proyectos en GitHub",
    filterAll: "Todos",
    filterAi: "IA / MCP",
    filterWeb: "Apps Web",
    filterTools: "Herramientas",
    viewAll: "Ver todos los repositorios en GitHub",
    featured: "Destacado",
    starsLabel: "estrellas",
    descriptions: {
      "lxDIG-MCP":
        "Servidor MCP con Grafo de Inteligencia Dinámica (DIG) para agentes de IA. Grafo de conocimiento de código persistente con recuperación híbrida Graph + Vector + BM25, memoria de agente, coordinación multi-agente y selección de pruebas por impacto. Compatible con Claude Code, VS Code Copilot y Cursor.",
      "lxDIG-visual":
        "Explorador interactivo de grafos de código y herramienta de visualización de bases de código para la plataforma lxDIG. Renderiza grafos de dependencias, capas de arquitectura y aristas de llamadas como un canvas navegable en vivo.",
      "touch-grass-js":
        "Un divertido recordatorio de CLI para que los desarrolladores salgan y toquen pasto. Instalable como comando npx o extensión de VS Code con arte ASCII y consejos de bienestar.",
      POSDic:
        "Sistema de Punto de Venta con diccionario de productos integrado y gestión de inventario. Construido con TypeScript y un stack moderno para operaciones de retail en tiempo real.",
      camtrack:
        "Aplicación de seguimiento de cámaras construida con TypeScript. Proporciona capacidades de rastreo y monitoreo de dispositivos en tiempo real.",
      "concepto-shop":
        "Plataforma de comercio electrónico completa con catálogo de productos, carrito, pago y panel de administración. Construida con PHP y un front-end moderno.",
      "tiendadic + tiendaApi":
        "Aplicación de tienda full-stack con front-end separado (tiendadic) y REST API (tiendaApi). Ambos construidos con TypeScript, siguiendo principios de arquitectura limpia.",
      "angular-referenec-template-extention":
        "Extensión de VS Code que provee autocompletado de referencias de plantillas Angular y ayudantes de fragmentos, publicada en el marketplace.",
    } as Record<string, string>,
  },
  contact: {
    label: "Hablemos",
    title: "Ponte en contacto",
    intro:
      "Abierto a nuevas oportunidades, colaboraciones y conversaciones interesantes. La mejor forma de contactarme es por correo electrónico — respondo con prontitud.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@correo.com",
      messagePlaceholder: "¿En qué estás pensando?",
      submit: "Enviar mensaje",
    },
    items: {
      email: "Correo",
      phone: "Teléfono",
      github: "GitHub",
      linkedin: "LinkedIn",
      location: "Ubicación",
    },
  },
  blog: {
    label: "Escritura",
    title: "Blog",
    intro:
      "Notas, opiniones y análisis profundos de más de 10 años en el stack. Escribo sobre lo que realmente estoy construyendo — no sobre lo que suena bien en teoría.",
    readPost: "Leer artículo",
    noPosts: "Aún no hay publicaciones. Vuelve pronto.",
    backLink: "← Todos los artículos",
  },
  footer: {
    builtWith: "Construido con",
  },
  meta: {
    description:
      "Irwin Rodriguez — Desarrollador Senior Full-Stack con más de 10 años de experiencia en React, Angular, Node.js, Python, flujos de trabajo con IA/LLM e infraestructura en la nube.",
    blogDescription:
      "Artículos sobre desarrollo full-stack, ingeniería de IA/LLM, sistemas distribuidos y lecciones de trabajar con algunos de los equipos tecnológicos más grandes del mundo.",
    homeTitle: "Irwin Rodriguez — Desarrollador Senior Full-Stack",
  },
};
