import { Circle } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Innovation First",
    description:
      "We believe automation should simplify life, not complicate it. Every solution we build is designed to be smart, scalable, and practical.",
  },
  {
    title: "Partnership Over Service",
    description:
      "We don’t just deliver tools—we work alongside you to understand your business and create systems that truly fit your needs.",
  },
  {
    title: "Transparency Always",
    description:
      "Clear communication, honest advice, and real results. No hidden costs, no overpromises just trust and clarity.",
  },
  {
    title: "Driven by Impact",
    description:
      "Our focus is on outcomes. From saving you hours each week to unlocking new revenue streams, results guide everything we do.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-4xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About Us
            </h2>
          </ScrollView>
          <ScrollView>
            <p className="text-muted-foreground text-lg">
              Era Tech was founded with a vision to make intelligent automation
              accessible to every business. What started as a passion for AI and
              software quickly grew into a mission: helping companies save time,
              scale faster, and deliver better experiences for their customers.
              From chatbots to complete workflow automation, we craft solutions
              that don’t just keep up with the future they build it.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
            alt="team image"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
