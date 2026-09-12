import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const highlights = [
    { icon: 'bi-droplet-half', label: 'Cleaning Items', count: '100+ Products' },
    { icon: 'bi-beaker', label: 'Chemical Business', count: 'ISO Standard' },
    { icon: 'bi-cpu-fill', label: 'IT Services', count: 'Managed Tech' },
    { icon: 'bi-building-fill-check', label: 'Hotel Supplies', count: 'B2B Hospitality' },
  ];

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-shape shape-1"></div>
      <div className="hero-shape shape-2"></div>

      <div className="container position-relative py-5">
        <div className="row align-items-center g-5 min-vh-80">
          <div className="col-lg-7">
            <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
              <span className="hero-badge">
                <i className="bi bi-shield-check text-gold me-1"></i>
                Your Premier Multi-Sector Business Partner
              </span>

              <h1 className="hero-title">
                Building <span className="text-gold">Business Solutions.</span><br />
                Delivering Uncompromised Quality.
              </h1>

              <p className="hero-description">
                ARSOS Trading delivers high-grade commercial supplies, industrial chemicals,
                scalable IT services, and premium hospitality items tailored to keep your business running seamlessly.
              </p>

              <div className="hero-buttons">
                <Link to="/about" className="btn-arsos btn-arsos-primary">
                  Discover ARSOS <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/sectors" className="btn-arsos btn-arsos-outline">
                  Explore Sectors
                </Link>
                <Link to="/contact" className="btn-arsos btn-arsos-gold-outline">
                  Get Fast Quote <i className="bi bi-lightning-charge-fill"></i>
                </Link>
              </div>

              <div className="hero-highlights">
                {highlights.map((h) => (
                  <div className="hero-highlight" key={h.label}>
                    <i className={`bi ${h.icon}`}></i>
                    <div>
                      <strong>{h.label}</strong>
                      <small>{h.count}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual-card">
              <div className="visual-header">
                <div className="visual-logo">
                  <span>A</span> ARSOS TRADING
                </div>
                <span className="status-pill">
                  <span className="dot"></span> Trusted B2B Supplier
                </span>
              </div>

              <div className="sector-grid-preview">
                <Link to="/sectors/cleaning-items" className="sector-preview-item">
                  <div className="preview-icon"><i className="bi bi-droplet-half"></i></div>
                  <div>
                    <h4>Cleaning Items</h4>
                    <p>Commercial & hygiene supplies</p>
                  </div>
                  <i className="bi bi-chevron-right arrow"></i>
                </Link>

                <Link to="/sectors/chemical-business" className="sector-preview-item">
                  <div className="preview-icon"><i className="bi bi-beaker"></i></div>
                  <div>
                    <h4>Chemical Business</h4>
                    <p>Industrial & specialized solutions</p>
                  </div>
                  <i className="bi bi-chevron-right arrow"></i>
                </Link>

                <Link to="/sectors/it-services" className="sector-preview-item">
                  <div className="preview-icon"><i className="bi bi-cpu-fill"></i></div>
                  <div>
                    <h4>IT Services</h4>
                    <p>Enterprise support & tech solutions</p>
                  </div>
                  <i className="bi bi-chevron-right arrow"></i>
                </Link>

                <Link to="/sectors/hotel-supplies" className="sector-preview-item">
                  <div className="preview-icon"><i className="bi bi-building-fill-check"></i></div>
                  <div>
                    <h4>Hotel Supplies</h4>
                    <p>Hospitality & housekeeping essentials</p>
                  </div>
                  <i className="bi bi-chevron-right arrow"></i>
                </Link>
              </div>

              <div className="visual-footer d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-headset text-gold fs-4"></i>
                  <div>
                    <small className="d-block text-white-50">Fast Procurement Support</small>
                    <strong className="text-white">Direct B2B Fulfillment</strong>
                  </div>
                </div>
                <Link to="/contact" className="btn-quote-sm">
                  Quote <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--arsos-navy-dark) 0%, var(--arsos-navy) 45%, var(--arsos-navy-light) 100%);
          overflow: hidden;
          padding: 60px 0 80px;
        }
        .min-vh-80 { min-height: 80vh; }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 15% 25%, rgba(201,169,97,0.18) 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, rgba(201,169,97,0.12) 0%, transparent 45%);
        }
        .hero-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
        }
        .shape-1 {
          width: 400px;
          height: 400px;
          background: var(--arsos-gold);
          top: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite;
        }
        .shape-2 {
          width: 300px;
          height: 300px;
          background: var(--arsos-navy-light);
          bottom: -80px;
          left: -80px;
          animation: float 10s ease-in-out infinite reverse;
        }
        .hero-content {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          background: rgba(201,169,97,0.15);
          border: 1px solid rgba(201,169,97,0.35);
          color: var(--arsos-gold);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          border-radius: 30px;
          margin-bottom: 25px;
        }
        .hero-title {
          color: #fff;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 25px;
        }
        .hero-title .text-gold { color: var(--arsos-gold); }
        .hero-description {
          color: rgba(255,255,255,0.85);
          font-size: 1.08rem;
          line-height: 1.85;
          max-width: 620px;
          margin-bottom: 35px;
        }
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 40px;
        }
        .btn-arsos-gold-outline {
          background: rgba(201,169,97,0.1);
          color: var(--arsos-gold);
          border-color: var(--arsos-gold);
        }
        .btn-arsos-gold-outline:hover {
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          transform: translateY(-3px);
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 768px) {
          .hero-highlights { grid-template-columns: repeat(4, 1fr); }
        }
        .hero-highlight {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          color: #fff;
          transition: var(--arsos-transition);
        }
        .hero-highlight:hover {
          background: rgba(201,169,97,0.18);
          border-color: var(--arsos-gold);
          transform: translateY(-3px);
        }
        .hero-highlight i { color: var(--arsos-gold); font-size: 1.3rem; }
        .hero-highlight strong { display: block; font-size: 0.82rem; font-weight: 700; line-height: 1.2; }
        .hero-highlight small { color: rgba(255,255,255,0.7); font-size: 0.72rem; }

        /* Visual Card */
        .hero-visual-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.35);
          position: relative;
        }
        .visual-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 20px;
        }
        .visual-logo {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 2px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .visual-logo span {
          width: 28px;
          height: 28px;
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }
        .status-pill {
          background: rgba(46, 213, 115, 0.15);
          border: 1px solid rgba(46, 213, 115, 0.3);
          color: #2ed573;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .status-pill .dot {
          width: 6px;
          height: 6px;
          background: #2ed573;
          border-radius: 50%;
          animation: pulseGreen 2s infinite;
        }
        @keyframes pulseGreen {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .sector-grid-preview {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .sector-preview-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sector-preview-item:hover {
          background: rgba(201,169,97,0.15);
          border-color: var(--arsos-gold);
          transform: translateX(5px);
          color: #fff;
        }
        .preview-icon {
          width: 42px;
          height: 42px;
          background: rgba(201,169,97,0.15);
          border: 1px solid rgba(201,169,97,0.3);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--arsos-gold);
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .sector-preview-item h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 2px 0;
        }
        .sector-preview-item p {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.7);
          margin: 0;
        }
        .sector-preview-item .arrow {
          margin-left: auto;
          color: var(--arsos-gold);
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }
        .sector-preview-item:hover .arrow {
          transform: translateX(4px);
        }

        .visual-footer {
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .btn-quote-sm {
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }
        .btn-quote-sm:hover {
          background: #fff;
          color: var(--arsos-navy);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;