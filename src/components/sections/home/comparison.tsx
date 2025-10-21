// Server Component - SEO Optimized
// Comparison data is fully crawlable for better search rankings
import { Card, CardContent } from "@/components/ui/card";
import { ComparisonScrollView } from "./comparison-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparisonData = {
  features: [
    {
      feature: "Project Timeline",
      coderesults: "2-4 weeks typical",
      agencies: "2-6 months average",
      freelancers: "Unpredictable delays",
    },
    {
      feature: "Custom Solutions",
      coderesults: "100% tailored to you",
      agencies: "Template-based approach",
      freelancers: "Varies by skill level",
    },
    {
      feature: "Pricing",
      coderesults: "Fair & transparent",
      agencies: "$10k-50k+ projects",
      freelancers: "Cheaper but risky",
    },
    {
      feature: "Communication",
      coderesults: "Direct & responsive",
      agencies: "Multiple layers, slow",
      freelancers: "Hit or miss availability",
    },
    {
      feature: "Ongoing Support",
      coderesults: "Always available",
      agencies: "Extra fees for changes",
      freelancers: "Often disappear after",
    },
    {
      feature: "Tech Expertise",
      coderesults: "Latest AI & automation",
      agencies: "Outdated methods",
      freelancers: "Limited skill range",
    },
    {
      feature: "Business Focus",
      coderesults: "Small & medium businesses",
      agencies: "Enterprise clients only",
      freelancers: "No business strategy",
    },
  ],
};

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-32" id="comparison">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <ComparisonScrollView>
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
          </ComparisonScrollView>
          <ComparisonScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Code Results vs The Rest
            </h2>
          </ComparisonScrollView>
          <ComparisonScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              You have options. Here&lsquo;s an honest look at how we compare to
              traditional agencies and freelancers—no BS, just facts.
            </p>
          </ComparisonScrollView>
        </div>

        <ComparisonScrollView delay={0.3}>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4">
                  <h3 className="font-semibold text-lg">What Matters</h3>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-primary fill-current" />
                    <h3 className="font-semibold text-lg text-primary">
                      Code Results
                    </h3>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    Best Value
                  </Badge>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-lg text-muted-foreground">
                    Big Agencies
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
                        {item.coderesults}
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
        </ComparisonScrollView>

        {/* CTA Section */}
        <ComparisonScrollView delay={0.4}>
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold">
                  See the Difference for Yourself
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No commitment needed. Let&lsquo;s have a quick call to see if
                  we&lsquo;re the right fit for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="group">
                    <Link href="/contact">
                      Book a Free Call
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">See What We Build</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ComparisonScrollView>
      </div>
    </section>
  );
}
