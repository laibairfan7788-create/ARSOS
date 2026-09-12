import React from 'react';
import { Link } from 'react-router-dom';
import { sectors } from '../data/sectors';
import { companyInfo } from '../data/companyInfo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="arsos-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo">
                <span className="logo-mark">A</span>
                <div className="logo-text">
                  <strong>ARSOS</strong>
                  <small>Trading</small>
                </div>
              </div>
              <p className="footer-text">
                A diversified business company providing reliable products and
                professional services across Cleaning Items, Chemical Business,
                IT Services, and Hotel Supplies.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                <li><Link to="/mission-vision">Mission & Vision</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <h5 className="footer-heading">Our Sectors</h5>
              <ul className="footer-list">
                {sectors.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/sectors/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="footer-heading">Get in Touch</h5>
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>{companyInfo.address}</span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <span>{companyInfo.phone}</span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <span>{companyInfo.email}</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-arsos btn-arsos-primary mt-3">
                Contact Us <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <p className="mb-0">
              © {year} <strong className="text-gold">ARSOS Trading</strong>. All rights reserved.
            </p>
            <p className="mb-0 small">{companyInfo.tagline}</p>
          </div>
        </div>
      </div>

      <style>{`
        .arsos-footer {
          background: var(--arsos-navy-dark);
          color: rgba(255,255,255,0.75);
        }
        .footer-top { padding: 80px 0 50px; }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .footer-logo .logo-mark {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-gold), var(--arsos-gold-dark));
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 1.5rem;
          border-radius: 8px;
        }
        .footer-logo .logo-text strong {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          color: #fff;
          letter-spacing: 3px;
          line-height: 1;
        }
        .footer-logo .logo-text small {
          font-size: 0.7rem;
          letter-spacing: 4px;
          color: var(--arsos-gold);
          font-weight: 600;
          text-transform: uppercase;
        }
        .footer-text { font-size: 0.92rem; line-height: 1.8; }
        .footer-social { display: flex; gap: 10px; margin-top: 20px; }
        .footer-social a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          color: #fff;
          transition: var(--arsos-transition);
        }
        .footer-social a:hover {
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          transform: translateY(-4px);
        }
        .footer-heading {
          color: #fff;
          font-size: 1.05rem;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 12px;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: var(--arsos-gold);
          border-radius: 3px;
        }
        .footer-list, .footer-contact { list-style: none; padding: 0; }
        .footer-list li, .footer-contact li {
          margin-bottom: 12px;
          font-size: 0.92rem;
        }
        .footer-list a {
          color: rgba(255,255,255,0.75);
          transition: var(--arsos-transition);
        }
        .footer-list a:hover {
          color: var(--arsos-gold);
          padding-left: 8px;
        }
        .footer-contact li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .footer-contact i {
          color: var(--arsos-gold);
          margin-top: 4px;
          font-size: 1rem;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 22px 0;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;