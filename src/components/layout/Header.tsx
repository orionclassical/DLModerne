// src/components/layout/Header.tsx
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "COLLECTION", href: "/collection" },
  { label: "MATERIALS", href: "/materials" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  return (
    <header className="w-full bg-light border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-title flex items-center justify-center">
            <span className="font-display text-xs text-title">DL</span>
          </div>
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-button text-xs tracking-wide text-paragraph hover:text-title transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}