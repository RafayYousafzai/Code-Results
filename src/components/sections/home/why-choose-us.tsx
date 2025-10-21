// Server Component - SEO Optimized
// All content is crawlable, only animations use client components
import { Card, CardContent } from "@/components/ui/card";
import { WhyChooseUsScrollView } from "./why-choose-us-client";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    image: "/images/process/1. Discovery & Consultation.webp",
    title: "Built for YOUR Business",
    description:
      "No templates. No one-size-fits-all. Every automation we create is custom-built around how your business actually works—not how we think it should work.",
    highlight: "Custom solutions that fit perfectly",
  },
  {
    image: "/images/process/2. Strategy & Planning.webp",
    title: "We Focus on Real Results",
    description:
      "We're not here to sell you fancy tech you don't need. We build automation that saves you actual hours, brings in more leads, and makes your daily work easier. That's it.",
    highlight: "Measurable time and cost savings",
  },
  {
    image: "/images/process/3. Testing & Optimization.webp",
    title: "Honest About What Works",
    description:
      "If AI automation isn't the right solution for your problem, we'll tell you. We'd rather be upfront than waste your time and money on something that won't deliver.",
    highlight: "No overselling, just honest advice",
  },
  {
    image: "/images/process/5. Launch & Deployment.webp",
    title: "We Stick Around",
    description:
      "Launch day isn't goodbye. We're here when things break, when you have questions, or when you want to add new features. Quick responses, no disappearing acts.",
    highlight: "Ongoing support when you need it",
  },
  {
    image: "/images/process/6. Ongoing Support.webp",
    title: "We Speak Human, Not Tech",
    description:
      "No confusing jargon. No endless meetings. We explain things clearly, keep you updated, and make the whole process painless. You'll always know what's happening.",
    highlight: "Clear communication every step",
  },
  {
    image: "/images/process/4. Testing & Optimization.webp",
    title: "Built for Small & Medium Businesses",
    description:
      "We know you're not a massive corporation with unlimited budget. Our solutions are priced fairly and designed specifically for businesses like yours that need to grow smart.",
    highlight: "Fair pricing, maximum value",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20"
      id="why-choose-us"
    >
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <WhyChooseUsScrollView>
            <Badge variant="outline" className="mb-4">
              Why Code Results
            </Badge>
          </WhyChooseUsScrollView>
          <WhyChooseUsScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Why Choose Us Over Others?
            </h2>
          </WhyChooseUsScrollView>
          <WhyChooseUsScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg">
              We don&apos;t just build solutions – we build partnerships.
              Here&apos;s what sets us apart from traditional agencies and
              freelancers in the market.
            </p>
          </WhyChooseUsScrollView>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <WhyChooseUsScrollView key={index} delay={0.1 * index}>
              <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden">
                {/* Background Image with Blur */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-all duration-300 group-hover:bg-black/70" />
                </div>

                <CardContent className="p-6 space-y-4 h-full flex flex-col relative z-10">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/90 text-black hover:bg-white"
                    >
                      {reason.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white dark:text-white group-hover:text-primary-foreground transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed flex-1">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </WhyChooseUsScrollView>
          ))}
        </div>

        <WhyChooseUsScrollView delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">
                Join 500+ satisfied clients who chose the Code Results advantage
              </span>
            </div>
          </div>
        </WhyChooseUsScrollView>
      </div>
    </section>
  );
}
