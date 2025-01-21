import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Hero() {
  return (
    <section id="hero">
      <div className="container hero-container">
        {/* Left: Profile Picture */}
        <div className="profile-pic">
          <img src="/Profil.jpg" alt="Profile" />
        </div>

        {/* Right: Text Content */}
        <div className="hero-text">
          <h1>
            <span className="name-text">Deniz Bickici</span>
          </h1>
          <p>
            I am a Master’s student at the University of Stuttgart, currently working on my thesis in multi-modal action recognition. My research focuses on integrating Graph Neural Networks and Vision Transformers to analyze spatio-temporal data from egocentric videos.
          </p>
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/deniz-bickici-8774261ba/">
              <FaLinkedin /> LinkedIn
            </a>
            &bull;
            <a href="https://github.com/Gugulugu">
              <FaGithub /> GitHub
            </a>
            &bull;
            <a href="mailto:denizbickici@mailbox.org">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </section>


  );
}
