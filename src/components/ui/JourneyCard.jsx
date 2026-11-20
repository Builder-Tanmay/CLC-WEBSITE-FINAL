import React from 'react';
import { useModal } from '../../context/ModalContext';

export default function JourneyCard({ item }) {
  const { openBooking } = useModal();

  return (
    <button
      type="button"
      className="journey-card w-100 text-start"
      onClick={() => openBooking()}
      aria-label={`${item.title}: ${item.footer}`}
    >
      <span className="journey-notch" aria-hidden="true"></span>
      <div>
        <div className="journey-card-top">
          <div className={`journey-icon-wrap journey-icon-wrap--${item.modifier}`}>
            <i className={`bi ${item.icon}`} aria-hidden="true"></i>
          </div>
          <span className="journey-step-num">{item.step}</span>
        </div>
        <h3 className="journey-step-h3">{item.title}</h3>
        <p className="journey-step-desc">{item.desc}</p>
      </div>
      <div className="journey-card-footer">
        <span>{item.footer}</span>
        <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
      </div>
    </button>
  );
}
