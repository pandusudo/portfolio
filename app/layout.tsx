import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { conf } from "@/lib/constant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Pandusudo's ${conf.TITLE.toLocaleLowerCase()}`,
  description: conf.DESCRIPTION,
  authors: { name: conf.AUTHOR.NAME, url: conf.AUTHOR.URL },
  keywords: "pandusudo, pandu cahyo p, portfolio",
  openGraph: {
    type: "website",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/og.png`,
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_WEB_URL,
    title: `${conf.FULL_NAME} - ${conf.TITLE}`,
    description: conf.DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: `@${conf.X_USERNAME}`,
    creator: `@${conf.X_USERNAME}`,
    title: `${conf.FULL_NAME} - ${conf.TITLE}`,
    description: conf.DESCRIPTION,
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/og.png`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
