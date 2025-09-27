import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section
      className="py-16 md:py-32 bg-gray-50 dark:bg-transparent"
      id="portfolio"
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            The Lyra ecosystem brings together our models
          </h2>
          <p className="max-w-sm sm:ml-auto">
            Empower your team with workflows that adapt to your needs, whether
            you prefer git synchronization or a AI Agents interface.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {PORTFOLIO_CONTENT.map((item, index) => (
            <div key={index} className={index % 2 === 1 ? "md:mt-20" : ""}>
              <PortfolioCard card={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
