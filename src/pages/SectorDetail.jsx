import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionTitle from '../components/SectionTitle';
import { sectors } from '../data/sectors';

const SectorDetail = () => {
  const { slug } = useParams();
  const sector = sectors.find((s) => s.slug === slug);

  useEffect(() => {
    if (sector) {
      document.title = `${sector.title} | ARSOS Trading`;
      window.scrollTo(0, 0);
    }
  }, [sector]);

  if (!sector) return <Navigate to="/sectors" replace />;

  const otherSectors = sectors.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <span className="breadcrumb-text">
              Home / Sectors / {sector.title}
            </span>
            <h1>{sector.title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 720, margin: '15px auto 0' }}>
              {sector.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="sector-overview section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="sector-detail-visual reveal-left">
                <div className="sdv-main">
                  <i className={`bi ${sector.icon}`}></i>
                </div>
                <div className="sdv-badge">
                  <i className="bi bi-patch-check-fill"></i>
                  <div>
                    <strong>Quality</strong>
                    <small>Assured</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="reveal-right">
                <span className="section-subtitle">Overview</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  About Our {sector.title}
                </h2>
                <p className="section-description" style={{ textAlign: 'left', marginBottom: 18 }}>
                  {sector.intro}
                </p>
                <p className="section-description" style={{ textAlign: 'left' }}>
                  {sector.focus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .sector-detail-visual {
            position: relative;
            padding: 20px 20px 60px 0;
          }
          .sdv-main {
            height: 420px;
            border-radius: 15px;
            background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            box-shadow: var(--arsos-shadow-lg);
          }
          .sdv-main::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              radial-gradient(circle at 20% 30%, rgba(201,169,97,0.35), transparent 55%),
              radial-gradient(circle at 80% 70%, rgba(201,169,97,0.25), transparent 55%);
          }
          .sdv-main i {
            font-size: 8rem;
            color: var(--arsos-gold);
            position: relative;
            z-index: 2;
            animation: float 4s ease-in-out infinite;
          }
          .sdv-badge {
            position: absolute;
            bottom: 0;
            right: 0;
            background: #fff;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: var(--arsos-shadow-lg);
            display: flex;
            align-items: center;
            gap: 12px;
            border-top: 4px solid var(--arsos-gold);
          }
          .sdv-badge i {
            font-size: 2rem;
            color: var(--arsos-gold);
          }
          .sdv-badge strong {
            display: block;
            font-family: 'Montserrat', sans-serif;
            color: var(--arsos-navy);
            font-size: 1rem;
          }
          .sdv-badge small {
            color: var(--arsos-text-light);
            font-size: 0.78rem;
          }
        `}</style>
      </section>

      {/* List Section */}
      <section className="sector-list-section section-padding bg-gray">
        <div className="container">
          <SectionTitle
            subtitle="What We Offer"
            title={sector.listTitle}
            description="A complete range of solutions tailored for your business requirements."
          />

          <div className="row g-4 justify-content-center">
            {sector.list.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={item}>
                <div
                  className="sector-list-item reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="sli-icon">
                    <i className="bi bi-check2-circle"></i>
                  </div>
                  <h5>{item}</h5>

                  <style>{`
                    .sector-list-item {
                      background: #fff;
                      padding: 28px 25px;
                      border-radius: 10px;
                      display: flex;
                      align-items: center;
                      gap: 18px;
                      box-shadow: var(--arsos-shadow-sm);
                      transition: var(--arsos-transition);
                      border-left: 4px solid transparent;
                    }
                    .sector-list-item:hover {
                      border-left-color: var(--arsos-gold);
                      transform: translateX(8px);
                      box-shadow: var(--arsos-shadow);
                    }
                    .sli-icon {
                      width: 50px;
                      height: 50px;
                      flex: 0 0 50px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
                      border-radius: 10px;
                    }
                    .sli-icon i {
                      color: var(--arsos-gold);
                      font-size: 1.4rem;
                    }
                    .sector-list-item h5 {
                      font-size: 1rem;
                      margin: 0;
                      font-weight: 600;
                      color: var(--arsos-navy);
                    }
                  `}</style>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sectors */}
      <section className="other-sectors section-padding">
        <div className="container">
          <SectionTitle
            subtitle="Explore More"
            title="Other Trading Sectors"
            description="Discover the full range of ARSOS business divisions."
          />

          <div className="row g-4">
            {otherSectors.map((s) => (
              <div className="col-lg-4 col-md-6" key={s.slug}>
                <Link to={`/sectors/${s.slug}`} className="other-sector-card">
                  <i className={`bi ${s.icon}`}></i>
                  <h5>{s.title}</h5>
                  <span>
                    View Sector <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .other-sector-card {
            display: block;
            background: #fff;
            padding: 35px 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: var(--arsos-shadow-sm);
            transition: var(--arsos-transition);
            border-bottom: 4px solid transparent;
            height: 100%;
          }
          .other-sector-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--arsos-shadow-lg);
            border-bottom-color: var(--arsos-gold);
          }
          .other-sector-card i {
            font-size: 2.6rem;
            color: var(--arsos-gold);
            display: block;
            margin-bottom: 18px;
            transition: var(--arsos-transition);
          }
          .other-sector-card:hover i {
            transform: scale(1.15) rotate(-6deg);
          }
          .other-sector-card h5 {
            font-size: 1.1rem;
            color: var(--arsos-navy);
            margin-bottom: 12px;
          }
          .other-sector-card span {
            color: var(--arsos-gold);
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .other-sector-card:hover span i {
            transform: translateX(5px);
            color: var(--arsos-gold);
          }
        `}</style>
      </section>

      <CTASection />
    </>
  );
};

export default SectorDetail;