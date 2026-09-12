import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({
  title = 'Ready to Work With a Trusted Partner?',
  description = 'Get in touch with ARSOS Trading today and discover how our diversified solutions can support your business.',
  primaryText = 'Get in Touch',
  primaryLink = '/contact',
}) => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container position-relative">
        <div className="cta-content reveal">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={primaryLink} className="btn-arsos btn-arsos-primary">
            {primaryText} <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, var(--arsos-navy) 0%, var(--arsos-navy-light) 100%);
          overflow: hidden;
        }
        .cta-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 15% 50%, rgba(201,169,97,0.2) 0%, transparent 55%),
                            radial-gradient(circle at 85% 50%, rgba(201,169,97,0.15) 0%, transparent 55%);
        }
        .cta-content {
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
          color: #fff;
          position: relative;
        }
        .cta-content h2 {
          color: #fff;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          margin-bottom: 18px;
        }
        .cta-content p {
          color: rgba(255,255,255,0.85);
          font-size: 1.05rem;
          margin-bottom: 35px;
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
};

export default CTASection;