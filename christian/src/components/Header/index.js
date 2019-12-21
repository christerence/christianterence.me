import React from "react";
import "./header.css";
import Pdf from '../../assets/ChristianTerenceCabauatan.pdf';
const Header = ({ name }) => {
  return (
    <div className="header">
      <div className="title">{name}</div>
      <a className="resume" href={Pdf} download>Resume</a>
    </div>
  );
};
export { Header };
