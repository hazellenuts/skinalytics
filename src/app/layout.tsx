// app/layout.tsx (global layout)
import Navbar from "@/components/organisms/Navbar";
import "../styles/globals.css"; // Import file Tailwind CSS
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import localfont from "next/font/local";
import { url } from "inspector";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

const dream = localfont(
  {
    src: [{
      path: "../../public/fonts/FontsFree-Net-Dream-Avenue.ttf",
      weight: "100"
    }],
    variable: "--font-dream"
  }
)

export const metadata = {
  title: "Skinalytics",
  description: "Learn Next.js with Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="flex flex-col min-h-screen font-poppins">
        {/* Navbar hanya untuk halaman selain dashboard */}
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">Footer</footer>
      </body>
    </html>
  );
}
