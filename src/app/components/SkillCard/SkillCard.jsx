import style from "./SkillCard.module.css"

export default function SkillCard({ category, classname, icon, techs }) {
  return (
    <div
      className={style[`${classname.toLowerCase()}Container`]}
      key={category}
    >
      {icon}
      <h3>{category}</h3>
      <div className={style.techsContainer}>
        {techs.map(({ techname, techicon }) => (
          <span key={techname} className={style.tech}>
            {techicon} {techname}
          </span>
        ))}
      </div>
    </div>
  );
}
