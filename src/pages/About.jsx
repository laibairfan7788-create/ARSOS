import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CoreValueCard from '../components/CoreValueCard';
import CTASection from '../components/CTASection';
import { companyInfo } from '../data/companyInfo';
import { coreValues } from '../data/values';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | ARSOS Trading';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <span className="breadcrumb-text">Home / About Us</span>
            <h1>About ARSOS Trading</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 700, margin: '15px auto 0' }}>
              A diversified business company focused on providing quality products
              and reliable services to businesses across multiple sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-visual-2 reveal-left">
                <div className="about-image-main"></div>
                <div className="about-image-sub"></div>
                <div className="about-experience">
                  <span className="exp-number">4</span>
                  <span className="exp-text">Trading<br />Sectors</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="reveal-right">
                <span className="section-subtitle">Who We Are</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  A Diversified Trading Company
                </h2>
                <p className="section-description" style={{ textAlign: 'left', marginBottom: 18 }}>
                  {companyInfo.about}
                </p>
                <p className="section-description" style={{ textAlign: 'left', marginBottom: 18 }}>
                  {companyInfo.aboutExtended}
                </p>
                <p className="section-description" style={{ textAlign: 'left', marginBottom: 30 }}>
                  We believe that successful business relationships are built on trust,
                  quality, reliability, and consistent service. That is why we work
                  closely with our customers to understand their requirements and provide
                  solutions that deliver genuine value. At ARSOS, we continue to develop
                  our capabilities, strengthen our supplier relationships, and expand our
                  product and service portfolio to meet the changing needs of the market.
                </p>

                <Link to="/contact" className="btn-arsos btn-arsos-navy">
                  Partner With Us <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .about-visual-2 {
            position: relative;
            padding-bottom: 60px;
            padding-right: 60px;
          }
          .about-image-main {
            height: 480px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            position: relative;
            overflow: hidden;
            box-shadow: var(--arsos-shadow-lg);
          }
          .about-image-main::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 30% 30%, rgba(201,169,97,0.4), transparent 60%),
                              radial-gradient(circle at 70% 70%, rgba(201,169,97,0.25), transparent 55%);
          }
          .about-image-main::after {
            content: 'ARSOS';
            position: absolute;
            bottom: 30px;
            left: 30px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            font-size: 3rem;
            letter-spacing: 6px;
            color: rgba(201,169,97,0.35);
          }
          .about-image-sub {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 60%;
            height: 240px;
            border-radius: 12px;
            background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark));
            box-shadow: var(--arsos-shadow-lg);
            border: 6px solid #fff;
          }
          .about-image-sub::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), transparent 70%);
          }
          .about-experience {
            position: absolute;
            top: 30px;
            right: 0;
            background: #fff;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-lg);
            text-align: center;
            border-top: 4px solid var(--arsos-gold);
          }
          .exp-number {
            display: block;
            font-family: 'Montserrat', sans-serif;
            font-size: 2.4rem;
            font-weight: 900;
            color: var(--arsos-gold);
            line-height: 1;
          }
          .exp-text {
            display: block;
            font-size: 0.78rem;
            color: var(--arsos-navy);
            font-weight: 600;
            margin-top: 6px;
            line-height: 1.3;
          }
        `}</style>
      </section>

      {/* Mission Vision */}
      <section className="mv-section section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Our Foundation"
            title="Mission & Vision"
            description="Guided by purpose and driven by excellence."
          />

          <div className="row g-4">
            <div className="col-md-6">
              <div className="mv-box reveal-left">
                <div className="mv-box-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>{companyInfo.mission}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mv-box reveal-right">
                <div className="mv-box-icon">
                  <i className="bi bi-eye-fill"></i>
                </div>
                <h3>Our Vision</h3>
                <p>{companyInfo.vision}</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .mv-box {
            background: #fff;
            padding: 45px 35px;
            border-radius: 12px;
            height: 100%;
            box-shadow: var(--arsos-shadow);
            position: relative;
            overflow: hidden;
            transition: var(--arsos-transition);
          }
          .mv-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--arsos-gold), var(--arsos-navy));
          }
          .mv-box:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .mv-box-icon {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            border-radius: 15px;
            margin-bottom: 22px;
          }
          .mv-box-icon i {
            font-size: 2rem;
            color: var(--arsos-gold);
          }
          .mv-box h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
          }
          .mv-box p {
            color: var(--arsos-text-light);
            line-height: 1.85;
            margin: 0;
            font-size: 0.97rem;
          }
        `}</style>
      </section>

      {/* Core Values */}
      <section className="values-section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="What We Stand For"
            title="Our Core Values"
            description="The principles that shape our decisions, our culture, and our commitments."
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

      {/* Commitment */}
      <section className="commitment-section">
        <div className="container">
          <div className="commitment-inner reveal">
            <i className="bi bi-quote commitment-quote"></i>
            <h3>Our Commitment</h3>
            <p>{companyInfo.commitment}</p>
          </div>
        </div>

        <style>{`
          .commitment-section {
            padding: 90px 0;
            background: linear-gradient(135deg, var(--arsos-navy-dark), var(--arsos-navy));
            position: relative;
            overflow: hidden;
          }
          .commitment-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 20% 40%, rgba(201,169,97,0.2), transparent 45%),
                              radial-gradient(circle at 80% 60%, rgba(201,169,97,0.15), transparent 45%);
          }
          .commitment-inner {
            position: relative;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            color: #fff;
          }
          .commitment-quote {
            font-size: 4rem;
            color: var(--arsos-gold);
            display: block;
            margin-bottom: 20px;
            line-height: 1;
          }
          .commitment-inner h3 {
            color: var(--arsos-gold);
            font-size: 1rem;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin-bottom: 25px;
          }
          .commitment-inner p {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(1.15rem, 2.2vw, 1.6rem);
            font-weight: 500;
            line-height: 1.6;
            color: #fff;
            margin: 0;
          }
        `}</style>
      </section>

      {/* Operational Standards */}
      <section className="standards-section section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="Excellence Guaranteed"
            title="Operational Standards & Compliance"
            description="How ARSOS maintains superior standards across procurement, warehousing, and client dispatch."
          />

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="standard-box reveal">
                <div className="standard-icon"><i className="bi bi-patch-check-fill text-gold"></i></div>
                <h4>Certified Supply Chain</h4>
                <p>We partner exclusively with verified chemical laboratories and ISO-certified manufacturing facilities.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="standard-box reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="standard-icon"><i className="bi bi-box-seam-fill text-gold"></i></div>
                <h4>Warehousing Safety</h4>
                <p>Climate-controlled and segregated storage for chemicals, cleaning inventory, and sensitive electronic hardware.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="standard-box reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="standard-icon"><i className="bi bi-person-check-fill text-gold"></i></div>
                <h4>Dedicated Account Managers</h4>
                <p>Personalized point of contact for every enterprise client, managing restocks, orders, and SLA delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .standard-box {
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-sm);
            height: 100%;
            transition: var(--arsos-transition);
          }
          .standard-box:hover {
            transform: translateY(-6px);
            box-shadow: var(--arsos-shadow-lg);
          }
          .standard-icon {
            font-size: 2.2rem;
            margin-bottom: 15px;
          }
          .standard-box h4 {
            font-size: 1.15rem;
            color: var(--arsos-navy);
            margin-bottom: 12px;
          }
          .standard-box p {
            color: var(--arsos-text-light);
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.6;
          }
        `}</style>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default About;