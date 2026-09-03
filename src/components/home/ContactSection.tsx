// src/components/materials/ContactSection.tsx
import { MessageCircle, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-50 bg-light pt-20 pb-40">
      <div className="text-center mb-12 px-6">
        <h2 className="font-display font-bold text-3xl text-title mb-4">Interested in these bags? Contact Us</h2>
        <p className="font-body text-sm text-paragraph">
          If you are interested in buying one of our products, get in touch
        </p>
      </div>

      <div className="flex justify-center gap-16">
          <a className="flex flex-col items-center gap-2 group">
          <MessageCircle className="w-7 h-7 text-[#25D366]" strokeWidth={1.5} />
          <p className="font-button text-title">WhatsApp</p>
          <p className="font-body text-paragraph group-hover:text-title transition-colors">
            +4917632763467
          </p>
        </a>

        <a className="flex flex-col items-center gap-2 group">
          <Mail className="w-7 h-7 text-title" strokeWidth={1.5} />
          <p className="font-button text-title">Email</p>
          <p className="font-body text-paragraph group-hover:text-title transition-colors">
            lourafer.manungas@gmx.de
          </p>
        </a>
      </div>
    </section>
  );
}