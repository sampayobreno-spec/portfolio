import { WorkContent } from "@/components/site/WorkContent";

export const metadata = {
  title: "Projets — Décisions produit et preuves",
  description: "Découvrez Relay, un prototype indépendant de design produit avec une interface fonctionnelle, des décisions documentées et des questions à valider.",
  alternates: { canonical: "/fr/work", languages: { "en-CA": "/work", "fr-CA": "/fr/work" } },
};

export default function FrenchWorkPage() {
  return <WorkContent lang="fr" />;
}
