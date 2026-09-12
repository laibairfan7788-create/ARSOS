import React from 'react';
import SectionTitle from './SectionTitle';
import { whyChooseUs } from '../data/companyInfo';

const WhyChooseUs = () => {
  return (
    <section className="why-choose section-padding bg-gray">
      <div className="container">
        <SectionTitle
          subtitle="Why Choose Us"
          title="The ARSOS Advantage"
          description="We combine quality, reliability, and customer focus to deliver solutions that businesses trust."
        />

        <div className="row g-4">
          {whyChooseUs.map((item, i) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <div className="why-card reveal hover-lift" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="why-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card {
          background: #fff;
          padding: 40px 30px;
          border-radius: 12px;
          height: 100%;
          box-shadow: var(--arsos-shadow-sm);
          position: relative;
          overflow: hidden;
          transition: var(--arsos-transition);
        }
        .why-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--arsos-gold), var(--arsos-navy));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .why-card:hover::before { transform: scaleX(1); }
        .why-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          border-radius: 15px;
          margin-bottom: 25px;
          transition: var(--arsos-transition);
        }
        .why-icon i {
          font-size: 1.9rem;
          color: var(--arsos-gold);
          transition: var(--arsos-transition);
        }
        .why-card:hover .why-icon {
          background: var(--arsos-gold);
          transform: rotate(-8deg) scale(1.08);
        }
        .why-card:hover .why-icon i { color: var(--arsos-navy); }
        .why-card h4 { font-size: 1.2rem; margin-bottom: 12px; }
        .why-card p {
          color: var(--arsos-text-light);
          font-size: 0.95rem;
          line-height: 1.75;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;