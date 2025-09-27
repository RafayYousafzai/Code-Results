"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparisonData = {
  features: [
    {
      feature: "Delivery Timeline",
      eratech: "2-4 weeks",
      agencies: "3-6 months",
      freelancers: "1-3 months",
    },
    {
      feature: "AI Integration",
      eratech: "Advanced AI-powered solutions",
      agencies: "Basic automation",
      freelancers: "Limited or none",
    },
    {
      feature: "Ongoing Support",
      eratech: "24/7 partnership & updates",
      agencies: "Business hours only",
      freelancers: "Project-based only",
    },
    {
      feature: "Cost Structure",
      eratech: "Transparent, value-based",
      agencies: "High overhead costs",
      freelancers: "Hidden additional costs",
    },
    {
      feature: "Scalability",
      eratech: "Built for growth",
      agencies: "Requires rebuilding",
      freelancers: "Often not scalable",
    },
    {
      feature: "Technology Stack",
      eratech: "Cutting-edge, future-proof",
      agencies: "Often outdated",
      freelancers: "Varies greatly",
    },
    {
      feature: "Communication",
      eratech: "Direct access to experts",
      agencies: "Multiple layers",
      freelancers: "Inconsistent availability",
    },
    {
      feature: "Quality Assurance",
      eratech: "Rigorous testing & optimization",
      agencies: "Standard QA",
      freelancers: "Self-tested only",
    },
  ],
};

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-32" id="comparison">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <ScrollView>
            <Badge variant="outline" className="mb-4">
              Market Comparison
            </Badge>
          </ScrollView>
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Era Tech vs Others
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg">
              See how we stack up against traditional agencies and freelancers.
              The choice becomes clear when you compare what really matters.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Features</h3>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-primary fill-current" />
                    <h3 className="font-semibold text-lg text-primary">
                      Era Tech
                    </h3>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    Recommended
                  </Badge>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-lg text-muted-foreground">
                    Traditional Agencies
                  </h3>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-lg text-muted-foreground">
                    Freelancers
                  </h3>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-3">
                {comparisonData.features.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center font-medium">
                      {item.feature}
                    </div>
                    <div className="flex items-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium text-primary">
                        {item.eratech}
                      </span>
                    </div>
                    <div className="flex items-center p-3 bg-muted/30 rounded-lg">
                      <X className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item.agencies}
                      </span>
                    </div>
                    <div className="flex items-center p-3 bg-muted/30 rounded-lg">
                      <X className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item.freelancers}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollView>

        {/* CTA Section */}
        <ScrollView delay={0.4}>
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-muted-foreground">
                  Join hundreds of businesses that chose Era Tech for faster
                  delivery, better results, and ongoing partnership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="group">
                    <Link href="#contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">View Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
