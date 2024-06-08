import { ToolsData } from "@/interface/tools.interface";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { SiPrisma, SiDjango } from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import { FaPython } from "react-icons/fa6";



export const toolsInUse: ToolsData[] = [
  {
    id: 1,
    img: FaHtml5,
    tool: "HTML",
  },
  {
    id: 2,
    img: FaCss3Alt,
    tool: "CSS",
  },
  {
    id: 5,
    img: SiJavascript,
    tool: "JavaScript",
  },
  {
    id: 6,
    img: SiTypescript,
    tool: "TypeScript",
  },
  {
    id: 7,
    img: SiReact,
    tool: "ReactJS",
  },
  {
    id: 8,
    img: TbBrandNextjs,
    tool: "NextJS",
  },
  {
    id: 9,
    img: TbSql,
    tool: "SQL",
  },
  {
    id: 10,
    img: BiLogoPostgresql,
    tool: "PostgreSQL",
  },
  {
    id: 11,
    img: IoLogoNodejs,
    tool: "NodeJS",
  },
  {
    id: 12,
    img: SiTypescript,
    tool: "ExpressJS",
  },
  {
    id: 13,
    img: SiTypescript,
    tool: "NestJS",
  },
  {
    id: 14,
    img: SiTypescript,
    tool: "TypeORM",
  },
  {
    id: 15,
    img: SiPrisma,
    tool: "Prisma",
  },
];

export const studyingTools = [
  {
    id: 1,
    img: LiaJava,
    tool: "Java",
  },
  {
    id: 2,
    img:LiaJava,
    tool: "Spring Boot",
  },
  {
    id: 3,
    img:FaPython,
    tool: "Python",
  },
  {
    id: 4,
    img:SiDjango,
    tool: "Django",
  },
];
