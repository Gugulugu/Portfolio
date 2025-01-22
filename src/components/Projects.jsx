import React from 'react';
import { Code, Scale, Bug, TrendingUp, Eye, Waypoints } from 'lucide-react';
import './Projects.css';


const Projects = () => {
  const projectList = [
    {
      title: "Multi-modal Action Recognition (Master Thesis)",
      description: "Developed a hierarchical multi-stream model combining a multi-modal Graphormer (GNN) and MViTs (ViT) using optical flow and RGB images for action recognition in egocentric videos.",
      icon: Waypoints,
      tags: ["Computer Vision", "Graphs","Multi-modal", "GNN", "ViT"]
    },
    {
      title: "Monocular 3D Stixel-Net (Bachelor Thesis)",
      description: "Developed a vision model for object detection and depth estimation in traffic scenes using the Waymo Open Dataset. Adapted a CNN architecture to integrate LiDAR and RGB data for monocular depth estimation.",
      icon: Eye,
      tags: ["Computer Vision", "3D Vision", "CNN"]
    },
    {
      title: "LLM from Scratch",
      description: "Reimplemented the GPT-2 architecture from scratch, rebuilding all components to gain a deeper understanding of its functionality and design.",
      icon: Code,
      tags: ["NLP", "Transformers", "LLM"]
    },
    {
      title: "Legal Q&A Chatbot",
      description: "Developed a RAG-based architecture to provide context-aware answers to complex legal questions using BGB and commentaries.",
      icon: Scale,
      tags: ["NLP","RAG", "LLM"]
    },
    {
      title: "Bug Detector",
      description: "Adapted the DeepBugs approach [Pradel, Sen 2018] to a Transformer-based architecture for multi-class bug detection in JavaScript code.",
      icon: Bug,
      tags: ["Code Analysis", "Transformer"]
    },
    {
      title: "Stock Trading with RL",
      description: "Developed a stock trading system using reinforcement learning by combining sentiment analysis of news with time series data.",
      icon: TrendingUp,
      tags: ["RL", "NLP", "Time Series",]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="title">Research & ML Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div key={idx} className="project-card">
                <div className="project-icon">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-gradient-bar" />
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default Projects;