import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import PageLoader from "@/components/layout/PageLoader";

export const metadata: Metadata = {
  title: {
    default: "Dulanjaya Thathsara | Software Engineer",
    template: "%s | Dulanjaya Thathsara",
  },
  description:
    "Software Engineer focused on building modern, fast and scalable web applications using React and Next.js.",
  keywords: [
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Sri Lanka",
    "Dulanjaya Thathsara",
  ],
  authors: [{ name: "Dulanjaya Thathsara" }],
  creator: "Dulanjaya Thathsara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dulanjaya.dev",
    title: "Dulanjaya Thathsara | Software Engineer",
    description:
      "Software Engineer focused on building modern, fast and scalable web applications using React and Next.js.",
    siteName: "Dulanjaya Thathsara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulanjaya Thathsara | Software Engineer",
    description:
      "Software Engineer focused on building modern, fast and scalable web applications.",
    creator: "@dulanjaya2005",
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased noise">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PageLoader />
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}