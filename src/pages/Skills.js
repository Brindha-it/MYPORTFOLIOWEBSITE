import React from "react";
import "../App.css";

function Skills() {
  return (
    <div className="skills-page">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-wrapper">
        {/* Left Big Section */}
        <div className="skills-main">
          <div className="skill-group">
            <h3>Programming</h3>
            <div className="skills-list">
              <span>C</span>
              <span>Python</span>
              <span>Java</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Web Development</h3>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="skills-side">
          <div className="skill-group">
            <h3>UI/UX Design</h3>
            <div className="skills-list">
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Canva</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools</h3>
            <div className="skills-list">
              <span>MongoDB</span>
              <span>GitHub</span>
              <span>PowerBI</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Typing</h3>
            <div className="skills-list">
              <span>English</span>
              <span>Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;