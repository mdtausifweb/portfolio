import React from "react";
import navbarcss from "../Styles/navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [temp, setTemp] = useState(true);
  const manuHndler = () => {
    temp ? setTemp(false) : setTemp(true);
  };
  return (
    <div className={navbarcss.container}>
      <div className={navbarcss.childContainer}>
        <div className={navbarcss.hembergar}>
          <i onClick={manuHndler} className="fa fa-bars"></i>
        </div>
        <div className={navbarcss.logoSec}>
          <Link to="/">
            <div>Md Tausif</div>
          </Link>
        </div>
        <div></div>
        {temp ? (
          <div className={navbarcss.manuSec}>
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/">
              <div>About</div>
            </Link>
            <Link to="/">
              <div>Skills</div>
            </Link>
            <Link to="/">
              <div>Projects</div>
            </Link>
            <Link to="/">
              <div>Contact</div>
            </Link>
          </div>
        ) : (
          ""
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
