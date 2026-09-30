import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/layout/CommandPalette";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alibek Choriyev | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React Native, TypeScript, Node.js, FastAPI and PostgreSQL. I build modern web applications, mobile apps and scalable SaaS products.",
  keywords: [
    "Alibek Choriyev",
    "Full Stack Developer",
    "Next.js Developer Uzbekistan",
    "React Native Developer",
    "FastAPI Developer",
    "Node.js Engineer",
    "Freelance Developer Uzbekistan",
  ],
  authors: [{ name: "Alibek Choriyev", url: "https://github.com/FullStack-Alibek" }],
  creator: "Alibek Choriyev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alibekchoriyev.dev",
    title: "Alibek Choriyev | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React Native, TypeScript, Node.js, FastAPI and PostgreSQL.",
    siteName: "Alibek Choriyev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alibek Choriyev | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React Native, TypeScript, Node.js, FastAPI and PostgreSQL.",
    creator: "@choriyev_alibek",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alibek Choriyev",
    jobTitle: "Full Stack Developer",
    url: "https://alibekchoriyev.dev",
    email: "choriyevalibek226@gmail.com",
    telephone: "+998918467006",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Uzbekistan",
    },
    sameAs: [
      "https://github.com/FullStack-Alibek",
      "https://t.me/choriyev_alibek",
      "https://wa.me/998915741903",
      "https://linkedin.com/in/alibek-choriyev",
      "https://instagram.com/2008a_libek",
      "https://tiktok.com/@choriyev.alibek",
    ],
    knowsAbout: [
      "Next.js",
      "React.js",
      "TypeScript",
      "React Native",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://t.me/choriyev_alibek",
      telephone: "+998918467006",
      email: "choriyevalibek226@gmail.com",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between bg-[#030712] text-white selection:bg-red-600 selection:text-white`}
      >
        <Providers>
          <BackgroundGrid />
          <CustomCursor />
          <Navbar />
          <CommandPalette />
          <main className="flex-grow z-10" id="main-content">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
