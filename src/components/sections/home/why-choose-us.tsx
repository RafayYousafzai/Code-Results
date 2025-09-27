"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { InView } from "@/components/motion-primitives/in-view";
import { CheckCircle, Zap, Shield, Users, Target, Rocket } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Proven Results",
    description:
      "Over 200+ successful projects delivered with measurable ROI improvements averaging 40% cost reduction.",
    highlight: "40% Cost Reduction",
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "From concept to deployment in 2-4 weeks. Our streamlined process gets you results quickly without compromising quality.",
    highlight: "2-4 Week Delivery",
  },
  {
    icon: Shield,
    title: "Future-Proof Technology",
    description:
      "Built with cutting-edge AI and modern frameworks that scale with your business and adapt to changing needs.",
    highlight: "AI-Powered",
  },
  {
    icon: Users,
    title: "24/7 Support & Partnership",
    description:
      "We're not just vendors - we're partners. Ongoing support, regular updates, and continuous optimization included.",
    highlight: "Always Available",
  },
  {
    icon: Target,
    title: "Industry Expertise",
    description:
      "Deep knowledge across e-commerce, real estate, healthcare, and more. We understand your specific challenges.",
    highlight: "Multi-Industry",
  },
  {
    icon: Rocket,
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
              Why Era Tech
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
              <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {reason.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
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
                Join 500+ satisfied clients who chose the Era Tech advantage
              </span>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
