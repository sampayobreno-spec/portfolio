import { WorkContent } from "@/components/site/WorkContent";

export const metadata = {
  title: "Work — Product decisions and evidence",
  description: "Explore Relay, an independent Product Design research prototype with a working interface, documented decisions and open validation questions.",
  alternates: { canonical: "/work", languages: { "en-CA": "/work", "fr-CA": "/fr/work" } },
};

export default function WorkPage() {
  return <WorkContent lang="en" />;
}
