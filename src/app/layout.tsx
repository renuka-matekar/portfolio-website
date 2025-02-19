"use client";
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";;
import "../styles/index.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: "swap",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${outfit.className} bg-gradient`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}