import { AdmissionsContent } from "@/components/admissions/AdmissionsContent";
import { AdmissionsHero } from "@/components/admissions/AdmissionsHero";

export const metadata = {
  title: "Apply Now",
  description: "Review entry requirements and apply to Form 1 or Form 5 at St. John Secondary School.",
};

export default function ApplyPage() {
  return (
    <>
      <AdmissionsHero
        label="Admissions · Apply Now"
        title="Take the first step."
        description="Complete the application form for Form 1 or Form 5. Our admissions team will follow up with the next steps."
      />
      <AdmissionsContent />
    </>
  );
}
