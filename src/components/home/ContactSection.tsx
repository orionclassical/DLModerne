// src/components/materials/ContactSection.tsx
import { MessageCircle, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-brown py-20">
      <div className="text-center mb-12 px-6">
        <h2 className="font-display font-bold text-3xl text-title mb-4">Contact Us</h2>
        <p className="font-body text-sm text-paragraph">
          If you are interested in buying one of
          <br />
          our products, get in touch
        </p>
      </div>

      <div className="flex justify-center gap-16">
          <a        
          href="https://wa.me/4917632763467"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
          >
          <MessageCircle className="w-7 h-7 text-[#25D366]" strokeWidth={1.5} />
          <p className="font-button text-xs text-title">WhatsApp</p>
          <p className="font-body text-xs text-paragraph group-hover:text-title transition-colors">
            +4917632763467
          </p>
        </a>

        <a
          href="mailto:lourafer.manungas@gmx.de"
          className="flex flex-col items-center gap-2 group"
        >
          <Mail className="w-7 h-7 text-title" strokeWidth={1.5} />
          <p className="font-button text-xs text-title">Email</p>
          <p className="font-body text-xs text-paragraph group-hover:text-title transition-colors">
            lourafer.manungas@gmx.de
          </p>
        </a>
      </div>
    </section>
  );
}