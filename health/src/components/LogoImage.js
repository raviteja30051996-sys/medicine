// src/components/LogoImage.js - Component to generate logo if you don't have image file
import React from 'react';
import './LogoImage.css';

const LogoImage = () => {
  return (
    <div className="logo-image-container">
      <div className="logo-image">
        {/* First line: C | URE */}
        <div className="logo-line">
          <span className="logo-letter-c">C</span>
          <span className="logo-divider">|</span>
          <span className="logo-text-ure">URE</span>
        </div>
        
        {/* Second line: C | ARE */}
        <div className="logo-line">
          <span className="logo-letter-c">C</span>
          <span className="logo-divider">|</span>
          <span className="logo-text-are">ARE</span>
        </div>
        
        {/* Third line: S | URGERY */}
        <div className="logo-line">
          <span className="logo-letter-s">S</span>
          <span className="logo-divider">|</span>
          <span className="logo-text-surgery">URGERY</span>
        </div>
      </div>
      
      <div className="logo-tagline">Healing Hands, Caring Hearts</div>
    </div>
  );
};

export default LogoImage;