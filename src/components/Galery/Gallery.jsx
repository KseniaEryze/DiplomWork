import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './main.css'
import ho from "../../pages/About/img/tort1.png"

const images = [
    {
      src: ho,
     },
    {
        src: "https://klike.net/uploads/posts/2023-02/1675842942_3-315.jpg",
    
    },
    {
        src: "https://klike.net/uploads/posts/2023-02/1675842942_3-315.jpg",
    
    },
  ];

function Gallery() {
  return (
    <div className="slide-container">
        <h2>Портфолио</h2>
      <Fade>
        {images.map((fadeImage, index) => (
          <div className='wrapper-gallery' key={index}>
            <img className='slide-image' src={fadeImage.src} />
            
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Gallery
