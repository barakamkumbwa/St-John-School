import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const oswald = localFont({
  src: [
    { path: "../public/fonts/Oswald/Oswald-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Oswald/Oswald-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Oswald/Oswald-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/Oswald/Oswald-Bold.ttf", weight: "700" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stjohnsecondary.ac.tz"
  ),
  title: {
    default: "St. John Secondary School | Knowledge for Life",
    template: "%s | St. John Secondary School",
  },
  description:
    "St. John Secondary School is a leading private secondary school in Morogoro, Tanzania, offering O-Level and A-Level education with a tradition of academic excellence since 1998.",
  keywords: [
    "St. John Secondary School",
    "secondary school Tanzania",
    "O-Level Morogoro",
    "A-Level Tanzania",
    "best secondary school Morogoro",
    "NECTA",
  ],
  authors: [{ name: "St. John Secondary School" }],
  openGraph: {
    type: "website",
    locale: "en_TZ",
    siteName: "St. John Secondary School",
    title: "St. John Secondary School | Knowledge for Life",
    description:
      "A leading secondary school in Morogoro, Tanzania — nurturing leaders through academic excellence and character.",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. John Secondary School",
    description: "Knowledge for Life — Morogoro, Tanzania.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-cream-50 text-navy-900 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
