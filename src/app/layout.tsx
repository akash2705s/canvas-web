import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: "Canvas Space",
  description: "Turns every viewer moment into revenue.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://canvas.space"),
  icons: {
    icon: "/CanvasLogo.svg",
  },
  openGraph: {
    title: "Canvas Space",
    description: "Turns every viewer moment into revenue.",
    type: "website",
    images: [{ url: "/CanvasLogo.svg", alt: "Canvas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas Space",
    description: "Turns every viewer moment into revenue.",
    images: ["/CanvasLogo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, "font-mono", jetbrainsMono.variable)}>
      <body className={`${GeistSans.className} font-sans antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
