import style from "./About.module.css"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: <FiGithub size={20} />, link: "https://github.com/pmiguell" },
  { icon: <FiLinkedin size={20} />, link: "https://linkedin.com/in/pmiguell" },
  { icon: <FiMail size={20} />, link: "mailto:p_miguel2004@hotmail.com" },
];

export default function About() {
  return (
    <section className={style.about} id="aboutme">
      <h2>About me</h2>
      <p>
        I'm a Systems Information student at UFU, passionate about solving
        complex problems through technology and creating innovative solutions
        with real impact. My interests focus on front-end and back-end
        development, using Java, Spring Boot, PostgreSQL, JavaScript, React, and
        other technologies.
      </p>
      <p>
        Currently, I'm a member in the Tutorial Education Program (PET-SI),
        where I participate in academic activities related to teaching,
        research, and community outreach. In the field of research, I'm part of
        a Scientific Initiation project focused on developing a cyber threat
        detection system, where I'm responsible for developing the Dashboard and
        APIs for risk analysis and threat monitoring. These initiatives have
        honed essential skills for my professional growth, such as
        communication, teamwork, proactivity, and leadership.
      </p>
      <div className={style.socialMediaContainer}>
        {socialLinks.map(({ icon, link }) => (
          <a href={link} key={link} target="_blank">
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
}
