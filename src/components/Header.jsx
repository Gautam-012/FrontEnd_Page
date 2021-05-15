import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Introduce Your Product </span>
          Quickly & Efficiently
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <a href="#" className="cv-btn">
          Purchase UI Kit
        </a>
      </div>
    </div>
  );
};

export default Header;
