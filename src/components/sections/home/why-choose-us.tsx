"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { InView } from "@/components/motion-primitives/in-view";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    image: "/images/process/1. Discovery & Consultation.webp",
    title: "Proven Results",
    description:
      "Over 200+ successful projects delivered with measurable ROI improvements averaging 40% cost reduction.",
    highlight: "40% Cost Reduction",
  },
  {
    image: "/images/process/2. Strategy & Planning.webp",
    title: "Lightning Fast Delivery",
    description:
      "From concept to deployment in 2-4 weeks. Our streamlined process gets you results quickly without compromising quality.",
    highlight: "2-4 Week Delivery",
  },
  {
    image: "/images/process/3. Testing & Optimization.webp",
    title: "Future-Proof Technology",
    description:
      "Built with cutting-edge AI and modern frameworks that scale with your business and adapt to changing needs.",
    highlight: "AI-Powered",
  },
  {
    image: "/images/process/5. Launch & Deployment.webp",
    title: "24/7 Support & Partnership",
    description:
      "We're not just vendors - we're partners. Ongoing support, regular updates, and continuous optimization included.",
    highlight: "Always Available",
  },
  {
    image: "/images/process/6. Ongoing Support.webp",
    title: "Industry Expertise",
    description:
      "Deep knowledge across e-commerce, real estate, healthcare, and more. We understand your specific challenges.",
    highlight: "Multi-Industry",
  },
  {
    image: "/images/process/4. Testing & Optimization.webp",
    title: "No-Code Integration",
    description:
      "Seamlessly integrates with your existing tools. No complex migrations or lengthy downtimes required.",
    highlight: "Zero Disruption",
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
          <ScrollView>
            <Badge variant="outline" className="mb-4">
              Why Code Results
            </Badge>
          </ScrollView>
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Why Choose Us Over Others?
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg">
              We don&apos;t just build solutions – we build partnerships.
              Here&apos;s what sets us apart from traditional agencies and
              freelancers in the market.
            </p>
          </ScrollView>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <ScrollView key={index} delay={0.1 * index}>
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
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/70" />
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
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-foreground transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed flex-1">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollView>
          ))}
        </div>

        <ScrollView delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">
                Join 500+ satisfied clients who chose the Code Results advantage
              </span>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
