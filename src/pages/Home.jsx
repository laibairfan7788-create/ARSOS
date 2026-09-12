import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import SectorCard from '../components/SectorCard';
import WhyChooseUs from '../components/WhyChooseUs';
import MissionVision from '../components/MissionVision';
import CTASection from '../components/CTASection';
import { sectors } from '../data/sectors';
import { companyInfo } from '../data/companyInfo';
import { stats } from '../data/values';

const Home = () => {
  useEffect(() => {
    document.title = 'ARSOS Trading | Building Business Solutions. Delivering Quality.';
  }, []);

  return (
    <>
      <HeroSection />

      {/* About Preview */}
      <section className="about-preview section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-visual reveal-left">
                <div className="about-image-grid">
                  <div className="about-img about-img-1"></div>
                  <div className="about-img about-img-2"></div>
                  <div className="about-img about-img-3"></div>
                </div>
                <div className="about-badge">
                  <i className="bi bi-award-fill"></i>
                  <div>
                    <strong>Trusted</strong>
                    <small>Business Partner</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="reveal-right">
                <span className="section-subtitle">About ARSOS</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  A Diversified Trading Company You Can Trust
                </h2>
                <p className="section-description" style={{ textAlign: 'left', marginBottom: 20 }}>
                  {companyInfo.about}
                </p>
                <p className="section-description" style={{ textAlign: 'left', marginBottom: 30 }}>
                  {companyInfo.aboutExtended}
                </p>

                <div className="about-features">
                  <div className="about-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Multi-Sector Expertise</span>
                  </div>
                  <div className="about-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Reliable Supply Chain</span>
                  </div>
                  <div className="about-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Professional Service</span>
                  </div>
                  <div className="about-feature">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Competitive Value</span>
                  </div>
                </div>

                <Link to="/about" className="btn-arsos btn-arsos-navy mt-4">
                  More About Us <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .about-visual { position: relative; padding: 20px; }
          .about-image-grid {
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 15px;
            height: 480px;
          }
          .about-img {
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 10px;
            position: relative;
            overflow: hidden;
          }
          .about-img::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 30% 30%, rgba(201,169,97,0.3), transparent 70%);
          }
          .about-img::after {
            content: '';
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="55" font-size="42" text-anchor="middle" fill="%23C9A961" opacity="0.35">⚙</text></svg>') center/40% no-repeat;
          }
          .about-img-1 { grid-row: 1 / 3; }
          .about-img-2 { background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark)); }
          .about-img-2::before {
            background-image: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%);
          }
          .about-img-3 { background: linear-gradient(135deg, var(--arsos-navy-light), var(--arsos-navy)); }
          .about-badge {
            position: absolute;
            bottom: 0;
            right: 0;
            background: #fff;
            padding: 18px 24px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-lg);
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .about-badge i {
            font-size: 1.9rem;
            color: var(--arsos-gold);
          }
          .about-badge strong {
            display: block;
            font-family: 'Montserrat', sans-serif;
            color: var(--arsos-navy);
            font-size: 1rem;
          }
          .about-badge small {
            color: var(--arsos-text-light);
            font-size: 0.78rem;
          }

          .about-features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .about-feature {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.92rem;
            color: var(--arsos-text);
            font-weight: 500;
          }
          .about-feature i {
            color: var(--arsos-gold);
            font-size: 1.1rem;
          }
        `}</style>
      </section>

      {/* Trading Sectors */}
      <section className="trading-sectors section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Our Trading Sectors"
            title="Four Companies. One Trusted Brand."
            description="ARSOS operates across four distinct trading sectors, delivering quality products and services to businesses and institutions."
          />

          <div className="row g-4">
            {sectors.map((s, i) => (
              <div className="col-lg-3 col-md-6" key={s.slug}>
                <SectorCard sector={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-4">
            {stats.map((s, i) => (
              <div className="col-lg-3 col-6" key={s.label}>
                <div className="stat-box reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="stat-number">
                    {s.number}
                    <span>{s.suffix}</span>
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .stats-section {
            padding: 70px 0;
            background: linear-gradient(135deg, var(--arsos-navy) 0%, var(--arsos-navy-light) 100%);
            position: relative;
            overflow: hidden;
          }
          .stats-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 20% 50%, rgba(201,169,97,0.15), transparent 40%),
                              radial-gradient(circle at 80% 50%, rgba(201,169,97,0.1), transparent 40%);
          }
          .stat-box {
            text-align: center;
            color: #fff;
            position: relative;
            z-index: 2;
          }
          .stat-number {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 900;
            color: var(--arsos-gold);
            line-height: 1;
            margin-bottom: 12px;
          }
          .stat-number span { color: var(--arsos-gold); }
          .stat-label {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            font-size: 0.9rem;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: rgba(255,255,255,0.85);
          }
        `}</style>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process Section / How We Work */}
      <section className="process-section section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Streamlined Procurement"
            title="How We Partner With Your Business"
            description="Our simple 4-step B2B fulfillment workflow ensures quality assurance, rapid response times, and dependable logistics."
          />

          <div className="row g-4 position-relative">
            <div className="col-lg-3 col-md-6">
              <div className="process-card reveal">
                <div className="process-number">01</div>
                <div className="process-icon"><i className="bi bi-file-earmark-text"></i></div>
                <h3>1. Inquiry & Need Assessment</h3>
                <p>Submit your product specifications, chemical grades, IT scope, or hotel inventory requirements.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-card reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="process-number">02</div>
                <div className="process-icon"><i className="bi bi-calculator"></i></div>
                <h3>2. Tailored B2B Proposal</h3>
                <p>We prepare itemized, transparent quotations with competitive pricing and clear lead times.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-card reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="process-number">03</div>
                <div className="process-icon"><i className="bi bi-shield-check"></i></div>
                <h3>3. Quality Sourcing & Inspection</h3>
                <p>Products are batch-inspected against international standards before dispatch from our warehouse.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-card reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="process-number">04</div>
                <div className="process-icon"><i className="bi bi-truck"></i></div>
                <h3>4. Timely Delivery & Support</h3>
                <p>On-time logistics delivery backed by continuous post-supply customer support and restock assistance.</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .process-card {
            background: #fff;
            padding: 35px 25px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            position: relative;
            height: 100%;
            border-top: 4px solid var(--arsos-gold);
            transition: var(--arsos-transition);
          }
          .process-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .process-number {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.2rem;
            font-weight: 900;
            color: rgba(201,169,97,0.3);
            position: absolute;
            top: 20px;
            right: 20px;
          }
          .process-icon {
            width: 55px;
            height: 55px;
            background: rgba(11, 37, 69, 0.06);
            color: var(--arsos-navy);
            font-size: 1.5rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }
          .process-card h3 {
            font-size: 1.1rem;
            margin-bottom: 12px;
            color: var(--arsos-navy);
          }
          .process-card p {
            font-size: 0.88rem;
            color: var(--arsos-text-light);
            margin: 0;
            line-height: 1.6;
          }
        `}</style>
      </section>

      {/* Mission Vision */}
      <MissionVision />

      {/* FAQ Section */}
      <section className="home-faq section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Got Questions?"
            title="Frequently Asked Questions"
            description="Find answers to common questions about partnering with ARSOS Trading across our four core business sectors."
          />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-grid">
                <div className="faq-item reveal">
                  <div className="faq-question">
                    <i className="bi bi-patch-question-fill text-gold me-2"></i>
                    What industries does ARSOS Trading cater to?
                  </div>
                  <div className="faq-answer">
                    We serve commercial facilities, hotels & resorts, industrial factories, healthcare institutions, offices, and residential management companies across Cleaning Items, Chemical Business, IT Services, and Hotel Supplies.
                  </div>
                </div>

                <div className="faq-item reveal" style={{ transitionDelay: '0.1s' }}>
                  <div className="faq-question">
                    <i className="bi bi-patch-question-fill text-gold me-2"></i>
                    Can I request bulk or custom orders for my business?
                  </div>
                  <div className="faq-answer">
                    Yes! We specialize in wholesale, bulk procurement, and customized B2B contracts tailored to your exact operational schedule and budget requirements.
                  </div>
                </div>

                <div className="faq-item reveal" style={{ transitionDelay: '0.2s' }}>
                  <div className="faq-question">
                    <i className="bi bi-patch-question-fill text-gold me-2"></i>
                    How do you ensure product quality and consistency?
                  </div>
                  <div className="faq-answer">
                    All our chemical and hygiene products undergo stringent quality verification, sourcing only from certified international and accredited regional manufacturers.
                  </div>
                </div>

                <div className="faq-item reveal" style={{ transitionDelay: '0.3s' }}>
                  <div className="faq-question">
                    <i className="bi bi-patch-question-fill text-gold me-2"></i>
                    How quickly can ARSOS fulfill supply orders?
                  </div>
                  <div className="faq-answer">
                    We maintain regular inventory stocks for essential items to guarantee fast dispatch, with dedicated account managers handling logistics and delivery schedules.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .faq-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          @media (min-width: 768px) {
            .faq-grid { grid-template-columns: 1fr 1fr; }
          }
          .faq-item {
            background: #fff;
            padding: 24px 28px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            border-left: 4px solid var(--arsos-navy);
          }
          .faq-question {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            color: var(--arsos-navy);
            margin-bottom: 10px;
          }
          .faq-answer {
            font-size: 0.9rem;
            color: var(--arsos-text-light);
            line-height: 1.6;
          }
        `}</style>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default Home;