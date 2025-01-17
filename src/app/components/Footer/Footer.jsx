import style from "./Footer.module.css"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: <FiGithub size={20} />, link: "https://github.com/pmiguell" },
  { icon: <FiLinkedin size={20} />, link: "https://linkedin.com/in/pmiguell" },
  { icon: <FiMail size={20} />, link: "mailto:p_miguel2004@hotmail.com" },
];

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>Copyright © 2025 by Pedro Miguel. All rights reserved.</p>
      <div className={style.socialMediaContainerFooter}>
        {socialLinks.map(({ icon, link }) => (
          <a href={link} key={link} target="_blank">
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
