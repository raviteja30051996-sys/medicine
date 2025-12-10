// src/components/ConsultationForm.js
import React, { useState } from 'react';
import './ConsultationForm.css';

const ConsultationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    disease: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cities = [
    'Select City',
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas'
  ];

  const diseases = [
    'Select Disease',
    'Piles',
    'Diabetes',
    'Hypertension',
    'Arthritis',
    'Asthma',
    'Migraine',
    'Thyroid',
    'Heart Disease',
    'Kidney Stones'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (!formData.city || formData.city === 'Select City') {
      newErrors.city = 'Please select a city';
    }
    
    if (!formData.disease || formData.disease === 'Select Disease') {
      newErrors.disease = 'Please select a disease';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(formData);
      
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        city: 'Select City',
        disease: 'Select Disease'
      });
      setErrors({});
      
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="consultation section-padding">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <h2 className="section-title">Book Free Consultation</h2>
            <p className="form-subtitle">Fill the form below and our medical coordinator will contact you within 24 hours</p>
          </div>
          
          <form className="consultation-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Patient Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`form-input ${errors.mobile ? 'error' : ''}`}
                  placeholder="Enter your 10-digit mobile number"
                  disabled={isSubmitting}
                />
                {errors.mobile && <span className="error-message">{errors.mobile}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  Select City *
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`form-select ${errors.city ? 'error' : ''}`}
                  disabled={isSubmitting}
                >
                  {cities.map((city, index) => (
                    <option key={index} value={city} disabled={index === 0}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="disease" className="form-label">
                  Select Disease *
                </label>
                <select
                  id="disease"
                  name="disease"
                  value={formData.disease}
                  onChange={handleChange}
                  className={`form-select ${errors.disease ? 'error' : ''}`}
                  disabled={isSubmitting}
                >
                  {diseases.map((disease, index) => (
                    <option key={index} value={disease} disabled={index === 0}>
                      {disease}
                    </option>
                  ))}
                </select>
                {errors.disease && <span className="error-message">{errors.disease}</span>}
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="btn-text">Book FREE Consultation</span>
                    <span className="btn-icon">→</span>
                  </>
                )}
              </button>
              <p className="form-note">
                * By submitting this form, you agree to our terms & conditions and privacy policy
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;