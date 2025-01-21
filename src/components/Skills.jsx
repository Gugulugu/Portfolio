import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      category: "AI/ML Frameworks",
      items: ["PyTorch", "TensorFlow", "Hugging Face (HF)", "Scikit-learn", "OpenCV"],
    },
    {
      category: "Specialized AI Skills",
      items: ["Graph Neural Networks", "Vision Transformers", "Computer Vision", "NLP", "Reinforcement Learning"],
    },
    {
      category: "Data & Analytics",
      items: ["SQL", "Power BI", "Tableau"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Azure", "Git", "Cypress"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="projects-title">Skills</h2>
      <div className="skills-categories">
        {skills.map((skillCategory, idx) => (
          <div className="category" key={idx}>
            <h4>{skillCategory.category}</h4>
            <ul>
              {skillCategory.items.map((skill, skillIdx) => (
                <li key={skillIdx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
