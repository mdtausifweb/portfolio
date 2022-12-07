import React from "react";
import footercss from "../Styles/footer.module.css";
const Footer = () => {
  return (
    <div className={footercss.conatiner}>
      <div className={footercss.footerBox}>
        <span>copy </span>
        <span>right</span>
        <span>md</span>
        <span>tausif</span>
      </div>
    </div>
  );
};

export default Footer;
