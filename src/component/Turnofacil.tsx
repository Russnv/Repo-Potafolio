"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";

export const Turnofacil = () => {
  const imagenes = [
    { src: "/TurnoFacil.png", alt: "Turno Fácil" },
    { src: "/Responsivo.png", alt: "Responsivo" },
    { src: "/Especialidades.png", alt: "Especialidades" },
    { src: "/AsignacionDeTurno.png", alt: "Asignación de turno" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + imagenes.length) % imagenes.length);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % imagenes.length);
  };

  return (
    <section className="max-w-6xl px-4 py-20 mx-auto" id="proyecto-turnos">
      <motion.h2
        className="mb-6 text-4xl font-extrabold text-center text-yellow-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📅 Turno Fácil
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto mb-12 text-lg text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Esta aplicación permite reservar turnos de forma sencilla. Tiene autenticación, confirmaciones por correo y WhatsApp, y una interfaz moderna con animaciones. También permite cancelar turnos fácilmente.
      </motion.p>

      <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
        {imagenes.map((img, i) => {
          const isTall =
            img.alt.toLowerCase() === "responsivo" ||
            img.alt.toLowerCase() === "turno fácil";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="overflow-hidden bg-white border shadow-xl rounded-xl border-muted dark:bg-gray-900"
              >
                <div className={`${isTall ? "h-96" : "h-48"} relative`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1000}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <button
                    onClick={() => openModal(i)}
                    className="absolute px-3 py-1 text-sm text-white transition rounded bottom-2 right-2 bg-black/60 hover:bg-black/80"
                  >
                    Ver más
                  </button>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div>

      {/* Modal Carrusel */}
      {selectedIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute flex items-center justify-center w-8 h-8 text-white bg-black rounded-full top-2 right-2 hover:bg-red-600"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Imagen */}
            <Image
              src={imagenes[selectedIndex].src}
              alt={imagenes[selectedIndex].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-auto select-none"
              priority
            />

            {/* Controles */}
            <button
              onClick={prevImage}
              className="absolute p-2 text-white -translate-y-1/2 rounded-full left-3 top-1/2 bg-black/50 hover:bg-black/70"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute p-2 text-white -translate-y-1/2 rounded-full right-3 top-1/2 bg-black/50 hover:bg-black/70"
              aria-label="Siguiente imagen"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-12">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-semibold text-white transition bg-yellow-600 rounded-full shadow-md hover:bg-yellow-700"
          >
            Volver al Inicio
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Turnofacil;
