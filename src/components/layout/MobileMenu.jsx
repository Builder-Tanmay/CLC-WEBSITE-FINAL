import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { openBooking } = useModal();
  const [isServicesExpanded, setIsServicesExpanded] = useState(true);
  const location = useLocation();

  const handleBookingClick = () => {
    onClose();
    openBooking();
  };

  const isServicesActive =
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/therapies') ||
    location.pathname.startsWith('/areas-of-support');

  return (
    <>
      <div
        className={`offcanvas offcanvas-end mobile-menu ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header border-bottom">
          <div className="d-flex align-items-center gap-2">
            <img src="/assets/logo/clc-logo.png" alt="CLC Logo" width="32" height="32" />
            <h2 className="h6 mb-0 text-navy fw-bold" id="mobileMenuLabel">
              Child Learning Centre
            </h2>
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close menu"
            onClick={onClose}
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column p-4">
          <nav aria-label="Mobile Navigation" className="mb-4">
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/"
              onClick={onClose}
              end
            >
              <i className="bi bi-house-door me-2"></i>Home
            </NavLink>

            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/about"
              onClick={onClose}
            >
              <i className="bi bi-info-circle me-2"></i>About &amp; Team
            </NavLink>

            {/* Collapsible Services & Support Accordion in Mobile */}
            <div className="mobile-dropdown-group my-2 border rounded-3 p-2 bg-light">
              <button
                type="button"
                className={`mobile-dropdown-header w-100 d-flex align-items-center justify-content-between btn border-0 text-start p-2 fw-bold ${
                  isServicesActive ? 'text-danger' : 'text-dark'
                }`}
                onClick={() => setIsServicesExpanded((prev) => !prev)}
                aria-expanded={isServicesExpanded}
              >
                <span className="d-flex align-items-center gap-2">
                  <i className="bi bi-collection-fill text-danger"></i>
                  Services &amp; Support
                </span>
                <i
                  className={`bi bi-chevron-${isServicesExpanded ? 'up' : 'down'} text-muted small`}
                ></i>
              </button>

              {isServicesExpanded && (
                <div className="mobile-dropdown-body ps-3 pe-2 pt-2 border-top mt-1">
                  <NavLink
                    to="/services/therapies"
                    onClick={onClose}
                    className={({ isActive }) =>
                      `mobile-sublink d-flex align-items-center gap-2 py-2 px-2 rounded ${
                        isActive ? 'is-active text-danger fw-bold bg-white' : 'text-dark'
                      }`
                    }
                  >
                    <i className="bi bi-heart-pulse-fill text-danger small"></i>
                    <div>
                      <span className="d-block small fw-bold">Therapy Programs</span>
                      <span className="text-muted text-xs d-block">
                        OT, Speech, Sensory, ADHD
                      </span>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/services/areas-of-support"
                    onClick={onClose}
                    className={({ isActive }) =>
                      `mobile-sublink d-flex align-items-center gap-2 py-2 px-2 rounded mt-1 ${
                        isActive ? 'is-active text-danger fw-bold bg-white' : 'text-dark'
                      }`
                    }
                  >
                    <i className="bi bi-grid-fill text-primary small"></i>
                    <div>
                      <span className="d-block small fw-bold">Areas of Support</span>
                      <span className="text-muted text-xs d-block">
                        Speech Delay, Meltdowns, Focus
                      </span>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/how-it-works"
              onClick={onClose}
            >
              <i className="bi bi-check2-circle me-2"></i>How It Works
            </NavLink>

            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/centres"
              onClick={onClose}
            >
              <i className="bi bi-geo-alt me-2"></i>Centres
            </NavLink>

            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/parents-corner"
              onClick={onClose}
            >
              Parent's Corner
            </NavLink>
            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/reviews"
              onClick={onClose}
            >
              <i className="bi bi-star me-2"></i>Reviews
            </NavLink>

            <NavLink
              className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
              to="/contact"
              onClick={onClose}
            >
              <i className="bi bi-envelope me-2"></i>Contact
            </NavLink>
          </nav>

          <div className="mobile-menu__actions mt-auto pt-3 border-top">
            <button
              type="button"
              className="btn btn-clc w-100 mb-2 py-2.5"
              onClick={handleBookingClick}
            >
              <i className="bi bi-calendar-check me-2"></i>Book a consultation
            </button>
            <a
              href="tel:+919004460650"
              className="btn btn-clc-outline w-100 mb-2 py-2.5"
            >
              <i className="bi bi-telephone me-2"></i>+91 90044 60650
            </a>
            <a
              href="https://wa.me/919004460650?text=Hello%20CLC%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success w-100 py-2.5 d-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-whatsapp"></i>Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}
