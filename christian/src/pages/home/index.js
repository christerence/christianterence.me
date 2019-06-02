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
            RESUME
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main-title">About Me:</div>
        <div className="main-body">
          <div
            className="photo"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/christianterencecabauatan/"
              );
            }}
          />
          <div className="description">
            <p>
              My name is Christian Terence Cabauatan. Currently a Senior at
              Virginia Tech. I'm looking for a Full-Time Position to utilize
              skills in Computer Science; Special Interests in Software
              Development: Mobile and Web.
            </p>
          </div>
          <div className="projects">
            <div
              className="project-item"
              onClick={() => {
                window.open("https://github.com/christerence/StudentCompanion");
              }}
            >
              PROJECT <br /> ONE
            </div>
            <div
              className="project-item"
              onClick={() => {
                window.open("https://github.com/christerence/spotify-playlist");
              }}
            >
              PROJECT <br /> TWO
            </div>
            <div
              className="project-item"
              onClick={() => {
                window.open("https://github.com/christerence/Blabber");
              }}
            >
              PROJECT <br /> THREE
            </div>
          </div>
        </div>
      </div>

      <div className="side">
        <div className="side-title">LANGUAGES & TOOLS</div>
        <div className="side-body">
          <div className="skill">- Java</div>
          <div className="skill">- Javascript</div>
          <div className="skill">- Python</div>
          <div className="skill">- C</div>
          <div className="skill">- Kotlin</div>
          <div className="skill">- Node</div>
          <div className="skill">- Docker</div>
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
