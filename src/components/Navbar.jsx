import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { sectors } from '../data/sectors';
import { companyInfo } from '../data/companyInfo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSectorsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="arsos-topbar d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-2">
            <div className="d-flex gap-4 small">
              <span><i className="bi bi-envelope-fill me-2 text-gold"></i>{companyInfo.email}</span>
              <span><i className="bi bi-telephone-fill me-2 text-gold"></i>{companyInfo.phone}</span>
            </div>
            <div className="small text-white-50">
              <i className="bi bi-clock-fill me-2 text-gold"></i>
            </div>
          </div>
        </div>
      </div>

      <nav className={`arsos-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-2">
            <Link to="/" className="arsos-logo">
              <span className="logo-mark">A</span>
              <span className="logo-text">
                <strong>ARSOS</strong>
                <small>Trading</small>
              </span>
            </Link>

            <ul className="arsos-nav d-none d-lg-flex align-items-center mb-0">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li
                className="nav-dropdown"
                onMouseEnter={() => setSectorsOpen(true)}
                onMouseLeave={() => setSectorsOpen(false)}
              >
                <NavLink to="/sectors" className="d-inline-flex align-items-center">
                  Sectors <i className="bi bi-chevron-down ms-1 small"></i>
                </NavLink>
                <ul className={`dropdown-menu-arsos ${sectorsOpen ? 'show' : ''}`}>
                  {sectors.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/sectors/${s.slug}`}>
                        <i className={`bi ${s.icon} text-gold me-2`}></i>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><NavLink to="/why-choose-us">Why Us</NavLink></li>
              <li><NavLink to="/mission-vision">Mission</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <Link to="/contact" className="btn-arsos btn-arsos-primary d-none d-lg-inline-flex">
                Get a Quote <i className="bi bi-arrow-right"></i>
              </Link>
              <button
                className="mobile-toggle d-lg-none"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <i className={`bi ${mobileOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="mobile-parent">
            <span>Sectors</span>
            <ul>
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link to={`/sectors/${s.slug}`}>
                    <i className={`bi ${s.icon} me-2 text-gold`}></i>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/why-choose-us">Why Choose Us</Link></li>
          <li><Link to="/mission-vision">Mission & Vision</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/contact" className="btn-arsos btn-arsos-primary mt-4">
          Get a Quote <i className="bi bi-arrow-right"></i>
        </Link>
      </div>

      <style>{`
        .arsos-topbar {
          background: var(--arsos-navy-dark);
          color: rgba(255,255,255,0.85);
          font-family: 'Montserrat', sans-serif;
        }
        .arsos-topbar a { color: rgba(255,255,255,0.85); }
        .arsos-topbar a:hover { color: var(--arsos-gold); }

        .arsos-navbar {
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(10px);
          box-shadow: var(--arsos-shadow-sm);
          transition: var(--arsos-transition);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .arsos-navbar.scrolled { box-shadow: var(--arsos-shadow); }

        .arsos-logo { display: flex; align-items: center; gap: 12px; }
        .logo-mark {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--arsos-navy), var(--arsos-navy-light));
          color: var(--arsos-gold);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(11,37,69,0.25);
        }
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-text strong {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--arsos-navy);
          letter-spacing: 3px;
        }
        .logo-text small {
          font-size: 0.7rem;
          letter-spacing: 4px;
          color: var(--arsos-gold);
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .arsos-nav { list-style: none; gap: 6px; }
        .arsos-nav > li > a {
          display: inline-block;
          padding: 10px 16px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--arsos-navy);
          position: relative;
          transition: var(--arsos-transition);
        }
        .arsos-nav > li > a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--arsos-gold);
          transition: width 0.3s ease;
        }
        .arsos-nav > li > a:hover,
        .arsos-nav > li > a.active { color: var(--arsos-gold); }
        .arsos-nav > li > a:hover::after,
        .arsos-nav > li > a.active::after { width: 60%; }

        .nav-dropdown { position: relative; }
        .dropdown-menu-arsos {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 250px;
          background: #fff;
          border-radius: 8px;
          box-shadow: var(--arsos-shadow-lg);
          list-style: none;
          padding: 10px 0;
          margin: 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: var(--arsos-transition);
          border-top: 3px solid var(--arsos-gold);
        }
        .dropdown-menu-arsos.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-menu-arsos li a {
          display: flex;
          align-items: center;
          padding: 11px 20px;
          color: var(--arsos-navy);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--arsos-transition);
        }
        .dropdown-menu-arsos li a:hover {
          background: var(--arsos-gray);
          color: var(--arsos-gold);
          padding-left: 26px;
        }

        .mobile-toggle {
          background: transparent;
          border: none;
          color: var(--arsos-navy);
          font-size: 1.6rem;
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85%;
          height: 100vh;
          background: #fff;
          box-shadow: -10px 0 30px rgba(0,0,0,0.15);
          padding: 90px 25px 30px;
          overflow-y: auto;
          transition: right 0.4s ease;
          z-index: 999;
        }
        .mobile-menu.open { right: 0; }
        .mobile-menu ul { list-style: none; padding: 0; }
        .mobile-menu > ul > li > a,
        .mobile-menu > ul > li > span {
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid var(--arsos-gray-dark);
          color: var(--arsos-navy);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
        }
        .mobile-menu .mobile-parent > ul {
          padding-left: 15px;
          margin-top: 5px;
        }
        .mobile-menu .mobile-parent > ul > li > a {
          display: block;
          padding: 10px 0;
          color: var(--arsos-text-light);
          font-size: 0.9rem;
        }
        @media (max-width: 991px) {
          .mobile-menu { padding-top: 80px; }
        }
      `}</style>
    </>
  );
};

export default Navbar;