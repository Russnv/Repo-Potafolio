"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";

type Proyecto = {
  nombre: string;
  tipo: string;
  anio: string;
  desc: string;
  stack: string[];
  link: string;
  interno: boolean;
  destacado?: boolean;
};

const proyectos: Proyecto[] = [
  {
    nombre: "Zhyra.online",
    tipo: "Tienda online · Full stack",
    anio: "2026",
    desc: "E-commerce en producción: catálogo, carrito, checkout con cupones y envío, y confirmaciones automáticas por email.",
    stack: ["Next.js", "Tailwind", "Nest.js", "Prisma", "PostgreSQL", "Nodemailer"],
    link: "https://zhyra.online/",
    interno: false,
    destacado: true,
  },
  {
    nombre: "Parrilla al Paso",
    tipo: "Landing para emprendimiento",
    anio: "2025",
    desc: "Landing page para un emprendimiento gastronómico, con identidad argentina y foco en que el visitante haga el pedido.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://parrilla-alpaso.vercel.app/",
    interno: false,
  },
  {
    nombre: "Prototipo Carpintería",
    tipo: "Landing · Prototipo",
    anio: "2025",
    desc: "Landing para una empresa ficticia de muebles a medida, pensada como ejercicio de identidad visual y maquetado.",
    stack: ["Next.js", "Tailwind"],
    link: "https://prototipo-carpinteria.vercel.app/",
    interno: false,
  },
  {
    nombre: "Turno de Peluquería",
    tipo: "Proyecto estudiantil",
    anio: "2025",
    desc: "App de reservas con registro de usuarios, confirmación automática de turnos y envío de emails. Hecha durante el bootcamp.",
    stack: ["React", "TypeScript", "Express", "Nodemailer"],
    link: "/proyecto-turnos",
    interno: true,
  },
];

const tecnologias = [
  { name: "React", logo: "/img/React.png" },
  { name: "Next.js", logo: "/img/Next.js.png" },
  { name: "TypeScript", logo: "/img/TypeScript.png" },
  { name: "JavaScript", logo: "/img/JavaScript.png" },
  { name: "Tailwind", logo: "/img/Tailwind CSS.png" },
  { name: "Bootstrap", logo: "/img/Bootstrap.png" },
  { name: "Angular", logo: "/img/Angular.png" },
  { name: "GitHub", logo: "/img/GitHub.png" },
];

const estilos = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Inter:wght@400;500;600&display=swap');

:root {
  --tinta: #2c2118;
  --papel: #fbf3e9;
  --niebla: #f4e6d5;
  --campo: #fffbf5;
  --linea: #e6d3bb;
  --gris: #7c6a58;
  --acento: #c05f2c;
  --acento-fuerte: #9c481d;
}

.portafolio { font-family: 'Inter', system-ui, -apple-system, sans-serif; color: var(--tinta); }
.display { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
.portafolio a:focus-visible,
.portafolio button:focus-visible,
.portafolio input:focus-visible,
.portafolio textarea:focus-visible {
  outline: 2px solid var(--acento);
  outline-offset: 3px;
  border-radius: 2px;
}
.fila { transition: background-color .18s ease; }
.fila:hover { background-color: var(--niebla); }
.flecha { transition: transform .18s ease; }
.fila:hover .flecha { transform: translate(2px, -2px); }

@media (prefers-reduced-motion: reduce) {
  .portafolio *, .portafolio *::before, .portafolio *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
`;

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [estado, setEstado] = useState<"idle" | "enviando" | "enviado" | "error">("idle");
  const sinMovimiento = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("enviando");
    try {
      await emailjs.send(
        "service_j234b9w",
        "template_xcowwm4",
        formData,
        "Ym4ZZAAnFnPyEL6-Z"
      );
      setEstado("enviado");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setEstado("error");
    }
  };

  const entrada = (delay: number) =>
    sinMovimiento
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.2, 0.7, 0.3, 1] as const },
        };

  return (
    <main className="portafolio min-h-screen bg-[var(--papel)]">
      <style>{estilos}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[var(--linea)] bg-[var(--papel)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="display text-[15px]">
            Natalia Villalba
          </a>
          <nav className="flex items-center gap-6 text-[14px] text-[var(--gris)]">
            <a href="#proyectos" className="hover:text-[var(--tinta)]">Proyectos</a>
            <a href="#stack" className="hover:text-[var(--tinta)]">Stack</a>
            <a href="#contacto" className="hover:text-[var(--tinta)]">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.p
          {...entrada(0)}
          className="mb-8 flex items-center gap-2 text-[14px] text-[var(--gris)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--acento)]" aria-hidden="true" />
          Frontend developer en Buenos Aires · disponible para trabajar
        </motion.p>

        <motion.h1
          {...entrada(0.08)}
          className="display max-w-[16ch] text-[2.6rem] leading-[1.05] sm:text-[3.6rem] md:text-[4.4rem]"
        >
          Construyo interfaces que la gente entiende sin pensarlo.
        </motion.h1>

        <motion.div
          {...entrada(0.16)}
          className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-[54ch] text-[17px] leading-relaxed text-[var(--gris)]">
            Trabajo con React, Next.js y TypeScript, y también toco el backend cuando
            hace falta: Nest.js, Prisma y PostgreSQL. Me interesa que un producto se
            entienda rápido, cargue rápido y funcione en cualquier pantalla.
          </p>

          <Image
            src="/img/mi-foto.jpg"
            alt="Retrato de Natalia Villalba"
            width={224}
            height={224}
            className="h-44 w-44 shrink-0 rounded-full border-4 border-[var(--campo)] object-cover shadow-[0_10px_30px_rgba(44,33,24,0.12)] md:h-56 md:w-56"
            priority
          />
        </motion.div>

        <motion.div {...entrada(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#proyectos"
            className="rounded-full bg-[var(--acento)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--acento-fuerte)]"
          >
            Ver proyectos
          </a>
          <a
            href="/Natalia Villalba - Frontend.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--linea)] px-6 py-3 text-[15px] font-medium hover:border-[var(--tinta)]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar CV
          </a>
          <a
            href="https://github.com/Russnv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-3 text-[15px] text-[var(--gris)] underline underline-offset-4 hover:text-[var(--tinta)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/russ-villalba"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-3 text-[15px] text-[var(--gris)] underline underline-offset-4 hover:text-[var(--tinta)]"
          >
            LinkedIn
          </a>
        </motion.div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="display mb-2 text-[28px]">Proyectos</h2>
        <p className="mb-10 max-w-[56ch] text-[15px] text-[var(--gris)]">
          Cuatro trabajos, del más reciente al más antiguo. Zhyra es el que está
          funcionando con usuarios reales.
        </p>

        <ul className="border-t border-[var(--linea)]">
          {proyectos.map((p) => {
            const contenido = (
              <div className="grid gap-4 px-4 py-7 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="display flex items-center gap-2 text-[20px]">
                    {p.nombre}
                    {p.destacado && (
                      <span className="rounded-full bg-[var(--acento)] px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-white">
                        En producción
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-[14px] text-[var(--gris)]">
                    {p.tipo} · {p.anio}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <p className="max-w-[62ch] text-[16px] leading-relaxed">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] text-[var(--gris)]">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--linea)] px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-[var(--acento)]">
                    {p.interno ? "Ver el caso" : "Abrir el sitio"}
                    <ArrowUpRight className="flecha h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            );

            return (
              <li key={p.nombre} className="border-b border-[var(--linea)]">
                {p.interno ? (
                  <Link href={p.link} className="fila block">
                    {contenido}
                  </Link>
                ) : (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fila block"
                  >
                    {contenido}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* STACK */}
      <section id="stack" className="border-y border-[var(--linea)] bg-[var(--niebla)]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="display mb-8 text-[28px]">Stack</h2>

          <ul className="grid grid-cols-4 gap-y-8 sm:grid-cols-8">
            {tecnologias.map((tech) => (
              <li key={tech.name} className="flex flex-col items-center gap-2">
                <Image src={tech.logo} alt="" width={36} height={36} aria-hidden="true" />
                <span className="text-[13px] text-[var(--gris)]">{tech.name}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-[60ch] text-[15px] leading-relaxed text-[var(--gris)]">
            Además trabajo con Nest.js, Prisma, PostgreSQL y Supabase en el backend, y
            despliego en Vercel. Git y GitHub en todos los proyectos.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="display text-[28px]">Hablemos</h2>
            <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-[var(--gris)]">
              Busco mi primer puesto como frontend developer. Si tenés una búsqueda
              abierta o un proyecto en mente, escribime y te respondo el mismo día.
            </p>
            <p className="mt-6 text-[15px]">
              <a
                href="mailto:russ.natalia.villalba@outlook.com.ar"
                className="underline underline-offset-4 hover:text-[var(--acento)]"
              >
                russ.natalia.villalba@outlook.com.ar
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:col-span-7">
            <div>
              <label htmlFor="nombre" className="mb-1.5 block text-[14px] font-medium">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-[var(--linea)] bg-[var(--campo)] px-4 py-3 text-[15px]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-[14px] font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[var(--linea)] bg-[var(--campo)] px-4 py-3 text-[15px]"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-1.5 block text-[14px] font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full resize-y border border-[var(--linea)] bg-[var(--campo)] px-4 py-3 text-[15px]"
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="rounded-full bg-[var(--acento)] px-7 py-3 text-[15px] font-medium text-white hover:bg-[var(--acento-fuerte)] disabled:opacity-60"
            >
              {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
            </button>

            <p aria-live="polite" className="text-[14px]">
              {estado === "enviado" && (
                <span className="text-[var(--acento)]">
                  Mensaje enviado. Te respondo a la brevedad.
                </span>
              )}
              {estado === "error" && (
                <span className="text-red-600">
                  No se pudo enviar. Escribime directo a russ.natalia.villalba@outlook.com.ar
                </span>
              )}
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--linea)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-[14px] text-[var(--gris)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Natalia Villalba</span>
          <span>Hecho con Next.js y Tailwind CSS</span>
        </div>
      </footer>

      {/* VOLVER ARRIBA */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className={`fixed bottom-6 right-6 rounded-full bg-[var(--acento)] p-3 text-white shadow-lg transition-opacity hover:bg-[var(--acento-fuerte)] ${
          visible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ChevronUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </main>
  );
}
