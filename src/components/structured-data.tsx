// This component should be a SERVER COMPONENT for better SEO crawling
// Structured data is static and should be rendered on the server
import Script from "next/script";

export default function StructuredData() {
  // Organization Schema - Establishes your business identity
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Code Results",
    alternateName: "Code Results AI Automation Agency",
    url: "https://coderesults.tech",
    logo: "https://coderesults.tech/icon.png",
    description:
      "Leading AI automation agency in Pakistan specializing in custom chatbots, AI voice agents, workflow automation, and business process optimization for SMBs.",
    email: "contact@coderesults.tech",
    telephone: "+92-328-9462807",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.linkedin.com/in/rafay-khan-177568260//",
      "https://wa.me/+923289462807",
    ],
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Rafay Yousafzai",
    },
  };

  // LocalBusiness Schema - Critical for local SEO in Lahore
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Code Results - AI Automation Agency Lahore",
    image: "https://coderesults.tech/icon.png",
    description:
      "Top-rated AI automation agency in Lahore, Pakistan. We build custom AI solutions including voice agents, chatbots, and workflow automation for businesses.",
    "@id": "https://coderesults.tech",
    url: "https://coderesults.tech",
    telephone: "+92-328-9462807",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lahore",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5204,
      longitude: 74.3587,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Lahore",
      },
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Place",
        name: "Global",
      },
    ],
  };

  // Service Schema - Showcases your main offerings
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "AI Voice Agents",
        description:
          "24/7 AI-powered voice agents that handle customer support, answer questions, book appointments, and follow up with leads automatically. Natural-sounding conversations that save you from hiring extra staff.",
        provider: {
          "@type": "Organization",
          name: "Code Results",
        },
        serviceType: "AI Voice Agent Development",
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Custom Chat Agents",
        description:
          "Intelligent chatbots for WhatsApp, Instagram, Facebook, and your website that understand context, qualify leads, answer FAQs, and route complex issues efficiently.",
        provider: {
          "@type": "Organization",
          name: "Code Results",
        },
        serviceType: "Custom Chatbot Development",
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "Lead Generation & Outreach",
        description:
          "AI agents that find potential customers, reach out with personalized messages, and follow up automatically across email, social media, and other channels until they respond.",
        provider: {
          "@type": "Organization",
          name: "Code Results",
        },
        serviceType: "AI-Powered Lead Generation",
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        position: 4,
        name: "Workflow Automation",
        description:
          "Custom-built workflows that automate repetitive tasks like data entry, invoicing, report generation, and connect your tools to handle grunt work automatically.",
        provider: {
          "@type": "Organization",
          name: "Code Results",
        },
        serviceType: "Business Workflow Automation",
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        position: 5,
        name: "Customer Journey Automation",
        description:
          "Automated systems that manage orders, send updates, request reviews, and handle the entire customer journey across WhatsApp, Instagram, your website, and other platforms.",
        provider: {
          "@type": "Organization",
          name: "Code Results",
        },
        serviceType: "Customer Experience Automation",
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        position: 6,
        name: "Web & Mobile Development",
        description:
          "Custom web and mobile applications built with modern frameworks like Next.js, designed to scale and integrate seamlessly with your business processes.",
        provider: {
          "@type": "Organization",
          name: "Code Results",
        },
        serviceType: "Web and Mobile App Development",
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  // WebSite Schema - Helps Google understand your site structure
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Code Results",
    url: "https://coderesults.tech",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://coderesults.tech/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // BreadcrumbList Schema - Improves navigation understanding
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://coderesults.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://coderesults.tech/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://coderesults.tech/about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://coderesults.tech/contact",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
