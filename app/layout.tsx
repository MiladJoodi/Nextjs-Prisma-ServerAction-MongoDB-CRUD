import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Prisma CRUD",
  description: "Simple Next.js 15 app with Prisma and Server Actions for CRUD operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

         {/* GitHub Ribbon */}
         <a
          href="https://github.com/MiladJoodi/Nextjs-Prisma-ServerAction-MongoDB-CRUD"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            border: 0,
            zIndex: 1000,
          }}
        >
          <img
            src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png"
            alt="Fork me on GitHub"
            width="149"
            height="149"
            loading="lazy"
            decoding="async"
          />
        </a>


        {children}
      </body>
    </html>
  );
}
