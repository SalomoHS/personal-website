import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import { GridBackground } from "@/components/DecorativeElements";
import { PortfolioProvider } from "@/context/PortfolioContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salomo Hendrian Website",
  description: "Salomo Hendrian personal website",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          jakarta.variable,
          "antialiased font-jakarta bg-white text-text-dark min-h-screen flex flex-col overflow-x-hidden"
        )}
      >
        <PortfolioProvider>
          <GridBackground />
          <Header />
          <main className="flex-grow pt-16 md:pt-20">
            {children}
          </main>
          <footer className="py-8 text-center text-gray-500 text-xs sm:text-sm">
            © 2026 Salomo Hendrian Sudjono.<br className="sm:hidden" />
            Built with ❤️
          </footer>
          <Chatbot />
        </PortfolioProvider>
      </body>
    </html>
  );
}
