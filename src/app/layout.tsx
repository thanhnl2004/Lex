import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter, Merriweather, JetBrains_Mono } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { AuthProvider } from "@/contexts/auth-context";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Travel Planner",
  description: "Plan your perfect trip",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <TRPCReactProvider>
          <AuthProvider user={user}>
            {children}
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
