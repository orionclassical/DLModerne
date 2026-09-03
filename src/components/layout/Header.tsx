// src/components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "COLLECTION", href: "#shop-by-style" },
  { label: "CONTACT", href: "#contact" },
  { label: "MATERIALS", href: "#materials" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-light border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2">
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

        <nav className="flex items-center gap-8">
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

        <div className="relative">
          <button
            onClick={() => setIsLangOpen((prev) => !prev)}
            aria-label="Change language"
            aria-expanded={isLangOpen}
            className="flex items-center justify-center"
          >
            <Globe className="w-5 h-5 text-title" strokeWidth={1.5} />
          </button>

          {isLangOpen && (
            <div className="absolute right-0 top-8 bg-light-background border border-title/20 rounded-md shadow-sm py-1 w-32 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setIsLangOpen(false);
                    // TODO: wire this into actual i18n logic (e.g. next-intl)
                  }}
                  className={`w-full text-left px-4 py-2 font-body text-xs hover:bg-brown-background transition-colors ${
                    selectedLang === lang.code ? "text-title font-bold" : "text-paragraph"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}