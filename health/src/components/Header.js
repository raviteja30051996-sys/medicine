// src/components/Header.js
import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const navRef = useRef(null);

  const searchData = {
    diseases: [
      { id: 1, name: 'Hemorrhoids', type: 'disease', category: 'Proctology' },
      { id: 2, name: 'Fissure', type: 'disease', category: 'Proctology' },
      { id: 3, name: 'Fistula', type: 'disease', category: 'Proctology' },
      { id: 4, name: 'Gallstones', type: 'disease', category: 'Laparoscopy' },
      { id: 5, name: 'Hernia', type: 'disease', category: 'Laparoscopy' },
      { id: 6, name: 'Kidney Stones', type: 'disease', category: 'Urology' },
      { id: 7, name: 'PCOS', type: 'disease', category: 'Gynecology' },
      { id: 8, name: 'Obesity', type: 'disease', category: 'Weight Loss' },
    ],
    doctors: [
      { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Proctology Specialist', experience: '15 years' },
      { id: 2, name: 'Dr. Michael Chen', specialty: 'Laparoscopic Surgeon', experience: '12 years' },
      { id: 3, name: 'Dr. Emily Rodriguez', specialty: 'Urology Expert', experience: '18 years' },
      { id: 4, name: 'Dr. Robert Kim', specialty: 'Gynecology Specialist', experience: '10 years' },
      { id: 5, name: 'Dr. Lisa Thompson', specialty: 'Weight Loss Consultant', experience: '8 years' },
    ],
    services: [
      { id: 1, name: 'Proctology', category: 'Laser Treatment' },
      { id: 2, name: 'Laparoscopy', category: 'Minimal Access Surgery' },
      { id: 3, name: 'Urology', category: 'Laser Lithotripsy' },
      { id: 4, name: 'Gynecology', category: 'Women Wellness' },
      { id: 5, name: 'Weight Loss', category: 'Bariatric Surgery' },
    ]
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = [];

    searchData.diseases.forEach(disease => {
      if (disease.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          ...disease,
          type: 'disease',
          icon: '🩺',
          action: () => handleDiseaseNavigation(disease)
        });
      }
    });

    searchData.doctors.forEach(doctor => {
      if (doctor.name.toLowerCase().includes(lowerQuery) || 
          doctor.specialty.toLowerCase().includes(lowerQuery)) {
        results.push({
          ...doctor,
          type: 'doctor',
          icon: '👨‍⚕️',
          action: () => handleDoctorNavigation(doctor)
        });
      }
    });

    searchData.services.forEach(service => {
      if (service.name.toLowerCase().includes(lowerQuery) || 
          service.category.toLowerCase().includes(lowerQuery)) {
        results.push({
          ...service,
          type: 'service',
          icon: '💼',
          action: () => handleServiceNavigation(service)
        });
      }
    });

    setSearchResults(results.slice(0, 5));
    setShowSearchResults(results.length > 0);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    performSearch(value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        if (searchResults.length === 0) {
          openModal('Search Results', `No results found for "${searchQuery}"`);
          setSearchQuery('');
        }
      }, 500);
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const navigateToSection = (sectionId) => {
    closeMenu();
    setActiveNav(sectionId);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const sectionTop = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    } else {
      // If section doesn't exist, show modal for now
      if (sectionId === 'doctors' || sectionId === 'about') {
        openModal(
          sectionId === 'doctors' ? 'Our Doctors' : 'About Us',
          sectionId === 'doctors' 
            ? 'Meet our team of experienced medical professionals specializing in advanced laser surgery.'
            : 'Cure Care provides advanced laser surgery with fast recovery across multiple cities.'
        );
      }
    }
  };

  const handleDiseaseNavigation = (disease) => {
    closeMenu();
    setShowSearchResults(false);
    openModal(disease.name, 
      `Advanced Laser Treatment for ${disease.name}\n\n` +
      '• Painless Procedure\n' +
      '• Fast Recovery\n' +
      '• Expert Medical Care\n' +
      '• Available in 10+ Cities\n\n' +
      'Book your free consultation today.'
    );
  };

  const handleDoctorNavigation = (doctor) => {
    closeMenu();
    setShowSearchResults(false);
    openModal(doctor.name, 
      `${doctor.name}\n` +
      `${doctor.specialty}\n` +
      `Experience: ${doctor.experience}\n\n` +
      'Treating patients across:\n' +
      '• 10+ Cities\n' +
      '• 100+ Hospitals\n' +
      '• 70k+ Happy Patients\n\n' +
      'Available for free consultations.'
    );
  };

  const handleServiceNavigation = (service) => {
    closeMenu();
    setShowSearchResults(false);
    navigateToSection('services');
  };

  const openModal = (title, content) => {
    const modal = document.createElement('div');
    modal.className = 'header-modal';
    modal.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title">${title}</h3>
            <button class="modal-close">&times;</button>
          </div>
          <div class="modal-body">
            <p>${content.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="modal-footer">
            <button class="modal-btn primary-btn">📅 Book Free Appointment</button>
            <button class="modal-btn secondary-btn">Close</button>
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';
    document.body.appendChild(modal);

    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-close');
    const secondaryBtn = modal.querySelector('.secondary-btn');
    const primaryBtn = modal.querySelector('.primary-btn');

    const closeModal = () => {
      modal.remove();
      document.body.style.overflow = 'auto';
    };

    overlay.onclick = (e) => {
      if (e.target === overlay) closeModal();
    };
    closeBtn.onclick = closeModal;
    secondaryBtn.onclick = closeModal;
    primaryBtn.onclick = () => {
      closeModal();
      handleAppointmentClick();
    };
  };

  const handleAppointmentClick = () => {
    closeMenu();
    openModal('Book Free Appointment', 
      'Schedule Your Consultation Today!\n\n' +
      '✓ Advanced Laser Surgery\n' +
      '✓ Fast Recovery Process\n' +
      '✓ Available in 10+ Cities\n' +
      '✓ 100+ Hospitals Network\n' +
      '✓ 70k+ Happy Patients\n' +
      '✓ 50+ Diseases Treated\n\n' +
      'Our team will contact you shortly.'
    );
  };

  const handleEmergencyClick = () => {
    const phoneNumber = '+91 9353937641';
    if (window.confirm(`Call to Schedule Consultation?\n${phoneNumber}`)) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="container">
        <div className="header-main">
          {/* Logo Section */}
          <div className="logo-wrapper">
            <HeaderLogo />
          </div>

          {/* Search Bar - Centered */}
          <div className="search-section" ref={searchRef}>
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search diseases, doctors..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleSearchKeyPress}
                onFocus={() => searchQuery && setShowSearchResults(true)}
              />
              {searchQuery && (
                <button 
                  className="clear-search-btn"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <button 
                className="search-btn"
                onClick={handleSearch}
                disabled={isSearching}
                aria-label="Search"
              >
                {isSearching ? '⏳' : '🔍'}
              </button>
            </div>

            {showSearchResults && searchResults.length > 0 && (
              <div className="search-results-dropdown">
                <div className="search-results-list">
                  {searchResults.map((result) => (
                    <button
                      key={`${result.type}-${result.id}`}
                      className="search-result-item"
                      onClick={() => {
                        result.action();
                        setShowSearchResults(false);
                      }}
                    >
                      <span className="result-icon">{result.icon}</span>
                      <div className="result-content">
                        <div className="result-title">{result.name}</div>
                        <div className="result-subtitle">{result.type === 'doctor' ? result.specialty : result.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <button 
              className="emergency-btn"
              onClick={handleEmergencyClick}
            >
              🆘 Call to Schedule
            </button>
            <button 
              className="appointment-btn"
              onClick={handleAppointmentClick}
            >
              📅 Book Free Appointment
            </button>
          </div>


          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Navigation Menu - Below main header */}
        <nav className="navbar">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id} className={`nav-item ${activeNav === item.id ? 'active' : ''}`}>
                <button 
                  className="nav-link-btn"
                  onClick={() => navigateToSection(item.id)}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                  {activeNav === item.id && <span className="active-indicator"></span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-container">
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <HeaderLogo />
            </div>
            <button 
              className="mobile-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mobile-search">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search diseases, doctors..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleSearchKeyPress}
              />
              <button 
                className="search-btn"
                onClick={handleSearch}
                disabled={isSearching}
                aria-label="Search"
              >
                {isSearching ? '⏳' : '🔍'}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="mobile-nav">
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.id} className={`mobile-nav-item ${activeNav === item.id ? 'active' : ''}`}>
                  <button 
                    className="mobile-nav-link"
                    onClick={() => navigateToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Stats from Image */}
          <div className="mobile-stats">
            <div className="stat-item">
              <div className="stat-number">70k+</div>
              <div className="stat-label">HAPPY PATIENTS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">DISEASES</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">HOSPITALS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">CITIES</div>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="mobile-action-buttons">
            <button 
              className="mobile-appointment-btn"
              onClick={handleAppointmentClick}
            >
              📅 Book Free Appointment
            </button>
            <button 
              className="mobile-emergency-btn"
              onClick={handleEmergencyClick}
            >
              🆘 Call to Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;