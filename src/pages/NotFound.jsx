import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="container text-center">
        <div className="nf-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-arsos btn-arsos-primary">
          Back to Home <i className="bi bi-arrow-right"></i>
        </Link>
      </div>

      <style>{`
        .notfound-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--arsos-navy-dark), var(--arsos-navy));
          color: #fff;
          padding: 100px 0;
        }
        .nf-code {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(5rem, 15vw, 10rem);
          font-weight: 900;
          color: var(--arsos-gold);
          line-height: 1;
          margin-bottom: 20px;
          text-shadow: 0 20px 60px rgba(201,169,97,0.4);
        }
        .notfound-section h1 {
          color: #fff;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          margin-bottom: 15px;
        }
        .notfound-section p {
          color: rgba(255,255,255,0.8);
          max-width: 500px;
          margin: 0 auto 30px;
        }
      `}</style>
    </section>
  );
};

export default NotFound;