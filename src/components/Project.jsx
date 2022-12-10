import React from "react";
import projectcss from "../Styles/project.module.css";
import data from "../data/Skill.json";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className={projectcss.project_container}>
      <div className={projectcss.ChaliContainer}>
        <div className={projectcss.projecthead}>
          <h3> Projects </h3>
          <h4>I Have Done Till Now</h4>
        </div>
      </div>
      <div className={projectcss.skillsChaliContainer}>
        {data.projectimge.map((item, i) => {
          return (
            <div key={i} className={projectcss.projectBox}>
              <img src={item.imgurl} alt={item.url} />
              <h1>{item.projectname}</h1>
              <p>{item.property}</p>
              <h2>{item.tech}</h2>
              <div className={projectcss.techSec}>
                {item.TechStack.map((link, j) => {
                  return (
                    <div key={j} className={projectcss.tech}>
                      <img src={link.logo} alt={item.url} />
                      <h5>{link.tech}</h5>
                    </div>
                  );
                })}
              </div>
              <div className={projectcss.codesec}>
                <div className={projectcss.codebtn}>
                  {item.code.map((link, j) => {
                    return (
                      <div key={j} className={projectcss.btnSec}>
                        <Link to={link.codelink}>
                          <button>Code</button>
                        </Link>
                        <Link to={link.websitelink}>
                          <button>live</button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
