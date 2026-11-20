import React from 'react';
import BookingForm from '../components/forms/BookingForm';
import Reveal from '../components/common/Motion';
import usePageMeta from '../hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us & Book an Evaluation | Child Learning Centre (CLC)',
    description: 'Connect with Child Learning Centre to discuss your child, inquire about therapies, or book an initial consultation in Maharashtra.',
    canonical: 'https://childlearningcentre.in/contact'
  });
  return (
    <main id="main" className="contact-page">
      {/* Hero Section */}
      <Reveal as="section" className="contact-hero">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-7">
              <span className="contact-tag">
                <i className="bi bi-geo-alt-fill me-1" aria-hidden="true"></i>
                Clinics across Maharashtra
              </span>

              <h1>
                Paediatric evaluations and family guidance
              </h1>

              <p className="contact-hero-text">
                Every child develops on their own timeline. Connect with our clinical team to discuss your concerns, learn about our therapy programmes, and schedule an initial 40-minute evaluation.
              </p>

              <div className="contact-hero-actions">
                <a href="#appointment" className="btn btn-clc btn-lg-clc">
                  Book an evaluation
                  <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
                </a>

                <a href="tel:+919004460650" className="contact-call-link">
                  <span className="call-icon">
                    <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                  </span>
                  <span>
                    <small>Call our team</small>
                    <strong>+91 90044 60650</strong>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="contact-hero-card">
                <span className="hero-card-label">Session structure</span>

                <h2>40 minutes + parent debrief</h2>

                <p>
                  Every session at CLC is 40 minutes long and ends with a parent debrief so you know exactly what was worked on and what to practise at home.
                </p>

                <div className="hero-card-footer">
                  <i className="bi bi-check-circle-fill me-2" aria-hidden="true"></i>
                  Monday to Saturday, 9:00 AM to 7:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Quick Contact Section */}
      <Reveal as="section" className="contact-quick">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4">
              <a href="tel:+919004460650" className="quick-card">
                <div className="quick-icon">
                  <i className="bi bi-telephone" aria-hidden="true"></i>
                </div>
                <div className="quick-content">
                  <span>Call our team</span>
                  <strong>+91 90044 60650</strong>
                </div>
                <i className="bi bi-arrow-up-right quick-arrow" aria-hidden="true"></i>
              </a>
            </div>

            <div className="col-md-4">
              <a
                href="https://wa.me/919004460650"
                target="_blank"
                rel="noopener noreferrer"
                className="quick-card"
              >
                <div className="quick-icon">
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                </div>
                <div className="quick-content">
                  <span>WhatsApp our team</span>
                  <strong>Chat with a coordinator</strong>
                </div>
                <i className="bi bi-arrow-up-right quick-arrow" aria-hidden="true"></i>
              </a>
            </div>

            <div className="col-md-4">
              <div className="quick-card">
                <div className="quick-icon">
                  <i className="bi bi-clock" aria-hidden="true"></i>
                </div>
                <div className="quick-content">
                  <span>Clinic hours</span>
                  <strong>Mon – Sat, 9 AM – 7:30 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Appointment Section */}
      <Reveal as="section" className="contact-booking section" id="appointment">
        <div className="container">
          <div className="contact-section-heading">
            <span className="contact-eyebrow">
              Consultation request
            </span>

            <h2>Book an evaluation</h2>

            <p>
              Tell us a little about your child. Our clinical coordinator will reach out to understand your concerns and confirm a centre and time that suit your family.
            </p>
          </div>

          <div className="row g-4 g-xl-5 align-items-stretch">
            {/* Information Panel */}
            <div className="col-lg-4">
              <div className="booking-aside">
                <span className="aside-label">What to expect</span>

                <h3>
                  Personalised care from the first visit
                </h3>

                <p className="aside-description">
                  Whether you are seeking speech therapy, occupational therapy, sensory integration or ADHD support, our multidisciplinary team is here to guide you.
                </p>

                <div className="booking-benefits">
                  <div className="booking-benefit">
                    <span className="benefit-icon">
                      <i className="bi bi-chat-dots" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>Initial evaluation</strong>
                      <p>Comprehensive assessment through play and developmental tasks.</p>
                    </div>
                  </div>

                  <div className="booking-benefit">
                    <span className="benefit-icon">
                      <i className="bi bi-calendar-check" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>Flexible appointments</strong>
                      <p>Convenient time slots across our Maharashtra clinics.</p>
                    </div>
                  </div>

                  <div className="booking-benefit">
                    <span className="benefit-icon">
                      <i className="bi bi-journal-check" aria-hidden="true"></i>
                    </span>
                    <div>
                      <strong>Actionable home plan</strong>
                      <p>Clear activities and guidance following every session.</p>
                    </div>
                  </div>
                </div>

                <div className="booking-aside-note">
                  <p className="mb-0">
                    Sessions are 40 minutes long with an immediate parent debrief.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="col-lg-8">
              <div className="contact-form-panel">
                <div className="contact-form-top">
                  <div>
                    <span className="contact-eyebrow">
                      Appointment request
                    </span>
                    <h3>Tell us about your child</h3>
                    <p>
                      Fill in the details below and we will get in touch shortly.
                    </p>
                  </div>

                  <div className="form-top-icon">
                    <i className="bi bi-journal-medical" aria-hidden="true"></i>
                  </div>
                </div>

                <BookingForm
                  idPrefix="contact-page"
                  withHeading={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Location Section */}
      <Reveal as="section" className="contact-location">
        <div className="container">
          <div className="location-card">
            <div className="location-icon">
              <i className="bi bi-geo-alt" aria-hidden="true"></i>
            </div>

            <div className="location-content">
              <span className="contact-eyebrow">Head office</span>
              <h3>Visit our Nerul centre</h3>
              <p>
                Shop No. 4 &amp; 5, Beside CSB Bank, Sai Sthan Apt,
                Sector 29, Nerul East, Navi Mumbai - 400706
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shop+No+4+5+Sai+Sthan+Apt+Sector+29+Nerul+East+Navi+Mumbai+400706"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-clc-outline"
            >
              Get directions
              <i className="bi bi-arrow-up-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
