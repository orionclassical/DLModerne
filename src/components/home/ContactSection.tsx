"use client";

import { MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-65 bg-light pb-40">
      <div className="text-center mb-12 px-6">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-title mb-4">{t.contact.heading}</h2>
        <p className="font-body text-sm text-paragraph">
          {t.contact.description}
        </p>
      </div>

      <div className="flex justify-center gap-16">
        <a className="flex flex-col items-center gap-2 group">
          <MessageCircle className="w-7 h-7 text-[#25D366]" strokeWidth={1.5} />
          <p className="font-button text-title">{t.contact.whatsapp}</p>
          <p className="font-body text-paragraph group-hover:text-title transition-colors">
            +4917632763467
          </p>
        </a>

        <a className="flex flex-col items-center gap-2 group">
          <Mail className="w-7 h-7 text-title" strokeWidth={1.5} />
          <p className="font-button text-title">{t.contact.email}</p>
          <p className="font-body text-paragraph group-hover:text-title transition-colors">
            lourafer.manungas@gmx.de
          </p>
        </a>
      </div>
    </section>
  );
}