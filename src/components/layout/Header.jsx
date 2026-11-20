import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import MobileMenu from './MobileMenu';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const { openBooking } = useModal();

  const isServicesActive =
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/therapies') ||
    location.pathname.startsWith('/areas-of-support');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on page change
  useEffect(() => {
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  // Hover handlers with smooth grace period
  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 240);
  };

  return (
    <>
      <header className={`site-header sticky-top ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label="Child Learning Centre, home">
            <img src="/assets/logo/clc-logo.png" alt="Child Learning Centre logo" width="44" height="44" />
            <span className="brand__text">
              <span className="brand__name">
                CLC<span>.</span>
              </span>
              <span className="brand__tag d-none d-sm-block">Pediatric Development</span>
            </span>
          </Link>

          <nav className="site-nav d-none d-xl-flex align-items-center" aria-label="Main">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              About
            </NavLink>

            {/* Aceternity UI Animated Navbar Dropdown for Services */}
            <div
              className={`nav-item aceternity-nav-item ${isServicesDropdownOpen ? 'is-open' : ''}`}
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Trigger Link */}
              <Link
                to="/services/therapies"
                className={`nav-link aceternity-nav-trigger ${isServicesActive ? 'is-active' : ''}`}
                onClick={() => setIsServicesDropdownOpen(false)}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <i className={`bi bi-chevron-down aceternity-chevron ${isServicesDropdownOpen ? 'is-flipped' : ''}`}></i>
              </Link>

              {/* Invisible Hover Safety Bridge */}
              <div className="aceternity-hover-bridge"></div>

              {/* Aceternity UI Floating Card Container */}
              <div
                className={`aceternity-dropdown-panel ${isServicesDropdownOpen ? 'is-visible' : ''}`}
              >
                <div className="aceternity-dropdown-card p-3 shadow-xl">

                  {/* Item 1: Therapy Programs */}
                  <Link
                    to="/services/therapies"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className={`aceternity-dropdown-item d-flex align-items-center gap-3 p-3 rounded-3 ${location.pathname === '/services/therapies' || location.pathname === '/therapies'
                      ? 'is-current'
                      : ''
                      }`}
                  >
                    <div className="aceternity-icon-box bg-rose-tint text-rose d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart-pulse-fill"></i>
                    </div>
                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold d-block item-title">Therapy Programs</span>
                        <i className="bi bi-arrow-right item-arrow ms-2"></i>
                      </div>
                      <span className="item-desc d-block text-truncate">
                        Occupational, Speech, Sensory, ADHD &amp; Remedial
                      </span>
                    </div>
                  </Link>

                  <div className="aceternity-divider"></div>

                  {/* Item 2: Areas of Support */}
                  <Link
                    to="/services/areas-of-support"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className={`aceternity-dropdown-item d-flex align-items-center gap-3 p-3 rounded-3 ${location.pathname === '/services/areas-of-support' || location.pathname === '/areas-of-support'
                      ? 'is-current'
                      : ''
                      }`}
                  >
                    <div className="aceternity-icon-box bg-teal-tint text-teal d-flex align-items-center justify-content-center">
                      <i className="bi bi-grid-fill"></i>
                    </div>
                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold d-block item-title">Areas of Support</span>
                        <i className="bi bi-arrow-right item-arrow ms-2"></i>
                      </div>
                      <span className="item-desc d-block text-truncate">
                        Speech Delays, Sensory Meltdowns, Focus &amp; Motor
                      </span>
                    </div>
                  </Link>

                  {/* Bottom Diagnostic Action Footer */}
                  <div className="aceternity-dropdown-footer mt-2 pt-2 d-flex align-items-center justify-content-between px-2">
                    <span className="text-xs text-muted">Need clinical guidance?</span>
                    <button
                      type="button"
                      className="btn btn-link text-danger p-0 text-xs fw-bold text-decoration-none d-flex align-items-center gap-1"
                      onClick={() => {
                        setIsServicesDropdownOpen(false);
                        openBooking('General Screening');
                      }}
                    >
                      <span>Book Evaluation</span>
                      <i className="bi bi-chevron-right text-xs"></i>
                    </button>
                  </div>

                </div>
              </div>
            </div>

            <NavLink
              to="/how-it-works"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/centres"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Centres
            </NavLink>
            <NavLink
              to="/parents-corner"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Parent's Corner
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Reviews
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              Contact
            </NavLink>
          </nav>

          <div className="header-actions">
            <a
              href="tel:+919004460650"
              className="btn btn-clc-outline d-none d-xxl-inline-flex"
            >
              <i className="bi bi-telephone"></i>Call us
            </a>
            <button
              type="button"
              className="btn btn-clc d-none d-sm-inline-flex"
              onClick={() => openBooking()}
            >
              Book a consultation
            </button>
            <button
              type="button"
              className="menu-toggle d-xl-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <i className="bi bi-list" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
