// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BestDoctors from './components/BestDoctors';
import Surgeries from './components/Surgeries';
import WeightLossSection from './components/WeightLossSection';
import Services from './components/Services';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

function App() {
  const [consultations, setConsultations] = useState([]);

  const handleFormSubmit = (data) => {
    // Add to consultations array
    const newConsultation = {
      ...data,
      id: Date.now(),
      date: new Date().toLocaleString()
    };
    
    setConsultations(prev => [newConsultation, ...prev]);
    
    // Show success message
    alert(`Thank you ${data.name}! Your consultation has been booked. We'll contact you at ${data.mobile} shortly.`);
    
    // Log to console for debugging
    console.log('Consultation submitted:', newConsultation);
    console.log('Total consultations:', consultations.length + 1);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <BestDoctors />
        <Surgeries />
        <WeightLossSection />
        <Services />
        <ConsultationForm onSubmit={handleFormSubmit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;