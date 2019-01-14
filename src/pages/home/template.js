import React from "react";
import "./home.scss";
import { NavBar } from "../../components/navbar/nav";

const paths = [
  { name: "ABOUT", link: "/about", external: false },
  { name: "GITHUB", link: "https://www.github.com/christerence", external: true },
  { name: "RESUME", link: "https://drive.google.com/file/d/1FyV1MlR5EYYKT6xG4eQ267afJH2sHOdH/view?usp=sharing", external: true },
  { name: "PORTFOLIO", link: "https://christerence.github.io", external: true},
  { name: "TERMINAL", link: "/terminal", external: false}
];

const HomeTemplate = ({onClickPic}) => (
  <div className="home-container">
    <div className="profile" onClick={onClickPic}>
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
