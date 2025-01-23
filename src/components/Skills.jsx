import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      category: "AI/ML Frameworks",
      items: ["PyTorch", "TensorFlow", "Hugging Face (HF)", "Scikit-learn" ],
    },
    {
      category: "AI Fields",
      items: ["Graph Neural Networks", "Computer Vision (ViT,CNN)", "NLP", "Reinforcement Learning"],
    },
    {
      category: "Technologies",
      items: ["Power BI, Tableau", "AWS", "Azure", "Git"],
    },
    {
      category: "Programming Languages & Frameworks",
      items: ["Python", "C++", "JavaScript", "SQL", "React", "Node.js", "Django"],
    },

  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
      <h2 className="title">Skills</h2>
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
      </div>
    </section>
  );
}

export default Skills;
