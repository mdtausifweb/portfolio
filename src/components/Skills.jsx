import React from "react";
import data from "../data/Skill.json";
import skillcss from "../Styles/skills.module.css";
const Skills = () => {
  return (
    <div className={skillcss.skill_container}>
      {data.skills?.map((item, i) => {
        return (
          <div key={i} className={skillcss.skill_box}>
            <img src={item.imgurl} alt="" />
            <h4>{item.skill}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
