import React, { useState } from "react";
import contactcss from "../Styles/contact.module.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
const Contact = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();

  const submit = () => {
    const body = {
      name,
      email,
      subject,
      message,
    };
    console.log("body", body);
  };
  return (
    <div className={contactcss.container}>
      <div className={contactcss.contact}>
        <div className={contactcss.conatctBox}>
          <div className={contactcss.emailSec}>
            <Link to="/">
              <CgProfile />
              <span>Md Tausif</span>
            </Link>
          </div>
          <div className={contactcss.emailSec}>
            <Link to="/">
              <VscGithubAlt />
              <span>Md Tausif</span>
            </Link>
          </div> <div className={contactcss.emailSec}>
            <Link to="/">
              <AiOutlineLinkedin />
              <span>Md Tausif</span>
            </Link>
          </div> <div className={contactcss.emailSec}>
            <Link to="/">
              <CgProfile />
              <span>Md Tausif</span>
            </Link>
          </div>
        </div>
        <div className={contactcss.conatctBox}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter your Subject"
              onChange={(e) => setsubject(e.target.value)}
            />
          </div>
          <div className="inputs">
            <textarea
              type="text"
              placeholder="Enter your Message"
              onChange={(e) => setmessage(e.target.value)}
              name="message"
              cols="23"
              rows="2"
            ></textarea>
          </div>
          <div className="inputs">
            <button className={contactcss.subBtn} onClick={submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
