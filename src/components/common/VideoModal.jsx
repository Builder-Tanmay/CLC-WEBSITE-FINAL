import React, { useEffect, useRef } from 'react';
import { useModal } from '../../context/ModalContext';

export default function VideoModal() {
  const { isVideoOpen, closeVideo, currentVideoId } = useModal();
  const modalRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    if (!isVideoOpen) return undefined;

    prevFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector('button.btn-close');
        if (closeBtn) closeBtn.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeVideo();
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
  }, [isVideoOpen, closeVideo]);

  if (!isVideoOpen) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-label="Video player"
        aria-modal="true"
        ref={modalRef}
        onClick={(e) => {
          if (e.target.classList.contains('modal')) {
            closeVideo();
          }
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark overflow-hidden">
            <div className="modal-header border-0 pb-0">
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close video"
                onClick={closeVideo}
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  id="videoIframe"
                  src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                  title="CLC therapy video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={closeVideo}></div>
    </>
  );
}
