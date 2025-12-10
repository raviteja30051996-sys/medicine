// src/components/BestDoctors.js
import React from 'react';
import './BestDoctors.css';

const BestDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Velaga Tanuja Priyadarsini",
      qualifications: "MBBS, DGO, FMAS, FRM",
      experience: "8 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.9/5",
      speciality: "Gynecology & Obstetrics",
      location: "Visakhapatnam (Vizag)",
      phone: "+917989832859",
      image: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Dr K. Lakshmi Chandra Sekhar",
      qualifications: "M.B.B.S, M.S(Gen.Surgery)",
      experience: "8 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "5/5",
      speciality: "General, Laparoscopy & Laser Surgeon & Proctologist",
      location: "Vijayawada",
      phone: "+917989832859",
      image: "👨‍⚕️"
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      qualifications: "MD, DNB (Surgical Oncology)",
      experience: "12 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.8/5",
      speciality: "Surgical Oncology & Cancer Care",
      location: "Hyderabad",
      phone: "+919876543210",
      image: "👨‍⚕️"
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      qualifications: "MBBS, MS (Orthopedics)",
      experience: "10 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.9/5",
      speciality: "Orthopedic & Joint Replacement",
      location: "Bengaluru",
      phone: "+919876543211",
      image: "👩‍⚕️"
    }
  ];

  const handleCallDoctor = (phone) => {
    alert(`Calling: ${phone}`);
  };

  const handleBookDoctor = (doctor) => {
    const formSection = document.querySelector('.consultation');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      // You could pre-fill doctor name in form
    }
  };

  return (
    <section className="best-doctors section-padding">
      <div className="container">
        <h2 className="section-title">Our Best Doctors</h2>
        <p className="section-subtitle">Expert medical professionals with extensive experience in their fields</p>
        
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card fade-in">
              <div className="doctor-header">
                <div className="doctor-image">{doctor.image}</div>
                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-qualifications">{doctor.qualifications}</p>
                  <div className="doctor-experience">
                    <span className="exp-badge">{doctor.experience}</span>
                    <span className="consultation-badge">{doctor.consultation}</span>
                  </div>
                  <div className="doctor-rating">
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-value">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="doctor-speciality">
                <h4>Speciality</h4>
                <p>{doctor.speciality}</p>
              </div>
              
              <div className="doctor-location">
                <h4>Location</h4>
                <p>{doctor.location}</p>
              </div>
              
              <div className="doctor-actions">
                <button 
                  className="call-btn"
                  onClick={() => handleCallDoctor(doctor.phone)}
                >
                  <span className="phone-icon">📞</span>
                  Call us {doctor.phone}
                </button>
                <button 
                  className="book-btn"
                  onClick={() => handleBookDoctor(doctor)}
                >
                  Book Free Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-doctors">
          <button className="view-more-btn">
            View All Doctors →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestDoctors;