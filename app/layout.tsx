import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Suspense } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TicTacToe",
  description: "Enjoy the classic Tic-Tac-Toe experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={outfit.className}>
              <Suspense>
          {children}
              </Suspense>
        </body>
    </html>
  );
}
