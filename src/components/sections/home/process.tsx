// Server Component - SEO Optimized
// Process steps are fully crawlable by search engines
import { Card, CardContent } from "@/components/ui/card";
import { ProcessScrollView } from "./process-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const processSteps = [
  {
    step: "01",
    image: "/images/process/1. Discovery & Consultation.webp",

    title: "Discovery Call",
    description:
      "We start with a quick call to understand your business, what's eating up your time, and what you actually need. An honest conversation about whether automation makes sense for you.",
    duration: "30-45 minutes",
    deliverables: [
      "Clear understanding of your challenges",
      "Honest assessment if AI can help",
      "Rough idea of what's possible",
    ],
  },
  {
    step: "02",
    image: "/images/process/2. Strategy & Planning.webp",

    title: "Strategy & Planning",
    description:
      "We map out exactly what we'll build, how it'll work with your current setup, and what results you can expect. You'll see the plan before we write a single line of code.",
    duration: "3-5 days",
    deliverables: [
      "Detailed automation roadmap",
      "Clear timeline and milestones",
      "Transparent pricing breakdown",
    ],
  },
  {
    step: "03",
    image: "/images/process/3. Testing & Optimization.webp",

    title: "Building Your Solution",
    description:
      "This is where the magic happens. We build and test your custom automation, keeping you updated throughout. You'll see progress, not just promises.",
    duration: "1-3 weeks",
    deliverables: [
      "Custom-built automation system",
      "Regular progress updates",
      "Testing and quality checks",
    ],
  },
  {
    step: "04",
    image: "/images/process/4. Testing & Optimization.webp",

    title: "Launch & Training",
    description:
      "We don't just hand you the keys and disappear. We'll walk you through everything, make sure it works smoothly, and show you how to use it. Easy, no-tech-speak training.",
    duration: "1-2 days",
    deliverables: [
      "Full system launch",
      "Hands-on training session",
      "Simple documentation you'll actually use",
    ],
  },
  {
    step: "05",
    image: "/images/process/5. Launch & Deployment.webp",

    title: "Ongoing Support",
    description:
      "We stick around. If something breaks, needs tweaking, or you want to add new features—we're here. Quick responses, real solutions, no ghosting.",
    duration: "Ongoing",
    deliverables: [
      "Priority support when you need it",
      "Regular check-ins and optimizations",
      "Updates and improvements as you grow",
    ],
  },
];
// image: "/images/process/6. Ongoing Support.webp",

export default function ProcessSection() {
  return (
    <section
      className="pb-16 md:py-32 bg-gradient-to-b from-muted/20 to-background"
      id="process"
    >
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <ProcessScrollView>
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
          </ProcessScrollView>
          <ProcessScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              How We Bring Your Vision to Life
            </h2>
          </ProcessScrollView>
          <ProcessScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Our proven 6-step process ensures smooth delivery from concept to
              launch, with complete transparency and regular communication
              throughout.
            </p>
          </ProcessScrollView>
        </div>

        <div className="space-y-8 md:space-y-12">
          {processSteps.map((step, index) => (
            <ProcessScrollView key={index} delay={0.1 * index}>
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
            </ProcessScrollView>
          ))}
        </div>

        {/* Timeline Summary */}
        <ProcessScrollView delay={0.4}>
          <Card className="mt-20 bg-slate-50 dark:bg-black border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Get Started?
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="font-medium">
                    Typical Timeline: 2-4 weeks
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary/60 rounded-full" />
                  <span className="text-muted-foreground">
                    From first call to launch
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Most projects go live within a month. We work fast without
                cutting corners, and you&lsquo;ll know exactly what&lsquo;s
                happening at every step. No surprises, no endless delays.
              </p>
              <Button size="lg" asChild>
                <a href="#contact">
                  Let&lsquo;s Talk About Your Business
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </ProcessScrollView>
      </div>
    </section>
  );
}
