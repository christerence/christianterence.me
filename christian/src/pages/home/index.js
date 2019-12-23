import React, { useState } from "react";
import "./style.css";
import { Header, Footer } from "../../components";

function Home() {
  const [snap, setSnap] = useState(false);
  const openSnap = () => setSnap(!snap);
  return (
    <div className="home">
      <Header name="Christian Terence Cabauatan" />
      <div className="main">
        <div className="main-body">
          <div className="one box">
            <div className="box-content">
              <div className="box-title">
                <p>About</p>
              </div>
              <div className="box-preview">
                <div className="about-box">
                  <p>
                    My name is Christian. Currently a senior at Virginia Tech.
                    I'm looking for a full-time/part-time position to utilize
                    skills in Computer Science; Special Interests in Software
                    Development: Mobile and Web.
                  </p>
                </div>
              </div>
              <div className="box-more">
                <p className="more-text">
                  Learn More <i className="fas fa-arrow-alt-circle-right" />
                </p>
              </div>
            </div>
          </div>

          <div className="two box">
            <div className="box-content">
              <div className="box-title">
                <p>Projects</p>
              </div>
              <div className="box-preview">
                <div className="projects-box">
                  <div
                    className="project"
                    onClick={() => {
                      window.open(
                        "https://github.com/christerence/StudentCompanion"
                      );
                    }}
                  >
                    <i className="fas fa-book" />
                  </div>

                  <div
                    className="project"
                    onClick={() => {
                      window.open(
                        "https://songorganizer.herokuapp.com/"
                      );
                    }}
                  >
                    <i className="fas fa-music" />
                  </div>

                  <div
                    className="project"
                    onClick={() => {
                      window.open("https://github.com/christerence/Blabber");
                    }}
                  >
                    <i className="fas fa-comments" />
                  </div>
                </div>
              </div>
              <div className="box-more">
                <p className="more-text">
                  Learn More <i className="fas fa-arrow-alt-circle-right" />
                </p>
              </div>
            </div>
          </div>

          <div className="three box">
            <div className="box-content">
              <div className="box-title">
                <p>Skills/Languages</p>
              </div>
              <div className="box-preview">
                <div className="skills-box">
                  <div className="skills-col">
                    <ul>
                      <li>Java</li>
                      <li>C</li>
                      <li>Javascipt</li>
                      <li>Python</li>
                      <li>Scala</li>
                      <li>Prolog</li>
                    </ul>
                  </div>
                  <div className="skills-col">
                    <ul>
                      <li>ReactJs</li>
                      <li>React-Native</li>
                      <li>NodeJs</li>
                      <li>Docker</li>
                      <li>Firebase</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box-more">
                <p className="more-text">
                  Learn More <i className="fas fa-arrow-alt-circle-right" />
                </p>
              </div>
            </div>
          </div>

          <div className="four box">
            <div className="box-content">
              <div className="box-title">
                <p>Contact Me</p>
              </div>
              <div className="box-preview">
                <div className="contact-box">
                  <p>
                    Email: chrisc98@vt.edu <br />
                    LinkedIn: christianterence <br />
                    Github: christerence
                  </p>
                </div>
              </div>
              <div className="box-more">
                <p className="more-text">
                  Learn More <i className="fas fa-arrow-alt-circle-right" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer openSnap={openSnap} snap={snap} />
    </div>
  );
}

export { Home };
