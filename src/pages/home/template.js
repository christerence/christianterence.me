import React from "react";
import "./home.scss";

const HomeTemplate = () => (
  <div className="container">
    <div className="left">
      <div className="Profile">
        {/* <img id="profile-pic" src={require("../../assets/images/pic.jpeg")} /> */}
      </div>
      <h3 className="typewriter" id="name">Christian Cabauatan</h3>
    </div>

    <div className="right">
        <div className="About">
            

        </div>
    </div>
  </div>
);

export default HomeTemplate;
