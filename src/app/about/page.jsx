import StatsSection from "@/components/sections/home/stats";
import StorySection from "@/components/Story";
import ContactSection from "@/components/contact";
import TeamSection from "@/components/team";
import WhyChooseUsSection from "@/components/sections/home/why-choose-us";
import ComparisonSection from "@/components/sections/home/comparison";

export default function page() {
  return (
    <div>
      <StorySection />
      <WhyChooseUsSection />
      <ComparisonSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
