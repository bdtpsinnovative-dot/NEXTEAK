import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXTEAK — The Future of Teak Refined for Marine Decking",
  description:
    "NEXTEAK combines the beauty of natural teak with advanced technology and a commitment to a more sustainable future, delivering high-performance marine decking for a better tomorrow.",
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
