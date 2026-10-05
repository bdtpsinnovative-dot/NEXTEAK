import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vertex.com"),
  title: {
    default: "VERTEX — The Future of Teak Refined for Marine Decking",
    template: "%s | VERTEX",
  },
  description:
    "VERTEX combines the beauty of natural teak with advanced technology and a commitment to a more sustainable future, delivering high-performance marine decking for a better tomorrow.",
  keywords: [
    "VERTEX",
    "Marine Teak Decking",
    "Superyacht Teak Deck",
    "Sustainable Plantation Teak",
    "Thin-Veneer Timber Integration",
    "Luxury Marine Yacht Flooring",
  ],
  authors: [{ name: "VERTEX" }],
  creator: "VERTEX",
  publisher: "VERTEX",
  openGraph: {
    title: "VERTEX — The Future of Teak Refined for Marine Decking",
    description:
      "VERTEX combines the beauty of natural teak with advanced technology, delivering high-performance marine decking for superyachts.",
    url: "https://vertex.com",
    siteName: "VERTEX",
    images: [
      {
        url: "/images/hero/1.webp",
        width: 2560,
        height: 1265,
        alt: "VERTEX Marine Teak Decking",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VERTEX — The Future of Teak Refined for Marine Decking",
    description:
      "High-performance marine decking engineered with thin-veneer technology and research-based know-how.",
    images: ["/images/hero/1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/icon.png?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen flex flex-col bg-white text-[#13262D]">
        {children}
      </body>
    </html>
  );
}
