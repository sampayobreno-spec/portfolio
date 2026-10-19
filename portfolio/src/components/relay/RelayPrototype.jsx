"use client";

import { useMemo, useState } from "react";
import styles from "./RelayPrototype.module.css";
import {
  RELAY_ROLES,
  RELAY_STATES,
  applyRelayAction,
  getPrioritizedCases,
  getVisibleActions,
  relaySyntheticCases,
} from "@/lib/relayPrototype";

const actors = {
  [RELAY_ROLES.specialist]: { role: RELAY_ROLES.specialist, name: "Mira" },
  [RELAY_ROLES.operationsLead]: { role: RELAY_ROLES.operationsLead, name: "Noa" },
  [RELAY_ROLES.complianceReviewer]: { role: RELAY_ROLES.complianceReviewer, name: "Elise" },
  [RELAY_ROLES.manager]: { role: RELAY_ROLES.manager, name: "Jonas" },
};

const copy = {
  en: {
    eyebrow: "Relay · Operational prototype",
    heading: "Exception index",
    description: "Decisions are ordered by deadline risk, evidence and authority — not by arrival time alone.",
    disclosure: "All records in this prototype are synthetic. No customer or company data is used.",
    view: "Saved view",
    views: { all: "All active", overdue: "Overdue", blocked: "Approval required", resolved: "Resolved" },
    result: (count) => `${count} ${count === 1 ? "exception" : "exceptions"}`,
    columns: ["Exception", "Route", "Owner", "Evidence", "SLA", "State"],
    selected: "Selected exception",
    unassigned: "Unassigned",
    evidence: "evidence",
    role: "Viewing as",
    roles: {
      [RELAY_ROLES.specialist]: "Support specialist",
      [RELAY_ROLES.operationsLead]: "Operations lead",
      [RELAY_ROLES.complianceReviewer]: "Compliance reviewer",
      [RELAY_ROLES.manager]: "Manager",
    },
    state: {
      [RELAY_STATES.open]: "Open",
      [RELAY_STATES.investigating]: "Investigating",
      [RELAY_STATES.assigned]: "Assigned",
      [RELAY_STATES.escalated]: "Escalated",
      [RELAY_STATES.blocked]: "Approval required",
      [RELAY_STATES.resolved]: "Resolved",
      [RELAY_STATES.closed]: "Closed",
    },
    fields: { owner: "Owner", status: "Current state", completeness: "Evidence completeness", route: "Route" },
    evidenceLedger: "Evidence ledger",
    resolution: "Resolution",
    resolutions: {
      "request-carrier-update": "Request carrier update",
      replacement: "Send replacement",
      refund: "Refund",
    },
    actions: {
      assign: "Assign to me",
      escalate: "Escalate for review",
      submit: "Submit resolution",
      approve: "Approve refund",
      reject: "Reject refund",
      close: "Close exception",
    },
    approvalNote: "Only a manager can approve this refund.",
    audit: {
      "resolution-approved": (detail) => `Resolution approved: ${detail}`,
      "resolution-rejected": (detail) => `Resolution rejected: ${detail}`,
    },
    loading: "Loading exceptions",
    empty: "No exceptions match this view",
    error: "Exceptions could not be loaded",
    retry: "The prototype is showing a controlled error state. No external service was contacted.",
  },
  fr: {
    eyebrow: "Relay · Prototype opérationnel",
    heading: "Index des exceptions",
    description: "Les décisions sont ordonnées selon le risque d’échéance, les preuves et l’autorité — pas seulement selon l’heure d’arrivée.",
    disclosure: "Tous les dossiers de ce prototype sont synthétiques. Aucune donnée client ou entreprise n’est utilisée.",
    view: "Vue enregistrée",
    views: { all: "Toutes les exceptions actives", overdue: "En retard", blocked: "Approbation requise", resolved: "Résolues" },
    result: (count) => `${count} ${count === 1 ? "exception" : "exceptions"}`,
    columns: ["Exception", "Trajet", "Responsable", "Preuves", "Échéance", "État"],
    selected: "Exception sélectionnée",
    unassigned: "Non attribué",
    evidence: "preuves",
    role: "Vue en tant que",
    roles: {
      [RELAY_ROLES.specialist]: "Spécialiste support",
      [RELAY_ROLES.operationsLead]: "Responsable opérations",
      [RELAY_ROLES.complianceReviewer]: "Responsable conformité",
      [RELAY_ROLES.manager]: "Manager",
    },
    state: {
      [RELAY_STATES.open]: "Ouverte",
      [RELAY_STATES.investigating]: "En cours d’analyse",
      [RELAY_STATES.assigned]: "Attribuée",
      [RELAY_STATES.escalated]: "Transmise",
      [RELAY_STATES.blocked]: "Approbation requise",
      [RELAY_STATES.resolved]: "Résolue",
      [RELAY_STATES.closed]: "Clôturée",
    },
    fields: { owner: "Responsable", status: "État actuel", completeness: "Complétude des preuves", route: "Trajet" },
    evidenceLedger: "Journal des preuves",
    resolution: "Résolution",
    resolutions: {
      "request-carrier-update": "Demander une mise à jour au transporteur",
      replacement: "Envoyer un remplacement",
      refund: "Remboursement",
    },
    actions: {
      assign: "Me l’attribuer",
      escalate: "Transmettre pour examen",
      submit: "Soumettre la résolution",
      approve: "Approuver le remboursement",
      reject: "Refuser le remboursement",
      close: "Clôturer l’exception",
    },
    approvalNote: "Seul un manager peut approuver ce remboursement.",
    audit: {
      "resolution-approved": (detail) => `Résolution approuvée : ${detail}`,
      "resolution-rejected": (detail) => `Résolution refusée : ${detail}`,
    },
    loading: "Chargement des exceptions",
    empty: "Aucune exception ne correspond à cette vue",
    error: "Impossible de charger les exceptions",
    retry: "Le prototype présente un état d’erreur contrôlé. Aucun service externe n’a été contacté.",
  },
};

const localizedTitles = {
  fr: {
    "SYN-REL-2401": "La promesse de livraison est dépassée sans mise à jour du transporteur",
    "SYN-REL-2402": "L’expédition de remplacement nécessite un responsable confirmé",
    "SYN-REL-2403": "La proposition de remboursement dépasse l’autorité du spécialiste",
    "SYN-REL-2404": "Les preuves du transporteur sont réconciliées et la réponse client est prête",
  },
};

const localizedSla = {
  fr: {
    "SYN-REL-2401": "En retard de 3 h",
    "SYN-REL-2402": "Échéance dans 2 h",
    "SYN-REL-2403": "Échéance aujourd’hui",
    "SYN-REL-2404": "Dans le délai",
  },
};

function titleFor(exception, lang) {
  return localizedTitles[lang]?.[exception.id] || exception.title;
}

function slaFor(exception, lang) {
  return localizedSla[lang]?.[exception.id] || exception.sla.label;
}

function auditDetailFor(entry, t) {
  return t.audit[entry.action]?.(entry.detail) || entry.detail;
}

function filterCases(exceptions, view) {
  if (view === "overdue") return exceptions.filter(({ sla }) => sla.overdue);
  if (view === "blocked") return exceptions.filter(({ state }) => state === RELAY_STATES.blocked);
  if (view === "resolved") return exceptions.filter(({ state }) => state === RELAY_STATES.resolved);
  return exceptions.filter(({ state }) => state !== RELAY_STATES.closed);
}

function SystemState({ title, body }) {
  return (
    <div className={styles.systemState} role="status">
      <p>{title}</p>
      {body ? <span>{body}</span> : null}
    </div>
  );
}

export function RelayPrototype({
  lang = "en",
  initialRole = RELAY_ROLES.specialist,
  initialCaseId = "SYN-REL-2401",
  initialState = "ready",
}) {
  const locale = lang === "fr" ? "fr" : "en";
  const t = copy[locale];
  const [view, setView] = useState("all");
  const [selectedId, setSelectedId] = useState(initialCaseId);
  const [exceptions, setExceptions] = useState(() => relaySyntheticCases.map((exception) => ({
    ...exception,
    audit: exception.audit.map((entry) => ({ ...entry })),
  })));
  const [resolution, setResolution] = useState("request-carrier-update");
  const prioritized = useMemo(() => getPrioritizedCases(exceptions), [exceptions]);
  const visibleCases = useMemo(() => filterCases(prioritized, view), [prioritized, view]);
  const selectedInAllCases = prioritized.find(({ id }) => id === selectedId);
  const selected = selectedInAllCases?.state === RELAY_STATES.closed
    ? selectedInAllCases
    : visibleCases.find(({ id }) => id === selectedId) || visibleCases[0] || null;
  const actor = actors[initialRole];
  const visibleActions = getVisibleActions(initialRole, selected);

  const choose = (exception) => setSelectedId(exception.id);
  const chooseWithKeyboard = (event, exception) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      choose(exception);
    }
  };

  const applyAction = (action) => {
    if (!selected) return;
    const updated = applyRelayAction(selected, action, actor);
    setExceptions((current) => current.map((exception) => (
      exception.id === updated.id ? updated : exception
    )));
  };

  return (
    <section
      className={styles.prototype}
      data-testid="relay-prototype"
      data-role={initialRole}
      style={{ minWidth: 0 }}
      aria-labelledby="relay-index-title"
    >
      <header className={styles.header}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{t.eyebrow}</p>
          <h2 id="relay-index-title">{t.heading}</h2>
          <p className={styles.description}>{t.description}</p>
        </div>
        <p className={styles.role}><span>{t.role}</span>{t.roles[initialRole]}</p>
      </header>

      <p className={styles.disclosure}>{t.disclosure}</p>

      <div className={styles.controls}>
        <label>
          <span>{t.view}</span>
          <select value={view} onChange={(event) => setView(event.target.value)}>
            {Object.entries(t.views).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <output aria-live="polite">{t.result(visibleCases.length)}</output>
      </div>

      {initialState === "loading" ? <SystemState title={t.loading} /> : null}
      {initialState === "empty" ? <SystemState title={t.empty} /> : null}
      {initialState === "error" ? <SystemState title={t.error} body={t.retry} /> : null}

      {initialState === "ready" && visibleCases.length > 0 ? (
        <>
          <div className={styles.tableWrap}>
            <table className={styles.table} aria-label={locale === "fr" ? "Exceptions de commande" : "Order exceptions"}>
              <thead>
                <tr>{t.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr>
              </thead>
              <tbody>
                {visibleCases.map((exception) => (
                  <tr
                    key={exception.id}
                    data-state={exception.state}
                    data-priority={exception.priority}
                    aria-current={selected?.id === exception.id ? "true" : undefined}
                  >
                    <td data-label={t.columns[0]}>
                      <button
                        type="button"
                        className={styles.caseButton}
                        onClick={() => choose(exception)}
                        onKeyDown={(event) => chooseWithKeyboard(event, exception)}
                      >
                        <span>{titleFor(exception, locale)}</span>
                        <small>{exception.id}</small>
                      </button>
                    </td>
                    <td data-label={t.columns[1]}>{exception.market}</td>
                    <td data-label={t.columns[2]}>{exception.owner || t.unassigned}</td>
                    <td data-label={t.columns[3]}>{exception.evidence.available}/{exception.evidence.required} {t.evidence}</td>
                    <td data-label={t.columns[4]} className={exception.sla.overdue ? styles.urgent : undefined}>{slaFor(exception, locale)}</td>
                    <td data-label={t.columns[5]}>{t.state[exception.state]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selected ? (
            <section className={styles.dossier} aria-label={t.selected} aria-live="polite">
              <div className={styles.dossierTitle}>
                <p>{t.selected}</p>
                <h3>{titleFor(selected, locale)}</h3>
              </div>
              <dl className={styles.facts}>
                <div><dt>{t.fields.status}</dt><dd>{t.state[selected.state]}</dd></div>
                <div><dt>{t.fields.owner}</dt><dd>{selected.owner || t.unassigned}</dd></div>
                <div><dt>{t.fields.completeness}</dt><dd>{selected.evidence.completeness}%</dd></div>
                <div><dt>{t.fields.route}</dt><dd>{selected.market}</dd></div>
              </dl>

              <div className={styles.evidenceLedger}>
                <h4>{t.evidenceLedger}</h4>
                <ol>
                  {selected.audit.map((entry) => (
                    <li key={`${entry.at}-${entry.action}`}>
                      <time dateTime={entry.at}>{entry.at.slice(11, 16)}</time>
                      <span>{auditDetailFor(entry, t)}</span>
                      <small>{entry.actor}</small>
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.actions} aria-label={locale === "fr" ? "Actions disponibles" : "Available actions"}>
                {visibleActions.includes("assign") ? (
                  <button type="button" onClick={() => applyAction({ type: "assign", assignee: actor.name })}>
                    {t.actions.assign}
                  </button>
                ) : null}
                {visibleActions.includes("escalate") ? (
                  <button type="button" onClick={() => applyAction({ type: "escalate", reason: "Evidence conflict requires review" })}>
                    {t.actions.escalate}
                  </button>
                ) : null}
                {visibleActions.includes("propose-resolution") ? (
                  <div className={styles.resolutionControl}>
                    <label htmlFor={`relay-resolution-${selected.id}`}>{t.resolution}</label>
                    <select
                      id={`relay-resolution-${selected.id}`}
                      value={resolution}
                      onChange={(event) => setResolution(event.target.value)}
                    >
                      {Object.entries(t.resolutions).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => applyAction({
                        type: "propose-resolution",
                        resolution,
                        sensitive: resolution === "refund",
                      })}
                    >
                      {t.actions.submit}
                    </button>
                  </div>
                ) : null}
                {visibleActions.includes("view-approval") ? <p className={styles.authorityNote}>{t.approvalNote}</p> : null}
                {visibleActions.includes("approve") ? (
                  <button type="button" onClick={() => applyAction({ type: "approve" })}>{t.actions.approve}</button>
                ) : null}
                {visibleActions.includes("reject") ? (
                  <button type="button" onClick={() => applyAction({ type: "reject", reason: "Refund needs revised evidence" })}>{t.actions.reject}</button>
                ) : null}
                {visibleActions.includes("close") ? (
                  <button type="button" onClick={() => applyAction({ type: "close" })}>{t.actions.close}</button>
                ) : null}
              </div>
            </section>
          ) : null}
        </>
      ) : null}
    </section>
  );
}
