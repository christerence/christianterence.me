import React from "react";
import "./style.css";
import { Header, Footer, Description, Side, Projects } from "../../components";

function Home() {
  return (
    <div className="home">
      <Header name="Christian Terence" />
      <div className="main">
        <div className="main-title">
          <p>About Me:</p>
        </div>
        <div className="main-body">
          <div
            className="photo"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/christianterencecabauatan/"
              );
            }}
          />
          <Description
            desc="My name is Christian Terence Cabauatan. Currently a Senior at Virginia
        Tech. I'm looking for a Full-Time Position to utilize skills in Computer
        Science; Special Interests in Software Development: Mobile and Web."
          />
          <Projects />
        </div>
      </div>
      <Side languages={["Java", "Javascript", "Kotlin", "C", "Python"]} tools={["Node", "Docker", "React", "GIT", "Android"]}/>
      <Footer />
    </div>
  );
}

export { Home };
