import style from "./Contact.module.css"
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section className={style.contact} id="contact">
      <h2>Contact me</h2>
      <div className={style.contactLinks}>
        <a href="mailto:p_miguel2004@hotmail.com" target="_blank">
          <FiMail size={20} /> Send an email
        </a>
        <a href="https://www.linkedin.com/in/pmiguell/" target="_blank">
          <FiLinkedin size={20} /> Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
