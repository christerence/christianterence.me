import React from "react";
import "./side.css";
const Side = ({ languages, tools }) => {
  return (
    <div className="side">
      <div className="side-body">
        <div class="side-first-col">
          <div className="side-title">LANGUAGES</div>
          {languages &&
            languages.map(language => (
              <div className="skill">{`- ${language}`}</div>
            ))}
        </div>
        <div className="side-second-col">
          <div className="side-title">SKILLS & TOOLS</div>
          {tools &&
            tools.map(tool => <div className="skill">{`- ${tool}`}</div>)}
        </div>
      </div>
    </div>
  );
};

export { Side };
