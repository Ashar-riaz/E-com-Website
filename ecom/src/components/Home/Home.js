import React, { useState, useEffect } from 'react';
import Nav from '../NavBar/Nav';
import './home.css';
import pic1 from './../../picture/pic1.avif';
import pic2 from './../../picture/pic2.avif';
import pic3 from './../../picture/Fashion.png';
import pic4 from './../../picture/pic4.png';
import pic5 from './../../picture/pic5.png';


const images = [pic1, pic2,pic3,pic4,pic5];


export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <Nav />
      <div className="d-flex welcome justify-content-center">
        <span className='d-flex align-items-center text'>Welcome to our store</span>
      </div>
      <div className="pic">
        <button className="arrow left" onClick={handleLeftArrowClick}>&#8249;</button>
        {images.map((image, index) => (
          <div className="">
            <img
              key={index}
              src={image} // Use image.default to get the correct path
              alt={`Slide ${index + 1}`}
              className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
            />
            {index === currentImageIndex && (
              <div className="overlay-text">
                <h2>Your Text for Image {index + 1}</h2>
                <button>Click Me</button>
              </div>
            )}
          </div>
        ))}
        <div className="dot-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <button className="arrow right" onClick={handleRightArrowClick}>&#8250;</button>
      </div>
    </>
  );
}
