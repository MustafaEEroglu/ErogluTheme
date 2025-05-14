import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eroglu Theme - Profesyonel Web Tasarım ve Geliştirme",
  description: "Modern ve etkileyici web tasarım çözümleri. 3D animasyonlar, responsive tasarım ve SEO uyumlu web siteleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
