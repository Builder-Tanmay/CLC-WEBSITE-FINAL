import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { services, areasOfSupport } from '../../data/servicesData';
import PageHero from '../../components/ui/PageHero';
import CtaBand from '../../components/ui/CtaBand';
import Reveal from '../../components/common/Motion';

export default function TherapyProgramsPage() {
  const { openBooking } = useModal();

  return (
    <main id="main">
      {/* Page Hero */}
      <PageHero
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Therapy programmes' }
        ]}
        eyebrow="Clinical therapy programmes"
        title="Paediatric therapies tailored to your child"
        lead="Each programme is led by licensed practitioners who design structured sensory, motor and speech sessions tailored to your child's needs."
        image="/assets/centre/centre-5.jpg"
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
              className="segmented-btn is-active"
              aria-current="page"
            >
              <i className="bi bi-heart-pulse-fill me-1" aria-hidden="true"></i>
              Therapy programmes ({services.length})
            </Link>
            <Link
              to="/services/areas-of-support"
              className="segmented-btn"
            >
              <i className="bi bi-grid-fill me-1" aria-hidden="true"></i>
              Areas of support ({areasOfSupport.length})
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
                <Reveal variant={index % 2 === 1 ? 'right' : 'left'}>
                  <div className="tile p-3 p-md-4 p-lg-5 h-100">
                    <div className="row align-items-center g-4 g-lg-5">
                      {/* Media Column */}
                      <div className={`col-lg-5 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                        <div className="about-frame shadow-sm" style={{ aspectRatio: '16/11' }}>
                          <Reveal variant="zoom">
                            <img
                              src={service.img}
                              alt={service.title}
                              className="w-100 h-100 object-fit-cover rounded-3"
                              loading="lazy"
                              width="560"
                              height="385"
                            />
                          </Reveal>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className={`col-lg-7 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                        <span className="badge badge-concern mb-3 d-inline-block">
                          {service.concern}
                        </span>
                        <h2 className="h3 mb-3">{service.title}</h2>
                        <p className="therapy-lead mb-3">{service.desc}</p>

                        <div className="therapy-target-box mb-3 p-3 rounded-3">
                          <strong className="d-block mb-1">
                            <i className="bi bi-person-check-fill text-danger me-2" aria-hidden="true"></i>
                            Who is this for?
                          </strong>
                          <p className="mb-0 small">{service.whoIsItFor}</p>
                        </div>

                        {service.benefits && (
                          <div className="mb-4">
                            <strong className="d-block mb-2">Core clinical focus areas:</strong>
                            <ul className="tick-list mt-0 mb-0">
                              {service.benefits.map((b, i) => (
                                <li key={i} className="mb-2">
                                  <Reveal delay={(i % 4) * 90}>
                                    <span>{b}</span>
                                  </Reveal>
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
                            <i className="bi bi-calendar-check me-2" aria-hidden="true"></i>
                            Inquire about {service.title.toLowerCase()}
                          </button>
                          <a
                            href={`https://wa.me/919004460650?text=${encodeURIComponent(
                              `Hello CLC team, I would like to inquire about ${service.title}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-clc-outline"
                          >
                            <i className="bi bi-whatsapp me-2" aria-hidden="true"></i>Ask on WhatsApp
                          </a>
                        </div>
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
        title="Unsure which therapy programme your child needs?"
        lead="During your initial 40-minute evaluation, our team assesses sensory processing, motor skills, speech and attention to recommend the right plan."
      />
    </main>
  );
}
