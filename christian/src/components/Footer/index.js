import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div
        onClick={() => {
          window.open("https://www.linkedin.com/in/christianterencecabauatan/");
        }}
      >
        <i class="fab fa-linkedin icon" />
      </div>

      <div
        onClick={() => {
          window.open("https://github.com/christerence");
        }}
      >
        <i class="fab fa-github icon" />
      </div>
      <div
        onClick={() => {
          window.open("https://christerence.github.io");
        }}
      >
        <i class="fas fa-folder-open icon" />
      </div>
      <div
        onClick={() => {
          alert("add me: christiantcab");
        }}
      >
        <i class="fab fa-snapchat-square icon" />
      </div>
    </div>
  );
};

export { Footer };
