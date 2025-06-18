import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Geist, Geist_Mono } from "next/font/google";

import NextTopLoader from "nextjs-toploader";

import "@/css/satoshi.css";
import "@/css/style.css";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Admin - Next.js Dashboard Kit",
    default: "Admin - Next.js Dashboard Kit",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Next.js admin dashboard toolkit with 200+ templates, UI components, and integrations for fast dashboard development.",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/auth/sign-in");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClerkProvider>
          <Providers>
            <NextTopLoader color="#5750F1" showSpinner={false} />

            <div className="flex min-h-screen">
              <Sidebar />

              <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
                <Header />

                <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
                  {children}
                </main>
              </div>
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
