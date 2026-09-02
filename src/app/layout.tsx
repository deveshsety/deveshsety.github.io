import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devesh Sety | Backend Developer → Tech & Strategy Consulting",
  description: "Four years shipping enterprise software at OSF Digital (L'Occitane, GAP, PLDT). Now PGPM at GLIM applying technical execution to strategy consulting.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Devesh Sety | Backend Developer → Tech & Strategy Consulting",
    description: "Technically-grounded consultant who has actually shipped enterprise software.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}