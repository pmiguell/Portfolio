import style from "./App.module.css";
import Header from "./app/components/Header/Header"
import Main from "./app/components/Main/Main"
import About from "./app/components/About/About"
import Skills from "./app/components/Skills/Skills"
import Projects from "./app/components/Projects/Projects"
import Contact from "./app/components/Contact/Contact"
import Footer from "./app/components/Footer/Footer"
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
