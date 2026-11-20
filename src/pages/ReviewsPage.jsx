import React from 'react';
import { reviews, statsData } from '../data/reviewsData';
import ReviewCard from '../components/ui/ReviewCard';
import StatsCounter from '../components/ui/StatsCounter';
import PageHero from '../components/ui/PageHero';
import CtaBand from '../components/ui/CtaBand';
import Reveal from '../components/common/Motion';
import usePageMeta from '../hooks/usePageMeta';
import { useModal } from '../context/ModalContext';

export default function ReviewsPage() {
  const { openBooking } = useModal();

  usePageMeta({
    title: 'Parent Reviews & Feedback | Child Learning Centre (CLC)',
    description: 'Read reviews and feedback from parents whose children have grown in speech, sensory regulation and motor confidence with CLC.',
    canonical: 'https://childlearningcentre.in/reviews'
  });

  return (
    <main id="main">
      {/* Page Hero */}
      <PageHero
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Reviews' }
        ]}
        eyebrow="Parent feedback"
        title="Stories of growth, confidence and progress"
        lead="Read how paediatric therapy and regular parent debriefs have helped children build skills at home and in school."
        image="/assets/centre/centre-4.jpg"
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

      {/* Stats Ribbon */}
      <div className="stats-wrap">
        <div className="container">
          <Reveal variant="zoom">
            <dl className="stats">
              {statsData.map((stat, i) => (
                <div key={i}>
                  <StatsCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    isFormatted={stat.isFormatted}
                  />
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="section pt-5">
        <div className="container">
          <div className="row g-4">
            {reviews.map((rev, i) => (
              <div key={rev.id} className="col-md-6 col-lg-4">
                <Reveal delay={(i % 4) * 110}>
                  <ReviewCard review={rev} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Rated 4.8 / 5 on Google across Maharashtra"
        lead="Every session ends with a debrief and practical home activities so you always know what we worked on and what to practise."
      />
    </main>
  );
}
