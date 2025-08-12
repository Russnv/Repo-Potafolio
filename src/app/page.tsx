"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Download } from "lucide-react";

const technologies = [
  { name: "React", logo: "/img/React.png" },
  { name: "Next.js", logo: "/img/Next.js.png" },
  { name: "Tailwind", logo: "/img/Tailwind CSS.png" },
  { name: "Bootstrap", logo: "/img/Bootstrap.png" },
  { name: "JavaScript", logo: "/img/JavaScript.png" },
  { name: "TypeScript", logo: "/img/TypeScript.png" },
  { name: "Angular", logo: "/img/Angular.png" },
  { name: "GitHub", logo: "/img/GitHub.png" },
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_j234b9w",
        "template_xcowwm4",
        formData,
        "Ym4ZZAAnFnPyEL6-Z"
      );
      setEnviado(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <main className="min-h-screen text-gray-800 bg-gradient-to-br from-violet-100 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 shadow-sm bg-white/60 backdrop-blur-md">
        <h1 className="text-xl font-bold">Natalia Villalba</h1>
        <nav className="space-x-4 text-sm">
          <a href="#proyectos" className="hover:text-violet-700">
            Proyectos
          </a>
          <a href="#tecnologias" className="hover:text-violet-700">
            Tecnologías
          </a>
          <a href="#contacto" className="hover:text-violet-700">
            Contacto
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 text-center pt-28">
        <Image
          src="/img/mi-foto.jpg"
          alt="Foto de Natalia"
          width={100}
          height={100}
          className="border-4 border-white rounded-full shadow-lg"
        />
        <h2 className="mt-4 text-3xl font-bold">Frontend Developer Jr</h2>
        <motion.p
          className="max-w-md mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Desarrolladora frontend con gran capacidad para aprender rápido y
          adaptarme a nuevos entornos. Puedo migrar sin complicaciones entre
          frameworks o autenticaciones de terceros. Me apasiona crear landing
          pages atractivas y llevar cada proyecto hasta su despliegue final.
        </motion.p>
        <a
          href="#proyectos"
          className="px-5 py-2 mt-6 text-white transition rounded-full bg-violet-700 hover:bg-violet-800"
        >
          Ver proyectos
        </a>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="py-16 bg-white">
        <h3 className="mb-10 text-3xl font-bold text-center">Tecnologías</h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-7 justify-items-center">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Image src={tech.logo} alt={tech.name} width={50} height={50} />
              <span className="mt-2 text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center bg-gradient-to-r from-violet-100 to-white">
        <motion.h3
          className="mb-6 text-3xl font-bold text-violet-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Descargá mi CV
        </motion.h3>

        <motion.p
          className="max-w-xl mx-auto mb-8 text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Conocé más sobre mi formación, experiencia y habilidades técnicas.
          ¡Estoy lista para sumarme a tu equipo!
        </motion.p>

        <motion.a
          href="/CV_Natalia-nuevo.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 text-white transition rounded-full shadow-lg bg-violet-700 hover:bg-violet-800"
        >
          <Download className="w-5 h-5" />
          Descargar CV
        </motion.a>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="px-6 py-16">
        <h3 className="mb-10 text-3xl font-bold text-center">Mis Proyectos</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              nombre: "Turno Facil",
              desc: "Hecha con TypeScript y Next.js Tailwind.",
              interno: true,
              link: "/turno-facil",
            },
            {
              nombre: "Turno De Peluqueria",
              desc: "Web para solicitar turnos. Validaciones y diseño responsive.",
              interno: true,
              link: "/proyecto-turnos",
            },
            {
              nombre: "Prototipo Carpintería",
              desc: "Es un prototipo para una empresa ficticia dedicada al diseño de muebles de cocina e interiores personalizados.",
              interno: false,
              link: "https://prototipo-carpinteria.vercel.app/",
            },
          ].map((proyecto, i) => (
            <motion.div
              key={i}
              className="p-6 transition bg-white shadow-lg rounded-xl hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-violet-800">
                {proyecto.nombre}
              </h4>
              <p className="my-3 text-gray-700">{proyecto.desc}</p>
              {proyecto.interno ? (
                <Link href={proyecto.link}>
                  <span className="font-medium text-violet-600 hover:underline">
                    Ver proyecto
                  </span>
                </Link>
              ) : (
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-violet-600 hover:underline"
                >
                  Ver proyecto
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-16 bg-violet-50">
        <h3 className="mb-10 text-3xl font-bold text-center">Contáctame</h3>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white transition rounded-full bg-violet-700 hover:bg-violet-800"
          >
            Enviar
          </button>
          {enviado && (
            <p className="text-green-600">¡Mensaje enviado correctamente!</p>
          )}
        </form>
      </section>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-violet-600 text-white shadow-md transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Volver arriba"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Footer */}
      <footer className="py-8 text-sm text-center text-gray-500">
        Hecho con ❤️ por Natalia Villalba
      </footer>
    </main>
  );
}
