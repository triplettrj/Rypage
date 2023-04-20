import React from 'react';
import { FaInstagram, FaGithub, FaShareSquare } from 'react-icons/fa';
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

        <a href="https://github.com/triplettrj" target="_blank" rel="noopener noreferrer" className="social-media-icon-link">
          <FaGithub size={100} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=triplettrj@gmail.com&su=Yo Ryan you sound like a pretty cool guy, I'd like to speak to you about some interesting oppuritunities at [company name here]" target="_blank" rel="noopener noreferrer" className="social-media-icon-link">
          <FaShareSquare size={100}/>
        </a>
      </div>
      <div className="projects-container">
        <div className="project">
          <h2 className="project-title">Project spaghetti diagram</h2>
          <div className="project-description">
            <a  href="https://github.com/triplettrj/programmingtest/blob/main/README.md">Project description README</a>
          </div>
          <div className="project-link">
            <a href="https://programmingtest.vercel.app/Loginpage">Link to project</a>
          </div>
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
