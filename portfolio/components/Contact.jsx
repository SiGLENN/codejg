import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>Contact me through this gmail and my phone number</p>
        <ul className="contact-list">
          <li>
            <a href="mailto:jagabas.student@asiancollege.edu.ph " className="contact-link">jagabas.student@asiancollege.edu.ph</a>
          </li>
          <li>
            <a href="" className="contact-link">09654491630</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
