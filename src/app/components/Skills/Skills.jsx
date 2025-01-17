import style from "./Skills.module.css"
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJava, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiSpring, SiPostman, SiIntellijidea, SiDbeaver } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { FiLayout, FiServer, FiTool } from "react-icons/fi";
import SkillCard from "../SkillCard/SkillCard";

const skills = [
  {
    category: "Front-end",
    classname: "frontend",
    icon: <FiLayout size={40} />,
    techs: [{
      techname: "React",
      techicon: <FaReact />
    }, 
    {
      techname: "JavaScript",
      techicon: <IoLogoJavascript />
    }, 
    {
      techname: "HTML5",
      techicon: <FaHtml5 />
    }, 
    {
      techname: "CSS3",
      techicon: <FaCss3Alt />
    }, 
    {
      techname: "Bootstrap",
      techicon: <FaBootstrap />
    },
    {
      techname: "Sass",
      techicon: <FaSass />
    }],
  },
  {
    category: "Back-end",
    classname: "backend",
    icon: <FiServer size={40} />,
    techs: [
      {
        techname: "Java",
        techicon: <FaJava />
      }, 
      {
        techname: "Spring Boot",
        techicon: <SiSpring />
      }, 
      {
        techname: "PostgreSQL",
        techicon: <BiLogoPostgresql />
      }
    ],
  },
  {
    category: "Tools",
    classname: "tools",
    icon: <FiTool size={40} />,
    techs: [
      {
        techname: "Postman",
        techicon: <SiPostman />
      }, 
      {
        techname: "Git",
        techicon: <FaGitAlt />
      }, 
      {
        techname: "GitHub",
        techicon: <FaGithub />
      }, 
      {
        techname: "VSCode",
        techicon: <VscVscode />
      },
      {
        techname: "IntelliJ",
        techicon: <SiIntellijidea />
      }, 
      {
        techname: "DBeaver",
        techicon: <SiDbeaver />
      }, {
        techname: "Figma",
        techicon: <FaFigma />
      }
    ],
  },
];

export default function Skills() {
  return (
    <section className={style.skills} id="skills">
      <h2>Skills</h2>
      <div className={style.stacksContainer}>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
