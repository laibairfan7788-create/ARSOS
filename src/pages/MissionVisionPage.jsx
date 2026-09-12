import React, { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import CoreValueCard from '../components/CoreValueCard';
import CTASection from '../components/CTASection';
import { companyInfo } from '../data/companyInfo';
import { coreValues } from '../data/values';

const MissionVisionPage = () => {
  useEffect(() => {
    document.title = 'Mission & Vision | ARSOS Trading';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <span className="breadcrumb-text">Home / Mission & Vision</span>
            <h1>Mission, Vision & Values</h1>
          </div>
        </div>
      </section>

      <section className="mv-detail section-padding">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            <div className="col-lg-6">
              <div className="mv-detail-card reveal-left">
                <div className="mv-detail-header">
                  <div className="mv-detail-icon">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h3>Our Mission</h3>
                </div>
                <p>{companyInfo.mission}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mv-detail-card alt reveal-right">
                <div className="mv-detail-header">
                  <div className="mv-detail-icon">
                    <i className="bi bi-eye-fill"></i>
                  </div>
                  <h3>Our Vision</h3>
                </div>
                <p>{companyInfo.vision}</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .mv-detail-card {
            background: #fff;
            padding: 45px 40px;
            border-radius: 15px;
            height: 100%;
            box-shadow: var(--arsos-shadow);
            border-top: 5px solid var(--arsos-gold);
            transition: var(--arsos-transition);
          }
          .mv-detail-card.alt { border-top-color: var(--arsos-navy); }
          .mv-detail-card:hover { transform: translateY(-8px); box-shadow: var(--arsos-shadow-lg); }
          .mv-detail-header {
            display: flex;
            align-items: center;
            gap: 18px;
            margin-bottom: 25px;
          }
          .mv-detail-icon {
            width: 70px;
            height: 70px;
            flex: 0 0 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 15px;
          }
          .mv-detail-card.alt .mv-detail-icon {
            background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark));
          }
          .mv-detail-icon i { font-size: 1.9rem; color: var(--arsos-gold); }
          .mv-detail-card.alt .mv-detail-icon i { color: var(--arsos-navy); }
          .mv-detail-card h3 { font-size: 1.5rem; margin: 0; }
          .mv-detail-card p {
            color: var(--arsos-text-light);
            line-height: 1.9;
            font-size: 1rem;
            margin: 0;
          }
        `}</style>
      </section>

      <section className="values-section section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="What We Stand For"
            title="Our Core Values"
            description="Six principles that define how we work, deliver, and grow."
          />

          <div className="row g-4">
            {coreValues.map((v, i) => (
              <div className="col-lg-4 col-md-6" key={v.title}>
                <CoreValueCard value={v} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals & Corporate Responsibility */}
      <section className="goals-section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="Forward Looking"
            title="Strategic Horizons & Responsibility"
            description="How ARSOS aligns long-term growth with sustainability, compliance, and client trust."
          />

          <div className="row g-4">
            <div className="col-md-4">
              <div className="goal-card reveal text-center p-4 bg-white rounded-3 shadow-sm border border-gold">
                <i className="bi bi-globe-americas text-gold display-4 mb-3 d-block"></i>
                <h4 className="fw-bold mb-3 text-navy">International Sourcing Expansion</h4>
                <p className="text-muted small">Expanding global supply partnerships to deliver competitive bulk pricing and rare chemical imports.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="goal-card reveal text-center p-4 bg-white rounded-3 shadow-sm border border-gold" style={{ transitionDelay: '0.1s' }}>
                <i className="bi bi-recycle text-gold display-4 mb-3 d-block"></i>
                <h4 className="fw-bold mb-3 text-navy">Eco-Friendly Product Line</h4>
                <p className="text-muted small">Introducing eco-labeled cleaning items and biodegradable hospitality amenities for green hotels.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="goal-card reveal text-center p-4 bg-white rounded-3 shadow-sm border border-gold" style={{ transitionDelay: '0.2s' }}>
                <i className="bi bi-cpu text-gold display-4 mb-3 d-block"></i>
                <h4 className="fw-bold mb-3 text-navy">Digital Client Procurement</h4>
                <p className="text-muted small">Integrating cloud-based B2B reordering tools to make client inventory replenishment automated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default MissionVisionPage;