import React from "react";
import "./description.css";

const Description = ({ desc }) => {
  return (
    <div className="description">
      <p>{desc}</p>
      <div className="desc-buttons">
        <div
          className="desc-button"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Tyj5LbtSDuC82qcPVzgTLhf12_U3ePAf/view?usp=sharing"
            );
          }}
        >
          resume
        </div>

        <div
          className="desc-button"
          onClick={() => {
            window.open("https://www.linkedin.com/in/christianterence");
          }}
        >
          linkedin
        </div>

        <div
          className="desc-button"
          onClick={() => {
            window.open("https://github.com/christerence");
          }}
        >
          github
        </div>
      </div>
    </div>
  );
};

export { Description };
