// // src/app/layout.tsx
// import { Outfit } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"
// import CustomCursor from "@/components/CustomCursor"
// import BackgroundEffect from "@/components/BackgroundEffect"
// import "./globals.css"

// const outfit = Outfit({ 
//   subsets: ["latin"],
//   display: "swap",
// })

// export const metadata = {
//   title: "Jane Doe - Business Analyst Portfolio",
//   description: "Professional portfolio showcasing business analysis work and projects",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={outfit.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="light"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <CustomCursor />
//           <BackgroundEffect />
//           <Navbar />
//           <div className="min-h-screen">
//             {children}
//           </div>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }


// src/app/layout.tsx
// import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "../components/Footer"
// import CustomCursor from "@/components/CustomCursor"
import BackgroundEffect from "@/components/BackgroundEffect"
import "../styles/index.css"

// const outfit = Outfit({ 
//   subsets: ["latin"],
//   display: "swap",
// })

export const metadata = {
  title: "Gayatri Devarshetty - Business Analyst Portfolio",
  description: "Professional portfolio showcasing business analysis work and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='bg-custom-gradient' >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <CustomCursor /> */}
          <BackgroundEffect />
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