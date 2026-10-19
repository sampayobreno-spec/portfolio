import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/ds";
import { RelayPrototype } from "@/components/relay/RelayPrototype";
import { CaseHero } from "@/components/site/CaseHero";
import { CaseSection } from "@/components/site/CaseSection";
import { CaseSnapshot } from "@/components/site/CaseSnapshot";
import { getPortfolioCase } from "@/lib/portfolioCases";
import styles from "./RelayCaseContent.module.css";
import editorialStyles from "./EditorialShell.module.css";

const details = {
  en: {
    role: "Role",
    proof: "Working React prototype",
    proofLink: "Explore the working prototype",
    screenshot: "Actual Relay interface. Every order record shown is synthetic.",
    established: "What public documentation establishes",
    assumed: "What the design still assumes",
    workflow: "Decision path modelled in the prototype",
    decisionIntro: "These are design choices in a research prototype, not measured outcomes.",
    choices: [
      { title: "Prioritize by risk rather than arrival time", alternative: "Alternative: a first-in, first-out list.", consequence: "The queue shows deadlines, evidence and authority together. The relative weight of these signals still needs operator testing." },
      { title: "Make ownership and approval explicit", alternative: "Alternative: let any specialist resolve every exception in one step.", consequence: "Sensitive resolutions pause for manager approval and preserve the handover. This adds a step but keeps the authority boundary visible." },
      { title: "Keep a chronological audit trail", alternative: "Alternative: update only the current status.", consequence: "The prototype records assignment and resolution events so the next person can inspect how a case reached its state." },
    ],
    openQuestions: "Questions for participant research",
    sources: "Public sources used for the domain model",
    sourceNote: "These sources describe domain behaviour; they do not validate Relay with users.",
  },
  fr: {
    role: "Rôle",
    proof: "Prototype React fonctionnel",
    proofLink: "Explorer le prototype fonctionnel",
    screenshot: "Interface Relay réelle. Toutes les commandes représentées sont synthétiques.",
    established: "Ce que la documentation publique établit",
    assumed: "Ce que le design suppose encore",
    workflow: "Parcours de décision modélisé dans le prototype",
    workflowSteps: [
      { id: "queue", decision: "Quelle exception traiter d’abord ?", evidence: "Échéance, état opérationnel, risques et responsable actuel." },
      { id: "investigate", decision: "Que s’est-il passé et quelle source est fiable ?", evidence: "Chronologie de commande, paiement, traitement, transport et contact client." },
      { id: "assign", decision: "Qui prend la prochaine action et pour quand ?", evidence: "Rôle, permission, motif de transmission et échéance explicite." },
      { id: "resolve", decision: "Quelle résolution autorisée correspond aux preuves ?", evidence: "Conditions de remplacement, remboursement, réexpédition ou transmission." },
      { id: "approve", decision: "Une décision sensible exige-t-elle une approbation ?", evidence: "Règle de permission, justification et trace d’approbation." },
      { id: "close", decision: "Le dossier est-il complet et vérifiable ?", evidence: "Résultat, communication au client et historique chronologique." },
    ],
    decisionIntro: "Ce sont des choix de design pour un prototype de recherche, pas des résultats mesurés.",
    choices: [
      { title: "Prioriser le risque plutôt que l’ordre d’arrivée", alternative: "Alternative : une liste par ordre d’arrivée.", consequence: "La file rapproche échéances, preuves et autorité. Le poids relatif de ces signaux doit encore être testé avec des opérateurs." },
      { title: "Rendre explicites responsabilité et approbation", alternative: "Alternative : permettre à chaque spécialiste de résoudre toute exception en une étape.", consequence: "Les résolutions sensibles attendent l’approbation d’un responsable et conservent le passage de relais. Une étape s’ajoute, mais la limite d’autorité reste visible." },
      { title: "Conserver un historique chronologique", alternative: "Alternative : ne mettre à jour que l’état actuel.", consequence: "Le prototype consigne attribution et résolution pour permettre de comprendre comment le dossier est arrivé à son état actuel." },
    ],
    openQuestions: "Questions pour la recherche avec participants",
    sources: "Sources publiques utilisées pour le modèle de domaine",
    sourceNote: "Ces sources décrivent le domaine ; elles ne valident pas Relay auprès d’utilisateurs.",
  },
};

export function RelayCaseContent({ lang = "en" }) {
  const fr = lang === "fr";
  const project = getPortfolioCase("relay", lang);
  const copy = details[fr ? "fr" : "en"];

  const snapshot = [
    { label: copy.role, value: project.role },
    { label: "Type", value: fr ? "Produit indépendant / 2026" : project.projectType },
    { label: fr ? "Statut" : "Status", value: project.statusLabel },
    { label: fr ? "Données" : "Data", value: fr ? "Entièrement synthétiques" : "Entirely synthetic" },
    { label: fr ? "Validation" : "Validation", value: project.validationLabel },
    { label: fr ? "Preuve" : "Proof", value: copy.proof },
  ];

  return (
    <article className={editorialStyles.shell}>
      <CaseHero
        backHref={fr ? "/fr/work" : "/work"}
        backLabel={fr ? "Retour aux projets" : "Back to work"}
        tags={[fr ? "Produit indépendant / 2026" : project.projectType, project.statusLabel, fr ? "Données synthétiques" : "Synthetic data"]}
        title={project.title}
        lead={project.summary}
        visual={
          <figure className={styles.heroProof}>
            <Image
              src="/images/relay/relay-exception-index.png"
              width={1816}
              height={784}
              sizes="(max-width: 800px) calc(100vw - 40px), 1000px"
              alt={fr
                ? "File d’exceptions du prototype Relay avec quatre commandes synthétiques, responsables, preuves, échéances et états."
                : "Relay prototype exception queue with four synthetic orders, owners, evidence, deadlines and states."}
            />
            <figcaption>
              <span>{copy.screenshot}</span>
              <Link href="#prototype">{copy.proofLink} <span aria-hidden="true">↗</span></Link>
            </figcaption>
          </figure>
        }
      >
        <CaseSnapshot items={snapshot} />
      </CaseHero>

      {project.sections.map((section, index) => (
        <CaseSection
          key={section.id}
          id={section.id}
          number={`${String(index + 1).padStart(2, "0")} — ${section.title}`}
          heading={section.title}
          label={section.title}
          defaultOpen
        >
          <div className="prose">
            <Text variant="body">{section.body}</Text>
          </div>
          {section.id === "problem" && (
            <div className={styles.evidenceGrid}>
              <div>
                <h3>{copy.established}</h3>
                <ul>{project.researchSummary.verifiedFacts.slice(0, 3).map((fact) => <li key={fact}>{fact}</li>)}</ul>
              </div>
              <div>
                <h3>{copy.assumed}</h3>
                <ul>{project.researchSummary.designAssumptions.slice(0, 3).map((assumption) => <li key={assumption}>{assumption}</li>)}</ul>
              </div>
            </div>
          )}
          {section.id === "workflow" && (
            <div className={styles.detailBlock}>
              <h3>{copy.workflow}</h3>
              <ol className={styles.workflow}>
                {(copy.workflowSteps || project.workflow).map((step) => (
                  <li key={step.id}><strong>{step.decision}</strong><span>{step.evidence}</span></li>
                ))}
              </ol>
            </div>
          )}
          {section.id === "decisions" && (
            <div className={styles.detailBlock}>
              <p>{copy.decisionIntro}</p>
              <div className={styles.decisions}>
                {copy.choices.map((choice) => (
                  <div key={choice.title}>
                    <h3>{choice.title}</h3>
                    <p>{choice.alternative}</p>
                    <p>{choice.consequence}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {section.id === "prototype" && <RelayPrototype lang={lang} />}
          {section.id === "validation" && (
            <div className={styles.evidenceGrid}>
              <div>
                <h3>{copy.openQuestions}</h3>
                <ul>{project.researchSummary.openQuestions.slice(0, 3).map((question) => <li key={question}>{question}</li>)}</ul>
              </div>
              <div>
                <h3>{copy.sources}</h3>
                <ul>{project.researchSources.slice(0, 5).map((source) => (
                  <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.publisher}: {source.title} ↗</a></li>
                ))}</ul>
                <p>{copy.sourceNote}</p>
              </div>
            </div>
          )}
        </CaseSection>
      ))}
    </article>
  );
}
