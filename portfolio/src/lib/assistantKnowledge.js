// Knowledge base for Breno Sampaio's Spotlight Dialogue
// First-person authentic voice: sharp, formal yet relaxed, disruptive, pragmatic, non-robotic.

export const SYSTEM_KNOWLEDGE = `
You are Breno Sampaio, speaking directly in the first person ("I", "me", "my" / "eu", "meu", "minha" / "je", "moi", "mon").
You are NOT an assistant, secretary, or bot. You ARE Breno Sampaio talking directly with a visitor, recruiter, or fellow designer.
Your tone is confident, thoughtful, articulate, pragmatic, and conversational—never robotic, never corporate-fluffy, never third-person.

WHO YOU ARE:
- Product Designer & Frontend Prototyper based in Valencia, Spain (GMT+2).
- You make complex systems easier to navigate by uniting product design with working React prototypes.
- 8 years of frontline multilingual operations across France and Spain (Moontels, Travelodge, Accor Group in Rennes) before going all-in on Product Design and Prototyping.
- Multilingual: Portuguese (Native), Spanish (Fluent), French (Fluent/Professional), English (Professional working).

YOUR CORE PHILOSOPHY / HOW YOU WORK (3 COMMITMENTS):
1. Separate evidence from assumptions: Start in the operational trenches with real workflow bottlenecks. Keep verified facts strictly distinct from unverified hypotheses.
2. Prototype where the doubt lives: Don't settle for static Figma screens that conceal edge cases and failure paths. Build functional prototypes in React/Next.js to stress-test error recovery, missing states, and real WCAG accessibility.
3. Care for the handover: Document trade-offs, state logic, and data contracts so engineering and product teams move forward with zero ambiguity.

YOUR KEY PROJECTS:
- RELAY (/work/relay): Your flagship research prototype for airline disruption and multi-party schedule exception handling. Built in React/Next.js with semantic queues, source-labelled evidence, and an auditable closure log.
- TRIAGE AI (/work/triageai): Operational intake workflow for multilingual support. Key rule: human-in-the-loop (no automated response goes out without operator sign-off).
- SERVICE OPERATIONS (/work/service-operations): Incident and discrepancy escalation workflow preventing lost handoffs.
- SYSTEMS LAB (/labs): Interactive micro-experiments exploring table patterns, accessible forms, and design tokens.
- ABOUT PAGE (/about): Full story of your transition from frontline operations to product design and prototyping.
- CONTACT (#contact): Direct contact via email (sampayobreno@gmail.com) and LinkedIn. Open to Product Design & Prototyping roles across Europe and remote teams.
`;

const INTENTS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "olá", "ola", "oi", "bom dia", "boa tarde", "bonjour", "salut", "coucou", "hola"],
    en: "Hey! I'm Breno. No automated secretary or third-person corporate talk here: this is directly how I think, build, and approach complex systems. Want to see how I work, dig into the Relay prototype, or talk about an opportunity?",
    fr: "Salut ! Je suis Breno. Pas de bot impersonnel ni de discours corporate ici : tout ce qui est dans ce portfolio reflète directement ma façon de penser, de prototyper et de résoudre des problèmes concrets. Tu veux comprendre ma démarche, voir le prototype Relay ou échanger sur une opportunité ?",
    pt: "E aí! Sou o Breno. Não tem robô nem intermediário aqui: tudo o que tá neste portfólio reflete diretamente como eu penso, desenho e resolvo bucha de verdade em produto. Quer entender minha metodologia de trabalho, ver o protótipo do Relay ou trocar uma ideia sobre alguma vaga ou projeto?",
    actions: {
      en: [
        { label: "How I work", href: "#approach", type: "anchor" },
        { label: "Relay Prototype", href: "/work/relay", type: "navigate" },
        { label: "Let's talk", href: "#contact", type: "anchor" }
      ],
      fr: [
        { label: "Ma démarche", href: "#approach", type: "anchor" },
        { label: "Prototype Relay", href: "/fr/work/relay", type: "navigate" },
        { label: "Me contacter", href: "#contact", type: "anchor" }
      ],
      pt: [
        { label: "Como eu trabalho", href: "#approach", type: "anchor" },
        { label: "Ver case Relay", href: "/work/relay", type: "navigate" },
        { label: "Bora conversar", href: "#contact", type: "anchor" }
      ]
    },
    followUps: {
      en: ["How do you work? (Way of Working)", "Tell me about Relay case study", "What are your core skills?"],
      fr: ["Comment travailles-tu ? (Démarche)", "Parle-moi du projet Relay", "Quelles sont tes compétences ?"],
      pt: ["Como você trabalha? (Way of Working)", "Conte sobre o case Relay", "Quais são suas principais habilidades?"]
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
    en: "My mindset was forged by **8 years in frontline multilingual operations** across France and Spain. I've lived through the mess created when design stops at polished Figma mockups that fall apart at the first real system exception. I approach complex products through 3 core commitments:\n\n1. **Separate evidence from assumptions**: I start with real operational bottlenecks, keeping verified facts strictly distinct from untested guesses.\n2. **Prototype where the doubt lives**: I don't rely only on static frames. I build working prototypes in React/Next.js to stress-test error recovery, missing states, and real WCAG accessibility before engineers write production code.\n3. **Care for the handover**: I document trade-offs, state logic, and data contracts so design and engineering build together with zero ambiguity.",
    fr: "Ma vision s'est forgée au fil de **8 ans sur le terrain en opérations multilingues** en France et en Espagne. J'ai vu ce qui se passe quand le design se limite à de jolies maquettes Figma qui s'effondrent dès la première exception de système. Ma démarche repose sur 3 piliers :\n\n1. **Distinguer les faits des suppositions** : Je pars des points de friction réels et des contraintes opérationnelles, en isolant les preuves vérifiées des simples hypothèses.\n2. **Prototyper là où réside le doute** : Je ne me fie pas aux écrans figés. Je code des prototypes fonctionnels en React/Next.js pour éprouver les cas limites, les états d'erreur et l'accessibilité réelle.\n3. **Soigner le passage de relais** : Je documente les arbitrages et la logique d'état pour que design et ingénierie avancent sans perte de contexte.",
    pt: "Meu jeito de pensar e trabalhar foi forjado em **8 anos na linha de frente de operações multilíngues** na França e na Espanha. Eu vi de perto o que acontece quando o design vive apenas em mockups bonitinhos no Figma que quebram na primeira exceção de sistema. Minha abordagem é baseada em 3 compromissos:\n\n1. **Separar fatos de achismos**: Começo nas dores reais das pessoas e nas restrições operacionais, separando o que é evidência comprovada do que ainda é hipótese.\n2. **Prototipar onde mora a dúvida**: Não confio apenas em telas estáticas. Eu construo protótipos funcionais em React/Next.js para testar na prática estados vazios, falhas de rede, limites do sistema e acessibilidade real.\n3. **Cuidar da passagem de bastão (handoff)**: Documento decisões, trade-offs e fluxos para que design e engenharia falem a mesma língua, sem atrito e sem retrabalho.",
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
    },
    followUps: {
      en: ["How did 8 years in ops shape your design?", "Tell me about the Relay case study", "How can I contact Breno?"],
      fr: ["Comment vos 8 ans en opérations influencent votre design ?", "Parle-moi du projet Relay", "Comment te contacter ?"],
      pt: ["Como os 8 anos em operações influenciam seu design?", "Me conta sobre o case Relay", "Como entrar em contato com você?"]
    }
  },
  {
    id: "navigation",
    keywords: [
      "ir para", "ir pra", "levar para", "navegar", "abrir pagina", "abrir página", "mostrar",
      "go to", "jump to", "open page", "navigate to", "teleport", "aller à", "aller a", "ouvrir", "page", "seção", "secao"
    ],
    en: "Here are direct shortcuts to teleport to any section of my portfolio without friction:",
    fr: "Voici les raccourcis directs pour accéder directement à n'importe quelle section de mon portfolio :",
    pt: "Aqui estão os atalhos diretos para você ir para qualquer parte do meu portfólio sem rodeios:",
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
        { label: "Télécharger mon CV", href: "/breno-sampaio-resume-en.pdf", type: "download" }
      ],
      pt: [
        { label: "Case Relay", href: "/work/relay", type: "navigate" },
        { label: "Como Trabalho (Approach)", href: "#approach", type: "anchor" },
        { label: "Sobre Mim", href: "/about", type: "navigate" },
        { label: "Formulário de Contato", href: "#contact", type: "anchor" },
        { label: "Baixar Currículo", href: "/breno-sampaio-resume-en.pdf", type: "download" }
      ]
    },
    followUps: {
      en: ["Tell me about Relay case study", "Explain your Way of Working", "Download resume (PDF)"],
      fr: ["Parle-moi de l'étude Relay", "Quelle est ta démarche ?", "Télécharger le CV"],
      pt: ["Conte sobre o case Relay", "Como você trabalha?", "Baixar currículo em PDF"]
    }
  },
  {
    id: "relay",
    keywords: ["relay", "airline", "exception", "case study", "case", "projeto", "projet"],
    en: "**Relay** is my flagship research prototype for multi-party exception handling. It tackles the painful reality where orders, fulfillment, and carrier systems disagree. Instead of slapping together another passive dashboard full of meaningless charts, I framed the product around the **next defensible decision**—with semantic queues, source-labelled evidence, synthetic data disclosures, and an auditable closure log. It's a real working React/Next.js prototype you can interact with right now.",
    fr: "**Relay** est mon prototype de recherche phare pour la résolution d'exceptions opérationnelles. Quand les systèmes de commande, de transport et de service client divergent, plutôt que d'ajouter un énième tableau de bord passif, j'ai structuré le produit autour de la **prochaine décision défendable** — avec des files d'attente sémantiques, des preuves sourcées et une piste d'audit complète. C'est un vrai prototype fonctionnel en React/Next.js.",
    pt: "O **Relay** é o meu protótipo de pesquisa principal. Desenhei ele para resolver uma dor clássica e brutal: quando sistemas de pedidos, centros de distribuição e transportadoras discordam e ninguém sabe qual é a próxima decisão segura. Em vez de criar outro dashboard passivo cheio de métricas vazias, estruturei o produto em torno da **próxima decisão defensável** — com filas semânticas, dados sintéticos transparentes, permissões explícitas e log de auditoria completo. E sim: é um protótipo funcional em React/Next.js que você pode testar agora.",
    actions: {
      en: [
        { label: "Open Relay Prototype", href: "/work/relay", type: "navigate" },
        { label: "Browse all work", href: "/work", type: "navigate" }
      ],
      fr: [
        { label: "Ouvrir l'étude Relay", href: "/fr/work/relay", type: "navigate" },
        { label: "Voir tous mes projets", href: "/fr/work", type: "navigate" }
      ],
      pt: [
        { label: "Abrir protótipo do Relay", href: "/work/relay", type: "navigate" },
        { label: "Ver todos os projetos", href: "/work", type: "navigate" }
      ]
    },
    followUps: {
      en: ["How do you use React for prototyping?", "What other projects have you built?", "How do you work with engineers?"],
      fr: ["Comment utilises-tu React pour prototyper ?", "Quels autres projets as-tu réalisés ?", "Comment travailles-tu avec les ingénieurs ?"],
      pt: ["Como você usa React para prototipar?", "Quais outros projetos você construiu?", "Como você trabalha com desenvolvedores?"]
    }
  },
  {
    id: "triage",
    keywords: ["triage", "triageai", "ai", "intake", "support triage", "ia", "inteligencia"],
    en: "**TriageAI** is an operational support concept I designed for multilingual environments (handling PT, ES, FR, and EN in a single queue). My non-negotiable rule here is **human-in-the-loop**: no automated message goes out without operator sign-off. I built clear confidence scoring and turned missing details into actionable next steps instead of dead ends.",
    fr: "**TriageAI** est un concept opérationnel que j'ai conçu pour le tri du support multilingue (PT, ES, FR, EN en file unifiée). Ma règle cardinale est l'**approbation humaine préalable** : aucun message sortant n'est envoyé sans validation par un opérateur. J'ai rendu les scores de confiance transparents et transformé les données manquantes en tâches concrètes.",
    pt: "O **TriageAI** é um conceito operacional que desenhei para triagem de suporte multilíngue (lidando com PT, ES, FR e EN em uma fila unificada). A minha regra inegociável aqui é o **human-in-the-loop**: nenhuma resposta automatizada sai sem aprovação de um operador humano. Eu estruturei o fluxo com pontuações transparentes de confiança e transformo informações incompletas em tarefas claras em vez de becos sem saída.",
    actions: {
      en: [{ label: "View TriageAI case", href: "/work/triageai", type: "navigate" }],
      fr: [{ label: "Voir le cas TriageAI", href: "/fr/work/triageai", type: "navigate" }],
      pt: [{ label: "Ver case TriageAI", href: "/work/triageai", type: "navigate" }]
    },
    followUps: {
      en: ["Tell me about Relay case study", "What is your background?", "How can I contact Breno?"],
      fr: ["Parle-moi de l'étude Relay", "Quel est ton parcours ?", "Comment te contacter ?"],
      pt: ["Conte sobre o case Relay", "Qual é a sua trajetória?", "Como falar com você?"]
    }
  },
  {
    id: "background",
    keywords: ["background", "who is", "who are", "about", "bio", "experience", "historia", "sobre", "experiencia", "parcours", "qui est"],
    en: "I spent **8 years in frontline multilingual operations** (at Moontels, Travelodge, and Accor in Rennes) before focusing on Product Design and Frontend Prototyping. Living through broken handoffs, fragmented records, and operational chaos gave me an edge: I don't design for the imaginary 'happy path'—I design systems that hold up under real pressure. Today I'm based in Valencia, Spain.",
    fr: "J'ai passé **8 ans au cœur d'opérations multilingues** (chez Moontels, Travelodge et dans le groupe Accor à Rennes) avant de me consacrer au Product Design et au prototypage frontend. Avoir vécu au quotidien les ruptures de service et l'ambiguïté des responsabilités m'a appris une chose essentielle : concevoir pour la réalité du terrain et non pour un monde idéal. Je vis aujourd'hui à Valence, en Espagne.",
    pt: "Passei **8 anos na linha de frente de operações multilíngues** (na Moontels, Travelodge e no grupo Accor em Rennes) antes de migrar com foco total para Product Design e prototipagem frontend. Ter vivido na pele a dor de handoffs quebrados, informações desencontradas e suporte caótico me deu uma vantagem que muito designer não tem: eu não projeto pensando só no 'caminho feliz', projeto para sistemas que precisam aguentar a pressão do mundo real. Hoje moro em Valência, Espanha.",
    actions: {
      en: [
        { label: "Read full About story", href: "/about", type: "navigate" },
        { label: "Jump to About section", href: "#about", type: "anchor" }
      ],
      fr: [
        { label: "Lire mon histoire complète", href: "/fr/about", type: "navigate" },
        { label: "Aller à la section À propos", href: "#about", type: "anchor" }
      ],
      pt: [
        { label: "Ver minha história completa", href: "/about", type: "navigate" },
        { label: "Ir para seção Sobre", href: "#about", type: "anchor" }
      ]
    },
    followUps: {
      en: ["Explain your 3-pillar Way of Working", "What are your hard & soft skills?", "Download my resume"],
      fr: ["Explique ta démarche en 3 piliers", "Quelles sont tes compétences clés ?", "Télécharger le CV"],
      pt: ["Como funciona sua metodologia em 3 pilares?", "Quais são suas habilidades técnicas?", "Baixar meu currículo"]
    }
  },
  {
    id: "skills",
    keywords: ["skills", "stack", "tools", "technologies", "tech", "react", "next", "css", "figma", "habilidades", "ferramentas", "competences"],
    en: "My skillset bridges two worlds that often clash: **Product Design & Engineering Prototyping**:\n\n• **Design**: Interaction design, UI systems & design tokens, accessible patterns (WCAG 2.1 AA), information architecture.\n• **Code & Frontend**: React 19, Next.js 16 (App Router), Modern CSS, semantic HTML, JavaScript, Git, automated testing (Vitest/Playwright).\n• **Product & Ops**: Real workflow mapping, edge-case scoping, and zero-loss communication with engineering.",
    fr: "Mon profil fait le pont entre deux mondes : **Product Design et prototypage frontend** :\n\n• **Design** : Design d'interaction, design systems et tokens, accessibilité (WCAG 2.1 AA), architecture de l'information.\n• **Code / Frontend** : React 19, Next.js 16, CSS moderne, HTML sémantique, JavaScript, Git, Vitest, Playwright.\n• **Produit & Opérations** : Cartographie des flux, anticipation des cas limites et collaboration directe avec les développeurs.",
    pt: "Minha atuação une duas pontas que raramente conversam bem: **Product Design e Prototipagem em Código**:\n\n• **Design**: Design de interação, design systems e design tokens, acessibilidade real (WCAG 2.1 AA), arquitetura da informação.\n• **Código / Frontend**: React 19, Next.js 16 (App Router), CSS Moderno, HTML semântico, JavaScript, Git, testes automatizados (Vitest/Playwright).\n• **Produto & Operações**: Mapeamento de fluxos reais, análise profunda de edge cases e comunicação sem ruído com engenharia.",
    actions: {
      en: [
        { label: "Explore Capabilities Map", href: "#capabilities", type: "anchor" },
        { label: "Systems Lab preview", href: "/labs", type: "navigate" }
      ],
      fr: [
        { label: "Explorer mes compétences", href: "#capabilities", type: "anchor" },
        { label: "Laboratoire systèmes", href: "/fr/labs", type: "navigate" }
      ],
      pt: [
        { label: "Ver mapa de competências", href: "#capabilities", type: "anchor" },
        { label: "Ver laboratório de sistemas", href: "/labs", type: "navigate" }
      ]
    },
    followUps: {
      en: ["Tell me about your React & Next.js practice", "Explain your Way of Working", "Download resume (PDF)"],
      fr: ["Parle-moi de ta pratique React & Next.js", "Explique ta démarche de travail", "Télécharger le CV"],
      pt: ["Como é sua prática com React e Next.js?", "Como é o seu modo de trabalhar?", "Baixar currículo em PDF"]
    }
  },
  {
    id: "languages",
    keywords: ["language", "languages", "idioma", "idiomas", "linguas", "français", "ingles", "english", "portugues", "espanol", "langues"],
    en: "I work across **4 languages** fluently:\n\n• **Portuguese**: Native\n• **Spanish**: Fluent\n• **French**: Fluent / Professional\n• **English**: Professional working\n\nThis comes from years of frontline international operations, which helps me design software that naturally accommodates localization and diverse operational cultures.",
    fr: "Je travaille couramment en **4 langues** :\n\n• **Portugais** : Langue maternelle\n• **Espagnol** : Courant\n• **Français** : Courant / Professionnel\n• **Anglais** : Professionnel de travail\n\nCe bagage multilingue est issu d'années sur le terrain et me permet de concevoir des interfaces prêtes pour l'internationalisation.",
    pt: "Falo **4 idiomas** fluentemente no dia a dia profissional:\n\n• **Português**: Nativo\n• **Espanhol**: Fluente\n• **Francês**: Fluente / Profissional\n• **Inglês**: Profissional de trabalho\n\nIsso não é só falar línguas: são anos operando com clientes e times de vários países, o que me faz projetar produtos já preparados para localização e contextos culturais diversos.",
    followUps: {
      en: ["How does multilingual ops impact your UI work?", "Tell me about Relay", "How to contact Breno?"],
      fr: ["Quel impact a le multilingue sur tes interfaces ?", "Parle-moi du projet Relay", "Comment te contacter ?"],
      pt: ["Como o ambiente multilíngue afeta seu design?", "Conte sobre o Relay", "Como entrar em contato?"]
    }
  },
  {
    id: "contact",
    keywords: ["contact", "hire", "email", "linkedin", "github", "talk", "contato", "contratar", "falar", "message", "recruteur", "recruiter"],
    en: "Want to connect directly? No red tape or intermediaries:\n\n• **Email**: sampayobreno@gmail.com\n• **LinkedIn**: linkedin.com/in/brenosampaio\n• **GitHub**: github.com/sampayobreno-spec\n\nI'm based in **Valencia, Spain** and actively open to Product Design and Prototyping roles across Europe or with remote teams.",
    fr: "Envie d'échanger directement ? Pas d'intermédiaire :\n\n• **Courriel** : sampayobreno@gmail.com\n• **LinkedIn** : linkedin.com/in/brenosampaio\n• **GitHub** : github.com/sampayobreno-spec\n\nJe suis basé à **Valence en Espagne** et disponible pour des rôles en Product Design et prototypage en Europe ou à distance.",
    pt: "Bora conversar direto? Não tem burocracia nem intermediário:\n\n• **E-mail**: sampayobreno@gmail.com\n• **LinkedIn**: linkedin.com/in/brenosampaio\n• **GitHub**: github.com/sampayobreno-spec\n\nTô baseado em **Valência, Espanha** e aberto a oportunidades em Product Design e Prototipagem na Europa ou em times remotos.",
    actions: {
      en: [
        { label: "Go to Contact Form", href: "#contact", type: "anchor" },
        { label: "Send Email directly", href: "mailto:sampayobreno@gmail.com", type: "external" },
        { label: "View LinkedIn", href: "https://www.linkedin.com/in/brenosampaio", type: "external" }
      ],
      fr: [
        { label: "Formulaire de contact", href: "#contact", type: "anchor" },
        { label: "M'envoyer un e-mail", href: "mailto:sampayobreno@gmail.com", type: "external" },
        { label: "Mon profil LinkedIn", href: "https://www.linkedin.com/in/brenosampaio", type: "external" }
      ],
      pt: [
        { label: "Ir para formulário de contato", href: "#contact", type: "anchor" },
        { label: "Enviar e-mail direto", href: "mailto:sampayobreno@gmail.com", type: "external" },
        { label: "Ver meu LinkedIn", href: "https://www.linkedin.com/in/brenosampaio", type: "external" }
      ]
    },
    followUps: {
      en: ["What kind of roles are you open to?", "Download my resume", "Explain your Way of Working"],
      fr: ["Quels types de postes recherches-tu ?", "Télécharger mon CV", "Explique ta démarche"],
      pt: ["Que tipo de vagas você está buscando?", "Baixar meu currículo", "Como você trabalha?"]
    }
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "curriculo", "curriculum"],
    en: "You can grab my up-to-date resume in PDF using the button below (focused on Product Design and Prototyping):",
    fr: "Tu peux télécharger mon CV à jour au format PDF via le bouton ci-dessous :",
    pt: "Você pode baixar meu currículo atualizado em PDF clicando no botão abaixo (versão com foco em Product Design e Prototipagem Funcional):",
    actions: {
      en: [{ label: "Download Resume (PDF)", href: "/breno-sampaio-resume-en.pdf", type: "download" }],
      fr: [{ label: "Télécharger mon CV (PDF)", href: "/breno-sampaio-resume-en.pdf", type: "download" }],
      pt: [{ label: "Baixar Currículo (PDF)", href: "/breno-sampaio-resume-en.pdf", type: "download" }]
    },
    followUps: {
      en: ["What are your core skills?", "Tell me about the Relay case", "How to contact you?"],
      fr: ["Quelles sont tes compétences clés ?", "Parle-moi de l'étude Relay", "Comment te contacter ?"],
      pt: ["Quais são suas habilidades principais?", "Conte sobre o case Relay", "Como falar direto com você?"]
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
        reply: "Pose-moi n'importe quelle question sur mon parcours, ma démarche ou mes prototypes !",
        actions: [],
        followUps: []
      };
    }
    if (lang === "pt") {
      return {
        reply: "Me pergunta qualquer coisa sobre minha trajetória, como eu trabalho ou meus projetos!",
        actions: [],
        followUps: []
      };
    }
    return {
      reply: "Ask me anything about my background, how I work, or my design prototypes!",
      actions: [],
      followUps: []
    };
  }

  const detectedLang = detectQueryLanguage(clean, lang);
  const targetLang = ["fr", "pt", "es"].includes(detectedLang) ? (detectedLang === "es" ? "pt" : detectedLang) : lang;
  const lower = clean.toLowerCase();

  for (const item of INTENTS) {
    const match = item.keywords.some((k) => lower.includes(k));
    if (match) {
      const actionsForLang = item.actions ? (item.actions[targetLang] || item.actions[lang] || item.actions.en || []) : [];
      const followUpsForLang = item.followUps ? (item.followUps[targetLang] || item.followUps[lang] || item.followUps.en || []) : [];
      return {
        reply: item[targetLang] || item[lang] || item.en,
        actions: actionsForLang,
        followUps: followUpsForLang
      };
    }
  }

  if (targetLang === "fr") {
    return {
      reply: `Je suis Breno, **Product Designer** basé à Valence, en Espagne, avec 8 ans d'expérience sur le terrain en opérations multilingues. Je transforme les flux complexes en interfaces claires et prototypes fonctionnels en React.\n\nDemande-moi **comment je travaille**, mes **projets (comme Relay)**, ou de t'**orienter vers une section** !`,
      actions: [
        { label: "Ma démarche", href: "#approach", type: "anchor" },
        { label: "Prototype Relay", href: "/fr/work/relay", type: "navigate" },
        { label: "Me contacter", href: "#contact", type: "anchor" }
      ],
      followUps: [
        "Comment travailles-tu ? (Démarche)",
        "Parle-moi de l'étude Relay",
        "Quelles sont tes compétences clés ?"
      ]
    };
  }
  if (targetLang === "pt") {
    return {
      reply: `Sou o Breno, **Product Designer** baseado em Valência, Espanha, com 8 anos de estrada em operações multilíngues. Eu transformo fluxos operacionais complexos em produtos fáceis de navegar e protótipos funcionais em React.\n\nPode me perguntar sobre **como eu trabalho**, meus **cases (como o Relay)**, ou pedir para eu te **levar a qualquer seção**!`,
      actions: [
        { label: "Como eu trabalho", href: "#approach", type: "anchor" },
        { label: "Ver case Relay", href: "/work/relay", type: "navigate" },
        { label: "Bora conversar", href: "#contact", type: "anchor" }
      ],
      followUps: [
        "Como você trabalha? (Way of Working)",
        "Conte sobre o case Relay",
        "Quais são suas principais habilidades?"
      ]
    };
  }

  return {
    reply: `I'm Breno, a **Product Designer** based in Valencia, Spain, with 8 years in frontline operations. I turn messy, complex workflows into clear products and working React prototypes.\n\nAsk me about **how I work**, my **case studies (like Relay)**, or ask me to **jump to any section**!`,
    actions: [
      { label: "How I work", href: "#approach", type: "anchor" },
      { label: "Relay prototype", href: "/work/relay", type: "navigate" },
      { label: "Let's talk", href: "#contact", type: "anchor" }
    ],
    followUps: [
      "How do you work? (Way of Working)",
      "Tell me about Relay case study",
      "What are your core skills?"
    ]
  };
}

export function getCuratedAssistantResponse(query, lang = "en") {
  return getAssistantKnowledgeResult(query, lang).reply;
}
