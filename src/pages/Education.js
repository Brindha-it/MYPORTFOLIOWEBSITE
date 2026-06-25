import React from "react";
import "../App.css";

function Education() {
  const educationData = [
    {
      degree: "B.Tech Information Technology",
      institution: "E.G.S Pillay  Engineering College",
      year: "2023 - 2027",
      details:
        "Focused on software development, machine learning, and UI/UX design.",
    },
    {
      degree: "Higher Secondary",
      institution: "State Board",
      year: "2022 - 2023",
      details:
        "Strong foundation in Mathematics and Computer Science.",
    },
    {
      degree: "SSLC",
      institution: "State Board",
      year: "2020  -  2021",
      details:
        "Built fundamental academic knowledge.",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="education-scroll">
        {educationData.map((edu, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">

              {/* FRONT */}
              <div className="flip-card-front">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <span>{edu.year}</span>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <p>{edu.details}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;