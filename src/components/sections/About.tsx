// components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { StatsCard } from "@/components/ui/StatsCard";
import { AboutData } from "@/lib/type";
type AboutProps = {
  about: AboutData;
};
export const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="section-padding  rounded-lg shadow-lg my-6 py-24">
      <div className="container-custom p-6 md:p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre{" "}
            <span className="text-purple-600 dark:text-purple-400">Mí</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conoce más sobre mi journey, pasiones y lo que me motiva como
            desarrolladora.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-4">
          {/* Imagen Personal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative justify-self-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {about.name}
                </h3>
                <p className="text-xl text-purple-600 dark:text-purple-400 font-medium mb-4">
                  {about.title}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {about.description}
                </p>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative z-10 justify-center text-lg md:text-xl py-6 text-gray-500 dark:text-gray-400 mb-8 italic"
            >
              &quot;Construyendo soluciones web y móviles funcionales y
              responsivas.&quot;
            </motion.p>
          </motion.div>

          {/* Información Personal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Experiencia y Educación */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Experiencia
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {about.experience}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v6"
                    />
                  </svg>
                  Educación
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {about.education}
                </p>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {about.stats.map((stat, index) => (
                <StatsCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
