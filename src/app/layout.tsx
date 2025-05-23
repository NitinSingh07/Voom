import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ReactQueryProvider from "@/react-query";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";

const manrope = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voom",
  description: "Share AI powered videos with anyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReactQueryProvider>{children}</ReactQueryProvider>{" "}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
