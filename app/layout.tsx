import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutComponent from "@/components/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Colegio de Abogados de Tungurahua",
  description: "Powered by Fonles Studios, Corp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-svh`}
      >
        <LayoutComponent>
          {children}
        </LayoutComponent>
      </body>

    </html>
  );
}
