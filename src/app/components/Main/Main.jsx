import style from "./Main.module.css"

export default function Main() {
  return (
    <main className={style.main} id="home">
      <h1>Pedro Miguel</h1>
      <h2>
        Software <span className={style.highlight}>Developer</span>
      </h2>
      <p>Welcome to my portfolio!</p>
      <div className={style.mainButtonsContainer}>
        <a href="#projects">View projects</a>
        <a href="#contact">Contact me</a>
      </div>
    </main>
  );
}
