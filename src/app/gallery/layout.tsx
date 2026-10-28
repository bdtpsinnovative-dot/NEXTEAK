import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Showcase — Superyacht Decking Portfolio",
  description:
    "Explore VERTEK's portfolio of precision-engineered luxury marine teak decking projects. From megayacht foredecks to custom displacement vessels.",
  openGraph: {
    title: "Project Showcase | VERTEK Luxury Marine Decking",
    description:
      "Explore VERTEK's portfolio of precision-engineered luxury marine teak decking projects across international waters.",
    url: "https://vertekteak.com/gallery",
    images: [
      {
        url: "/images/hero/2.webp",
        width: 2560,
        height: 1265,
        alt: "VERTEK Superyacht Project Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Showcase | VERTEK Marine Decking",
    description:
      "Explore VERTEK luxury marine teak decking portfolio for megayachts and custom displacement vessels.",
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
