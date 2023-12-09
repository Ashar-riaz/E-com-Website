import React, { useState, useEffect } from 'react';
import Nav from '../NavBar/Nav';
import './home.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import pic1 from './../../picture/pic1.avif';
import pic2 from './../../picture/pic2.avif';
import pic3 from './../../picture/Fashion.png';
import pic4 from './../../picture/pic4.png';
import pic5 from './../../picture/pic5.png';
import delivery from './../../icons/delivery.png';
import voucher from './../../icons/voucher.png';
import support from './../../icons/support.png';
import fashion2 from './../../picture/fashion2.png';
import fashion1 from './../../picture/fashion1.png';
import mens from './../../picture/mens.png';
import women from './../../picture/Women.png';
import Men from '../../page/Men';


const images = [pic1, pic2, pic3, pic4, pic5];


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
            <img key={index}
              src={image}
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
            <span key={index} className={`dot ${index === currentImageIndex ? 'active' : ''}`} onClick={() => handleDotClick(index)}></span>
          ))}
        </div>
        <button className="arrow right" onClick={handleRightArrowClick}>&#8250;</button>
      </div>
      <div className="d-flex flex-row container">
        <div className="d-flex boxx">
          <h4> <span className='mr-4'> <img src={delivery} alt="Delivery" style={{ marginRight: '15px' }} /> </span> Free Delivery</h4>
        </div>
        <div className="d-flex boxx">
          <h4> <img src={voucher} alt="Voucher" style={{ marginRight: '15px' }} /> Use promo code</h4>
        </div>
        <div className="d-flex boxx">
          <h4> <img src={support} alt="Support" style={{ marginRight: '15px' }} /> 24/7 Support</h4></div>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-3 container">
        TOP PRODUCT
      </div>
      <div className="container mb-3">
        <div className=" " style={{ width: '100%', height: '250px', backgroundColor: 'red' }}></div>
      </div>
      <div className="d-flex main-box container">
          <div className="d-flex">
            <Link to="/men" >
              
              <img src={mens} alt="" style={{ width: '350px' }} />
            </Link>
          </div>

          
        <div className="d-flex flex-column">
          <div className="d-flex mb-3">
            <img src={fashion1} alt="" style={{ width: '550px', height: '240px' }} />

          </div>
          <div className="d-flex">
            <img src={fashion2} alt="" style={{ width: '550px', height: '240px' }} />

          </div>
        </div>
        <div className="d-flex">
          <img src={women} alt="" style={{ width: '350px' }} />
        </div>

      </div>
    </>
  );
}
