import { useEffect } from 'react';

/**
 * Updates document title, meta description, and canonical link.
 * Restores the previous values on unmount.
 */
export default function usePageMeta({ title, description, canonical }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) {
      document.title = title;
    }

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (description) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = linkCanonical ? linkCanonical.getAttribute('href') : '';
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc) {
        if (prevDesc) {
          metaDesc.setAttribute('content', prevDesc);
        } else {
          metaDesc.remove();
        }
      }
      if (linkCanonical) {
        if (prevCanonical) {
          linkCanonical.setAttribute('href', prevCanonical);
        } else {
          linkCanonical.remove();
        }
      }
    };
  }, [title, description, canonical]);
}

