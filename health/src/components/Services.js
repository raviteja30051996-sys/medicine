import React from 'react';
import './Services.css';

const Services = () => {
  const medicalServices = [
    { id: 1, name: 'Proctology', icon: '🩺', description: 'Specialized treatment for rectal and anal disorders' },
    { id: 2, name: 'Laparoscopy', icon: '🔬', description: 'Minimally invasive surgical procedures' },
    { id: 3, name: 'Urology', icon: '💧', description: 'Comprehensive urinary tract care' },
    { id: 4, name: 'Vascular', icon: '🩸', description: 'Treatment for blood vessel disorders' },
    { id: 5, name: 'Gynecology', icon: '🌸', description: 'Women\'s reproductive health services' },
    { id: 6, name: 'Aesthetics', icon: '✨', description: 'Cosmetic and beauty treatments' },
    { id: 7, name: 'ENT', icon: '👂', description: 'Ear, nose and throat care' },
    { id: 8, name: 'Fertility', icon: '👶', description: 'Fertility treatments and IVF' },
    { id: 9, name: 'Orthopedics', icon: '🦴', description: 'Bone and joint treatments' },
    { id: 10, name: 'Weight Loss', icon: '⚖️', description: 'Weight management programs' }
  ];

  return (
    <section className="services section-padding">
      <div className="container">
        <h2 className="section-title text-center">Our Medical Services</h2>
        <p className="services-intro text-center">
          Comprehensive healthcare services with cutting-edge technology and expert care
        </p>
        
        <div className="services-grid">
          {medicalServices.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;