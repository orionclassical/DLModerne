// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-footer py-12">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg text-button-text mb-2">
            DL Moderne
          </p>
          <p className="font-body text-xs text-button-text/70 leading-relaxed max-w-xs">
            Bayong bags handcrafted from sabutan, pandan, rattan, and buntal
            — tradition meets modern style.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-button text-xs text-button-text mb-1">
            QUICK LINKS
          </p>
          {[
            { label: "Home", href: "/" },
            { label: "Collection", href: "/collection" },
            { label: "Materials", href: "/materials" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs text-button-text/70 hover:text-button-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-button text-xs text-button-text mb-1">
            GET IN TOUCH
          </p>
          <p className="font-body text-xs text-button-text/70">
            +4917632763467
          </p>
          <p className="font-body text-xs text-button-text/70">
            lourafer.manungas@gmx.de
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-button-text/10">
        <p className="font-body text-xs text-button-text/50 text-center">
          © {new Date().getFullYear()} DL Moderne. All rights reserved.
        </p>
      </div>
    </footer>
  );
}