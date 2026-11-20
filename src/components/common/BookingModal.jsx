import React, { useEffect, useRef } from 'react';
import { useModal } from '../../context/ModalContext';
import BookingForm from '../forms/BookingForm';

export default function BookingModal() {
  const { isBookingOpen, closeBooking, bookingConcern } = useModal();
  const modalRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    if (!isBookingOpen) return undefined;

    prevFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    // Focus the first focusable element or modal container
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length > 0) {
          focusables[0].focus();
        } else {
          modalRef.current.focus();
        }
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeBooking();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = Array.from(
          modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.disabled && el.offsetParent !== null);

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      if (prevFocusRef.current && typeof prevFocusRef.current.focus === 'function') {
        prevFocusRef.current.focus();
      }
    };
  }, [isBookingOpen, closeBooking]);

  if (!isBookingOpen) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        id="bookingModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="bookingModalLabel"
        aria-modal="true"
        ref={modalRef}
        onClick={(e) => {
          if (e.target.classList.contains('modal')) {
            closeBooking();
          }
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-booking">
          <div className="modal-content shadow">
            <div className="modal-header border-0 pb-0">
              <h2 className="modal-title h5" id="bookingModalLabel">Book a child evaluation</h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeBooking}
              ></button>
            </div>
            <div className="modal-body px-3 px-sm-4 pb-4 pt-2">
              <BookingForm
                idPrefix="modal"
                withHeading={false}
                initialConcern={bookingConcern}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={closeBooking}></div>
    </>
  );
}
