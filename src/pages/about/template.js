import React from "react";
import "./about.scss";

import { NavBar } from "../../components/navbar/nav";

const paths = [
  { name: "home", link: "/", external: false },
  { name: "github", link: "https://www.github.com/christerence", external: true },
  { name: "resume", link: "https://drive.google.com/file/d/1FyV1MlR5EYYKT6xG4eQ267afJH2sHOdH/view?usp=sharing", external: true },
  { name: "portfolio", link: "https://christerence.github.io", external: true}
];


const AboutTemplate = () => (
  <div className="about-container">
    <NavBar paths={paths} />
    <div className="detail about">
      <div className="detail-right">
        <h1 className="detail-title">About Me:</h1>
        <div className="detail-body">
          beep bop beep bop beep bop beep bop beep bop beep bop beep bop beep
          bop beep bop beep bop beep bop beep bop beep bop beep bop beep bop
          beep bop beep bop beep bop beep bop beep bop beep bop beep bop beep
          bop beep bop beep bop beep bop beep bop beep bop beep bop beep bop.
        </div>
      </div>
      <div className="detail-left">
        <div className="detail-profile">
          <img
            id="about-pic"
            src={require("../../assets/images/profilepicture.jpeg")}
          />
        </div>
      </div>
    </div>
    <div className="detail">
      <div className="detail-skills">
        <h1 className="detail-title-skills">Programming Languages:</h1>
        <div className="detail-body">
          <ul>
            <li>Java</li>
            <li>Javascript</li>
            <li>C</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
      <div className="detail-skills">
        <h1 className="detail-title-skills">Skills:</h1>
        <div className="detail-body">
          <ul>
            <li>Mobile Development </li> <li>Web Development</li>{" "}
            <li>ReactJS</li> <li>React-Native</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AboutTemplate;
