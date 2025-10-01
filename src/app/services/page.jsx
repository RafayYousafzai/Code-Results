import Link from "next/link";

import { ArrowRight } from "lucide-react";
import ContactSection from "@/components/contact";
import ServicesSection2 from "@/components/sections/home/services-2";
import ComparisonSection from "@/components/sections/home/comparison";
import ProcessSection from "@/components/sections/home/process";

export default function page() {
  return (
    <div>
      <ServicesSection2 />
      <ProcessSection />
      <ComparisonSection />
      <ContactSection />
    </div>
  );
}
