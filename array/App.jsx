import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'JavaScript',
      description: 'JavaScript is a versatile programming language used for web development, allowing for dynamic content and interactive user interfaces.',
      image: 'https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc'
    },
    {
      id: 2,
      title: 'Python',
      description: 'Python is a high-level, interpreted language known for its readability and ease of use. It’s widely used in web development, data science, and automation.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png'
    },
    {
      id: 3,
      title: 'React JS',
      description: 'React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive experience.',
      image: 'https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png'
    },
    {
      id: 4,
      title: 'Java',
      description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      image: 'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png'
    },
    {
      id: 5,
      title: 'C++',
      description: 'C++ is a powerful, high-performance language that supports object-oriented, generic, and functional programming styles, often used in systems and game development.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFyEQ9FxotJhVjnyqErZ7DCjQlUmkDYO2Bw&s'
    },
    {
      id: 6,
      title: 'Ruby',
      description: 'Ruby is a dynamic, object-oriented programming language focused on simplicity and productivity, often used in web development with the Ruby on Rails framework.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy35KwYwXp4nrywszEgjE3vZ0fW-FD6GtEHA&s'
    }
  ]);

  return (
    <div className="app-container">
      <h2 className="heading">Basic Uses of State Arrays</h2>
      <div className="card-container">
        {cards.map(card => (
          <div key={card.id} className="card-body">
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
