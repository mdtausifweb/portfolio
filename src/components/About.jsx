import React from "react";
import aboutcss from "../Styles/about.module.css";
import profileimg from "../images/img.png";
const About = () => {
  return (
    <div className={aboutcss.container}>
      <div className={aboutcss.headSec}>
        <div>About me</div>
        <div>Who am I</div>
      </div>
      <div className={aboutcss.bodySec}>
        <div className={aboutcss.imageSec}>
          <img src={profileimg} alt="" />
        </div>
        <div className={aboutcss.textSec}>
          <div>
            I'm Md Tausif and I'm a Full Stack <span>Web Developer</span>
          </div>
          <div>
            In 2020 I have completed my graduation with B.Sc and decided to
            shape my career with coding skills. Now I am a MERN Stack Developer
            having strong knowledge of JavaScript and React. I love to convert
            ideas into reality with my coding skills. I am an excellent team
            player with great interpersonal skills. I want to associate with a
            reputed organization and looking to use and enhance my skills..
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
