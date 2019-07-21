import React from "react";
import "./projects.css";

const Projects = ({}) => {
  return (
    <div className="projects">
      <div
        className="project-item"
        onClick={() => {
          window.open("https://github.com/christerence/StudentCompanion");
        }}
      >
        Student Companion
      </div>
      <div
        className="project-item"
        onClick={() => {
          window.open("https://github.com/christerence/spotify-playlist");
        }}
      >
        Spotify Playlist
      </div>
      <div
        className="project-item"
        onClick={() => {
          window.open("https://github.com/christerence/Blabber");
        }}
      >
        Blabber
      </div>
    </div>
  );
};

export { Projects };
