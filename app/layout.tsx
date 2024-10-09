import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Trip",
  description:
    "Experience seamless travel planning with Royal Trip, the all-in-one super app for your next adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-300 text-zinc-300 antialiased space-y-8">{children}</body>
    </html>
  );
}
