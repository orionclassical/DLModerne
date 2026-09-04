"use client";

import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.collection, href: "#collection" },
    { label: t.nav.materials, href: "#materials" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-button">
      <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border border-button-text/30 overflow-hidden">
              <Image
                src="/img/logo.jpg"
                alt="DL Moderne logo"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="font-display font-bold text-lg text-button-text">
              DL Moderne
            </p>
          </div>
          <p className="font-body text-sm text-button-text/80 leading-relaxed max-w-xs">
            {t.footer.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 ml-30">
          <p className="font-button text-xs tracking-wide text-button-text mb-1">
            {t.footer.quickLinks}
          </p>
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-button-text/80 hover:text-button-text transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 ml-30">
          <p className="font-button text-xs tracking-wide text-button-text mb-1">
            {t.footer.getInTouch}
          </p>
          <a className="flex items-center gap-2 font-body text-sm text-button-text/80 hover:text-button-text transition-colors w-fit">
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            +49 176 32763467
          </a>
          <a className="flex items-center gap-2 font-body text-sm text-button-text/80 hover:text-button-text transition-colors w-fit">
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            lourafer.manungas@gmx.de
          </a>
        </div>
      </div>

      <div>
        <p className="font-body text-xs text-button-text/60 text-center pb-5">
          © {new Date().getFullYear()} DL Moderne. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}