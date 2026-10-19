import { AboutHero } from "@/components/about/AboutHero";
import { HistoryVision } from "@/components/about/HistoryVision";
import { CoreValues } from "@/components/about/CoreValues";
import { Leadership } from "@/components/about/Leadership";

export const metadata = {
  title: "About Us",
  description: "Learn about the history, vision, mission, and leadership of St. John Secondary School in Morogoro, Tanzania.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HistoryVision />
      <CoreValues />
      <Leadership />
    </>
  );
}
