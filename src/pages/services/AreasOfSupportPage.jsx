import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { areasOfSupport, services } from '../../data/servicesData';
import PageHero from '../../components/ui/PageHero';
import CtaBand from '../../components/ui/CtaBand';
import Reveal from '../../components/common/Motion';

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

export default function AreasOfSupportPage() {
  const { openBooking } = useModal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? areasOfSupport
      : areasOfSupport.filter((item) => item.category === activeCategory);

  return (
    <main id="main">
      {/* Page Hero */}
      <PageHero
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Areas of support' }
        ]}
        eyebrow="Developmental guide"
        title="Understanding your child's developmental needs"
        lead="Parents often notice everyday challenges before knowing a therapy name. Browse common concerns to see how our clinical team helps."
        image="/assets/support/activity-1.jpg"
        actions={
          <button
            type="button"
            className="btn btn-clc btn-lg-clc"
            onClick={() => openBooking()}
          >
            Book an evaluation
          </button>
        }
      />

      {/* Segmented Sub-navigation */}
      <section className="section section--white pb-0">
        <div className="container">
          <div className="segmented-control" role="tablist" aria-label="Services navigation">
            <Link
              to="/services/therapies"
              className="segmented-btn"
            >
              <i className="bi bi-heart-pulse-fill me-1" aria-hidden="true"></i>
              Therapy programmes ({services.length})
            </Link>
            <Link
              to="/services/areas-of-support"
              className="segmented-btn is-active"
              aria-current="page"
            >
              <i className="bi bi-grid-fill me-1" aria-hidden="true"></i>
              Areas of support ({areasOfSupport.length})
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="py-4 bg-light border-bottom sticky-top-subnav">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <span className="small fw-bold text-muted text-uppercase letter-spacing-1">
              Filter by area:
            </span>
            <div className="filter-pill-container d-flex flex-wrap gap-2" role="group" aria-label="Filter by challenge area">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
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
          <div key={activeCategory} className="row g-4 g-lg-5">
            {filteredItems.map((item, i) => (
              <div key={item.id} className="col-12 col-md-6" id={item.id}>
                <Reveal delay={(i % 2) * 90}>
                  <div className="tile p-4 h-100 d-flex flex-column justify-between">
                    <div>
                      {/* Visual Card Image */}
                      <div
                        className="about-frame mb-3 rounded-3 overflow-hidden"
                        style={{ aspectRatio: '16/10' }}
                      >
                        <Reveal variant="zoom">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-100 h-100 object-fit-cover"
                            loading="lazy"
                            width="500"
                            height="312"
                          />
                        </Reveal>
                      </div>

                      {/* Category */}
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="badge badge-concern small">
                          {item.category}
                        </span>
                        <span className="text-muted small d-inline-flex align-items-center gap-1">
                          <i className={`bi ${item.icon} text-danger fs-6`} aria-hidden="true"></i>
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h2 className="h4 mb-2">{item.title}</h2>
                      <p className="text-danger fw-semibold small mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-muted small mb-3">
                        {item.overview}
                      </p>

                      {/* Signs Parents Notice */}
                      <div className="p-3 rounded-3 therapy-target-box mb-3">
                        <strong className="d-block text-dark small mb-2">
                          <i className="bi bi-eye-fill text-danger me-1" aria-hidden="true"></i>
                          Signs you may notice at home or school:
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
                          <i className="bi bi-shield-check text-success me-1" aria-hidden="true"></i>
                          How our therapists intervene:
                        </strong>
                        <p className="small text-muted mb-0">{item.howWeHelp}</p>
                      </div>
                    </div>

                    {/* Card Bottom: Matched Therapy & Direct Action */}
                    <div className="pt-3 border-top mt-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                        <span className="small text-muted">
                          Recommended therapy:
                        </span>
                        <span className="badge badge-subtle fw-bold">
                          {item.therapyMatched}
                        </span>
                      </div>

                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-clc btn-sm flex-grow-1"
                          onClick={() => openBooking(item.concern)}
                        >
                          <i className="bi bi-calendar-check me-1" aria-hidden="true"></i>
                          Book evaluation
                        </button>
                        <a
                          href={`https://wa.me/919004460650?text=${encodeURIComponent(
                            `Hello CLC, I would like to inquire regarding support for: ${item.title}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-clc-outline btn-sm px-3"
                          aria-label={`Chat on WhatsApp about ${item.title}`}
                        >
                          <i className="bi bi-whatsapp" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Recognise any of these signs in your child?"
        lead="Book a 40-minute initial evaluation at our Mumbai, Navi Mumbai, Thane, Nagpur or Nashik clinics to receive a clear assessment and plan."
      />
    </main>
  );
}
