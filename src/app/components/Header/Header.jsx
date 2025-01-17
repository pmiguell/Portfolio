import style from "./Header.module.css";
import { FiMenu } from "react-icons/fi";
import { IoCodeSlashOutline } from "react-icons/io5";
import Navigation from "../Navigation/Navigation";

export default function Header({ isMenuOpen, toggleMenu }) {
  return (
    <header className={style.header}>
      <a href="#" className={style.logo}>
        <IoCodeSlashOutline size={30} />
        <span>pedro miguel</span>
      </a>

      <button
        className={style.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {<FiMenu size={22} />}
      </button>

      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
