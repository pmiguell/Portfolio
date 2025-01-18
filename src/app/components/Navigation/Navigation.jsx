import { FiX } from "react-icons/fi";
import style from "./Navigation.module.css";
import CurriculumVitae from "../../../assets/curriculum-vitae/CV - Pedro Miguel de Paula Silva.docx"

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#aboutme" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navigation({ isMenuOpen, toggleMenu }) {
  return (
    <nav className={`${style.navigation} ${isMenuOpen ? style.active : ""}`}>
      <div className={style.navigationTop}>
        <button
        className={style.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {<FiX size={22} />}
      </button>
      </div>
      
      <ul className={style.navList}>
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.link} onClick={() => toggleMenu(false)}>
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href={CurriculumVitae}
            download="Curriculum Vitae - Pedro Miguel"
            className={style.navBtnDownload}
          >
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
