import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

// Invita-Visual-Identity-System.md §12: Doran is the only typeface, exactly
// two weights (Bold, Medium) — no third weight, no substitute, no fallback face.
const doranBold = localFont({
  src: "../assets/fonts/Doran-Bold.ttf",
  variable: "--font-doran-bold",
  weight: "700",
  display: "swap",
});

const doranMedium = localFont({
  src: "../assets/fonts/Doran-Medium.ttf",
  variable: "--font-doran-medium",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invita",
  description: "Luxury Digital Invitation Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html
      lang="ckb"
      dir="rtl"
      className={`${doranBold.variable} ${doranMedium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
