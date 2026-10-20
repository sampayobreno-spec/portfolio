import { describe, it, expect } from "vitest";
import {
  getAssistantKnowledgeResult,
  getCuratedAssistantResponse,
  detectQueryLanguage,
  SYSTEM_KNOWLEDGE
} from "../../src/lib/assistantKnowledge";

describe("assistantKnowledge base and intelligence", () => {
  it("includes rich theoretical foundations in SYSTEM_KNOWLEDGE", () => {
    expect(SYSTEM_KNOWLEDGE).toContain("STEVE JOBS & APPLE HIG");
    expect(SYSTEM_KNOWLEDGE).toContain("DIETER RAMS (10 PRINCIPLES FOR GOOD DESIGN)");
    expect(SYSTEM_KNOWLEDGE).toContain("DON NORMAN & COGNITIVE PSYCHOLOGY");
    expect(SYSTEM_KNOWLEDGE).toContain("JAKOB NIELSEN'S 10 USABILITY HEURISTICS & UX LAWS");
    expect(SYSTEM_KNOWLEDGE).toContain("DESIGN ENGINEERING & FUNCTIONAL PROTOTYPING");
  });

  it("detects languages accurately from user input", () => {
    expect(detectQueryLanguage("o que você acha do steve jobs?")).toBe("pt");
    expect(detectQueryLanguage("what is your design philosophy?")).toBe("en");
    expect(detectQueryLanguage("quelle est ta vision du design chez apple ?")).toBe("fr");
    expect(detectQueryLanguage("¿cuál es tu opinión sobre dieter rams y steve jobs?")).toBe("es");
  });

  it("answers Steve Jobs & Apple HIG inquiries in first person across languages", () => {
    const ptResult = getAssistantKnowledgeResult("O que você acha do Steve Jobs e da Apple?");
    expect(ptResult.reply).toContain("Steve Jobs");
    expect(ptResult.reply).toContain("Apple");
    expect(ptResult.reply).toMatch(/eu |minha |meu /i);
    expect(ptResult.actions.length).toBeGreaterThan(0);

    const enResult = getAssistantKnowledgeResult("What are the key Apple HIG principles?");
    expect(enResult.reply).toContain("Human Interface Guidelines");
    expect(enResult.reply).toContain("Clarity");

    const frResult = getAssistantKnowledgeResult("Que penses-tu de Steve Jobs et des Human Interface Guidelines ?");
    expect(frResult.reply).toContain("Steve Jobs");
    expect(frResult.reply).toContain("Human Interface Guidelines");

    const esResult = getAssistantKnowledgeResult("¿Cómo aplicas las reglas de Steve Jobs y Apple HIG?");
    expect(esResult.reply).toContain("Steve Jobs");
    expect(esResult.reply).toContain("Human Interface Guidelines");
  });

  it("answers UX heuristics & laws inquiries (Nielsen, Don Norman, UX Laws)", () => {
    const ptResult = getAssistantKnowledgeResult("Quais leis de ux e heurísticas de nielsen você usa?");
    expect(ptResult.reply).toContain("Jakob Nielsen");
    expect(ptResult.reply).toContain("Don Norman");
    expect(ptResult.reply).toContain("Fitts");

    const enResult = getAssistantKnowledgeResult("Explain your view on Nielsen heuristics and Don Norman affordances");
    expect(enResult.reply).toContain("Jakob Nielsen");
    expect(enResult.reply).toContain("Don Norman");
  });

  it("answers Dieter Rams principles inquiries", () => {
    const ptResult = getAssistantKnowledgeResult("O que você aprendeu com Dieter Rams?");
    expect(ptResult.reply).toContain("Dieter Rams");
    expect(ptResult.reply).toContain("Weniger, aber besser");

    const enResult = getAssistantKnowledgeResult("How does Dieter Rams influence your enterprise UX?");
    expect(enResult.reply).toContain("Dieter Rams");
    expect(enResult.reply).toContain("Less, but better");
  });

  it("answers Design Engineering and functional prototyping questions", () => {
    const ptResult = getAssistantKnowledgeResult("Por que ser Design Engineer e prototipar em código?");
    expect(ptResult.reply).toContain("Design Engineer");
    expect(ptResult.reply).toContain("React 19");
    expect(ptResult.reply).toContain("Figma");

    const enResult = getAssistantKnowledgeResult("Why should product designers build functional prototypes in React?");
    expect(enResult.reply).toContain("Design Engineer");
    expect(enResult.reply).toContain("Figma");
  });

  it("answers Accessibility (WCAG 2.1 AA) and inclusive ergonomics questions", () => {
    const ptResult = getAssistantKnowledgeResult("Como você aborda acessibilidade e WCAG?");
    expect(ptResult.reply).toContain("WCAG 2.1 AA");
    expect(ptResult.reply).toContain("Teclado");

    const enResult = getAssistantKnowledgeResult("How do you ensure accessibility and WCAG compliance?");
    expect(enResult.reply).toContain("WCAG 2.1 AA");
    expect(enResult.reply).toContain("Keyboard");
  });

  it("answers Design Systems and design tokens questions", () => {
    const ptResult = getAssistantKnowledgeResult("Como você estrutura design tokens e design system?");
    expect(ptResult.reply).toContain("Design System");
    expect(ptResult.reply).toContain("Tokens Globais");
    expect(ptResult.reply).toContain("Atomic Design");

    const enResult = getAssistantKnowledgeResult("Explain your architecture for design systems and tokens");
    expect(enResult.reply).toContain("Design System");
    expect(enResult.reply).toContain("Atomic Design");
  });

  it("answers Cognitive load and mental models questions", () => {
    const ptResult = getAssistantKnowledgeResult("Como você reduz a carga cognitiva em fluxos complexos?");
    expect(ptResult.reply).toContain("Carga Extrínseca");
    expect(ptResult.reply).toContain("Progressive Disclosure");

    const enResult = getAssistantKnowledgeResult("How do you minimize cognitive friction in complex interfaces?");
    expect(enResult.reply).toContain("Extraneous Load");
    expect(enResult.reply).toContain("Progressive Disclosure");
  });

  it("avoids substring trap (e.g. 'apple hig' should not trigger greeting 'hi')", () => {
    const result = getAssistantKnowledgeResult("apple hig rules");
    expect(result.reply).toContain("Human Interface Guidelines");
    expect(result.reply).not.toContain("I'm Breno, a Product Designer");
  });

  it("answers 'quais principios voce gosta mais' with core principles rather than generic greeting", () => {
    const result = getAssistantKnowledgeResult("quais principios voce gosta mais");
    expect(result.reply).not.toContain("Sou o Breno, **Product Designer & Frontend Prototyper** baseado em Valência, Espanha, com 8 anos de estrada em operações multilíngues.");
    expect(result.reply).toContain("Dieter Rams");
    expect(result.reply).toContain("Apple HIG");
    expect(result.reply).toContain("Don Norman");
  });

  it("synthesizes thoughtful answers for open-ended questions without falling back to robotic greeting", () => {
    const result = getAssistantKnowledgeResult("o que você acha da evolução do design moderno?");
    expect(result.reply).not.toContain("Sou o Breno, **Product Designer & Frontend Prototyper** baseado em Valência, Espanha, com 8 anos de estrada em operações multilíngues.");
    expect(result.reply).toContain("Product Designer & Frontend Prototyper");
    expect(result.reply).toContain("React 19");
  });

  it("getCuratedAssistantResponse returns clean reply string", () => {
    const reply = getCuratedAssistantResponse("What is your approach to design?");
    expect(typeof reply).toBe("string");
    expect(reply.length).toBeGreaterThan(50);
  });
});
