import React from "react";
import projectcss from "../Styles/project.module.css";
import data from "../data/Skill.json";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className={projectcss.project_container}>
      {data.projectimge.map((item, i) => {
        return (
          <div key={i} className={projectcss.projectBox}>
            <img src={item.imgurl} alt={item.url} />
            <h1>{item.projectname}</h1>
            <h3>{item.property}</h3>
            <h1>{item.tech}</h1>
            <div className={projectcss.techSec}>
              {item.TechStack.map((link, j) => {
                return (
                  <div key={j} className={projectcss.tech}>
                    <img src={link.logo} alt={item.url} />
                    <h1>{link.tech}</h1>
                  </div>
                );
              })}
            </div>
            <div className={projectcss.codesec}>
              {item.code.map((link, j) => {
                return (
                  <div key={j}>
                    <Link to={link.codelink}>
                      <button>Code</button>
                    </Link>
                    <Link to={link.websitelink}>
                      <button>live Website</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
