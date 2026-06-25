import React, { useState } from "react";
import "../App.css";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Responsive Page Design",
      description:
        "A UI/UX design project created using Figma, focusing on responsive layouts and user-friendly interface design across multiple devices.",
      link: "https://www.linkedin.com/posts/brindharamanathan_uiuxdesign-figma-userexperience-activity-7354731391869247488-A9uq",
    },
    {
      title: "Online Feedback System",
      description:
        "A web-based application where users can submit feedback and administrators can manage responses efficiently.",
      link: "https://www.linkedin.com/posts/brindharamanathan_webdevelopment-fullstackdevelopment-mongodb-activity-7453334876927315969-d8Z4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFJc_IBXUujIvk1vAXGrRIxoqgd4mmFBps",
    },
    {
      title: "Temple Booking Website",
      description:
        "An online platform for booking temple pooja services with a simple and user-friendly interface.",
      link: "https://www.linkedin.com/posts/brindharamanathan_fullstackdevelopment-webdevelopment-php-activity-7453340059644297216-oE8w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFFJc_IBXUujIvk1vAXGrRIxoqgd4mmFBps",
    },
    {
      title: "MyHelper Mobile App",
      description:
        "A mobile application designed to assist users with daily services, focusing on usability and clean UI design.",
      link: "https://www.linkedin.com/posts/brindharamanathan_appdevelopment-mobileapp-learning-activity-7445819656914952193-psWW",
    },
    {
  title: "EGS Campus Navigation System",
  description:
    "A smart campus navigation platform that helps students and visitors locate departments, laboratories, classrooms, and campus facilities efficiently.",
  link: "https://campus-navigator-3hd3.onrender.com/"
   
  
},
  ];

  const toggleProject = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleProject(index)}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            <div className="project-content">
              <p>{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.title === "MyHelper Mobile App"
                    ? "View Demo"
                    : project.title === "Responsive Page Design"
                    ? "View Design"
                    : "View Project"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 