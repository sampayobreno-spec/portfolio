import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
import { getPortfolioCase } from "@/lib/portfolioCases";
import styles from "./EditorialShell.module.css";

export function FeaturedCaseCard({ copy, lang = "en", headingLevel = "h3" }) {
  const project = getPortfolioCase("relay", lang);
  const Heading = headingLevel;
  const alt = lang === "fr"
    ? "Interface réelle du prototype Relay : file de quatre exceptions de commande avec itinéraire, responsable, preuves, échéance et état. Toutes les données sont synthétiques."
    : "Actual Relay prototype interface: four order exceptions with route, owner, evidence, deadline and state. All records are synthetic.";

  return (
    <>
      <Reveal as="article" className={styles.projectCard} delay={80} aria-labelledby="featured-project-title">
        <figure className={styles.projectMedia}>
          <Image
            className={styles.projectScreenshot}
            src="/images/relay/relay-exception-index.png"
            width={1816}
            height={784}
            sizes="(max-width: 700px) calc(100vw - 80px), (max-width: 960px) 55vw, 58vw"
            alt={alt}
          />
          <figcaption>{copy.stageCaption}</figcaption>
        </figure>

        <div className={styles.projectCopy}>
          <p className={styles.projectMeta}>{copy.meta}</p>
          <Heading className={styles.projectHeading} id="featured-project-title">
            {copy.projectTitle}<br />
            <span>{copy.projectTitleEmphasis}</span>
          </Heading>
          <p className={styles.projectDescription}>{copy.description}</p>
          <dl className={styles.projectFacts}>
            {copy.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <Link href={project.href} className={styles.projectLink}>
            <span>{copy.cta}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Reveal>
      <p className={styles.studyNote}>{copy.note}</p>
    </>
  );
}
