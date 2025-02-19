"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, Download } from "lucide-react";

const navItems = [
  {
    path: "#about",
    name: "About",
  },
  {
    path: "#education",
    name: "Education",
  },
  {
    path: "#projects",
    name: "Projects",
  },
  {
    path: "#skills",
    name: "Skills",
  },
  {
    path: "#experience",
    name: "Experience",
  },
  {
    path: "#certifications",
    name: "Certifications",
  },
  // {
  //   path: "#contact",
  //   name: "Contact",
  // }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex xs:h-24 mdlg:h-16 md:h-17 h-17 items-center justify-between gap-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link
            prefetch={true}
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              // text-5xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text
              // text-5xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text
              // text-xl font-semibold  hover:text-primary  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500  inline-block  bg-clip-text
              className="text-xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text"
            >
              Gayatri Priya Devarshetty
            </Link>
          </motion.div>

          <nav className="hidden md:flex md:space-x-4 lg:space-x-6 space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.path);
                }}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center ml-4"
          >
            <Link
            prefetch={true}
              download="Gayatri_Devershetty.docx"
              target="_blank"
              href="/Gayatri_Devershetty.docx"
              className="h-[45px] bg-[#5A3EEC] hover:bg-[#4a2ec6] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition w-[130px] space-x-8"
            >
              Resume <Download size={16} />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : "100%",
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-y-0 right-0 w-64 bg-background shadow-lg p-6 md:hidden",
              isMobileMenuOpen ? "block" : "hidden"
            )}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.path);
                  }}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="items-center "
              >
                <Link
                  prefetch={true}
                  target="_blank"
                  href="/Gayatri_Devershetty.docx"
                  download="Gayatri_Devershetty.docx"
                  className="h-[45px] bg-[#5A3EEC] hover:bg-[#4a2ec6] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition w-[142px]"
                >
                  Resume <Download size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
