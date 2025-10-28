import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import { Providers } from "./providers";
import StructuredData from "@/components/structured-data";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "AI Automation Agency in Pakistan | Code Results";
const description =
  "Top AI automation agency in Lahore, Pakistan. We build custom chatbots, AI voice agents, and automated workflows to help your business grow and save time.";
const url = "https://coderesults.tech/";
const imageUrl = `icon.png`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    // Primary Keywords
    "AI automation agency",
    "AI automation Pakistan",
    "AI development company",
    "business process automation",

    // Secondary Keywords
    "custom chatbots",
    "AI voice agents",
    "WhatsApp automation",
    "Instagram chatbot",
    "lead generation automation",
    "workflow automation services",

    // Local Keywords
    "AI automation Lahore",
    "AI development Lahore",
    "automation agency Pakistan",
    "chatbot developer Lahore",
    "AI services Pakistan",

    // Long-tail Keywords
    "custom AI solutions for small business",
    "AI customer support automation",
    "automated lead generation system",
    "business workflow automation Pakistan",

    // Brand Keywords
    "Code Results",
    "Rafay Khan",
    "Rafay Yousafzai",
  ],
  authors: [
    {
      name: "Rafay Yousafzai",
      url: "https://www.linkedin.com/in/rafay-khan-177568260//",
    },
  ],
  creator: "Rafay Yousafzai",
  publisher: "Code Results",

  openGraph: {
    title: "AI Automation Agency in Lahore, Pakistan | Code Results",
    description:
      "Leading AI automation agency in Lahore. Custom chatbots, AI voice agents, workflow automation & lead generation for SMBs. Save time & grow faster.",
    url,
    siteName: "Code Results - AI Automation Agency",
    images: [
      {
        url: imageUrl,
        width: 1280,
        height: 853,
        alt: "Code Results - AI Automation Agency in Pakistan",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation Agency Pakistan | Code Results",
    description:
      "Top AI automation agency in Lahore. Custom chatbots, AI voice agents & workflow automation for businesses.",
    images: [imageUrl],
    creator: "@rafay-yousafzai",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },

  alternates: {
    canonical: url,
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <HeroHeader />
            {children}
            <FooterSection />
          </Providers>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
