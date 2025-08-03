// components/ProyectoTurnos.tsx

'use client'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const ProyectoTurnos = () => {
  const imagenes = [
    { src: '/MisTurnos.png', alt: 'Lista de turnos' },
    { src: '/rserbarTurno.png', alt: 'Reservar turno' },
    { src: '/TurnosPeluqueria.png', alt: 'Pantalla principal' },
  ]

  return (
    <section className="max-w-6xl px-4 py-20 mx-auto">
      <motion.h2
        className="mb-6 text-4xl font-extrabold text-center text-yellow-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💈 Turnos para Peluquería
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Aplicación web para reservar turnos fácilmente. Incluye autenticación, envío de correos de confirmación y una interfaz moderna. También se pueden cancelar turnos y ver animaciones interactivas.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {imagenes.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 border border-muted"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1000}
                height={600}
                className="object-cover w-full h-64"
              />
            </Tilt>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-semibold text-white bg-yellow-600 rounded-full shadow-md hover:bg-yellow-700 transition"
          >
             Volver al Inicio
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default ProyectoTurnos
