import React from 'react';
import { useModal } from '../../context/ModalContext';
import Reveal from '../common/Motion';

export default function CtaBand({
  title = 'Ready to talk about your child?',
  lead = 'Book an evaluation or message us on WhatsApp. We will help you choose a centre and a time.',
  primaryAction,
  secondaryAction
}) {
  const { openBooking } = useModal();

  return (
    <section className="section pt-0 pb-5">
      <div className="container">
        <Reveal variant="zoom">
          <div className="cta-band">
            <span className="shape shape--1" aria-hidden="true"></span>
            <div className="row align-items-center g-3 position-relative">
              <div className="col-lg-8">
                <h2>{title}</h2>
                {lead && <p className="mb-0">{lead}</p>}
              </div>
              <div className="col-lg-4 d-flex flex-wrap gap-2 justify-content-lg-end">
                {primaryAction || (
                  <button type="button" className="btn btn-clc btn-lg-clc" onClick={() => openBooking()}>
                    Book an evaluation
                  </button>
                )}
                {secondaryAction || (
                  <a
                    href="https://wa.me/919004460650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-clc-outline btn-hero-outline btn-lg-clc"
                  >
                    <i className="bi bi-whatsapp"></i>WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
