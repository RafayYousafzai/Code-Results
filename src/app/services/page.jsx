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
      <div className="mb-20">
        <Link
          href="/work"
          className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
        >
          <span className="text-foreground text-base">Explore Projects</span>
          <span className="dark:border-background block h-8 w-1 border-l bg-white dark:bg-zinc-700"></span>

          <div className="bg-background group-hover:bg-muted size-8 overflow-hidden rounded-full duration-500 -rotate-45 ">
            <div className="flex w-16 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
              <span className="flex size-8">
                <ArrowRight className="m-auto size-4" />
              </span>
              <span className="flex size-8">
                <ArrowRight className="m-auto size-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>

      <ProcessSection />
      <ComparisonSection />
      <ContactSection />
    </div>
  );
}
