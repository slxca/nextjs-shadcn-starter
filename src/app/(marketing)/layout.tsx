import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter as FontSans } from "next/font/google";
import type {Metadata, Viewport} from "next";
import {cn} from "@/lib/utils";
import React from "react";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  openGraph: {
    siteName: "Next.js Starter",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://example.com/rss.xml"
    }
  },
  applicationName: "Next.js Starter",
  appleWebApp: {
    title: "Next.js Starter",
    statusBarStyle: "default",
    capable: true
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png"
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png"
      }
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
                {children}
                <GoogleAnalytics gaId="G-XXXXXXXXXX" />
            </body>
        </html>
    );
}
