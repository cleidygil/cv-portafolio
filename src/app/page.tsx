"use client";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/sections/Header";
import { Project } from "@/components/sections/Project";
import { SkillSection } from "@/components/sections/Skill";
import { motion, useScroll } from "framer-motion";
import {
  aboutData,
  projects,
  skillsData,
  contactData,
  socialLinks,
} from "../lib/data";
export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full  flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            zIndex: 9999,
            backgroundColor: "#a200ffff",
          }}
        /> 
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            height: "500vh",
          }}
          className="flex flex-col text-base font-medium text-zinc-800 dark:text-zinc-200  my-4 w-full dark:bg-transparent"
        >
          {/* <HeroMinimal /> */}
          <Header key="header" />
          <About key="about" about={aboutData} />
          <SkillSection key="skills" skills={skillsData} />
          <Project key="projects" projects={projects} />
          <Contact key="contact"  contactInfo={contactData} socialLinks={socialLinks} />
        </article>
      </main>
    </div>
  );
}
