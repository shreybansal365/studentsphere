import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import TerminalBoot from "./components/TerminalBoot";
import SystemHUD from "./components/SystemHUD";
import CustomCursor from "./components/CustomCursor";
import NeuralBackground from "./components/NeuralBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudentSphere",
  description: "The Centralized Academic Nervous System for Manipal University Jaipur.",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "StudentSphere",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <TerminalBoot />
        <NeuralBackground />
        <SystemHUD />
        <CustomCursor />
        <div className="noise-overlay" />
        <div className="relative z-10">
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
