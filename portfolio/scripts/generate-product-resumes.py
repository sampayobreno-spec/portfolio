"""Generate the public Product Design CVs from reviewed, factual source copy.

Source facts: the former public CVs, the published Relay research register and
the user's confirmed contact address. Canada support CVs were backed up before
these files were regenerated.
"""

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
pdfmetrics.registerFont(TTFont("DejaVu", str(FONT_DIR / "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("DejaVuBold", str(FONT_DIR / "DejaVuSans-Bold.ttf")))
pdfmetrics.registerFontFamily("DejaVu", normal="DejaVu", bold="DejaVuBold")

INK = colors.HexColor("#222320")
MUTED = colors.HexColor("#595852")
RULE = colors.HexColor("#D5D4CC")
ACCENT = colors.HexColor("#8A5640")

styles = {
    "name": ParagraphStyle("name", fontName="DejaVuBold", fontSize=21, leading=26, textColor=INK, spaceAfter=3),
    "role": ParagraphStyle("role", fontName="DejaVuBold", fontSize=9.1, leading=13, textColor=ACCENT, spaceAfter=8),
    "contact": ParagraphStyle("contact", fontName="DejaVu", fontSize=8.1, leading=12.6, textColor=MUTED, spaceAfter=8),
    "section": ParagraphStyle("section", fontName="DejaVuBold", fontSize=9.25, leading=13, textColor=INK, spaceBefore=10, spaceAfter=5),
    "body": ParagraphStyle("body", fontName="DejaVu", fontSize=8.6, leading=13.5, textColor=INK, spaceAfter=4, alignment=TA_LEFT),
    "item": ParagraphStyle("item", fontName="DejaVu", fontSize=8.4, leading=13.2, textColor=INK, leftIndent=11, firstLineIndent=-9, spaceAfter=2.5),
    "entry": ParagraphStyle("entry", fontName="DejaVuBold", fontSize=8.75, leading=13.4, textColor=INK, spaceBefore=5, spaceAfter=3),
    "minor": ParagraphStyle("minor", fontName="DejaVu", fontSize=8.25, leading=12.8, textColor=MUTED, spaceAfter=2),
}

CONTENT = {
    "en": {
        "role": "PRODUCT DESIGNER  |  UX/UI  |  FRONTEND PROTOTYPING",
        "location": "Valencia, Spain · Open to European remote, hybrid and relocation opportunities",
        "sections": [
            ("PROFILE", [
                "Product Designer based in Valencia with independent UX/UI practice in France and Spain, informed by 8+ years in multilingual service operations. I structure workflows, interaction states and handovers, then use Figma and React prototypes to make product decisions inspectable.",
            ]),
            ("SELECTED PRODUCT WORK", [
                ("Relay · Independent research prototype · 2026", [
                    "Modelled a decision workspace for cross-border ecommerce exceptions using public platform, carrier and EU documentation. Designed queue, ownership, permission and audit states and built an inspectable React prototype with synthetic records.",
                    "Research boundary: operator interviews and usability sessions are planned. No client deployment or business impact is claimed. Case: brenosampaio.vercel.app/work/relay",
                ]),
            ]),
            ("DESIGN EXPERIENCE", [
                ("Independent Product Designer · Valencia, Spain · Jan 2024–Present", [
                    "Translate business and user needs into requirements, flows, information architecture and interface states; map operational edge cases and communicate design decisions through wireframes and functional prototypes.",
                ]),
                ("Freelance UX/UI Designer · France · Nov 2020–Feb 2023", [
                    "Delivered UX/UI work for independent clients and conceptual products, from requirements and journey mapping to Figma wireframes, high-fidelity interfaces and interactive prototypes.",
                ]),
            ]),
            ("OPERATIONS EXPERIENCE", [
                ("Multilingual front-office and service operations · France & Spain · 2017–2026", [
                    "Moontels (2024–2026), Travelodge (2023–2024) and ibis/ibis Styles/ibis budget (2017–2020). Investigated reservation and service discrepancies across ICNEA, Salesforce and hotel systems; coordinated case ownership, corrective actions and shift handovers.",
                ]),
            ]),
            ("TOOLS & PRACTICE", [
                "Product: problem framing, requirements, user journeys, information architecture, interaction states, wireframes, Figma prototypes and acceptance criteria.",
                "Frontend: HTML, CSS, JavaScript, React/Next.js prototypes and Git. Research: public-source desk research, explicit assumptions and accessibility review.",
            ]),
            ("EDUCATION & LANGUAGES", [
                "Web Design & Digital Interface — Escola SAGA, Brazil (2010–2013) · Google UX Design Certificate.",
                "Portuguese native · French C1 · English B2 · Spanish B2 · Italian B1.",
            ]),
        ],
    },
    "fr": {
        "role": "DESIGNER PRODUIT  |  UX/UI  |  PROTOTYPAGE FRONTEND",
        "location": "Valence, Espagne · Ouvert aux postes européens à distance, hybrides ou avec mobilité",
        "sections": [
            ("PROFIL", [
                "Designer produit basé à Valence, avec une pratique UX/UI indépendante en France et en Espagne, nourrie par plus de huit ans d’opérations de service multilingues. Je structure les parcours, les états d’interface et les transmissions, puis j’utilise Figma et des prototypes React pour rendre les décisions produit inspectables.",
            ]),
            ("PROJET PRODUIT SÉLECTIONNÉ", [
                ("Relay · Prototype de recherche indépendant · 2026", [
                    "Modélisation d’un espace de décision pour les exceptions e-commerce transfrontalières à partir de documentation publique de plateformes, transporteurs et institutions européennes. Conception de la file, des responsabilités, des permissions et de l’historique ; prototype React avec dossiers synthétiques.",
                    "Limite de recherche : entretiens opérateurs et tests d’utilisabilité prévus. Aucun déploiement client ni impact commercial revendiqué. Étude : brenosampaio.vercel.app/fr/work/relay",
                ]),
            ]),
            ("EXPÉRIENCE EN DESIGN", [
                ("Designer produit indépendant · Valence, Espagne · janv. 2024–aujourd’hui", [
                    "Traduction des besoins métier et utilisateurs en exigences, parcours, architecture d’information et états d’interface ; cartographie des cas limites et communication des décisions par maquettes et prototypes fonctionnels.",
                ]),
                ("Designer UX/UI freelance · France · nov. 2020–févr. 2023", [
                    "Travaux UX/UI pour des clients indépendants et des produits conceptuels : exigences, parcours utilisateurs, maquettes filaires, interfaces haute fidélité et prototypes interactifs dans Figma.",
                ]),
            ]),
            ("EXPÉRIENCE OPÉRATIONNELLE", [
                ("Accueil et opérations multilingues · France et Espagne · 2017–2026", [
                    "Moontels (2024–2026), Travelodge (2023–2024) et ibis/ibis Styles/ibis budget (2017–2020). Analyse d’écarts de réservation et de service dans ICNEA, Salesforce et des systèmes hôteliers ; coordination des responsables, corrections et transmissions entre équipes.",
                ]),
            ]),
            ("OUTILS ET PRATIQUE", [
                "Produit : cadrage, exigences, parcours, architecture d’information, états d’interaction, maquettes, prototypes Figma et critères d’acceptation.",
                "Frontend : HTML, CSS, JavaScript, prototypes React/Next.js et Git. Recherche : documentation publique, hypothèses explicites et revue d’accessibilité.",
            ]),
            ("FORMATION ET LANGUES", [
                "Web Design &amp; Digital Interface — Escola SAGA, Brésil (2010–2013) · Certificat Google UX Design.",
                "Portugais langue maternelle · Français C1 · Anglais B2 · Espagnol B2 · Italien B1.",
            ]),
        ],
    },
}


def paragraph(text: str, style: str) -> Paragraph:
    return Paragraph(escape(text).replace("&amp;amp;", "&amp;"), styles[style])


def make_resume(lang: str, destination: Path) -> None:
    copy = CONTENT[lang]
    document = SimpleDocTemplate(
        str(destination), pagesize=A4, rightMargin=42, leftMargin=42,
        topMargin=34, bottomMargin=32,
        title=f"Breno Sampaio — {'Product Designer' if lang == 'en' else 'Designer produit'}",
        author="Breno Sampaio",
    )
    story = [paragraph("Breno Sampaio", "name"), paragraph(copy["role"], "role")]
    contact = (
        f"{copy['location']}<br/>"
        "sampayobreno@gmail.com · +34 621 161 482 · brenosampaio.vercel.app<br/>"
        "linkedin.com/in/brenosampaio · github.com/sampayobreno-spec"
    )
    story.append(Paragraph(contact, styles["contact"]))
    story.append(HRFlowable(width="100%", thickness=0.7, color=RULE))
    for heading, entries in copy["sections"]:
        story.append(paragraph(heading, "section"))
        for entry in entries:
            if isinstance(entry, tuple):
                title, bullets = entry
                story.append(paragraph(title, "entry"))
                for bullet in bullets:
                    story.append(paragraph("•  " + bullet, "item"))
            else:
                story.append(paragraph(entry, "body"))
    story.append(Spacer(1, 5))
    document.build(story)


if __name__ == "__main__":
    make_resume("en", PUBLIC / "breno-sampaio-resume-en.pdf")
    make_resume("fr", PUBLIC / "breno-sampaio-resume-fr.pdf")
    (PUBLIC / "breno-sampaio-cv.pdf").write_bytes((PUBLIC / "breno-sampaio-resume-en.pdf").read_bytes())
