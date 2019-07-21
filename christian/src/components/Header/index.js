import React from "react";
import "./header.css";
const Header = ({ name }) => {
  return (
    <div className="header">
      <div className="title">{name}</div>
    </div>
  );
};
export { Header };
