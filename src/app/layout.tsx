import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vertek.com"),
  title: {
    default: "VERTEK — The Future of Teak Refined for Marine Decking",
    template: "%s | VERTEK",
  },
  description:
    "VERTEK combines the beauty of natural teak with advanced technology and a commitment to a more sustainable future, delivering high-performance marine decking for a better tomorrow.",
  keywords: [
    "VERTEK",
    "Marine Teak Decking",
    "Superyacht Teak Deck",
    "Sustainable Plantation Teak",
    "Thin-Veneer Timber Integration",
    "Luxury Marine Yacht Flooring",
  ],
  authors: [{ name: "VERTEK" }],
  creator: "VERTEK",
  publisher: "VERTEK",
  openGraph: {
    title: "VERTEK — The Future of Teak Refined for Marine Decking",
    description:
      "VERTEK combines the beauty of natural teak with advanced technology, delivering high-performance marine decking for superyachts.",
    url: "https://vertek.com",
    siteName: "VERTEK",
    images: [
      {
        url: "/images/brand/og-vertek.jpg",
        width: 1200,
        height: 630,
        alt: "VERTEK Marine Teak Decking",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VERTEK — The Future of Teak Refined for Marine Decking",
    description:
      "High-performance marine decking engineered with thin-veneer technology and research-based know-how.",
    images: ["/images/brand/og-vertek.jpg"],
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
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/icon.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [
      { url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vertek.com/#organization",
      name: "VERTEK",
      url: "https://vertek.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vertek.com/images/brand/logo-vertek.webp",
      },
      description:
        "Luxury marine teak decking engineered with thin-veneer technology and proprietary protective coatings for superyachts.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "Thai"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://vertek.com/#website",
      url: "https://vertek.com",
      name: "VERTEK — Marine Teak Decking",
      publisher: {
        "@id": "https://vertek.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#13262D]">
        {children}
      </body>
    </html>
  );
}
