"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const WhatsAppFloat = () => {
  const whatsappNumber = "541164806794";
  const message = "Hola! Me interesa obtener más información.";

  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || pathname !== "/") {
    return null;
  }

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">

        {/* Tooltip */}
        <div
          className="
            absolute
            bottom-[78px]
            right-0
            w-[250px]
            rounded-2xl
            bg-white
            px-4
            py-3
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            border
            border-[#eadfd3]
            opacity-0
            translate-y-2
            pointer-events-none
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          <p className="text-sm font-semibold text-[#2b211b]">
            ¿Tenés alguna duda?
          </p>

          <p className="mt-1 text-xs leading-relaxed text-[#7a6c62]">
            Escribime por WhatsApp y te respondo lo antes posible 💬
          </p>

          {/* Flechita */}
          <div
            className="
              absolute
              -bottom-2
              right-6
              h-4
              w-4
              rotate-45
              bg-white
              border-r
              border-b
              border-[#eadfd3]
            "
          />
        </div>

        {/* Anillo de animación */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-green-500
            opacity-20
            animate-ping
          "
        />

        {/* Botón */}
        <button
          onClick={handleWhatsAppClick}
          aria-label="Contactar por WhatsApp"
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-[0_8px_25px_rgba(37,211,102,0.35)]
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_12px_30px_rgba(37,211,102,0.45)]
            active:scale-95
          "
        >
          <Image
            src="/icons8-whatsapp-48.png"
            alt="WhatsApp"
            width={34}
            height={34}
            priority
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;