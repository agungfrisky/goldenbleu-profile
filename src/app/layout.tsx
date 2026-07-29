import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golden Bleu | Kelezatan Premium Di Setiap Gigitan",
  description: "Website profile Golden Bleu. Temukan menu makanan lezat premium kami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased min-h-screen relative overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* Subtle background decoration */}
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full blur-3xl opacity-50 dark:opacity-20" />
             <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 dark:opacity-10 translate-x-1/3 translate-y-1/3" />
          </div>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
