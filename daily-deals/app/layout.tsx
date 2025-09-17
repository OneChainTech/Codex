import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Deals",
  description: "Learn Next.js with a simple demo storefront",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
