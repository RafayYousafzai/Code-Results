"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const processSteps = [
  {
    step: "01",
    image: "/images/process/1. Discovery & Consultation.webp",
    title: "Discovery & Consultation",
    description:
      "We start with a deep dive into your business challenges, goals, and current workflows. Our experts analyze your needs and identify automation opportunities.",
    duration: "1-2 days",
    deliverables: [
      "Requirements document",
      "Technical assessment",
      "Project roadmap",
    ],
  },
  {
    step: "02",
    image: "/images/process/2. Strategy & Planning.webp",
    title: "Strategy & Planning",
    description:
      "Based on our findings, we create a tailored strategy with clear milestones, technology stack selection, and implementation timeline.",
    duration: "2-3 days",
    deliverables: [
      "Solution architecture",
      "Technology blueprint",
      "Timeline & milestones",
    ],
  },
  {
    step: "03",
    image: "/images/process/3. Testing & Optimization.webp",
    title: "Development & Integration",
    description:
      "Our development team builds your solution using cutting-edge technology, ensuring seamless integration with your existing systems.",
    duration: "1-3 weeks",
    deliverables: ["MVP development", "API integrations", "Progress updates"],
  },
  {
    step: "04",
    image: "/images/process/4. Testing & Optimization.webp",
    title: "Testing & Optimization",
    description:
      "Rigorous testing across different scenarios, user acceptance testing, and performance optimization to ensure everything works perfectly.",
    duration: "2-5 days",
    deliverables: ["QA testing report", "Performance metrics", "Bug fixes"],
  },
  {
    step: "05",
    image: "/images/process/5. Launch & Deployment.webp",
    title: "Launch & Deployment",
    description:
      "Smooth deployment to production environment with monitoring, documentation, and team training to ensure successful adoption.",
    duration: "1-2 days",
    deliverables: [
      "Live deployment",
      "User documentation",
      "Training materials",
    ],
  },
  {
    step: "06",
    image: "/images/process/6. Ongoing Support.webp",
    title: "Ongoing Support",
    description:
      "Continuous monitoring, regular updates, feature enhancements, and 24/7 support to ensure your solution evolves with your business.",
    duration: "Ongoing",
    deliverables: [
      "24/7 monitoring",
      "Regular updates",
      "Feature enhancements",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section
      className="py-16 md:py-32 bg-gradient-to-b from-muted/20 to-background"
      id="process"
    >
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <ScrollView>
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
          </ScrollView>
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              How We Bring Your Vision to Life
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Our proven 6-step process ensures smooth delivery from concept to
              launch, with complete transparency and regular communication
              throughout.
            </p>
          </ScrollView>
        </div>

        <div className="space-y-8 md:space-y-12">
          {processSteps.map((step, index) => (
            <ScrollView key={index} delay={0.1 * index}>
              <div className="relative">
                <Card className="bg-slate-50 dark:bg-black/20 border-none shadow-2xl dark:shadow-none dark:border-t dark:border-b dark:border-white/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start">
                      {/* Step Icon & Number */}
                      <div className="flex items-center gap-4 md:col-span-1">
                        <div className="relative">
                          <Image
                            unoptimized
                            src={step.image}
                            alt={step.title}
                            width={100}
                            height={100}
                            className="h-[80%] w-auto object-cover rounded-2xl text-primary"
                          />
                        </div>
                        <div className="md:hidden">
                          <h3 className="text-2xl font-semibold">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 space-y-3">
                        <div className="hidden md:block">
                          <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Deliverables */}
                      <div className="md:col-span-1">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <ArrowRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollView>
          ))}
        </div>

        {/* Timeline Summary */}
        <ScrollView delay={0.4}>
          <Card className="mt-20 bg-slate-50 dark:bg-black border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Complete Timeline</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">Total Duration: 2-4 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary/60 rounded-full" />
                  <span className="text-muted-foreground">
                    From concept to launch
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our streamlined process delivers results faster than traditional
                agencies while maintaining the highest quality standards and
                keeping you informed every step of the way.
              </p>
              <Button size="lg" asChild>
                <a href="#contact">
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </ScrollView>
      </div>
    </section>
  );
}
