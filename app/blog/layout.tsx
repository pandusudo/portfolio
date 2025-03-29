import { Metadata } from "next";
import { conf } from "@/app/lib/constant";

export const metadata: Metadata = {
  title: `Pandusudo's ${conf.TITLE.toLocaleLowerCase()}`,
  description: "Pandusudo's blog sharing about insight on tech",
  authors: { name: conf.AUTHOR.NAME, url: conf.AUTHOR.URL },
  keywords: "pandusudo, pandu cahyo p, blog",
  openGraph: {
    type: "website",
    images: `og.png`,
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
    images: `og.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
