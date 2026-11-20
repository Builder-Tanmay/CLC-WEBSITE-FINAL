import React from 'react';
import { Link } from 'react-router-dom';
import { useHeroParallax } from '../common/Motion';

export default function PageHero({
  eyebrow,
  title,
  lead,
  image = '/assets/centre/centre-2.jpg',
  crumbs,
  actions
}) {
  useHeroParallax();

  return (
    <section className="hero hero--page">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-img" style={{ backgroundImage: `url('${image}')` }}></div>
      </div>
      <div className="hero__shapes" aria-hidden="true">
        <span className="shape shape--1"></span>
        <span className="shape shape--2"></span>
      </div>
      <div className="container position-relative">
        {crumbs && crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <i className="bi bi-chevron-right" aria-hidden="true"></i>}
                {crumb.to ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        {eyebrow && <p className="hero__note">{eyebrow}</p>}
        {title && (
          <h1>
            {title.split(' ').map((w, i) => (
              <React.Fragment key={i}>
                <span className="w" style={{ '--i': i }}>{w}</span>{' '}
              </React.Fragment>
            ))}
          </h1>
        )}
        {lead && <p className="hero__lead">{lead}</p>}
        {actions && <div className="hero__actions">{actions}</div>}
      </div>
    </section>
  );
}

