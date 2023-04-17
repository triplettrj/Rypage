import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import '../landing-page.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1 className="landing-page-header">Ryan Triplett</h1>
      <p className="landing-page-subheader">developer</p>
      <div className="social-media-icons-container">
        <a href="https://www.instagram.com/ryrytriplett" target="_blank" rel="noopener noreferrer" className="social-media-icon-link">
          <FaInstagram size={100} /> 
        </a>
        <img src="" alt="" />
        <a href="https://github.com/triplettrj" target="_blank" rel="noopener noreferrer" className="social-media-icon-link">
          <FaGithub size={100} />
        </a>
      </div>
      <div className="projects-container">
        <div className="project">
          <h2 className="project-title">Project Title 1</h2>
          <p className="project-description">Project description goes here</p>
          <a href="https://programmingtest.vercel.app/Loginpage" className="project-link">Link to project</a>
        </div>
        {/*<div className="project">
          <h2 className="project-title">Project Title 2</h2>
          <p className="project-description">Project description goes here</p>
          <a href="#" className="project-link">Link to project</a>
  </div>*/}
      </div>
      <footer className="landing-page-footer">
        <p className="footer-text">© {new Date().getFullYear()} Ryan Triplett. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
