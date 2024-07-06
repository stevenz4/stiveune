import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stiveune",
  description: "Generated by my own hands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
