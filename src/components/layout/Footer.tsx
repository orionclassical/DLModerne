"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.collection, href: "/collection.html" },
    { label: t.nav.aboutme, href: "/about.html" },
  ];

  const quickLinksInfo = [
    { label: t.footer.privacyPolicy, href: "/pdfs/privacy-and-policy.pdf" },
    { label: t.footer.imprint, href: "/pdfs/imprint.pdf" },
    { label: t.footer.termsAndConditions, href: "/pdfs/terms-and-conditions.pdf" },
  ];

  const quickLinksShipReturn = [
    { label: t.footer.rightOfWithdrawal, href: "/pdfs/right-of-withdrawal.pdf" },
    { label: t.footer.shippingConditions, href: "/pdfs/shipping-conditions.pdf" },
  ];

  return (
    <footer className="bg-button">
      <div className="mx-auto max-w-6xl px-10 py-14 flex flex-col lg:justify-center lg:flex-row gap-12">
        <div className="lg:text-left">
          <div className="flex items-center lg:justify-start gap-3 mb-4">
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

        <div className="flex flex-col lg:flex-row gap-10 justify-around">
            <div className="flex flex-col gap-3">
            <p className="font-button lg:text-left text-xs tracking-wide text-button-text mb-1">
              {t.footer.getInTouch}
            </p>
            <a className="flex items-center gap-2 lg:justify-start font-body text-sm text-button-text/80 hover:text-button-text transition-colors w-fill">
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              +49 155 10305340
            </a>
            <a className="flex items-center gap-2 lg:justify-start font-body text-sm text-button-text/80 hover:text-button-text transition-colors w-fill">
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              dl-moderne-bayong@gmx.de
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-button lg:text-left text-xs tracking-wide text-button-text mb-1">
              {t.footer.shippingAndReturns}
            </p>
            {quickLinksShipReturn.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm lg:text-left text-button-text/80 hover:text-button-text transition-colors w-fill"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-button lg:text-left text-xs tracking-wide text-button-text mb-1">
              {t.footer.information}
            </p>
            {quickLinksInfo.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm lg:text-left text-button-text/80 hover:text-button-text transition-colors w-fill"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
          
      <div>
        <p className="font-body text-xs text-center text-button-text/60 pb-5">
          © {new Date().getFullYear()} DL Moderne. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}