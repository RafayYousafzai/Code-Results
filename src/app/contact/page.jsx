import ComparisonSection from "@/components/sections/home/comparison";
import ContactSection from "@/components/contact";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <main className="min-h-screen">
      <br />
      <br />
      <br />
      <ContactSection />
      <ComparisonSection />
      <TeamSection />
    </main>
  );
}
