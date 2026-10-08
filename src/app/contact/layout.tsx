import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Bespoke Marine Decking Consultation",
  description:
    "Connect with VERTEX marine teak specialists. Inquire about superyacht decking solutions, request wood samples, or schedule a private consultation at our Bangkok showroom.",
  openGraph: {
    title: "Contact Us | VERTEX Luxury Marine Decking",
    description:
      "Connect with VERTEX marine teak specialists. Inquire about superyacht decking solutions, request wood samples, or schedule a private consultation.",
    url: "https://vertex.com/contact",
    images: [
      {
        url: "/images/contact/showroom-1.webp",
        width: 1920,
        height: 1080,
        alt: "VERTEX Marine Teak Showroom & Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | VERTEX Luxury Marine Decking",
    description:
      "Connect with VERTEX marine teak specialists for bespoke superyacht decking inquiries.",
    images: ["/images/contact/showroom-1.webp"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
