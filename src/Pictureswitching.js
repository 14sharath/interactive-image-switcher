import React from 'react';
import './pictureswitch.css';
import logo from './images/starbuckslogo.jpg';
import smallpinkbucket from './images/pink.jpg';
import pinkbucket from './images/pinkbuck.jpg';
import smallgreenbucket from './images/green.jpg';
import greenbucket from './images/greenbuck.jpg';
import lightpinkbucket from './images/lightpink.jpg';
import lightpink from './images/lightpinkbuck.jpg';

export const PictureSwitching = () => {
  const imgslider = (bigimage) => {
    bigimage =  document.querySelector('.starbucks').src ;
  };

  const changeCircleColor = (color) => {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
  };

  const handlePinkBucketClick = () => {
    imgslider(pinkbucket);
    changeCircleColor('#017143');
  };

  const handleGreenBucketClick = () => {
    imgslider(greenbucket);
    changeCircleColor('#eb7495');
  };

  const handleLightPinkClick = () => {
    imgslider(lightpink);
    changeCircleColor('#d752b1');
  };

  return (
    <>
      <div className="circle"></div>
      <header>
        <a href="#">
          <img src={logo} className="logo" alt="Starbucks Logo" />
        </a>
        <ul className="buttons">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">What's new</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
      <div className="content">
        <div className="textbox">
          <h2>
            it's not just coffee,<br />Its <span>Starbucks</span>
          </h2>
          <p>
            Starbucks Corporation is an American multinational chain of
            coffeehouses and roastery reserves headquartered in Seattle,
            Washington. is the world's largest coffeehouse chain.As of
            November 2022, the company had 35,711 stores in 80 countries,
            15,873 of which were located in the United States
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="imgbox">
          <img src={pinkbucket} className="starbucks" alt="Starbucks Image" />
        </div>
      </div>
      <ul className="thumb">
        <li>
          <a href="#">
            <img
              src={smallpinkbucket}
              onClick={handlePinkBucketClick}
              alt="Small Pink Bucket"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={smallgreenbucket}
              onClick={handleGreenBucketClick}
              alt="Small Green Bucket"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={lightpinkbucket}
              onClick={handleLightPinkClick}
              alt="Light Pink Bucket"
            />
          </a>
        </li>
      </ul>
    </>
  );
};
