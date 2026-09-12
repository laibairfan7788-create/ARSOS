import React from 'react';
import SectionTitle from './SectionTitle';
import { companyInfo } from '../data/companyInfo';

const MissionVision = () => {
  return (
    <section className="mission-vision section-padding">
      <div className="container">
        <SectionTitle
          subtitle="Our Foundation"
          title="Mission & Vision"
          description="The principles that guide everything we do at ARSOS Trading."
        />

        <div className="row g-4">
          <div className="col-md-6">
            <div className="mv-card reveal-left">
              <div className="mv-icon"><i className="bi bi-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>{companyInfo.mission}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mv-card reveal-right">
              <div className="mv-icon"><i className="bi bi-eye-fill"></i></div>
              <h3>Our Vision</h3>
              <p>{companyInfo.vision}</p>
            </div>
          </div>
        </div>

        <div className="commitment-box reveal mt-4">
          <i className="bi bi-quote"></i>
          <div>
            <h5>Our Commitment</h5>
            <p>{companyInfo.commitment}</p>
          </div>
        </div>
      </div>

      <style>{`
        .mv-card {
          background: #fff;
          padding: 40px 35px;
          border-radius: 12px;
          height: 100%;
          box-shadow: var(--arsos-shadow);
          border-left: 5px solid var(--arsos-gold);
          transition: var(--arsos-transition);
        }
        .mv-card:hover { transform: translateY(-8px); box-shadow: var(--arsos-shadow-lg); }
        .mv-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          border-radius: 15px;
          margin-bottom: 22px;
        }
        .mv-icon i { color: var(--arsos-gold); font-size: 1.8rem; }
        .mv-card h3 { font-size: 1.35rem; margin-bottom: 15px; }
        .mv-card p {
          color: var(--arsos-text-light);
          line-height: 1.85;
          margin: 0;
          font-size: 0.97rem;
        }
        .commitment-box {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 30px 35px;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          border-radius: 12px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .commitment-box::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(201,169,97,0.25), transparent 70%);
          border-radius: 50%;
        }
        .commitment-box i {
          font-size: 2.5rem;
          color: var(--arsos-gold);
          line-height: 1;
        }
        .commitment-box h5 {
          color: var(--arsos-gold);
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .commitment-box p {
          color: rgba(255,255,255,0.9);
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
};

export default MissionVision;