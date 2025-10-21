// Server Component for FAQ - Better for SEO crawling
// Only the Accordion interaction needs client-side JavaScript
import Script from "next/script";
import FAQAccordion from "./faq-accordion";

const faqs = [
  {
    question: "How much does AI automation cost?",
    answer:
      "The cost of AI automation varies based on complexity and scope. Most small business automations range from PKR 50,000-150,000 for chatbots and voice agents, and PKR 100,000-300,000 for comprehensive workflow automation. However, with the time and money saved, most clients see a positive ROI within 1-3 months. We offer free consultations to provide accurate estimates for your specific needs.",
  },
  {
    question: "How long does it take to implement automation?",
    answer:
      "Most automation projects are completed in 2-6 weeks depending on complexity. Simple chatbots can be deployed in 1-2 weeks, while comprehensive workflow automation systems may take 4-6 weeks. We work in sprints with weekly check-ins so you see progress every step of the way. After deployment, you'll see immediate results and time savings.",
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "Not at all! We build automation that's designed to be user-friendly for non-technical business owners. We handle all the technical setup, integration, and configuration. You'll receive complete training on how to manage and monitor your automation systems, and our ongoing support ensures you're never stuck.",
  },
  {
    question: "What if the AI makes mistakes?",
    answer:
      "All our AI systems include built-in safeguards and human oversight. The AI is trained on your specific business context and tested thoroughly before launch. For critical tasks, we implement approval workflows where the AI suggests actions but requires human confirmation. We also provide monitoring dashboards so you can track performance and make adjustments as needed.",
  },
  {
    question: "Can AI automation work with my existing tools?",
    answer:
      "Yes! Our automation solutions integrate with most popular business tools including WhatsApp Business, Instagram, Facebook, Gmail, Google Sheets, accounting software, CRMs, and more. We use APIs and integration platforms to connect your existing systems seamlessly. If you have custom software, we can build integrations for that too.",
  },
  {
    question: "Will automation replace my employees?",
    answer:
      "Automation is designed to assist your team, not replace them. It handles repetitive, time-consuming tasks so your employees can focus on higher-value work like building customer relationships, solving complex problems, and strategic thinking. Most of our clients actually expand their teams after automation because they have the capacity to take on more business.",
  },
  {
    question: "Do you work with businesses outside Lahore or Pakistan?",
    answer:
      "Absolutely! While we're based in Lahore, Pakistan, we work with businesses globally. All our services can be delivered remotely, and we've successfully completed projects for clients in North America, Europe, the Middle East, and across Asia. We're experienced in working across different time zones and cultures.",
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "Every automation project includes ongoing support. We provide training for your team, comprehensive documentation, and dedicated support channels (WhatsApp, email, phone). For the first month, we monitor performance closely and make adjustments as needed. After that, you can choose from our support packages or reach out as needed. We're invested in your long-term success.",
  },
  {
    question: "How do I know if my business is ready for automation?",
    answer:
      "If you or your team spend time on repetitive tasks—answering the same questions, copying data between systems, scheduling appointments, following up with leads—you're ready for automation. The best candidates are tasks that are rule-based, high-volume, and time-consuming. Book a free consultation and we'll analyze your workflow to identify the best automation opportunities.",
  },
  {
    question: "What's the first step to getting started?",
    answer:
      "Book a free 30-minute consultation with us. We'll discuss your business challenges, review your current workflow, and identify automation opportunities. There's no sales pressure or obligation. If we think automation isn't right for you, we'll tell you honestly. If it is, we'll create a custom roadmap showing exactly what to automate, expected ROI, and timeline.",
  },
];

export default function FAQSection() {
  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 md:py-32" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AI automation for your business
          </p>
        </div>

        <FAQAccordion faqs={faqs} />

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="text-primary font-semibold hover:underline"
          >
            Get in touch with us →
          </a>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
    </section>
  );
}
