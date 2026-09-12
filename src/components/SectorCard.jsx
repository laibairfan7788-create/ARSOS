import React from 'react';
import { Link } from 'react-router-dom';

const SectorCard = ({ sector, index = 0 }) => {
  return (
    <div className="sector-card hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="sector-card-image">
        <div className="sector-card-overlay"></div>
        <i className={`bi ${sector.icon} sector-card-icon`}></i>
      </div>
      <div className="sector-card-body">
        <h3>{sector.title}</h3>
        <p>{sector.shortDesc}</p>
        <Link to={`/sectors/${sector.slug}`} className="sector-card-link">
          Learn More <i className="bi bi-arrow-right"></i>
        </Link>
      </div>

      <style>{`
        .sector-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--arsos-shadow-sm);
          height: 100%;
          display: flex;
          flex-direction: column;
          border-bottom: 4px solid transparent;
          transition: var(--arsos-transition);
        }
        .sector-card:hover { border-bottom-color: var(--arsos-gold); }
        .sector-card-image {
          position: relative;
          height: 180px;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .sector-card-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 30% 40%, rgba(201,169,97,0.25) 0%, transparent 60%);
        }
        .sector-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(201,169,97,0.15));
          opacity: 0;
          transition: var(--arsos-transition);
        }
        .sector-card:hover .sector-card-overlay { opacity: 1; }
        .sector-card-icon {
          font-size: 4rem;
          color: var(--arsos-gold);
          position: relative;
          z-index: 2;
          transition: var(--arsos-transition);
        }
        .sector-card:hover .sector-card-icon { transform: scale(1.15) rotate(-5deg); }
        .sector-card-body {
          padding: 30px 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .sector-card-body h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          transition: var(--arsos-transition);
        }
        .sector-card:hover .sector-card-body h3 { color: var(--arsos-gold); }
        .sector-card-body p {
          color: var(--arsos-text-light);
          font-size: 0.92rem;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 20px;
        }
        .sector-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sector-card-link i { transition: var(--arsos-transition); }
        .sector-card-link:hover { color: var(--arsos-gold); }
        .sector-card-link:hover i { transform: translateX(5px); }
      `}</style>
    </div>
  );
};

export default SectorCard;