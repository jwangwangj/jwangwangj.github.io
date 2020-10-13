import React from 'react';
// import logo from './logo.svg';
import './index.css'

function NavBar() {
  return (
    <div className="NavBar">
      <a className="NavBar-logo" href="/">JANET <b>WANG</b></a>
      <nav className="NavBar-nav">
      <a
        className="NavBar-link"
        href="/resume"
      >
        Resume
      </a>
      <a
        className="NavBar-link"
        href="/projects"
      >
        Projects
      </a>
      <a
        className="NavBar-link"
        href="https://github.com/jwangwangj"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        className="NavBar-link"
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
    </nav>
    </div>
  );
}

export default NavBar;