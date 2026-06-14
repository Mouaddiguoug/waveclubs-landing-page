import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "WaveClubs — All-in-One Platform for Surf Schools & Camps",
  description:
    "Manage bookings, schedules, instructors, equipment, and customer communication from one dashboard. Built for surf schools, surf camps, and experience businesses.",
  openGraph: {
    title: "Waveclubs — All-in-One Platform for Surf Schools & Camps",
    description:
      "Replace WhatsApp, spreadsheets, and separate booking systems with one powerful platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${syne.variable} ${dmSans.variable} font-sans min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
