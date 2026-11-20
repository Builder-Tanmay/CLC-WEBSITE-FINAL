import React, { useState } from 'react';
import { centres } from '../data/centresData';
import CentreCard from '../components/ui/CentreCard';
import CtaBand from '../components/ui/CtaBand';
import { useModal } from '../context/ModalContext';
import Reveal from '../components/common/Motion';

const filters = [
  { value: 'all', label: 'All Centres' },
  { value: 'Navi Mumbai', label: 'Navi Mumbai' },
  { value: 'Mumbai / Thane', label: 'Mumbai & Thane' },
  { value: 'Other', label: 'Nagpur & Nashik' }
];

export default function CentresPage() {
  const [centreFilter, setCentreFilter] = useState('all');
  const { openBooking } = useModal();

  const filteredCentres =
    centreFilter === 'all'
      ? centres
      : centres.filter((centre) => centre.category === centreFilter);

  const cityCount = new Set(centres.map((centre) => centre.area)).size;

  return (
    <main id="main" className="centres-page">


      {/* Page Introduction */}
      <section className="centres-hero">
        <div className="container">
          <div className="row align-items-center g-4 centres-hero__layout">

            <div className="col-lg-7">
              <Reveal className="centres-hero__content">
                <span className="centres-eyebrow">
                  <i className="bi bi-geo-alt-fill me-1" aria-hidden="true"></i>
                  Our locations across Maharashtra
                </span>

                <h1>
                  Find the right <span>CLC centre</span> near you
                </h1>

                <p className="centres-hero__description">
                  Explore our clinics in Mumbai, Navi Mumbai, Thane, Nagpur and Nashik. Each centre offers dedicated therapy rooms and 40-minute guided sessions with an immediate parent debrief.
                </p>

                <div className="centres-highlights">
                  <div className="centres-highlight">
                    <i className="bi bi-building"></i>
                    <div>
                      <strong>{centres.length}</strong>
                      <span>Centres</span>
                    </div>
                  </div>

                  <div className="centres-highlight">
                    <i className="bi bi-geo-alt"></i>
                    <div>
                      <strong>{cityCount}</strong>
                      <span>Areas covered</span>
                    </div>
                  </div>

                  <div className="centres-highlight">
                    <i className="bi bi-clock"></i>
                    <div>
                      <strong>Mon – Sat</strong>
                      <span>Working days</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-5">
              <Reveal variant="clip" className="centres-hero__visual">
                <img
                  src="/assets/centre/WhatsApp Image 2026-10-07 at 7.26.04 PM (1).jpeg"
                  alt="Parents and the CLC team participating in a group session"
                  className="centres-hero__image"
                />

                <div className="centres-hero__image-note">
                  <span>Therapy rooms across Maharashtra</span>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Centre Directory */}
      <section className="centres-directory section">
        <div className="container">

          <Reveal className="centres-section-heading">
            <div>
              <span className="centres-section-kicker">
                Locations
              </span>
              <h2>Our centres</h2>
              <p>
                Find a convenient clinic and get directions to your nearest Child Learning Centre.
              </p>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal className="centres-filter-wrapper">
            <div className="centres-filter-list" role="group"
              aria-label="Filter centres by location">

              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={`centres-filter-btn ${centreFilter === filter.value ? 'active' : ''
                    }`}
                  aria-pressed={centreFilter === filter.value}
                  onClick={() => setCentreFilter(filter.value)}
                >
                  {filter.label}

                  {filter.value === 'all' && (
                    <span className="filter-count">{centres.length}</span>
                  )}
                </button>
              ))}

            </div>

            <p className="centres-result-count" aria-live="polite">
              Showing <strong>{filteredCentres.length}</strong>{' '}
              {filteredCentres.length === 1 ? 'centre' : 'centres'}
            </p>
          </Reveal>

          {/* Centre Cards */}
          <Reveal key={centreFilter} className="row g-4 centres-grid" aria-live="polite">

            {filteredCentres.length > 0 ? (
              filteredCentres.map((centre, index) => (
                <CentreCard
                  key={centre.id}
                  centre={centre}
                  delay={(index % 4) * 70}
                />
              ))
            ) : (
              <div className="col-12">
                <p className="text-center py-5 text-muted">
                  No centres found in this location.
                </p>
              </div>
            )}

          </Reveal>

        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Not sure which centre is right for you?"
        lead="Our team will help you choose a convenient clinic in Mumbai, Navi Mumbai, Thane, Nagpur or Nashik."
      />
    </main>
  );
}
