import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Code Results | AI Automation & Web Development";
const description =
  "Stop doing repetitive work. Let AI handle it. We build custom AI automation that fits your business perfectly so you can focus on what actually matters.";
const url = "https://coderesults.tech/";
const imageUrl = `icon.png`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI automation",
    "web development",
    "custom software",
    "business automation",
    "Code Results",
    "Rafay Khan",
    "Rafay Yousafzai",
  ],
  authors: [
    {
      name: "Rafay Khan",
      url: "https://www.linkedin.com/in/rafay-yousafzai-177568260/",
    },
  ],
  creator: "Rafay Khan",
  publisher: "Code Results",

  openGraph: {
    title,
    description,
    url,
    siteName: "Code Results",
    images: [
      {
        url: imageUrl,
        width: 1280,
        height: 853,
        alt: description,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
