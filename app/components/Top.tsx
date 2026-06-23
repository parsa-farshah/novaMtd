import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {
  RiInstagramLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Top = () => {
  return (
    <section className="hidden md:flex w-full bg-primary border-b border-white/10">
      <div className="flex items-center justify-between w-full px-6 py-2 2xl:mx-auto 2xl:container">
        {/* contact */}
        <div className="flex items-center gap-6 text-xs font-medium text-white">
          <a
            href="tel:07132XXXXXX"
            className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-white/80 transition"
          >
            <PhoneIcon className="w-4 h-4" />
            <span dir="ltr">۰۷۱‑۳۲XXXXXX</span>
          </a>

          <a
            href="mailto:parsafarashah@gmail.com"
            className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-white/80 transition"
          >
            <EnvelopeIcon className="w-4 h-4" />
            <span>parsafarashah@gmail.com</span>
          </a>
        </div>

        {/* socials */}
        <div className="flex items-center gap-3 text-white">
          <a
            href="#"
            className="p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="WhatsApp"
          >
            <RiWhatsappLine className="text-lg" />
          </a>

          <a
            href="#"
            className="p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="Instagram"
          >
            <RiInstagramLine className="text-lg" />
          </a>

          <a
            href="#"
            className="p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="Telegram"
          >
            <RiTelegramLine className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Top;
