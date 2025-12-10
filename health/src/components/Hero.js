// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  const stats = [
    { number: '70k+', label: 'Happy Patients' },
    { number: '50+', label: 'Diseases' },
    { number: '100+', label: 'Hospitals' },
    { number: '10+', label: 'Cities' }
  ];

  const handleCallClick = () => {
    alert('Calling: +1 (555) 123-4567');
  };

  const handleBookAppointment = () => {
    const formSection = document.querySelector('.consultation');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section-padding">
      <div className="container">
        <div className="hero-content slide-in-left">
          <div className="breadcrumb">Home → Piles</div>
          <h1 className="hero-title">Piles Treatment at Cure Care</h1>
          <h2 className="hero-subtitle">Advanced Laser Surgery & Fast Recovery</h2>
          <p className="hero-description">
            These are a common yet often overlooked condition caused by swollen rectal tissues and veins. 
            At Cure Care, we offer advanced, painless treatment with cutting-edge technology. 
            Get expert care and lasting relief - book your consultation today.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleCallClick}>
              Call to Schedule Your Consultation
            </button>
            <button className="btn btn-secondary" onClick={handleBookAppointment}>
              Book Free Appointment
            </button>
          </div>
        </div>
        
        <div className="hero-stats slide-in-right">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;