import { Inter as FontSans } from "next/font/google";
import {cn} from "@/lib/utils";
import React from "react";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
                {children}
            </body>
        </html>
    );
}
