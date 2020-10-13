import React from 'react';
// import logo from './logo.svg';
import './index.css';
import NavBar from '../../components/NavBar'
import Typewriter from '../../components/Typewriter';

function Landing() {
  return (
    <div className="Landing">
      <NavBar />
      <div className="Landing-content">
        <header className="Landing-header">
          <p>
            <code>Hi I'm Janet :)</code>
          </p>
          <Typewriter 
            code
            staticText="I'm a:" 
            data={[
              "software engineer", 
              "data scientist", 
              "cognitive science enthusiast",
              "web developer"
            ]}
          />
        </header>
      </div>
    </div>
  );
}

export default Landing;
