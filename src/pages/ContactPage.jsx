
import React from 'react';
import '../styles/index.css';
import BookingForm from '../components/forms/BookingForm';

export default function ContactPage() {
  return (
    <main id="main" className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">
              <span className="contact-tag">
                <i className="bi bi-heart-pulse"></i>
                HERE FOR EVERY LITTLE STEP
              </span>

              <h1>
                Let's make your child's
                <span> growth journey </span>
                brighter.
              </h1>

              <p className="contact-hero-text">
                Every child deserves the right support and opportunity
                to grow. Connect with our team to discuss your concerns
                and take the first step towards your child's development.
              </p>

              <div className="contact-hero-actions">
                <a href="#appointment" className="btn btn-clc btn-lg-clc">
                  Book a Consultation
                  <i className="bi bi-arrow-right"></i>
                </a>

                <a href="tel:+919004460650" className="contact-call-link">
                  <span className="call-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <span>
                    <small>Call us anytime</small>
                    <strong>+91 90044 60650</strong>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="contact-hero-card">
                <div className="hero-card-decoration">
                  <i className="bi bi-heart-fill"></i>
                </div>

                <div className="hero-card-icon">
                  <i className="bi bi-chat-heart"></i>
                </div>

                <span className="hero-card-label">A LITTLE SUPPORT GOES A LONG WAY</span>

                <h2>Every child is special.</h2>

                <p>
                  We believe in understanding every child's unique needs
                  and helping families find the right path forward.
                </p>

                <div className="hero-card-footer">
                  <i className="bi bi-check-circle-fill"></i>
                  Together, let's help children thrive.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK CONTACT SECTION */}
      <section className="contact-quick">
        <div className="container">
          <div className="row g-3">

            <div className="col-md-4">
              <a href="tel:+919004460650" className="quick-card">
                <div className="quick-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="quick-content">
                  <span>CALL OUR TEAM</span>
                  <strong>+91 90044 60650</strong>
                </div>
                <i className="bi bi-arrow-up-right quick-arrow"></i>
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
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div className="quick-content">
                  <span>WHATSAPP US</span>
                  <strong>Chat with our team</strong>
                </div>
                <i className="bi bi-arrow-up-right quick-arrow"></i>
              </a>
            </div>

            <div className="col-md-4">
              <div className="quick-card">
                <div className="quick-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="quick-content">
                  <span>CLINIC HOURS</span>
                  <strong>Mon – Sat, 9 AM – 7:30 PM</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <section className="contact-booking section" id="appointment">
        <div className="container">

          <div className="contact-section-heading">
            <span className="contact-eyebrow">
              YOUR CHILD'S JOURNEY STARTS HERE
            </span>

            <h2>Let's Take the First Step Together</h2>

            <p>
              Tell us a little about your child. Our team will connect
              with you to understand your needs and arrange a suitable
              consultation.
            </p>
          </div>

          <div className="row g-4 g-xl-5 align-items-stretch">

            {/* INFORMATION PANEL */}
            <div className="col-lg-4">
              <div className="booking-aside">

                <span className="aside-label">HOW CAN WE HELP?</span>

                <h3>
                  We're here to listen, understand and support.
                </h3>

                <p className="aside-description">
                  Whether you need an evaluation, consultation or
                  guidance, our team is ready to help your family.
                </p>

                <div className="booking-benefits">

                  <div className="booking-benefit">
                    <span className="benefit-icon">
                      <i className="bi bi-chat-dots"></i>
                    </span>
                    <div>
                      <strong>Personal Guidance</strong>
                      <p>Get support based on your child's needs.</p>
                    </div>
                  </div>

                  <div className="booking-benefit">
                    <span className="benefit-icon">
                      <i className="bi bi-calendar-check"></i>
                    </span>
                    <div>
                      <strong>Easy Appointment</strong>
                      <p>Arrange a convenient consultation time.</p>
                    </div>
                  </div>

                  <div className="booking-benefit">
                    <span className="benefit-icon">
                      <i className="bi bi-heart"></i>
                    </span>
                    <div>
                      <strong>Family-Centred Care</strong>
                      <p>Every child's journey matters to us.</p>
                    </div>
                  </div>

                </div>

                <div className="booking-aside-note">
                  <i className="bi bi-quote"></i>
                  <p>
                    Small steps today can create wonderful possibilities
                    for tomorrow.
                  </p>
                </div>

              </div>
            </div>

            {/* FORM PANEL */}
            <div className="col-lg-8">
              <div className="contact-form-panel">

                <div className="contact-form-top">
                  <div>
                    <span className="contact-eyebrow">
                      APPOINTMENT REQUEST
                    </span>
                    <h3>Tell Us About Your Child</h3>
                    <p>
                      Fill in the details below and we'll get in touch.
                    </p>
                  </div>

                  <div className="form-top-icon">
                    <i className="bi bi-journal-medical"></i>
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
      </section>

      {/* LOCATION SECTION */}
      <section className="contact-location">
        <div className="container">
          <div className="location-card">

            <div className="location-icon">
              <i className="bi bi-geo-alt"></i>
            </div>

            <div className="location-content">
              <span className="contact-eyebrow">WE'D LOVE TO MEET YOU</span>
              <h3>Visit Our Head Office</h3>
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
              Get Directions
              <i className="bi bi-arrow-up-right"></i>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
