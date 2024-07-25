import React from "react";
import "./Skills.css"

const Skills = () => {
    const skillsList = ["HTML", "CSS", "JavaScript", "React", 
      "SpringBoot", "MySQL", "DataStructures","Java","C++","PostGresql","Node.js",]; // add your skills here
  
    return (
      <>
      <div className="skill">
        Skills
      </div>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card marquee">
            <span>{skill}</span>
          </div>
        ))}
      </div>
      </>
    );
  };
  
  export default Skills;