import React from "react";
import "./footer.css";

const Footer = ({ openSnap, snap }) => {
  return (
    <div className="footer">
      <div
        onClick={() => {
          window.open("https://www.linkedin.com/in/christianterencecabauatan/");
        }}
      >
        <i className="fab fa-linkedin icon" />
      </div>

      <div
        onClick={() => {
          window.open("https://github.com/christerence");
        }}
      >
        <i className="fab fa-github icon" />
      </div>
      <div
        onClick={() => {
          window.open("https://christerence.github.io");
        }}
      >
        <i className="fas fa-folder-open icon" />
      </div>
      <div onClick={openSnap}>
        <i className="fab fa-snapchat-square icon" />
        {snap && (
          <div className="snap-modal">
            <div className="snap-content">
              <div className="snap-text">
                <i className="fab fa-snapchat-square" /> christiantcab
              </div>
              <span className="close">close</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Footer };
