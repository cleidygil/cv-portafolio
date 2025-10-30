import { JSX } from "react";
import { IconType } from "react-icons";

export interface ProjectData {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  codeUrl: string
  featured: boolean
  date: string
  type: 'frontend' | 'fullstack' | 'mobile' | 'other'
}

export interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "tools" | "design";
  icon: IconType; // Tipo para iconos de react-icons
  color?: string;
}

export interface ContactItem {
  type: 'email' | 'phone' | 'location'
  value: string
  description?: string
  mapUrl?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface AboutData {
  name: string
  title: string
  image: string
  description: string
  experience: string
  education: string
  stats: StatItem[]
}

export interface StatItem {
  value: string
  label: string
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallback?: string
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}