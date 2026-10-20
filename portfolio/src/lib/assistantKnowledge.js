// Knowledge base for Breno Sampaio's Assistant
// Grounded strictly in authentic portfolio data: background, projects, skills, contact and philosophy.

export const SYSTEM_KNOWLEDGE = `
You are the interactive portfolio assistant for Breno Sampaio.
Your goal is to answer questions from recruiters, hiring managers, and design peers accurately, warmly, and professionally.
You also help visitors navigate to specific pages and sections, understand how Breno operates, and download resources.
You must NEVER invent facts, metrics, fake clients, or unverified claims.

PROFILE SUMMARY:
- Name: Breno Sampaio
- Role: Product Designer & Frontend Prototyper (grounded in Multilingual Operations)
- Location: Valencia, Spain (GMT+2)
- Target: Product Design & Design Engineering / Prototyping roles across Europe and remote teams.
- Core philosophy: "I make complex work easier to navigate."
- Languages:
  * Portuguese: Native
  * Spanish: Fluent
  * French: Professional / Fluent
  * English: Professional working

WAY OF WORKING / PHILOSOPHY / HOW HE OPERATES:
- Rooted in 8 years of multilingual frontline operations in France and Spain.
- 3 core tenets:
  1. Separate evidence from assumption: Start with real people and technical constraints; distinguish verified observations from untested guesses.
  2. Prototype where the doubt lives: Build in React/Next.js to stress-test real states, edge cases, error handling, and accessibility (mockups hide failure paths).
  3. Care for the handover: Record decisions, data contracts, and trade-offs so design and engineering align without friction.

KEY CASE STUDIES & PAGES:
1. RELAY (/work/relay):
   - Flagship research prototype for airline crew disruption & multi-party schedule exception handling.
   - Built in React/Next.js with semantic queues, source-labelled evidence, synthetic data disclosures, and audit trails.
2. TRIAGE AI (/work/triageai):
   - Multilingual support intake workflow with mandatory human-in-the-loop review.
3. SERVICE OPERATIONS (/work/service-operations):
   - Incident tracking and escalation workflow ensuring clean handoffs.
4. SYSTEMS LAB (/labs):
   - Micro-experiments examining table patterns, accessible forms, and design tokens.
5. ABOUT PAGE (/about):
   - Full story of transition from frontline operations to product design and prototyping.
6. CONTACT SECTION (#contact):
   - Email: sampayobreno@gmail.com, LinkedIn, GitHub, downloadable resume.
`;

const INTENTS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "olá", "ola", "oi", "bom dia", "boa tarde", "bonjour", "salut", "coucou", "hola"],
    en: "Hello! I am Breno's interactive assistant. I can help you navigate to any page, understand how Breno works, explore his case studies (like Relay), or get in touch. How can I help you?",
    fr: "Bonjour ! Je suis l'assistant interactif de Breno. Je peux vous orienter vers une page spécifique, vous expliquer sa façon de travailler, vous présenter ses études de cas (comme Relay) ou vous aider à le contacter. Comment puis-je vous aider ?",
    pt: "Olá! Sou o assistente interativo do Breno. Posso te levar para qualquer página ou seção, explicar como o Breno trabalha e pensa, apresentar seus cases (como o Relay), ou te colocar em contato com ele. Como posso te ajudar?",
    actions: {
      en: [
        { label: "How Breno works", href: "#approach", type: "anchor" },
        { label: "Explore Relay case study", href: "/work/relay", type: "navigate" },
        { label: "Get in touch", href: "#contact", type: "anchor" }
      ],
      fr: [
        { label: "Sa démarche de travail", href: "#approach", type: "anchor" },
        { label: "Découvrir le projet Relay", href: "/fr/work/relay", type: "navigate" },
        { label: "Contacter Breno", href: "#contact", type: "anchor" }
      ],
      pt: [
        { label: "Como o Breno trabalha", href: "#approach", type: "anchor" },
        { label: "Ver case Relay", href: "/work/relay", type: "navigate" },
        { label: "Entrar em contato", href: "#contact", type: "anchor" }
      ]
    }
  },
  {
    id: "approach",
    keywords: [
      "how you work", "how do you work", "way of working", "como você trabalha", "como voce trabalha",
      "como funciona", "como você funciona", "como voce funciona", "como pensa", "pensamento",
      "mindset", "método", "metodologia", "processo", "approach", "comment travaillez-vous",
      "comment vous travaillez", "methode", "démarche", "demarche", "philosophie", "filosofia"
    ],
    en: "Breno's design philosophy is forged by **8 years in frontline multilingual operations**. He approaches complex products through 3 core commitments:\n\n1. **Separate evidence from assumption**: Start with real people and workflow bottlenecks. Keep verified evidence distinct from hypotheses that still need testing.\n2. **Prototype where the doubt lives**: Don't rely solely on static Figma mockups. He builds functional prototypes in React/Next.js to stress-test real states, edge cases, error recovery, and true accessibility.\n3. **Care for the handover**: Document trade-offs, state logic, and system limits so engineering and product teams move forward with zero loss of context.",
    fr: "La méthode de Breno s'appuie sur **8 ans d'opérations multilingues** et repose sur 3 engagements fondamentaux :\n\n1. **Séparer les faits des suppositions** : Partir du terrain et des contraintes réelles, en distinguant ce qui est observé de ce qu'il reste à valider.\n2. **Prototyper là où réside le doute** : Dépasser les maquettes statiques en codant en React/Next.js pour éprouver les cas limites, les états d'erreur et l'accessibilité réelle.\n3. **Soigner le passage de relais** : Documenter les décisions et compromis pour que design et ingénierie avancent sans friction.",
    pt: "O modo de pensar e trabalhar do Breno nasceu de **8 anos na linha de frente de operações multilíngues**. Ele aborda produtos complexos através de 3 pilares:\n\n1. **Separar fatos de suposições**: Começar nos problemas e fluxos reais, distinguindo o que é evidência comprovada do que ainda é hipótese.\n2. **Prototipar onde mora a dúvida**: Não depender apenas de telas estáticas no Figma. Ele constrói protótipos funcionais em React/Next.js para testar estados vazios, falhas e acessibilidade que mockups escondem.\n3. **Cuidar da passagem de bastão (handoff)**: Documentar trade-offs, fluxos e contratos de dados para que design e desenvolvimento trabalhem sem ruído.",
    actions: {
      en: [
        { label: "Jump to 'Way of Working' section", href: "#approach", type: "anchor" },
        { label: "See Capabilities Explorer", href: "#capabilities", type: "anchor" }
      ],
      fr: [
        { label: "Voir la section 'Ma démarche'", href: "#approach", type: "anchor" },
        { label: "Explorer les compétences", href: "#capabilities", type: "anchor" }
      ],
      pt: [
        { label: "Ir para seção 'Como trabalho'", href: "#approach", type: "anchor" },
        { label: "Ver mapa de competências", href: "#capabilities", type: "anchor" }
      ]
    }
  },
  {
    id: "navigation",
    keywords: [
      "ir para", "ir pra", "levar para", "navegar", "abrir pagina", "abrir página", "mostrar",
      "go to", "jump to", "open page", "navigate to", "teleport", "aller à", "aller a", "ouvrir", "page", "seção", "secao"
    ],
    en: "Here are direct shortcuts to teleport to any page or section across the portfolio:",
    fr: "Voici les raccourcis directs pour accéder à n'importe quelle section ou page du portfolio :",
    pt: "Aqui estão os atalhos diretos para você ir para qualquer página ou seção do portfólio:",
    actions: {
      en: [
        { label: "Relay Prototype", href: "/work/relay", type: "navigate" },
        { label: "Way of Working", href: "#approach", type: "anchor" },
        { label: "About & Background", href: "/about", type: "navigate" },
        { label: "Contact Form", href: "#contact", type: "anchor" },
        { label: "Download Resume", href: "/breno-sampaio-resume-en.pdf", type: "download" }
      ],
      fr: [
        { label: "Prototype Relay", href: "/fr/work/relay", type: "navigate" },
        { label: "Ma démarche", href: "#approach", type: "anchor" },
        { label: "À propos", href: "/fr/about", type: "navigate" },
        { label: "Formulaire de contact", href: "#contact", type: "anchor" },
        { label: "Télécharger le CV", href: "/breno-sampaio-resume-en.pdf", type: "download" }
      ],
      pt: [
        { label: "Case Relay", href: "/work/relay", type: "navigate" },
        { label: "Como Trabalho (Approach)", href: "#approach", type: "anchor" },
        { label: "Sobre o Breno", href: "/about", type: "navigate" },
        { label: "Formulário de Contato", href: "#contact", type: "anchor" },
        { label: "Baixar Currículo", href: "/breno-sampaio-resume-en.pdf", type: "download" }
      ]
    }
  },
  {
    id: "relay",
    keywords: ["relay", "airline", "exception", "case study", "case", "projeto", "projet"],
    en: "**Relay** is Breno's flagship research prototype for multi-party exception handling. It addresses the reality where orders, fulfillment, and carrier systems disagree. Instead of another passive dashboard, Relay frames the work around the next defensible decision with semantic queues, explicit permissions, source-labelled evidence, and an auditable closure log. It is built as a working React/Next.js prototype with synthetic data.",
    fr: "**Relay** est le prototype de recherche phare de Breno pour la gestion des exceptions opérationnelles. Il répond aux situations où les données de commande, de transport et de service client divergent. Relay organise le travail autour de la prochaine décision défendable avec des files d'attente sémantiques, des preuves sourcées et une piste d'audit complète. C'est un prototype fonctionnel en React/Next.js utilisant des données synthétiques.",
    pt: "O **Relay** é o principal case de protótipo de pesquisa do Breno para resolução de exceções operacionais complexas. Quando sistemas de pedidos, transporte e suporte entram em desacordo, o Relay substitui dashboards passivos por um fluxo guiado para a próxima decisão segura — com filas semânticas, dados sintéticos transparentes, permissões claras e histórico de auditoria. Ele foi totalmente prototipado em React/Next.js.",
    actions: {
      en: [
        { label: "Open Relay Prototype", href: "/work/relay", type: "navigate" },
        { label: "Browse all work", href: "/work", type: "navigate" }
      ],
      fr: [
        { label: "Ouvrir l'étude Relay", href: "/fr/work/relay", type: "navigate" },
        { label: "Voir tous les projets", href: "/fr/work", type: "navigate" }
      ],
      pt: [
        { label: "Abrir case Relay", href: "/work/relay", type: "navigate" },
        { label: "Ver todos os projetos", href: "/work", type: "navigate" }
      ]
    }
  },
  {
    id: "triage",
    keywords: ["triage", "triageai", "ai", "intake", "support triage", "ia", "inteligencia"],
    en: "**TriageAI** is an operational support concept designed for multilingual environments (handling PT, ES, FR, and EN in a unified queue). Its foundational rule is **human-in-the-loop**: no automated response is sent without operator review. It scores routing confidence explicitly, and turns missing details into actionable tasks instead of dead ends.",
    fr: "**TriageAI** est un concept opérationnel de tri des demandes d'assistance en environnement multilingue (PT, ES, FR, EN). Son principe cardinal est l'approbation humaine préalable : aucune réponse sortante n'est envoyée sans validation par un agent. Les scores de confiance sont explicites et les informations manquantes deviennent des tâches concrètes.",
    pt: "O **TriageAI** é um conceito operacional para triagem de suporte multilíngue (atendendo PT, ES, FR e EN em uma única fila). Sua regra de ouro é o **human-in-the-loop**: nenhuma resposta automatizada sai sem aprovação de um operador humano. Ele trabalha com regras transparentes de confiança e transforma informações faltantes em tarefas acionáveis.",
    actions: {
      en: [{ label: "View TriageAI case", href: "/work/triageai", type: "navigate" }],
      fr: [{ label: "Voir le cas TriageAI", href: "/fr/work/triageai", type: "navigate" }],
      pt: [{ label: "Ver case TriageAI", href: "/work/triageai", type: "navigate" }]
    }
  },
  {
    id: "background",
    keywords: ["background", "who is", "who are", "about", "bio", "experience", "historia", "sobre", "experiencia", "parcours", "qui est"],
    en: "Breno spent **8 years in frontline multilingual operations** before focusing on Product Design and Frontend Prototyping. Living through broken handoffs, missing context, and ambiguous ownership gives him a distinct advantage: he designs systems that hold up under real operational pressure. Based in Valencia, Spain, he combines systems thinking, interaction design, and React prototyping.",
    fr: "Breno a passé **8 ans au cœur d'opérations multilingues** avant de se concentrer sur le Product Design et le prototypage frontend. Avoir vécu directement les ruptures de service et l'ambiguïté des responsabilités lui confère un point de vue unique : concevoir des interfaces fiables sous forte contrainte opérationnelle. Basé à Valence (Espagne), il allie design de systèmes et code React.",
    pt: "O Breno trabalhou por **8 anos na linha de frente de operações multilíngues** antes de se aprofundar em Product Design e prototipagem frontend. Vivenciar gargalos reais de atendimento, dados desencontrados e falta de clareza de responsabilidade deu a ele uma perspectiva prática: projetar interfaces funcionais que resistem à complexidade real do dia a dia. Ele mora em Valência, Espanha, e combina design de sistemas com prototipagem em React.",
    actions: {
      en: [
        { label: "Read full About story", href: "/about", type: "navigate" },
        { label: "Jump to About section", href: "#about", type: "anchor" }
      ],
      fr: [
        { label: "Lire la présentation complète", href: "/fr/about", type: "navigate" },
        { label: "Aller à la section À propos", href: "#about", type: "anchor" }
      ],
      pt: [
        { label: "Ver história completa", href: "/about", type: "navigate" },
        { label: "Ir para seção Sobre", href: "#about", type: "anchor" }
      ]
    }
  },
  {
    id: "skills",
    keywords: ["skills", "stack", "tools", "technologies", "tech", "react", "next", "css", "figma", "habilidades", "ferramentas", "competences"],
    en: "Breno's skillset bridges **Product Design & Engineering Prototyping**:\n\n• **Design**: Interaction design, UI design systems & design tokens, accessible patterns (WCAG 2.1 AA), information architecture.\n• **Frontend / Code**: React 19, Next.js 16 (App Router), Modern CSS, HTML, JavaScript, Git, Vitest, Playwright.\n• **Product & Ops**: Workflow mapping, edge case scoping, operational empathy, multilingual communication.",
    fr: "L'expertise de Breno relie le **Product Design et le prototypage d'ingénierie** :\n\n• **Design** : Design d'interaction, systèmes UI & tokens, accessibilité (WCAG 2.1 AA), architecture de l'information.\n• **Frontend / Code** : React 19, Next.js 16, CSS moderne, HTML, JavaScript, Git, Vitest, Playwright.\n• **Produit & Opérations** : Cartographie des flux, gestion des cas limites (edge cases), communication multilingue.",
    pt: "As competências do Breno unem **Product Design e Prototipagem Funcional**:\n\n• **Design**: Design de interação, sistemas de UI e design tokens, acessibilidade (WCAG 2.1 AA), arquitetura de informação.\n• **Código / Frontend**: React 19, Next.js 16 (App Router), CSS Moderno, HTML semântico, JavaScript, Git, Vitest, Playwright.\n• **Produto e Operações**: Mapeamento de fluxos, análise de edge cases, empatia operacional e alinhamento entre times.",
    actions: {
      en: [
        { label: "Explore Capabilities Map", href: "#capabilities", type: "anchor" },
        { label: "Systems Lab preview", href: "/labs", type: "navigate" }
      ],
      fr: [
        { label: "Explorer les compétences", href: "#capabilities", type: "anchor" },
        { label: "Laboratoire systèmes", href: "/fr/labs", type: "navigate" }
      ],
      pt: [
        { label: "Ver mapa de competências", href: "#capabilities", type: "anchor" },
        { label: "Ver laboratório de sistemas", href: "/labs", type: "navigate" }
      ]
    }
  },
  {
    id: "languages",
    keywords: ["language", "languages", "idioma", "idiomas", "linguas", "français", "ingles", "english", "portugues", "espanol", "langues"],
    en: "Breno is genuinely multilingual across 4 languages:\n\n• **Portuguese**: Native\n• **Spanish**: Fluent\n• **French**: Professional / Fluent\n• **English**: Professional working\n\nThis multilingual capability comes from years of international operations and allows him to design products naturally suited for localization and international teams.",
    fr: "Breno maîtrise 4 langues professionnelles :\n\n• **Portugais** : Langue maternelle\n• **Espagnol** : Courant\n• **Français** : Professionnel / Courant\n• **Anglais** : Professionnel de travail\n\nCette expérience multilingue est issue d'années d'opérations internationales et enrichit directement son approche de l'internationalisation logicielle.",
    pt: "O Breno é fluente em 4 idiomas:\n\n• **Português**: Nativo\n• **Espanhol**: Fluente\n• **Francês**: Profissional / Fluente\n• **Inglês**: Profissional de trabalho\n\nEssa vivência multilíngue veio de anos em operações internacionais e se reflete diretamente na facilidade de desenhar produtos para audiências globais."
  },
  {
    id: "contact",
    keywords: ["contact", "hire", "email", "linkedin", "github", "talk", "contato", "contratar", "falar", "message", "recruteur", "recruiter"],
    en: "You can reach Breno directly via:\n\n• **Email**: sampayobreno@gmail.com\n• **LinkedIn**: linkedin.com/in/brenosampaio\n• **GitHub**: github.com/sampayobreno-spec\n\nHe is located in **Valencia, Spain** and is open to Product Design and Prototyping roles across Europe and remote teams.",
    fr: "Vous pouvez contacter Breno directement par :\n\n• **Courriel** : sampayobreno@gmail.com\n• **LinkedIn** : linkedin.com/in/brenosampaio\n• **GitHub** : github.com/sampayobreno-spec\n\nIl réside à **Valence en Espagne** et est ouvert aux opportunités en Product Design et prototypage en Europe ou à distance.",
    pt: "Você pode falar com o Breno diretamente pelos canais:\n\n• **E-mail**: sampayobreno@gmail.com\n• **LinkedIn**: linkedin.com/in/brenosampaio\n• **GitHub**: github.com/sampayobreno-spec\n\nEle mora em **Valência, Espanha** e está disponível para vagas e projetos de Product Design e Prototipagem na Europa e em regime remoto.",
    actions: {
      en: [
        { label: "Go to Contact Form", href: "#contact", type: "anchor" },
        { label: "Send Email directly", href: "mailto:sampayobreno@gmail.com", type: "external" },
        { label: "View LinkedIn", href: "https://www.linkedin.com/in/brenosampaio", type: "external" }
      ],
      fr: [
        { label: "Aller au formulaire de contact", href: "#contact", type: "anchor" },
        { label: "Envoyer un e-mail", href: "mailto:sampayobreno@gmail.com", type: "external" },
        { label: "Voir LinkedIn", href: "https://www.linkedin.com/in/brenosampaio", type: "external" }
      ],
      pt: [
        { label: "Ir para formulário de contato", href: "#contact", type: "anchor" },
        { label: "Enviar e-mail direto", href: "mailto:sampayobreno@gmail.com", type: "external" },
        { label: "Ver LinkedIn", href: "https://www.linkedin.com/in/brenosampaio", type: "external" }
      ]
    }
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "curriculo", "curriculum"],
    en: "You can download Breno's résumé directly using the button below (available in English and French PDF).",
    fr: "Vous pouvez télécharger le CV de Breno directement via le bouton ci-dessous (format PDF).",
    pt: "Você pode baixar o currículo do Breno diretamente pelo botão abaixo (em formato PDF):",
    actions: {
      en: [{ label: "Download Resume (PDF)", href: "/breno-sampaio-resume-en.pdf", type: "download" }],
      fr: [{ label: "Télécharger le CV (PDF)", href: "/breno-sampaio-resume-en.pdf", type: "download" }],
      pt: [{ label: "Baixar Currículo (PDF)", href: "/breno-sampaio-resume-en.pdf", type: "download" }]
    }
  }
];

export function detectQueryLanguage(text, defaultLang = "en") {
  const lower = (text || "").toLowerCase();
  const ptWords = ["como", "qual", "quais", "onde", "quem", "você", "voce", "sobre", "projetos", "falar", "ajudar", "ola", "olá", "trabalho", "ir", "pra", "para", "levar"];
  const frWords = ["comment", "quel", "quelle", "quels", "où", "qui", "vous", "sur", "projets", "aider", "bonjour", "salut", "travail", "aller", "ouvrir"];
  const esWords = ["cómo", "como", "cuál", "cuales", "dónde", "quién", "sobre", "proyectos", "ayudar", "hola", "trabajo", "ir"];

  let ptScore = 0;
  let frScore = 0;
  let esScore = 0;

  ptWords.forEach(w => { if (lower.includes(w)) ptScore++; });
  frWords.forEach(w => { if (lower.includes(w)) frScore++; });
  esWords.forEach(w => { if (lower.includes(w)) esScore++; });

  if (ptScore > 0 && ptScore >= frScore && ptScore >= esScore) return "pt";
  if (frScore > 0 && frScore >= ptScore && frScore >= esScore) return "fr";
  if (esScore > 0) return "es";
  return defaultLang;
}

export function getAssistantKnowledgeResult(query, lang = "en") {
  const clean = (query || "").trim();
  if (!clean) {
    if (lang === "fr") {
      return {
        reply: "Posez-moi n'importe quelle question sur le parcours, la démarche ou les projets de Breno !",
        actions: []
      };
    }
    if (lang === "pt") {
      return {
        reply: "Pergunte qualquer coisa sobre a trajetória, a metodologia de trabalho ou os projetos do Breno!",
        actions: []
      };
    }
    return {
      reply: "Ask me anything about Breno's background, way of working, or design projects!",
      actions: []
    };
  }

  const detectedLang = detectQueryLanguage(clean, lang);
  const targetLang = ["fr", "pt", "es"].includes(detectedLang) ? (detectedLang === "es" ? "pt" : detectedLang) : lang;
  const lower = clean.toLowerCase();

  for (const item of INTENTS) {
    const match = item.keywords.some((k) => lower.includes(k));
    if (match) {
      const actionsForLang = item.actions ? (item.actions[targetLang] || item.actions[lang] || item.actions.en || []) : [];
      return {
        reply: item[targetLang] || item[lang] || item.en,
        actions: actionsForLang
      };
    }
  }

  if (targetLang === "fr") {
    return {
      reply: `Breno est un **Product Designer** basé à Valence, en Espagne, avec 8 ans d'expérience en opérations multilingues. Il conçoit des interfaces et prototypes clairs pour des workflows complexes.\n\nVous pouvez me demander sa **façon de travailler**, ses **projets (Relay)**, ou me demander de vous **orienter vers une page**.`,
      actions: [
        { label: "Sa démarche de travail", href: "#approach", type: "anchor" },
        { label: "Projet Relay", href: "/fr/work/relay", type: "navigate" },
        { label: "Contacter Breno", href: "#contact", type: "anchor" }
      ]
    };
  }
  if (targetLang === "pt") {
    return {
      reply: `O Breno é um **Product Designer** baseado em Valência, Espanha, com 8 anos de experiência em operações multilíngues. Ele transforma fluxos operacionais complexos em produtos claros e protótipos funcionais.\n\nVocê pode me perguntar sobre **como ele trabalha**, seus **projetos (como o Relay)**, ou pedir para eu te **levar a qualquer página do site**.`,
      actions: [
        { label: "Como o Breno trabalha", href: "#approach", type: "anchor" },
        { label: "Ver case Relay", href: "/work/relay", type: "navigate" },
        { label: "Formulário de Contato", href: "#contact", type: "anchor" }
      ]
    };
  }

  return {
    reply: `Breno is a **Product Designer** based in Valencia, Spain, with 8 years of background in multilingual operations. He turns complex workflows into accessible products and working prototypes.\n\nFeel free to ask about his **way of working**, his **case studies (Relay)**, or ask me to **teleport to any section**!`,
    actions: [
      { label: "How Breno works", href: "#approach", type: "anchor" },
      { label: "Relay case study", href: "/work/relay", type: "navigate" },
      { label: "Contact Breno", href: "#contact", type: "anchor" }
    ]
  };
}

export function getCuratedAssistantResponse(query, lang = "en") {
  return getAssistantKnowledgeResult(query, lang).reply;
}
