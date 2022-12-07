import React from "react";
import profilecss from "../Styles/profile.module.css";
import banner from "../images/banner.jpg";
import profileimgs from "../images/img.png";
// import { Link } from "react-router-dom";
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
            <h2>
              <span>Md Tausif</span>
            </h2>
          </div>
          <div>
            <h2>
              And I'm a Full Stack <span>Web Developer</span>
            </h2>
          </div>
          {/* <div>
            <Link to="https://a1e535e0-b8b1-4f97-b8e6-0a1ec03a8794.usrfiles.com/ugd/a1e535_cff917e00553480582decf71750f3263.pdf"></Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
