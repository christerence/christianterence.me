import React from "react";
import "./home.scss";
import { NavBar } from "../../components/navbar/nav";

const paths = [
  { name: "about", link: "/about", external: false },
  { name: "github", link: "https://www.github.com/christerence", external: true },
  { name: "resume", link: "https://drive.google.com/file/d/1FyV1MlR5EYYKT6xG4eQ267afJH2sHOdH/view?usp=sharing", external: true },
  { name: "portfolio", link: "https://christerence.github.io", external: true}
];

const HomeTemplate = ({onClickPic}) => (
  <div className="home-container">
    <div className="Profile" onClick={onClickPic}>
      <img
        id="profile-pic"
        src={require("../../assets/images/profilepicture.jpeg")}
      />
    </div>
    <div style={{marginBottom: '2vmin'}}>
      <h3 className="typewriter" id="name">
        Christian Terence Cabauatan
      </h3>
    </div>

    <NavBar paths={paths} />
  </div>
);

export default HomeTemplate;
