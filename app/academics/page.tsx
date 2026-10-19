import { AcademicsHero } from "@/components/academics/AcademicsHero";
import { OLevel } from "@/components/academics/OLevel";
import { CoCurricular } from "@/components/academics/CoCurricular";
import { SchoolCalendar } from "@/components/academics/SchoolCalendar";

export const metadata = {
  title: "Academics",
  description: "Explore O-Level studies, subjects, learning support, and co-curricular activities at St. John Secondary School.",
};

export default function AcademicsPage() {
  return (
    <>
      <AcademicsHero />
      <OLevel />
      <CoCurricular />
      <SchoolCalendar />
    </>
  );
}
