import React from 'react';
import { useModal } from '../context/ModalContext';
import { processSteps, journeySteps } from '../data/journeyData';
import JourneyCard from '../components/ui/JourneyCard';
import Timeline from '../components/ui/Timeline';
import PageHero from '../components/ui/PageHero';
import SectionHead from '../components/ui/SectionHead';
import CtaBand from '../components/ui/CtaBand';
import Reveal from '../components/common/Motion';

export default function HowItWorksPage() {
  const { openBooking, openVideo } = useModal();

  return (
    <main id="main">
      {/* Page Hero */}
      <PageHero
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'How it works' }
        ]}
        eyebrow="Evaluation and therapy"
        title="How our evaluation and therapy sessions work"
        lead="Starting therapy is a collaborative step. We make every session transparent, structured and supportive from day one."
        image="/assets/centre/centre-3.jpg"
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

      {/* The 4 Evaluation Steps */}
      <section className="section section--white">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-5">
              <SectionHead title="Your first visit, step by step">
                Here is what to expect so your family feels prepared and comfortable from the start.
              </SectionHead>
              <Reveal delay={120}>
                <div className="process-aside my-4">
                  <strong>Every therapy session is 40 minutes</strong> and concludes with a parent debrief, ensuring you always know what we worked on and what to practice at home.
                </div>
                <button
                  type="button"
                  className="btn btn-clc"
                  onClick={() => openBooking()}
                >
                  Book an evaluation
                </button>
              </Reveal>
            </div>

            <div className="col-lg-7">
              <Timeline items={processSteps.map((s) => ({ title: s.title, desc: s.desc }))} />
            </div>
          </div>
        </div>
      </section>

      {/* Structured Support Framework */}
      <section className="section section--journey">
        <div className="container">
          <SectionHead
            title="Personalised developmental support"
            className="text-center"
          >
            Every child learns and develops differently. We work alongside families to provide structured therapy that builds on each child's strengths.
          </SectionHead>

          <div className="row g-4 mt-2">
            {journeySteps.map((item, idx) => (
              <div key={item.step} className="col-12 col-sm-6 col-lg-3">
                <Reveal delay={(idx % 4) * 90}>
                  <JourneyCard item={item} />
                </Reveal>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Reveal delay={180}>
              <button
                type="button"
                className="btn btn-clc px-4 py-3"
                onClick={() => openBooking()}
              >
                <i className="bi bi-calendar-check me-2"></i>Book an evaluation
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Video Demonstration */}
      <section className="section section--white">
        <div className="container">
          <SectionHead title="Watch and learn">
            A look inside our therapy sessions, with guidance parents can use at home.
          </SectionHead>
          <div className="row align-items-center g-4 g-lg-5 mt-1">
            <div className="col-lg-7">
              <Reveal variant="zoom">
                <button
                  type="button"
                  className="video-thumb"
                  onClick={() => openVideo('D1gxGckdo4c')}
                  aria-label="Play video: How sensory integration regulates attention"
                >
                  <img src="/assets/centre/centre-1.jpg" alt="Child Learning Centre sensory room" width="700" height="420" />
                  <span className="video-thumb__play" aria-hidden="true">
                    <i className="bi bi-play-fill"></i>
                  </span>
                </button>
              </Reveal>
            </div>
            <div className="col-lg-5 video-copy">
              <Reveal variant="right" delay={120}>
                <h3>How sensory integration helps children focus</h3>
                <p>
                  See how swings and deep-pressure activities help children who feel overwhelmed by sound, touch or movement settle and pay attention.
                </p>
                <button
                  type="button"
                  className="btn btn-clc-outline"
                  onClick={() => openVideo('D1gxGckdo4c')}
                >
                  <i className="bi bi-play-circle me-2"></i>Watch the video
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}
