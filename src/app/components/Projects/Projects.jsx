import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./Projects.module.css";
import ThreatLensImage from "../../src/assets/projects-img/ThreatLens.png"
import TaskManagementImage from "../../src/assets/projects-img/TaskManagement.png"
import MovieCatalogImage from "../../src/assets/projects-img/MovieCatalog.png"

const projects = [
  {
    title: "ThreatLens Dashboard",
    description:
      "Full-Stack Dashboard System for a Cyber Threat Detection System that uses data mining from the Dark Web, Surface Web, and Social Networks, aimed at facilitating risk analysis and threat monitoring.",
    techs: [
      "Java (Spring Boot)",
      "JavaScript (React)",
      "PostgreSQL",
      "CSS3",
      "Git/GitHub",
    ],
    image: ThreatLensImage,
    githubLink: "https://github.com/pmiguell/threatlens",
  },
  {
    title: "TaskManagement",
    description:
      "A web application developed to optimize task organization and increase productivity. Authenticated users can view, create, edit, and delete tasks, as well as manage them efficiently with features such as status tracking, deadline management, and categorization. The application's security is ensured through JWT-based authentication.",
    techs: [
      "Java (Spring Boot)",
      "JavaScript (React)",
      "PostgreSQL",
      "CSS3",
      "Git/GitHub",
    ],
    image: TaskManagementImage,
    githubLink: "#",
  },
  {
    title: "MovieCatalog",
    description:
      "A platform that allows users to explore and access information about various movies and TV shows. It features search and filtering functionalities, provides detailed descriptions, and has an intuitive interface. Developed with a responsive design to ensure accessibility across different devices.",
    techs: ["JavaScript (React)", "CSS3", "Git/GitHub"],
    image: MovieCatalogImage,
    githubLink: "https://github.com/pmiguell/MovieCatalog",
  },
];

export default function Projects() {
  return (
    <section className={style.projects} id="projects">
      <h2>Projects</h2>
      <div className={style.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
