// app/layout.tsx (global layout)
import "../styles/globals.css"; // Import file Tailwind CSS
import { ReactNode } from "react";


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
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">Footer</footer>
      </body>
    </html>
  );
}
