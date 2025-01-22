import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Your site or personal logo / text here */}
        <div className="logo">About Me</div>

        {/* Nav links */}
        <ul className="nav-links">
          
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>
    </nav>
  );
}
