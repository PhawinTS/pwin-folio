import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pwin-folio",
  description:
    "Portfolio of Phawin Thongsen, Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative bg-[#0a0a0a] text-foreground`}>
        
        {/* ⭐ Animated Background ควรอยู่ตรงนี้ */}
        <div className="fixed inset-0 -z-10">
          <div id="bg"></div>
        </div>

        {/* ⭐ Content wrapper ควบคุม spacing ให้ไม่เละ */}
        <main className="relative z-10 pt-24 pb-20">
          {children}
        </main>

      </body>
    </html>
  );
}
