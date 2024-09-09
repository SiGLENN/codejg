import React from 'react';
import './About.css';
import profileImage from './jag.jpg'; 

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="text-content">
          <h2>About Me</h2>
          <p>I'm a 3rd year BSIT student at Asian College-Dumaguete. I love/I like/ I enjoy listening to music.
              <br/>Travelling is my cup of tea.
              Cooking or gardening.<br />My hobbies are singing, writing and travelling.
              My quote in Life is <i>"I am constantly growing and evolving into a better person. 
              I'm freeing myself from all destructive doubt and fear. 
              I accept myself for who I am and create peace, power and confidence of mind and of heart. 
              I am going to forgive myself and free myself."</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
