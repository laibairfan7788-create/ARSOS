import React from 'react';

const CoreValueCard = ({ value, index }) => {
  return (
    <div className="value-card reveal hover-lift" style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className="value-icon">
        <i className={`bi ${value.icon}`}></i>
      </div>
      <h4>{value.title}</h4>
      <p>{value.description}</p>

      <style>{`
        .value-card {
          background: #fff;
          padding: 35px 25px;
          border-radius: 12px;
          text-align: center;
          height: 100%;
          box-shadow: var(--arsos-shadow-sm);
          transition: var(--arsos-transition);
          border-bottom: 3px solid transparent;
        }
        .value-card:hover { border-bottom-color: var(--arsos-gold); }
        .value-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--arsos-gray);
          border-radius: 50%;
          transition: var(--arsos-transition);
        }
        .value-icon i {
          font-size: 1.8rem;
          color: var(--arsos-navy);
          transition: var(--arsos-transition);
        }
        .value-card:hover .value-icon {
          background: var(--arsos-gold);
          transform: rotate(360deg);
        }
        .value-card:hover .value-icon i { color: var(--arsos-navy); }
        .value-card h4 { font-size: 1.1rem; margin-bottom: 12px; }
        .value-card p {
          color: var(--arsos-text-light);
          font-size: 0.9rem;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default CoreValueCard;