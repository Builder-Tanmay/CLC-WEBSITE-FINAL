import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { areasOfSupport } from '../../data/servicesData';

export default function AreasOfSupportPage() {
  const { openBooking } = useModal();
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamic SEO & Title management
  useEffect(() => {
    document.title = 'Areas of Support & Pediatric Challenges | Child Learning Centre (CLC)';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Find targeted developmental support by challenge: Speech Delay, Sensory Meltdowns, ADHD & Focus, Autism Spectrum, Fine Motor, Dyslexia, and Emotional Regulation across Mumbai & Pune.'
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    'All',
    'Communication',
    'Sensory Regulation',
    'Attention & Executive Function',
    'Neurodevelopment',
    'Motor Development',
    'Academic Support',
    'Emotional Wellness',
    'Early Intervention'
  ];

  const filteredItems =
    activeCategory === 'All'
      ? areasOfSupport
      : areasOfSupport.filter((item) => item.category === activeCategory);

  return (
    <main id="main">
      {/* Header Banner */}
      <section className="section section--white pb-0">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Services</li>
              <li className="breadcrumb-item active" aria-current="page">
                Areas of Support
              </li>
            </ol>
          </nav>

          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              Symptom-Led Parental Guide
            </span>
            <h1 className="h2 mb-3">Understanding Your Child’s Developmental Challenges</h1>
            <p className="lead text-muted">
              Parents often recognize specific behavioral, sensory, or school struggles long before knowing the clinical therapy name. Browse through our core areas of care to understand what your child is experiencing and how our specialized therapies help them thrive.
            </p>
          </div>

          {/* Quick Sub-navigation Pill Bar */}
          <div className="d-flex flex-wrap gap-2 pt-2 pb-4 border-bottom">
            <Link
              to="/services/areas-of-support"
              className="btn btn-clc btn-sm px-3 rounded-pill"
            >
              <i className="bi bi-grid-fill me-1"></i>
              Areas of Support ({areasOfSupport.length})
            </Link>
            <Link
              to="/services/therapies"
              className="btn btn-clc-outline btn-sm px-3 rounded-pill"
            >
              <i className="bi bi-heart-pulse-fill me-1"></i>
              View Clinical Therapy Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Pills */}
      <section className="py-3 bg-light border-bottom sticky-top-subnav">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <span className="small fw-bold text-muted text-uppercase letter-spacing-1">
              Filter by Area:
            </span>
            <div className="filter-pill-container d-flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`btn btn-sm rounded-pill transition-all ${
                    activeCategory === cat
                      ? 'btn-danger text-white shadow-sm'
                      : 'btn-outline-secondary bg-white text-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Support Grid */}
      <section className="section pt-4">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-12 col-md-6" id={item.id}>
                <div className="tile p-4 p-lg-4 h-100 d-flex flex-column justify-between shadow-sm hover-lift">
                  <div>
                    {/* Visual Card Image */}
                    <div
                      className="about-frame mb-3 shadow-2xs rounded-3 overflow-hidden"
                      style={{ aspectRatio: '16/10' }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-100 h-100 object-fit-cover transition-scale"
                        loading="lazy"
                      />
                    </div>

                    {/* Category & Icon */}
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="badge bg-danger-subtle text-danger px-3 py-1.5 rounded-pill fw-bold small">
                        {item.category}
                      </span>
                      <span className="text-muted small d-inline-flex align-items-center gap-1">
                        <i className={`bi ${item.icon} text-danger fs-6`}></i>
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="h4 text-navy mb-2">{item.title}</h2>
                    <p className="text-danger fw-semibold small mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-muted small leading-relaxed mb-3">
                      {item.overview}
                    </p>

                    {/* Common Signs Parents Notice */}
                    <div className="p-3 rounded-3 bg-light border border-light-subtle mb-3">
                      <strong className="d-block text-dark small mb-2">
                        <i className="bi bi-eye-fill text-danger me-1"></i>
                        Signs You May Notice at Home or School:
                      </strong>
                      <ul className="mb-0 ps-3 small text-muted">
                        {item.signs.map((sign, idx) => (
                          <li key={idx} className="mb-1">
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinical Approach */}
                    <div className="mb-3">
                      <strong className="d-block text-dark small mb-1">
                        <i className="bi bi-shield-check text-success me-1"></i>
                        How Our Therapists Intervene:
                      </strong>
                      <p className="small text-muted mb-0">{item.howWeHelp}</p>
                    </div>
                  </div>

                  {/* Card Bottom: Matched Therapy & Direct Action */}
                  <div className="pt-3 border-top mt-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <span className="small text-muted">
                        Recommended Therapy:
                      </span>
                      <span className="badge bg-secondary-subtle text-dark fw-bold">
                        {item.therapyMatched}
                      </span>
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-clc btn-sm flex-grow-1"
                        onClick={() => openBooking(item.concern)}
                      >
                        <i className="bi bi-calendar-check me-1"></i>
                        Book Evaluation
                      </button>
                      <a
                        href={`https://wa.me/919004460650?text=${encodeURIComponent(
                          `Hello CLC, I would like to inquire regarding support for: ${item.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-clc-outline btn-sm px-3"
                        title="Chat on WhatsApp"
                      >
                        <i className="bi bi-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic & Consultation Assurance Banner */}
      <section className="section section--white border-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <div className="process-aside py-4 px-4 px-md-5">
                <span className="badge bg-danger text-white px-3 py-1 rounded-pill fw-bold mb-2">
                  13+ Years Clinical Heritage
                </span>
                <h3 className="h4 mb-2">
                  Recognize any of these signs in your child?
                </h3>
                <p className="text-muted mb-4 fs-6">
                  Early identification makes the greatest difference. Book a confidential 40-minute initial developmental assessment at our Nerul, Thane, Chembur, Vashi, Nagpur, or Nashik clinics to receive an actionable roadmap.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button
                    type="button"
                    className="btn btn-clc"
                    onClick={() => openBooking('General Screening')}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Schedule Child Evaluation
                  </button>
                  <a
                    href="tel:+919004460650"
                    className="btn btn-clc-outline"
                  >
                    <i className="bi bi-telephone me-2"></i>
                    Call Us: +91 90044 60650
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

