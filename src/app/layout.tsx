import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nikola Pajović — AI Consultant",
    template: "%s — Nikola Pajović",
  },
  description:
    "Agents, RAG pipelines, LLM products — designed, built, and shipped by one senior engineer. Based in Belgrade, working with clients worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
