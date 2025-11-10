import {
  AboutData,
  ContactItem,
  ProjectData,
  Skill,
  SocialLink,
} from "@/lib/type";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiPostgresql,
  SiMysql,
  SiAngular,
  SiHtml5,
  SiPhp,
  SiGooglecloud,
} from "react-icons/si";

export const contactData: ContactItem[] = [
  {
    type: "email",
    value: "developercvg@gmail.com",
    description: "Respuesta en menos de 24 horas",
  },
  {
    type: "phone",
    value: "+58 (416)-365-0354",
    description: "Lunes a Viernes - 9:00 a 18:00",
  },
  {
    type: "location",
    value: "La Guaira, Venezuela",
    description: "Disponible para trabajo remoto",
    mapUrl: "https://maps.google.com/?q=La+Guaira,Venezuela",
  },
];


export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/cleidygil",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cleidy-gil-7b1b552ab",
    icon: "linkedin",
  },
];

export const aboutData: AboutData = {
  name: "Cleidy Gil",
  title: "Desarrolladora Frontend",
  image: "./images/4.5.cvg.png",
  description:
    "Soy una apasionada desarrolladora frontend con más de 3 años de experiencia creando aplicaciones web modernas y responsive. Me especializo en React, Next.js y TypeScript, siempre buscando las mejores prácticas y las tecnologías más recientes. Me encanta transformar ideas complejas en interfaces intuitivas y eficientes.",
  experience:
    "+3 años desarrollando aplicaciones web modernas para startups y empresas nacionales. Especializada en React y ecosistemas JavaScript.",
  education:
    "TSU en Informática - Universidad Bolivariana de Venezuela. 2017 - 2020.",
  stats: [
    {
      value: "15+",
      label: "Proyectos",
    },
    // {
    //   value: "3+",
    //   label: "Años Exp"
    // },
    {
      value: "10+",
      label: "Clientes",
    },
    {
      value: "10+",
      label: "Tecnologías",
    },
  ],
};
export const skillsData: Skill[] = [
  {
    name: "React",
    percentage: 90,
    category: "frontend",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    percentage: 85,
    category: "frontend",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "TypeScript",
    percentage: 80,
    category: "frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Angular",
    percentage: 90,
    category: "frontend",
    icon: SiAngular,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    percentage: 95,
    category: "frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React Native",
    percentage: 80,
    category: "frontend",
    icon: SiReact,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    percentage: 88,
    category: "frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    percentage: 65,
    category: "backend",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Git",
    percentage: 85,
    category: "tools",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Figma",
    percentage: 70,
    category: "design",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "HTML5",
    percentage: 95,
    category: "frontend",
    icon: SiHtml5,
    color: "#F24E1E",
  },
  {
    name: "PosqtgreSQL",
    percentage: 65,
    category: "backend",
    icon: SiPostgresql,
    color: "#3776AB",
  },
  {
    name: "MySQL",
    percentage: 60,
    category: "backend",
    icon: SiMysql,
    color: "#47A248",
  },
  {
    name: "PHP",
    percentage: 65,
    category: "backend",
    icon: SiPhp,
    color: "#47A248",
  },
  {
    name: "API REST",
    percentage: 65,
    category: "backend",
    icon: SiGooglecloud,
    color: "#47A248",
  },
];

// Agrupar skills por categoría
export const skillsByCategory = {
  frontend: skillsData.filter((skill) => skill.category === "frontend"),
  backend: skillsData.filter((skill) => skill.category === "backend"),
  tools: skillsData.filter((skill) => skill.category === "tools"),
  design: skillsData.filter((skill) => skill.category === "design"),
};
export const projects: ProjectData[] = [
  {
    id: "1",
    title: "Movilpay Admin",
    description:
      "Plataforma de Servicio de Notificaciones de Transacciones Bancarias a diferentes empresas, con panel administrativo. Implementa autenticación JWT y gestión de inventario.",
    image: "./images/projects/moviladminnew.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcdn",
      "NextAuth",
    ],
    demoUrl: "https://demo.movilpay.app",
    codeUrl: "https://github.com/G-SOFT-TECHNOLOGIES/movilpay-admin",
    featured: true,
    date: "2024",
    type: "frontend",
  },
  {
    id: "2",
    title: "AgylSoft - Secoi",
    description:
      "Sistema de gestión empresarial (ERP) para el sector Aseo Urbano, con módulos de servicios, tarifas, clientes, condominios, tickets y facturación electrónica.",
    image: "./images/projects/secoi2.png",
    technologies: ["Angular", "HTML5", "API REST", "Chart.js"],
    demoUrl: "https://secoi.agylsoft.app/login",
    codeUrl: "https://github.com/G-SOFT-TECHNOLOGIES/secoi-frontend",
    featured: false,
    date: "2023",
    type: "frontend",
  },
  {
    id: "3",
    title: "Portal G-Network",
    description:
      "Sistema de gestión de usuarios para proveedores de servicios de Internet (ISP), con funcionalidades de administración de clientes, facturación y soporte técnico.",
    image: "./images/projects/gnet2.png",
    technologies: ["Angular", "Material-UI", "API REST", "CSS3", "HTML5"],
    demoUrl: "https://g-user.gnetworkve.com",
    codeUrl: "#",
    featured: true,
    date: "2023",
    type: "frontend",
  },
  {
    id: "4",
    title: "Portal Powerlink",
    description:
      "Sistema de gestión de usuarios para proveedores de servicios de Internet (ISP), con funcionalidades de administración de clientes, facturación y soporte técnico.",
    image: "./images/projects/powerlink.jpeg",
    technologies: ["Angular", "Tailwind CSS", "Material-UI", "API REST", "CSS3", "HTML5"],
    demoUrl: "#",
    codeUrl: "https://github.com/G-SOFT-TECHNOLOGIES/powerlink-gsoft-portal",
    featured: false,
    date: "2024",
    type: "frontend",
  },
  {
    id: "5",
    title: "G-Soft Admin",
    description:
      "Sistema de gestión administrativa para proveedores de servicios de Internet (ISP), con panel de control, gestión de usuarios y reportes personalizados.",
    image: "./images/projects/gsoftPanel.jpeg",
    technologies: ["Angular", "Material-UI", "Tailwind CSS", "API REST", "CSS3", "HTML5"],
    demoUrl: "https://pwlf.agylsoft.app/login",
    codeUrl: "https://github.com/G-SOFT-TECHNOLOGIES/powerlink-gsoft-frontend",
    featured: true,
    date: "2024",
    type: "frontend",
  },
  {
    id: "6",
    title: "Pagina Sorteos - Bahia SuperMarket",
    description:
      "Plataforma de sorteos en línea en tiempo real.",
    image: "./images/projects/sorteobaihia.gif",
    technologies: ["Angular", "js-confetti","Tailwind CSS", "API REST", "Styled Components"],
    demoUrl: "#",
    codeUrl: "https://github.com/cleidygil/sorteo-bahia",
    featured: true,
    date: "2023",
    type: "frontend",
  },
];
