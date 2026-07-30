import LayoutContent from "../components/LayoutContent";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
} from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SV STORE",
  description: "Top Up Game Murah, Cepat & Aman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="id"
  className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
>
      <body className="min-h-screen bg-slate-950 text-white flex flex-col">

  <LayoutContent>

    {children}

    </LayoutContent>
  
<Script
  src="https://app.sandbox.midtrans.com/snap/snap.js"
  data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
  strategy="beforeInteractive"
/>

</body>
    </html>
  );
}