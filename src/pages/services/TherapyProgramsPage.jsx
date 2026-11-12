import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { services } from '../../data/servicesData';

export default function TherapyProgramsPage() {
  const { openBooking } = useModal();

  // Dynamic SEO & Title management
  useEffect(() => {
    document.title = 'Therapy Programs & Clinical Treatments | Child Learning Centre (CLC)';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore evidence-based pediatric therapy programs at CLC: Occupational Therapy, Speech Therapy, Sensory Integration, ADHD Support, and Remedial Education across Mumbai & Pune.'
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
                Therapy Programs
              </li>
            </ol>
          </nav>

          <div className="section-head mb-4">
            <span className="hero__note d-inline-block ps-3 border-start border-3 border-danger mb-2">
              Clinical Therapy Programs
            </span>
            <h1 className="h2 mb-3">Evidence-based pediatric therapies tailored to your child</h1>
            <p className="lead text-muted">
              Each programme is led by licensed, experienced practitioners who design custom sensory, motor, and speech roadmaps tailored to your child’s unique rhythm, sensory profile, and milestone goals.
            </p>
          </div>

          {/* Quick Sub-navigation Pill Bar */}
          <div className="d-flex flex-wrap gap-2 pt-2 pb-4 border-bottom">
            <Link
              to="/services/therapies"
              className="btn btn-clc btn-sm px-3 rounded-pill"
            >
              <i className="bi bi-heart-pulse-fill me-1"></i>
              Therapy Programs ({services.length})
            </Link>
            <Link
              to="/services/areas-of-support"
              className="btn btn-clc-outline btn-sm px-3 rounded-pill"
            >
              <i className="bi bi-grid-fill me-1"></i>
              View Areas of Support (By Child Challenge)
            </Link>
          </div>
        </div>
      </section>

      {/* Therapy Detailed Breakdown */}
      <section className="section pt-4">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {services.map((service, index) => (
              <div key={service.id} className="col-12" id={service.id}>
                <div className="tile p-3 p-md-4 p-lg-5 h-100">
                  <div className="row align-items-center g-4 g-lg-5">
                    {/* Media Column */}
                    <div className={`col-lg-5 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                      <div className="about-frame shadow-sm" style={{ aspectRatio: '16/11' }}>
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-100 h-100 object-fit-cover rounded-3"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`col-lg-7 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                      <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill fw-bold mb-3 d-inline-block">
                        {service.concern}
                      </span>
                      <h2 className="h3 mb-3 text-navy">{service.title}</h2>
                      <p className="text-muted mb-3 fs-5 leading-relaxed">{service.desc}</p>

                      <div className="mb-3 p-3 rounded-3 bg-light border border-light-subtle">
                        <strong className="d-block text-dark mb-1">
                          <i className="bi bi-person-check-fill text-danger me-2"></i>
                          Who is this for?
                        </strong>
                        <p className="text-muted mb-0 small">{service.whoIsItFor}</p>
                      </div>

                      {service.benefits && (
                        <div className="mb-4">
                          <strong className="d-block text-dark mb-2">Core Clinical Focus Areas:</strong>
                          <ul className="tick-list mt-0 mb-0">
                            {service.benefits.map((b, i) => (
                              <li key={i} className="mb-2 text-dark">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="d-flex flex-wrap gap-3 pt-2">
                        <button
                          type="button"
                          className="btn btn-clc"
                          onClick={() => openBooking(service.concern)}
                        >
                          <i className="bi bi-calendar-check me-2"></i>
                          Inquire about {service.title}
                        </button>
                        <a
                          href={`https://wa.me/919004460650?text=${encodeURIComponent(
                            `Hello CLC Team, I am interested in inquiring about ${service.title}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-clc-outline"
                        >
                          <i className="bi bi-whatsapp me-2"></i>Ask on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Session Details Banner */}
      <section className="section section--white border-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <div className="process-aside py-4 px-4 px-md-5">
                <span className="badge bg-danger text-white px-3 py-1 rounded-pill fw-bold mb-2">
                  1-on-1 Personalized Care
                </span>
                <h3 className="h4 mb-2">Unsure which therapy program your child needs?</h3>
                <p className="text-muted mb-4 fs-6">
                  Every child develops on their own timeline. During your initial 40-minute evaluation, our multidisciplinary team evaluates sensory processing, motor coordination, expressive speech, and attention stamina to recommend the exact therapies needed.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button
                    type="button"
                    className="btn btn-clc"
                    onClick={() => openBooking('General Screening')}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Book an Initial Evaluation
                  </button>
                  <Link
                    to="/services/areas-of-support"
                    className="btn btn-clc-outline"
                  >
                    <i className="bi bi-search me-2"></i>
                    Browse by Child's Symptoms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

