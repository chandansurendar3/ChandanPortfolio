// src/components/About.js
import React from 'react';
import './Landing.css'; // Adjust the path as needed
import gmail from '../assets/gmail.png';
import github from '../assets/github.png'

const Landing = () => {
  return (
    <section id="landing" className="py-60" style={{paddingBottom : 140}}>
      <div className="container mx-auto text-center">
        <div className="marquee-container">
          <span className="marquee-text">Hey, this is Chandan!</span>
        </div>
        <p className='para'>
        An engineer who is technology driven and likes to explore new tech. Specializing in full-stack development, with proficiency in both front-end and back-end
technologies. Committed to continuous learning.
        </p>

        <div className='contact'>
        <a href="mailto:chandansurendar3@gmail.com" className="btn btn-primary" target="blank"><img src={gmail} alt='gmail' /></a>
        <a href="https://www.linkedin.com/in/chandan-g-s-ba2087220" className="btn btn-primary"><img src="linkedin.png" alt='linkedin' /></a>
        <a href="https://github.com/chandansurendar3" className="btn btn-primary"><img src={github} alt='github' /></a>

      </div>
      </div>
    </section>
  );
}

export default Landing;

