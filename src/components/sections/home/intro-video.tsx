// Server Component - SEO Optimized with VideoObject Schema
import { Badge } from "@/components/ui/badge";
import { IntroVideoPlayer } from "./intro-video-client";

export default function IntroVideoSection() {
  return (
    <>
      {/* VideoObject Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Code Results - AI Automation Agency Introduction",
            description:
              "Learn how Code Results helps businesses in Lahore, Pakistan automate repetitive tasks with custom AI solutions. Discover our AI voice agents, custom chatbots, and workflow automation services.",
            thumbnailUrl: "https://coderesults.tech/images/video-thumbnail.jpg",
            uploadDate: new Date().toISOString(),
            contentUrl: "https://coderesults.tech/Intro_Video_24fps.mp4",
            embedUrl: "https://coderesults.tech/Intro_Video_24fps.mp4",
            duration: "PT1M5S", // 1 minute 5 seconds
            publisher: {
              "@type": "Organization",
              name: "Code Results",
              logo: {
                "@type": "ImageObject",
                url: "https://coderesults.tech/logo.png",
              },
            },
          }),
        }}
      />

      <section className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-2">
              Watch Our Story
            </Badge>
            <h2 className="text-4xl font-bold lg:text-5xl">
              See How We Transform Businesses
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Watch our introduction to understand how Code Results helps
              businesses like yours save time and grow faster with AI
              automation.
            </p>
          </div>

          {/* Video Player */}
          <IntroVideoPlayer />

          {/* Stats Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pt-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2-4 Weeks</div>
              <p className="text-sm text-muted-foreground">
                Average Project Timeline
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">70%</div>
              <p className="text-sm text-muted-foreground">
                Time Saved on Repetitive Tasks
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
