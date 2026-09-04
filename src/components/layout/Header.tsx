// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.collection, href: "#collection" },
    { label: t.nav.contact, href: "#contact" },
    { label: t.nav.materials, href: "#materials" },
  ];

  const languages = [
    { code: "en" as const, label: "English" },
    { code: "de" as const, label: "Deutsch" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-light border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2 cursor-auto">
          <div className="w-10 h-10 rounded-full border border-brown overflow-hidden">
            <Image
              src="/img/logo.jpg"
              alt="DL Moderne logo"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-button text-xs tracking-wider text-paragraph hover:text-title transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen((prev) => !prev)}
              aria-label="Change language"
              aria-expanded={isLangOpen}
              className="flex items-center justify-center cursor-pointer"
            >
              <Globe className="w-5 h-5 text-title" strokeWidth={1.5} />
            </button>

            <div
              className={`absolute right-0 top-8 bg-light border border-title/20 rounded-md shadow-sm py-1 w-32 z-50 origin-top-right transition-all duration-200 ease-out ${
                isLangOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full cursor-pointer text-left px-4 py-2 font-body text-xs hover:bg-brown-background transition-colors ${
                    language === lang.code ? "text-title font-bold" : "text-paragraph"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center cursor-pointer"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-title" />
            ) : (
              <Menu className="w-6 h-6 text-title" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-1 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-3 font-button text-xs tracking-wider text-paragraph hover:text-title hover:bg-brown-background rounded-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}