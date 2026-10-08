import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Showcase — Superyacht Decking Portfolio",
  description:
    "Explore VERTEX's portfolio of precision-engineered luxury marine teak decking projects. From megayacht foredecks to custom displacement vessels.",
  openGraph: {
    title: "Project Showcase | VERTEX Luxury Marine Decking",
    description:
      "Explore VERTEX's portfolio of precision-engineered luxury marine teak decking projects across international waters.",
    url: "https://vertex.com/gallery",
    images: [
      {
        url: "/images/hero/2.webp",
        width: 2560,
        height: 1265,
        alt: "VERTEX Superyacht Project Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Showcase | VERTEX Marine Decking",
    description:
      "Explore VERTEX luxury marine teak decking portfolio for megayachts and custom displacement vessels.",
    images: ["/images/hero/2.webp"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
