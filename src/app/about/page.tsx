export const revalidate = 60;
import OurTeamSection from "@/components/ourTeam";
import RevealText from "@/components/RevealText";

export default function Page() {
  return (
    <div>
      <RevealText text="About Us" />
      <OurTeamSection />
    </div>
  );
}
