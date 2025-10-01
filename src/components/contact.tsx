import {
  Mail,
  MapPin,
  PhoneCall,
  MessageCircle,
  Clock,
  Globe,
  Linkedin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Let&apos;s Talk
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                  We&apos;d love to hear from you! Feel free to reach out to us
                  for any inquiries or to schedule a call.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link
                    href="mailto:rafaykhan@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="size-5 mr-2 inline text-primary" />
                    <span>rafaykhan@gmail.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+923289462807"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <PhoneCall className="size-5 mr-2 inline text-primary" />
                    <span>+92 328 946 807</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/923289462807"
                    className="text-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    <MessageCircle className="size-5 mr-2 inline text-primary" />
                    <span>WhatsApp Chat</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#link"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="size-5 mr-2 inline text-primary" />
                    <span>Lahore, Pakistan</span>
                  </Link>
                </li>
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              <ScrollView>
                <Card className="p-6 h-60 border border-border/40 bg-card/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="size-6 text-primary" />
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium">24/</span>7
                    </p>

                    <p className="text-xs mt-3">Pakistan Standard Time (PKT)</p>
                  </div>
                </Card>
              </ScrollView>

              <ScrollView delay={0.1}>
                <Card className="p-6 h-60 border border-border/40 bg-card/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="size-6 text-primary" />
                    <h3 className="text-lg font-semibold">Quick Response</h3>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="https://wa.me/923289462807?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-medium"
                      target="_blank"
                    >
                      <MessageCircle className="size-4 text-primary" />
                      WhatsApp us for instant chat
                    </Link>
                    <Link
                      href="mailto:rafaykhan@gmail.com?subject=Project%20Inquiry"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-medium"
                    >
                      <Mail className="size-4 text-primary" />
                      Email for detailed inquiries
                    </Link>
                  </div>
                </Card>
              </ScrollView>

              <ScrollView delay={0.2}>
                <Card className="p-6 h-60 border border-border/40 bg-card/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="size-6 text-primary" />
                    <h3 className="text-lg font-semibold">Social & Links</h3>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="www.linkedin.com/in/rafay-yousafzai-177568260"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-medium"
                      target="_blank"
                    >
                      <Linkedin className="size-4 text-primary" />
                      Follow us on LinkedIn
                    </Link>
                    <Link
                      href="https://rafaykhan.dev/"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-medium"
                      target="_blank"
                    >
                      <Globe className="size-4 text-primary" />
                      Visit our website
                    </Link>
                  </div>
                </Card>
              </ScrollView>

              <ScrollView delay={0.3}>
                <Card className="p-6 h-60 border border-border/40 bg-card/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <PhoneCall className="size-6 text-primary" />
                    <h3 className="text-lg font-semibold">Direct Contact</h3>
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="tel:+923289462807"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary font-medium"
                    >
                      <PhoneCall className="size-4 text-primary" />
                      Call us directly
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      Available during business hours for immediate assistance
                    </p>
                  </div>
                </Card>
              </ScrollView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
