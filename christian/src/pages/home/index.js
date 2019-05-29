import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="menu">
          <i class="fas fa-bars" />
        </div>
        <div className="title">Christian Terence</div>
        <div className="resume">
          <div
            className="resume-button"
            onClick={() => {
              window.open(
                "https://drive.google.com/open?id=1AbFNqtFQcjMl1CggIq_RM5ZHCEZqgznc"
              );
            }}
          >
            <i class="fas fa-file" />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main-title">About Me:</div>
        <div className="main-body">
          <div className="photo" />
          <div className="description">
            <p>
              My name is Christian Terence Cabauatan. Currently a Senior at
              Virginia Tech. I am very interested in mobile and web development.
              I like exploring frameworks and libraries, such as React and
              Node.
            </p>
          </div>
          <div className="projects" />
        </div>
      </div>

      <div className="side">
        <div className="side-title">SKILLS & LANGUAGES</div>
        <div className="side-body">
          <div className="skill">- Java</div>
          <div className="skill">- Javascript</div>
          <div className="skill">- Python</div>
          <div className="skill">- C</div>
          <div className="skill">- Kotlin</div>
          <div className="skill">- Node</div>
          <div className="skill">- React</div>
          <div className="skill">- React-Native</div>
          <div className="skill">- Mobile Development</div>
          <div className="skill">- Web Development</div>
        </div>
      </div>

      <div className="footer">
        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/christianterencecabauatan/"
            );
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
    </div>
  );
}

export default Home;
