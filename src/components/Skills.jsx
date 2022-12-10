import React from "react";
import data from "../data/Skill.json";
import skillcss from "../Styles/skills.module.css";
const Skills = () => {
  return (
    <div className={skillcss.skill_container}>
      <div className={skillcss.skillBox}>
        <div className={skillcss.skillshead}>
          <h3>Skills & Tools</h3>
          <h4>What I know</h4>
        </div>
      </div>
      <div className={skillcss.skillBox}>
        {data.skills?.map((item, i) => {
          return (
            <div key={i} className={skillcss.skill_box}>
              <img src={item.imgurl} alt="" />
              <h1>{item.skill}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
