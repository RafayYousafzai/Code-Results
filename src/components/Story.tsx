"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "./scroll-view";

export default function StorySection() {
  return (
    <section className="py-16 md:py-32" id="our-story">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Built with Purpose, Driven by Innovation
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg">
              At Era Tech, we started with a simple belief — technology should
              empower people, not overwhelm them. From our early experiments
              with automation to building scalable AI-driven solutions, our
              journey has always been about solving real problems for real
              businesses.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <Card className="sm:col-span-2 lg:row-span-2">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p>
                  At Era Tech, our mission was never just about building
                  software it has always been about building confidence for
                  businesses in a world that changes faster than ever. We
                  started with a simple observation: so many companies were
                  drowning in repetitive tasks, lost leads, missed
                  opportunities, and outdated systems that drained their energy
                  instead of fueling growth. We believed technology should be
                  the silent partner that works in the background answering
                  calls, nurturing clients, organizing operations, and creating
                  space for business owners to focus on what truly matters:
                  vision, creativity, and impact. Every solution we design from
                  intelligent chatbots to full-scale automation systems is built
                  with one guiding principle: make life easier, make businesses
                  stronger. We do not just provide tools; we provide freedom
                  freedom from wasted hours, from scattered workflows, from
                  outdated ways of working. Our mission is to bring innovation
                  down to earth, where it can actually serve people, help
                  businesses grow sustainably, and make the future of work feel
                  less overwhelming and more exciting.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">Our Approach</h3>
                <p>
                  We combine deep technical expertise with an understanding of
                  business needs. Every workflow, agent, or application we
                  deliver is designed to create measurable impact not just look
                  good on paper.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">Our Values</h3>
                <p>
                  Transparency, innovation, and long-term partnerships. We
                  believe trust is built not by promises, but by consistent
                  delivery and real results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">Our Future</h3>
                <p>
                  We’re building for the next decade of digital transformation —
                  AI-first solutions that keep businesses agile, efficient, and
                  future-ready.
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
