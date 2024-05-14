import { Metadata } from "next";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Star} from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Starter - Perfect for SEO and Performance",
  description: "Next.js Starter is the perfect project to start your next project. It is optimized for SEO and performance, and it includes all the tools you need to build a modern web application.",
  keywords: [
    "template",
    "next.js",
    "typescript",
    "react",
    "seo",
    "performance",
    "shadcn-ui",
    "tailwindcss"
  ],
  openGraph: {
    url: "https://example.com",
    type: "website",
    title: "Next.js Starter - Perfect for SEO and Performance",
    description:"Next.js Starter is the perfect project to start your next project. It is optimized for SEO and performance, and it includes all the tools you need to build a modern web application.",
    images: [
      {
        url: "https://example.com/images/home/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Next.js Starter"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Starter - Perfect for SEO and Performance",
    description: "Next.js Starter is the perfect project to start your next project. It is optimized for SEO and performance, and it includes all the tools you need to build a modern web application.",
    creator: "@sluxaaa",
    site: "@sluxaaa",
    images: [
      {
        url: "https://dminhvu.com/images/home/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Next.js Starter"
      }
    ]
  },
  alternates: {
    canonical: "https://example.com"
  }
};

export default function Page() {
    return (
        <div>

            <div>
                <h1 className={"text-5xl font-bold text-center mt-32"}>Next.js Starter</h1>
                <p className={"max-w-xl text-center mx-auto mt-5"}>Next.js Starter is the perfect project to start your next project. It is optimized for SEO and performance, and it includes all the tools you need to build a modern web application.</p>

                <div className={"flex justify-center gap-x-5 mt-10"}>
                    <Link href={"https://github.com/slxca/nextjs-starter"}>
                        <Button variant={"default"}><Star className={"h-4 w-4 text-yellow-300 fill-yellow-300 mr-1"} /> Star on GitHub</Button>
                    </Link>
                </div>
            </div>

            {/* Generate schema markup here: */}
            {/* https://technicalseo.com/tools/schema-markup-generator/ */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "sluca",
                "url": "https://s-luca.com",
                "image": ""
            })}} />
        </div>
    );
}
