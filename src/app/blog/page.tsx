// Server Component - Better for SEO and crawling
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Automation Blog & Resources | Code Results",
  description:
    "Learn about AI automation, chatbots, voice agents, and workflow automation for businesses. Practical guides, case studies, and insights from Code Results.",
  keywords: [
    "AI automation blog",
    "business automation tips",
    "chatbot tutorials",
    "workflow automation guides",
    "AI for small business",
  ],
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "/blog/automate-business-tasks-lahore",
    title: "5 Repetitive Tasks Your Lahore Business Can Automate Today",
    excerpt:
      "Discover 5 time-consuming tasks that Lahore businesses can automate with AI today. Save 20+ hours per week with smart automation solutions.",
    category: "Business Automation",
    date: "October 21, 2025",
    readTime: "8 min read",
    image: "/blog/automation-tasks.jpg",
  },
  // Add more blog posts here as you create them
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Automation Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical guides, case studies, and insights on using AI automation
            to save time and grow your business.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <Card className="mb-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground z-10">
                  Featured
                </span>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link href={blogPosts[0].slug}>
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <Link
                  href={post.slug}
                  className="text-primary font-semibold hover:underline inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (if only one post) */}
        {blogPosts.length === 1 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              More articles coming soon! Subscribe to our newsletter to get
              notified.
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <Card className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get AI Automation Tips Delivered
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ business owners getting weekly insights on automation,
              AI tools, and practical tips to save time and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border bg-background"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
