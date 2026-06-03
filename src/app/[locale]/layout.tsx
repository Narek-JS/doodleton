import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";

import "../../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://doodlton.com"),
  title: {
    default: "DoodleTON - Telegram TON Game",
    template: "%s | DoodleTON",
  },
  description:
    "Play DoodleTON on Telegram, collect DoodleTON Coins, build TON Progress and join the Founder Campaign before launch.",
  applicationName: "DoodleTON",
  creator: "DoodleTON",
  publisher: "DoodleTON",
  category: "game",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const RootLayout: React.FC<Props> = async ({ children, params }) => {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} bg-[#060b1c] antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
