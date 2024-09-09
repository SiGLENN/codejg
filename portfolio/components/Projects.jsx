import React, { useState } from 'react';
import './Projects.css'; 

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "What is my background?", answer: "I am a student studying Bachelor of Science in Information Technology at Asian College-Dumaguete campus. I live in Bacong, Negros Oriental" },
    { question: "How do I handle stress, and what techniques could I adopt to manage it more effectively?", 
      answer: "Currently, I handle stress by working longer hours or distracting myself with hobbies. To manage it more effectively, I could incorporate mindfulness practices, regular exercise, and time management techniques to ensure a balanced approach to work and relaxation." },
    { question: "What relationships in my life bring me joy and support, and which ones might be draining or toxic?", 
      answer: "My close friends and family bring me immense joy and support, offering encouragement and understanding. However, some relationships with colleagues and acquaintances have become draining due to negativity or lack of mutual respect. I could set boundaries with these individuals and focus more on nurturing positive relationships." },
    { question: "How to contact me?", answer: "You can reach me via my email address jagabas.student@asiancollege.edu.ph" },
  ];

  return (
    <section id="projects">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              <div
                className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
