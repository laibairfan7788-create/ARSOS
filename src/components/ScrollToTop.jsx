import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top-btn ${visible ? 'show' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up"></i>
      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: var(--arsos-gold);
          color: var(--arsos-navy);
          font-size: 1.3rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(201,169,97,0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.4s ease;
          z-index: 998;
        }
        .scroll-top-btn.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .scroll-top-btn:hover {
          background: var(--arsos-navy);
          color: var(--arsos-gold);
          transform: translateY(-5px);
        }
      `}</style>
    </button>
  );
};

export default ScrollToTop;