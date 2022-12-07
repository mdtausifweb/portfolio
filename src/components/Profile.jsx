import React from "react";
import profilecss from "../Styles/profile.module.css";
import banner from "../images/banner.jpg";
import profileimgs from "../images/img.png";
import {Link} from "react-router-dom"
const Profile = () => {
  return (
    <div className={profilecss.container}>
      <div className={profilecss.childContainer}>
        <div className={profilecss.bigimage}>
          <img src={banner} alt="" />
        </div>
        <div className={profilecss.contantSec}>
          <div>
            <img src={profileimgs} alt="" />
          </div>
          <div>
            <h2>Hello, My name is</h2>
          </div>
          <div>
            <h2>Md Tausif</h2>
          </div>
          <div>
            <h2>
              And I'm a Full Stack <span>Web Developer</span>
            </h2>
          </div>
          <div>
            <Link to="https://www.canva.com/design/DAFMIdWdS4A/n6Kld7SEr3CTDW7-Ot7-tQ/edit"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
