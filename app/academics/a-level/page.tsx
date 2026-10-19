import { ALevel } from "@/components/academics/ALevel";
import { AcademicsHero } from "@/components/academics/AcademicsHero";

export const metadata = {
  title: "A-Level",
  description: "Explore Form 5–6 subject combinations and academic pathways at St. John Secondary School.",
};

export default function ALevelPage() {
  return (
    <>
      <AcademicsHero
        label="A-Level · Form 5–6"
        title="Focused study. Wider possibilities."
        description="Explore advanced subject combinations, prepare for the ACSEE, and plan your next step with confidence."
      />
      <ALevel />
    </>
  );
}
