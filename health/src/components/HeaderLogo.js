// src/components/HeaderLogo.js
import React from "react";
import "./HeaderLogo.css";
import Logo from "../assets/Logo.jpg";

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      {/* Logo Image - Small size */}
      <div className="header-logo-image">
        <img 
          src={Logo} 
          alt="Cure Care Logo" 
          className="clinic-logo"
        />
      </div>
      
      {/* Clinic Name with proper alignment */}
      <div className="clinic-name-container">
        <div className="clinic-name-main">CURE CARE</div>
        <div className="clinic-tagline">SURGERY</div>
      </div>
    </div>
  );
};

export default HeaderLogo;