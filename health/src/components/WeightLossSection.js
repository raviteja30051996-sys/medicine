// src/components/WeightLossSection.js
import React from 'react';
import './WeightLossSection.css';

const WeightLossSection = () => {
  const treatments = [
    {
      id: 1,
      title: 'Weight Loss',
      subtitle: 'Gastric balloon & Bariatric Surgery',
      description: '(Scientific proven & advanced techniques)',
      icon: '⚖️',
      color: '#ff6b35',
      features: [
        'Non-invasive procedures',
        'Personalized diet plans',
        'Expert nutritionists',
        'Long-term maintenance'
      ]
    },
    {
      id: 2,
      title: 'Vascular',
      subtitle: 'Advanced Vascular Treatments',
      description: 'A surgical subspecialty that deals with the vascular system...',
      icon: '🩸',
      color: '#1a6fb3',
      features: [
        'Varicose vein treatment',
        'Aneurysm repair',
        'Angioplasty',
        'Vascular screenings'
      ]
    },
    {
      id: 3,
      title: 'Aesthetics',
      subtitle: 'Cosmetic Excellence',
      description: 'Retouching or enhancing of natural corporeal appearance...',
      icon: '✨',
      color: '#ff8b35',
      features: [
        'Laser treatments',
        'Botox & fillers',
        'Skin rejuvenation',
        'Body contouring'
      ]
    },
    {
      id: 4,
      title: 'Orthopedics',
      subtitle: 'Bone & Joint Care',
      description: 'Pediatric Orthopedic Hand and Upper Extremity Surgery',
      icon: '🦴',
      color: '#0d4d8d',
      features: [
        'Joint replacement',
        'Sports injuries',
        'Spine surgery',
        'Fracture care'
      ]
    },
    {
      id: 5,
      title: 'ENT',
      subtitle: 'Ear, Nose & Throat',
      description: 'Minimally invasive surgery (MS) for ear, nose and throat (ENT)',
      icon: '👂',
      color: '#1a6fb3',
      features: [
        'Sinus surgery',
        'Hearing tests',
        'Tonsillectomy',
        'Voice therapy'
      ]
    },
    {
      id: 6,
      title: 'Fertility',
      subtitle: 'Reproductive Health',
      description: 'Advanced fertility treatments and reproductive care',
      icon: '👶',
      color: '#ff6b35',
      features: [
        'IVF treatments',
        'Fertility testing',
        'PCOS management',
        'Embryo freezing'
      ]
    }
  ];

  const handleTreatmentClick = (treatment) => {
    alert(`Selected: ${treatment.title}\n\n${treatment.subtitle}\n\nWould you like to book a consultation?`);
  };

  const handleBookConsultation = (treatment) => {
    const formSection = document.querySelector('.consultation');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="weight-loss-section section-padding">
      <div className="container">
        <h2 className="section-title">Comprehensive Healthcare Solutions</h2>
        <p className="section-subtitle">Specialized treatments across various medical disciplines for complete healthcare</p>
        
        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <div 
              key={treatment.id} 
              className="treatment-card"
              style={{ '--treatment-color': treatment.color }}
            >
              <div className="treatment-header" onClick={() => handleTreatmentClick(treatment)}>
                <div className="treatment-icon-container">
                  <div 
                    className="treatment-icon" 
                    style={{ backgroundColor: treatment.color }}
                  >
                    {treatment.icon}
                  </div>
                </div>
                <div className="treatment-title-section">
                  <h3 className="treatment-title">{treatment.title}</h3>
                  <h4 className="treatment-subtitle">{treatment.subtitle}</h4>
                  <p className="treatment-description">{treatment.description}</p>
                </div>
              </div>
              
              <div className="treatment-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {treatment.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className="treatment-book-btn"
                onClick={() => handleBookConsultation(treatment)}
              >
                Book Free Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeightLossSection;