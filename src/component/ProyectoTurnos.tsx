// components/ProyectoTurnos.tsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

 export const ProyectoTurnos = () => {
  return (
    <section className="max-w-6xl px-4 py-16 mx-auto">
      <motion.h2
        className="mb-6 text-3xl font-bold text-center text-yellow-700"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Turnos para Peluquería
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto mb-12 text-center text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Esta aplicación web permite a los usuarios reservar turnos para una peluquería de forma fácil e intuitiva. Cuenta con autenticación, envío de correos de confirmación con EmailJS y una interfaz visual atractiva. También incluye animaciones y un sistema para cancelar turnos.
      </motion.p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {[
          { src: "/MisTurnos.png", alt: "Lista de turnos" },
          { src: "/rserbarTurno.png", alt: "Reservar turno" },
          { src: "/TurnosPeluqueria.png", alt: "Pantalla principal" },
        ].map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden shadow-lg rounded-2xl"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProyectoTurnos;
