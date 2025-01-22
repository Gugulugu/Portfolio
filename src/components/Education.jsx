import React, { useState } from "react";
import "./Education.css";

function Education() {
  const [activeIndex, setActiveIndex] = useState(null); // Track which item is active

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };

  const educationList = [
    {
      school: "University of Stuttgart",
      degree: "Master of Science - Information Systems",
      date: "10/2022 - current",
      highlights: ["Master Thesis: Multi-modal Action Recognition"],
    },
    {
      school: "Esslingen University of Applied Sciences",
      degree: "Bachelor of Engineering - Information Systems",
      date: "03/2019 - 09/2022",
      highlights: ["Bachelor Thesis: Monocular 3D Stixel-Net"],
    },
  ];

  const furtherEd = [
    {
      category: "Machine Learning",
      courses: [
        "Machine Learning (Stanford | Online)",
        "The Analytic Edge (MITx)",
        "Data Wrangling (HarvardX)",
      ],
    },
    {
      category: "Programming",
      courses: [
        "Crash Course on Python (Google)",
        "Using Python to Interact with the OS (Google)",
        "Java Clean Code (Coding Akademie)",
        "Programming in Python / Intro. to Back-End Dev.",
        "Version Control / API / Django (Meta)",
      ],
    },
    {
      category: "Other",
      courses: [
        "Becoming an Entrepreneur (MITx)",
        "Bitcoin and Cryptocurrencies (BerkeleyX)",
        "TOGAF Bootcamp",
        "Language Camp in England",
      ],
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
      <h2 className="title">Education</h2>
      <div className="timeline">
        {educationList.map((edu, idx) => (
          <div
            className={`timeline-item ${activeIndex === idx ? "active" : ""}`}
            key={idx}
            onClick={() => toggleDetails(idx)} // Toggle item on click
          >
            <div className="header">
              <h3>{edu.school}</h3>
              <h4>{edu.degree}</h4>
              <span>{edu.date}</span>
              <div className={`arrow ${activeIndex === idx ? "open" : ""}`}></div>
            </div>
            <div className="details-container">
              {activeIndex === idx && ( // Render details only if active
                <ul>
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="further-education">
      <div className="further-education-container">
      <h3 className="projects-title">Further Education & Courses</h3>
        <div className="further-education-categories">
          {furtherEd.map((category, idx) => (
            <div className="category" key={idx}>
              <h4>{category.category}</h4>
              <ul>
                {category.courses.map((course, cIdx) => (
                  <li key={cIdx}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default Education;
