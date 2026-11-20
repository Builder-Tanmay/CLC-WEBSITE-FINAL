import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | Child Learning Centre (CLC)',
    description: 'The requested page was not found.',
    canonical: 'https://childlearningcentre.in/'
  });
  return (
    <main id="main">
      <PageHero
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Page not found' }
        ]}
        eyebrow="404 error"
        title="Page not found"
        lead="The page you are looking for does not exist or has moved. Here are helpful places to start:"
        image="/assets/centre/centre-3.jpg"
        actions={
          <div className="d-flex flex-wrap gap-2">
            <Link to="/" className="btn btn-clc btn-lg-clc">
              Home
            </Link>
            <Link to="/services/therapies" className="btn btn-clc-outline btn-hero-outline btn-lg-clc">
              Therapy programmes
            </Link>
            <Link to="/contact" className="btn btn-clc-outline btn-hero-outline btn-lg-clc">
              Contact us
            </Link>
          </div>
        }
      />
    </main>
  );
}
