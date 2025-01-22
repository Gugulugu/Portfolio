import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Assistant to the Chief IT-Architect, Working Student",
      company: "IKB, Stuttgart, Germany",
      date: "03/2024 - 11/2024",
      details: [
        "Directly collaborated with the Chief IT-Architect to develop the organization’s first AI strategy, focusing on innovative applications of artificial intelligence to enhance business processes and decision-making",
        "Development and coordination of a Request for Proposal (RFP) for a new Enterprise Architecture Management (EAM) tool, including the collection and analysis of both functional and non-functional requirements",
      ],
    },
    {
      role: "Enterprise Architecture, Working Student",
      company: "SAP, Waldorf, Germany",
      date: "02/2023 - 08/2023",
      details: [
        "Conceptually modelled and documented the enterprise architecture on application level in LeanIX",
        "Created a unified overview of the HR application landscape by mapping applications between Jira, Signavio and LeanIX",
      ],
    },
    {
      role: "IoT & IT-Architecture, Working Student",
      company: "Deloitte Consulting, Germany",
      date: "02/2022 - 08/2022",
      details: [
        "Implemented new functionalities on the web front-end of a digital shop floor platform with Typescript (React)",
        "Integrated and implemented services for the new serverless architecture on AWS, that allowed to reduce the monthly cost by 24%",
        "Implemented a machine learning model on AWS Sagemaker to detect malfunctions in manufacturing machines, increasing detection rate by 16%",
      ],
    },
    {
      role: "Market Research Aftersales, Intern",
      company: "Mercedes-Benz Group AG, Stuttgart",
      date: "05/2021 - 11/2021",
      details: [
        "Implemented an Entity Resolutions Algorithm to map invoices between two independent systems based on different attributes, allowing to trace back over 90% of the sold parts using: Python, SQL, Azure Databricks, Tableau, HereMaps API (GeoMapping)",
        "Designed and executed data pipelines using Azure Data Factory to extract the required data from the data lake, transform it using Azure Data Bricks with Apache Spark, and load it into the target systems",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
      <h2 className="title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div
            className={`timeline-item ${activeIndex === idx ? "active" : ""}`}
            key={idx}
            onClick={() => toggleDetails(idx)}
          >
            <div className="header">
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span>{exp.date}</span>
              </div>
              <div className={`arrow ${activeIndex === idx ? "open" : ""}`} />
            </div>
            <div className="details-container">
              {activeIndex === idx && (
                <ul>
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
