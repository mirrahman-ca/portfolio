import type { Metadata, Viewport } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mirrahman.ca"),
  title: "Mir Rahman | Solutions Architect & Senior Software Engineer",
  description:
    "Portfolio of Mir Rahman, an AWS-certified Solutions Architect and Senior Software Engineer building secure, scalable cloud systems, distributed services, data workflows, and AI-assisted applications.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Mir Rahman",
    title: "Mir Rahman | Solutions Architect & Senior Software Engineer",
    description: "Secure cloud systems, distributed services, data workflows, and practical AI integration.",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark", themeColor: "#020617" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
