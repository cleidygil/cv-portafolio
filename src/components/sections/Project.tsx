// @flow
import * as React from "react";
import { ProjectData } from "@/lib/type";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

type Props = {
  projects: ProjectData[];
};
export const Project = ({ projects }: Props) => {
  return (
     <section id="projects" className="section-padding rounded-lg shadow-lg my-6 py-24">
      <div className="container-custom p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mis <span className="text-purple-600 dark:text-purple-400">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado y de los que me siento orgulloso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
