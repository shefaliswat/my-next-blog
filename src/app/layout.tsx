import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shefali's blog",
  description: "Created by Shefali Swatantra",
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
