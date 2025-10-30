// components/sections/Skills.tsx
"use client";

import { motion } from "framer-motion";
import CircularProgress from "@/components/ui/CircularProgress";
import { Skill } from "@/lib/type";
import { bitcount } from "../ui/fonts";

type Props ={
  skills: Skill[];
}

export const SkillSection = ({ skills }: Props) => {
  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg my-6 py-24"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white my-6">
            Mis{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear experiencias
            excepcionales
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group z-10"
            >
              <div className="relative mb-4">
                <CircularProgress
                  value={skill.percentage}
                  size={120}
                  strokeWidth={8}
                  color={getSkillColor(skill.percentage)}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <skill.icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-200" />
                </div>
              </div>

              <div className={`${bitcount.className} text-center`}>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.percentage}%
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Función para colores dinámicos según el porcentaje
function getSkillColor(percentage: number): string {
  if (percentage >= 90) return "#10B981"; // green-500
  if (percentage >= 80) return "#3B82F6"; // blue-500
  if (percentage >= 70) return "#8B5CF6"; // violet-500
  if (percentage >= 60) return "#F59E0B"; // amber-500
  return "#EF4444"; // red-500
}
