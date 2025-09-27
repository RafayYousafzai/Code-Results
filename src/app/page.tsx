import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
// import ServicesSection from "@/components/sections/home/services";
import ServicesSection2 from "@/components/sections/home/services-2";
import StatsSection from "@/components/sections/home/stats";
import StorySection from "@/components/Story";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";
import AboutSection from "@/components/about";
import TeamSection from "@/components/team";
import WhyChooseUsSection from "@/components/sections/home/why-choose-us";
import ComparisonSection from "@/components/sections/home/comparison";
import ProcessSection from "@/components/sections/home/process";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorySection />
      <ServicesSection2 />
      <WhyChooseUsSection />
      <ProcessSection />
      <ComparisonSection />
      <PortfolioSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
