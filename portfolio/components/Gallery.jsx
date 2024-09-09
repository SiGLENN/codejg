
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  
  const photos = [
    { src: '/photo.jpg', alt: 'Description of photo 8' },
    { src: '/jag.jpg', alt: 'Description of photo 8' },
    { src: '/jag.jpg', alt: 'Description of photo 8' },
    { src: '/jg.jpg', alt: 'Description of photo 8' },
  ];

  return (
    <section id="gallery">
      <h2>My Saved Photos</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
